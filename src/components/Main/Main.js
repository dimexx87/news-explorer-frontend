import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Title from '../Title/Title';
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import NoResult from '../NoResult/NoResult';
import SearchError from '../SearchError/SearchError';

function Main(props) {
  return (
    <main className="content">
      <img className="search__picture" />
      <Title />
      <SearchForm
        onSearch={props.onSearch}
      />
      {props.searchStatus === 'searching' && <Preloader />}
      {props.searchStatus === 'noresults' && <NoResult />}
      {props.searchStatus === 'searcherror' && <SearchError />}
      {props.searchStatus === 'results'
        && <SearchResults
          isMain={props.isMain}
          loggedIn={props.loggedIn}
          newsCards={props.newsCards}
          setSearchedCards={props.setSearchedCards}
          onSave={props.onSave}
          onUnSave={props.onUnSave}
          onDelete={props.onDelete}
          onRegister={props.onRegister}
          searchedNewsFull={props.searchedNewsFull}
        />
      }
      <About />
    </main>
  );
}

export default Main;
