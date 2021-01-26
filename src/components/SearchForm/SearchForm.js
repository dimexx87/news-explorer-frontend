import React, { useState, useCallback } from 'react';
import './SearchForm.css';

function SearchForm(props) {
  const [placeholder, setIsPlaceholder] = useState('Природа');
  const [request, setRequest] = useState('');

  const handleChange = useCallback((e) => {
    setRequest(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (request !== '') {
        props.onSearch({
          request,
        });
      }
      setIsPlaceholder('Пожалуйста, введите ключевое слово');
    },
    [request],
  );

  return (
    <>
      <form className="search__form">
        <input
          placeholder={placeholder}
          className="search__input"
          type='text'
          name='request'
          value={request}
          onChange={handleChange}
        />
        <button
          type="button"
          className="search__button"
          onClick={handleSubmit}
        >Искать</button>
      </form>
    </>
  );
}

export default SearchForm;
