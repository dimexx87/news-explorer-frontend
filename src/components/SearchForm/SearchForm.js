import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
  return (
    <form className="search__form">
      <input placeholder="Природа" className="search__input" type='text' required></input>
      <button onClick={props.onSearch} className="search__button">Искать</button>
    </form>
  );
}

export default SearchForm;
