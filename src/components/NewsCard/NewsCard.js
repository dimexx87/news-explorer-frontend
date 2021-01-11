import React, { useState } from 'react';
import './NewsCard.css';

function NewsCard({
  category, image, date, title, text, source, isMain, ...rest
}) {
  const [isDelete, setIsDelete] = useState(false);
  const [isSave, setIsSave] = useState(false);

  const handleDelete = () => {
    setIsDelete(true);
  };

  const handleNoDelete = () => {
    setIsDelete(false);
  };

  const handleSave = () => {
    setIsSave(true);
  };

  const handleUnSave = () => {
    setIsSave(false);
  };

  return (
    <figure className="newscard">
      <img
        src={image}
        alt="иллюстрация новости"
        className="newscard__image"
      />
      {
        isMain
          ? null
          : <div className='newscard__category'>{category}</div>
      }
      {
        isMain
          ? <button onClick={
            isSave
              ? handleUnSave
              : handleSave
          } className='newscard__save-button'></button>
          : <button onClick={
            isDelete
              ? handleNoDelete
              : handleDelete
          } className='newscard__delete-button'></button>
      }
      <button className={
        isDelete
          ? 'newscard__delete-confirmation'
          : 'newscard__delete-confirmation_hidden'
      }>Убрать из сохранённых</button>

      <button className={
        isSave
          ? 'newscard__save-confirmation'
          : 'newscard__save-confirmation_hidden'
      }>Войдите, чтобы сохранять статьи</button>

      <h3 className='newscard__date'>{date}</h3>
      <div className="newscard__text">
        <h1 className='newscard__title'>{title}</h1>
        <h2 className='newscard__subtitle'>{text}</h2>
      </div>
      <h3 className='newscard__source'>{source}</h3>
    </figure>
  );
}

export default NewsCard;
