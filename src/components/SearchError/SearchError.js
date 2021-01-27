import React from 'react';
import './SearchError.css';

function SearchError(props) {
  return (
    <section className='preloader'>
      <h1 className='searcherror__title'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h1>
    </section>
  );
}

export default SearchError;
