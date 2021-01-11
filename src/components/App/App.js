import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import '../Page/Page.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function App() {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isSearchResults, setIsSearchResults] = useState(false);
  const [isMainPageOpened, setIsMainPageOpened] = useState(true);

  const closeAllPopups = () => {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
  };

  const handleRegisterClick = () => {
    setIsRegisterPopupOpen(true);
  };
  const handleLoginClick = () => {
    setIsLoginPopupOpen(true);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearchResults(true);
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

  useEffect(() => {
    setIsSearchResults(false);
  }, []);

  return (
    <Switch>
      <div className='page'>
        <Route exact path="/">
          <Header
            onRegister={handleRegisterClick}
            onLogin={handleLoginClick}
            onMain={handleMainPage}
            onNoMain={handleNoMainPage}
            isMain={isMainPageOpened}
          />
          <Main
            onSearch={handleSearch}
            isSearch={isSearchResults}
            isMain={isMainPageOpened}
          />
        </Route>
        <Route path="/saved-news">
          <Header
            onRegister={handleRegisterClick}
            onLogin={handleLoginClick}
            onMain={handleMainPage}
            onNoMain={handleNoMainPage}
            isMain={isMainPageOpened}
          />
          {/* <SavedNewsHeader /> */}
          <SavedNews
            isSearch={isSearchResults}
            isMain={isMainPageOpened}
          />
        </Route>
        <Register
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onRegister={handleRegisterClick}
          onLogin={handleLoginClick}
        />
        <Login
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onRegister={handleRegisterClick}
          onLogin={handleLoginClick}
        />
        <Footer
          onMain={handleMainPage}
        />
      </div >
    </Switch>
  );
}

export default App;
