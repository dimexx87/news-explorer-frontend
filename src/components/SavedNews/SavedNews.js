import React from 'react';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';
import NoResult from '../NoResult/NoResult';

function SavedNews(props) {
  return (
    <main className="content">
      {props.searchStatus === 'noresults' && <NoResult />}
      {props.searchStatus === 'results'
        && <SearchResults
          isSearch={props.isSearch}
          isMain={props.isMain}
          loggedIn={props.loggedIn}
          savedNews={props.savedNewsCards}
          setSavedNews={props.setSavedCards}
          setSearchStatus={props.setSearchStatus}
          setSavedNews={props.setSavedNews}
          onDelete={props.onDelete}
        />
      }
      <About
        isSize={true}
      />
    </main>
  );
}

export default SavedNews;
