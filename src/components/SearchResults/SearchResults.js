import React, { useRef, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults(props) {
  const counter = useRef(3);
  const showMoreSearchedNews = () => {
    counter.current += 3;
    props.setSearchedCards(props.searchedNewsFull.slice(0, counter.current));
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <section className='searchresults searchresults__main'>
            <h1 className='searchresults__title'>Результаты поиска</h1>
            < NewsCardList
              isMain={props.isMain}
              newsCards={props.newsCards}
              loggedIn={props.loggedIn}
              onDelete={props.onDelete}
              onSave={props.onSave}
              onUnSave={props.onUnSave}
              onRegister={props.onRegister}
            />
            {
              props.searchedNewsFull.length >= 3 && counter.current < props.searchedNewsFull.length
                ? <button onClick={showMoreSearchedNews} className='searchresults__button'>Показать еще</button>
                : null
            }
          </section >
        </Route>
      </Switch>
      <Switch>
        <Route path="/saved-news">
          <section className='searchresults'>
            < NewsCardList
              isMain={props.isMain}
              newsCards={props.savedNews}
              loggedIn={props.loggedIn}
              setSavedNews={props.setSavedNews}
              onDelete={props.onDelete}
              onSave={props.onSave}
            />
          </section >
        </Route>
      </Switch>
    </>
  );
}

export default SearchResults;
