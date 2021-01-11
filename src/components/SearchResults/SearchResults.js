import React from 'react';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';

function SearchResults(props) {
  return (
  // <main className='content'>
      <section className={
        props.isMain
          ? 'searchresults searchresults__main'
          : 'searchresults'}>
        {
          props.isSearch && props.isMain
            ? <h1 className='searchresults__title'>Результаты поиска</h1>
            : null
        }
        <NewsCardList
          isMain={props.isMain}
        />
        {
          props.isSearch && props.isMain
            ? <button className='searchresults__button'>Показать еще</button>
            : null
        }
      </section>
      // <Preloader/> */
  // </main>
  );
}

export default SearchResults;
