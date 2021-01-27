import React, { useState, useEffect } from 'react';
import './SavedNewsHeader.css';
import '../../vendor/fonts/fonts.css';
import CurrentUserContext from '../../context/CurrentUserContext';
import apiMain from '../../utils/MainApi';
import { getToken } from '../../utils/token';
import countKeywords from '../../utils/countKeywords';

function SavedNewsHeader(props) {
  const [aticlesCount, setArticlesCount] = useState('');
  const [keywords, setKeywords] = useState([]);

  const jwt = getToken();
  useEffect(() => {
    apiMain.getArticles(jwt)
      .then((response) => {
        if (response.length === 0) {
          setArticlesCount('нет');
        }
        setKeywords(countKeywords(response));
        setArticlesCount(response.length);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(`Получение статей: ${err}`));
  }, []);

  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <h3 className="savednewsheader__description">Сохранённые статьи</h3>
      <h1 className="savednewsheader__title">{currentUser.name}, у вас {aticlesCount} сохранённых статей</h1>
      <h2 className="savednewsheader__subtitle">По ключевым словам:
        <> </>
        {keywords[0] && (<span className="savednewsheader__subtitle_bold">{keywords[0]}</span>)}
        {keywords[1] && (<>, <span className="savednewsheader__subtitle_bold">{keywords[1]}</span></>)}
        {keywords[2] && (<> и <span className="savednewsheader__subtitle_bold">{keywords[2]}</span></>)}
      </h2>
    </>
  );
}

export default SavedNewsHeader;
