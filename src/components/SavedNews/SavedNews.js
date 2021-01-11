import React from 'react';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';

function SavedNews(props) {
  return (
    <main className="content">
      <SearchResults
        isSearch={props.isSearch}
        isMain={props.isMain}
      />
      <About
        isSize={true}
      />
    </main>
  );
}

export default SavedNews;
