import React from 'react';
import './SavedNewsHeader.css';
import '../../vendor/fonts/fonts.css';

function SavedNewsHeader(props) {
  return (
    <>
      <h3 className="savednewsheader__description">Сохранённые статьи</h3>
      <h1 className="savednewsheader__title">Грета, у вас 5 сохранённых статей</h1>
      <h2 className="savednewsheader__subtitle">По ключевым словам: <span className="savednewsheader__subtitle_bold">Природа, Тайга и 2-м другим</span></h2>
    </>
  );
}

export default SavedNewsHeader;
