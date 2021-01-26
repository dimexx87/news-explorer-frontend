/* eslint-disable */
import React, { useEffect, useState, useCallback } from 'react';
import {
  Redirect, Route, Switch, useHistory,
} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import '../Page/Page.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedNews from '../SavedNews/SavedNews';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import CurrentUserContext from '../../context/CurrentUserContext';
import apiMain from '../../utils/MainApi';
import { getToken, removeToken, setNews, getNews } from '../../utils/token';
import { getContent } from '../../utils/auth';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isMainPageOpened, setIsMainPageOpened] = useState(true);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [searchedNews, setSearchedNews] = useState([]);
  const [savedNews, setSavedNews] = useState([]);
  const [searchStatus, setSearchStatus] = useState('');
  const history = useHistory();

  useEffect(() => {
    const tokenCheck = () => {
      const jwt = getToken();
      if (!jwt) {
        return;
      }
      setLoggedIn(true);
      history.push('/');
      getContent(jwt).then((res) => {
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
          history.push('/');
        }
      });
    };

    const newsCheck = () => {
      const cards = getNews();
      if (cards === null) {
        setSearchStatus('')
        return
      }
      setSearchStatus('results');
      setSearchedCards(cards.slice(0, 3));
    }

    const savedNewsCheck = () => {
      const jwt = getToken();
      if (!jwt) {
        return;
      }
      apiMain.getArticles(jwt)
        .then((response) => {
          if (response.length === 0) {
            setSearchStatus('');
          }
          const savedCards = response.map((item) => ({
            _id: item._id,
            keyword: item.keyword,
            key: item._id,
            source: item.source,
            title: item.title,
            date: item.date,
            text: item.text,
            link: item.link,
            image: item.image ? item.image : '',
            isSaved: true,
          }));
          setSavedNews(savedCards);
        });
    }
    tokenCheck();
    newsCheck();
    savedNewsCheck();
  }, [loggedIn]);

  const logOut = () => {
    removeToken();
    setLoggedIn(false);
    history.push('/');
  }

  const closeAllPopups = () => {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
    history.push('/');
  };

  const handleRegisterClick = () => {
    setIsRegisterPopupOpen(true);
  };
  const handleLoginClick = () => {
    setIsLoginPopupOpen(true);
    setIsRegisterPopupOpen(false);
  };
  const handleInfoTooltip = () => {
    setIsInfoTooltipPopupOpen(true);
  };
  const handleSearch = (req) => {
    setSearchStatus('searching');
    apiMain.getNews(req.request)
      .then((response) => {
        if (response.totalResults === 0) {
          setSearchStatus('noresults');
          return
        }
        setSearchStatus('results');
        const { articles } = response;
        const cards = articles.map((item) => ({
          keyword: req.request,
          key: item.url,
          source: item.source.name,
          title: item.title,
          date: item.publishedAt,
          text: item.description,
          link: item.url,
          image: item.urlToImage ? item.urlToImage : '',
          isSaved: false,
        }));
        setSearchedCards(cards.slice(0, 3));
        setNews(cards);

      })
      .catch((err) => setSearchStatus('searcherror'));
  };
  const handleNoMainPage = (e) => {
    setIsMainPageOpened(false);
  };
  const handleMainPage = (e) => {
    setIsMainPageOpened(true);
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.keyCode === 27) {
        closeAllPopups();
      }
    };
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  useEffect(() => {
    const handleMouseClose = (e) => {
      if (e.target === e.target.closest('.popup')) {
        closeAllPopups();
      }
    };
    document.addEventListener('click', handleMouseClose);
    return () => {
      document.removeEventListener('click', handleMouseClose);
    };
  }, []);

  const setSearchedCards = useCallback((arr) => {
    setSearchedNews(arr);
  }, []);
  const setSavedCards = useCallback((arr) => {
    setSavedNews(arr);
  }, []);

  const deleteArticle = (article) => {
    const jwt = getToken();
    const withoutDeleted = savedNews.filter((с) => article._id !== с._id);
    apiMain.deleteArticle(article._id, jwt)
      .then((res) => {
        setSavedNews(withoutDeleted);
      })
      .catch((err) => console.log(`Удаление статьи: ${err}`))
  }

  const saveArticles = (article) => {
    const { link } = article;
    const jwt = getToken();
    apiMain.saveArticle(article.keyword, article.title, article.text, article.date, article.source, article.link, article.image, jwt)
      .then((res) => {
        const savedArticle = {
          keyword: res.article.keyword,
          _id: res.article._id,
          key: res.article._id,
          source: res.article.source,
          title: res.article.title,
          date: res.article.date,
          text: res.article.text,
          link: res.article.link,
          image: res.article.image ? res.article.image : '',
          isSaved: res.article.isSaved ? false : true,
        }
        const updatedArticle = searchedNews.map((c) => (c.link === link ? savedArticle : c));
        setSearchedNews(updatedArticle);
        setNews(updatedArticle);
      })
  }

  const unSaveArticles = (article) => {
    const { link } = article;
    const jwt = getToken();
    apiMain.saveArticle(article.keyword, article.title, article.text, article.date, article.source, article.link, article.image, jwt)
      .then((res) => {
        const unSavedArticle = {
          keyword: res.article.keyword,
          _id: res.article._id,
          key: res.article._id,
          source: res.article.source,
          title: res.article.title,
          date: res.article.date,
          text: res.article.text,
          link: res.article.link,
          image: res.article.image ? res.article.image : '',
          isSaved: false,
        }
        const updatedArticle = searchedNews.map((c) => (c.link === link ? unSavedArticle : c));
        setSearchedNews(updatedArticle);
        setNews(updatedArticle);
      })
  }

  return (
    <Switch>

      {/* unprotected rout to Register */}
      <Route path="/sign-up">
        <Register
          isOpen={isRegisterPopupOpen}
          isRegOpen={isRegisterPopupOpen}
          handleInfoTooltip={handleInfoTooltip}
          isInfoTooltipPopupOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          onRegister={handleRegisterClick}
          onLogin={handleLoginClick}
        />
        <Header
          onRegister={handleRegisterClick}
          onLogin={handleLoginClick}
          onMain={handleMainPage}
          onNoMain={handleNoMainPage}
          isMain={isMainPageOpened}
          loggedIn={loggedIn}
        />
        <Main />
        <Footer />
      </Route>

      {/* unprotected rout to Login */}
      <Route path="/sign-in">
        <Login
          isOpen={isLoginPopupOpen}
          isRegOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onRegister={handleRegisterClick}
          onLogin={handleLoginClick}
          onLogged={setLoggedIn}
          setCurrentUser={setCurrentUser}
        />
        <Header
          onMain={handleMainPage}
          onNoMain={handleNoMainPage}
          isMain={isMainPageOpened}
        />
        <Main />
        <Footer />
      </Route>

      {/* unprotected rout to Info */}
      <Route path="/info">
        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
        />
        <Header
          onMain={handleMainPage}
          onNoMain={handleNoMainPage}
          isMain={isMainPageOpened}
        />
        <Main />
        <Footer />
      </Route>

      <CurrentUserContext.Provider value={currentUser}>
        {/* unprotected rout to Main */}
        <Route exact path="/">
          <Header
            onRegister={handleRegisterClick}
            onLogin={handleLoginClick}
            onMain={handleMainPage}
            onNoMain={handleNoMainPage}
            isMain={isMainPageOpened}
            loggedIn={loggedIn}
            logOut={logOut}
          />
          <Main
            onSearch={handleSearch}
            isMain={isMainPageOpened}
            newsCards={searchedNews}
            setSearchedCards={setSearchedCards}
            searchStatus={searchStatus}
            loggedIn={loggedIn}
            onSave={saveArticles}
            onUnSave={unSaveArticles}
            onDelete={deleteArticle}
          />
          <Footer
            onMain={handleMainPage}
          />
        </Route>
        {/* </div> */}

        {/* protected rout to Saved-News */}
        <Route path="/saved-news">
          <Header
            onRegister={handleRegisterClick}
            onLogin={handleLoginClick}
            onMain={handleMainPage}
            onNoMain={handleNoMainPage}
            isMain={isMainPageOpened}
            loggedIn={loggedIn}
            logOut={logOut}
          />
          <SavedNews
            isMain={isMainPageOpened}
            loggedIn={loggedIn}
            savedNewsCards={savedNews}
            setSavedNewsCards={setSavedCards}
            setSearchStatus={setSearchStatus}
            setSavedNews={setSavedNews}
            onDelete={deleteArticle}
            onSave={saveArticles}
            searchStatus={searchStatus}
          />
          <Footer
            onMain={handleMainPage}
          />
        </Route>
      </CurrentUserContext.Provider>
      <Route exact path="/saved-news">
        {loggedIn ? <Redirect to="/saved-news" /> : <Redirect to="/" />}
      </Route>
    </Switch>
  );
}

export default App;
