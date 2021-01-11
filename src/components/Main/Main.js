import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Title from '../Title/Title';
import SearchResults from '../SearchResults/SearchResults';

function Main(props) {
  return (
    <main className="content">
      <img className="search__picture" />
      <Title />
      <SearchForm
        onSearch={props.onSearch}
      />
      {
        props.isSearch
          ? <SearchResults
            isSearch={props.isSearch}
            isMain={props.isMain}
          />
          : null
      }
      <About />
    </main>
  );
}

export default Main;
