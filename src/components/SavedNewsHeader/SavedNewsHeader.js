import React, { useState, useEffect } from 'react';
import './SavedNewsHeader.css';
import '../../vendor/fonts/fonts.css';
import CurrentUserContext from '../../context/CurrentUserContext';
import apiMain from '../../utils/MainApi';
import { getToken } from '../../utils/token';

function SavedNewsHeader(props) {
  const [aticlesCount, setArticlesCount] = useState('');

  const jwt = getToken();
  useEffect(() => {
    apiMain.getArticles(jwt)
      .then((response) => {
        if (response.length === 0) {
          setArticlesCount('нет');
        }
        setArticlesCount(response.length);
      });
  }, []);

  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <h3 className="savednewsheader__description">Сохранённые статьи</h3>
      <h1 className="savednewsheader__title">{currentUser.name}, у вас {aticlesCount} сохранённых статей</h1>
      <h2 className="savednewsheader__subtitle">По ключевым словам: <span className="savednewsheader__subtitle_bold">Природа, Тайга и 2-м другим</span></h2>
    </>
  );
}

export default SavedNewsHeader;
