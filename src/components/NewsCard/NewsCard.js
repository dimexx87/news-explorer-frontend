/* eslint-disable max-len */
import React, { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import './NewsCard.css';

function NewsCard(props) {
  const [isDelete, setIsDelete] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const handleDelete = () => props.onDelete(props);
  const handleSave = () => props.onSave(props);
  const handleUnSave = () => props.onUnSave(props);

  const formatDate = useCallback((value) => {
    const newDate = new Date(value);
    return newDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
  });

  const handleDeleteTooltip = () => {
    setIsDelete(true);
  };

  const unHandleDeleteTooltip = () => {
    setIsDelete(false);
  };

  const handleSaveTooltip = () => {
    setIsSave(true);
  };

  const unHandleSaveTooltip = () => {
    setIsSave(false);
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <figure className="newscard">
            {
              props.loggedIn
                ? < button
                  className={
                    props.isSaved
                      ? 'newscard__save-button newscard__save-button_active'
                      : 'newscard__save-button'
                  }
                  onClick={
                    props.isSaved
                      ? handleUnSave
                      : handleSave
                  }
                  type="button"
                ></button>
                : <button
                  className='newscard__save-button'
                  onMouseEnter={handleSaveTooltip}
                  onMouseLeave={unHandleSaveTooltip}
                  type="button"
                ></button>
            }
            <a
              href={props.link}
              className='newscard__link'
              target="_blank"
            >
              <img
                src={props.image}
                alt={props.title}
                className="newscard__image"
              />

              <button className={
                isSave
                  ? 'newscard__save-confirmation'
                  : 'newscard__save-confirmation_hidden'
              }>Войдите, чтобы сохранять статьи</button>

              <time className='newscard__date' dateTime={props.date}>{formatDate(props.date)}</time>
              <div className="newscard__text">
                <h1 className='newscard__title'>{props.title}</h1>
                <h2 className='newscard__subtitle'>{props.text}</h2>
              </div>
              <h3 className='newscard__source'>{props.source}</h3>
            </a>
          </figure >
        </Route>
      </Switch>

      <Switch>
        <Route path="/saved-news">
          <figure className="newscard">
            {
              <button
                className='newscard__delete-button'
                onMouseEnter={handleDeleteTooltip}
                onMouseLeave={unHandleDeleteTooltip}
                onClick={handleDelete}
                type="button"
              ></button>
            }
            <a
              href={props.link}
              className='newscard__link'
              target="_blank"
            >
              <img
                src={props.image}
                alt={props.title}
                className="newscard__image"
              />
              <div className='newscard__category'>{props.keyword}</div>
              <button className={
                isDelete
                  ? 'newscard__delete-confirmation'
                  : 'newscard__delete-confirmation_hidden'
              }>Убрать из сохранённых</button>

              <time className='newscard__date' dateTime={props.date}>{formatDate(props.date)}</time>
              <div className="newscard__text">
                <h1 className='newscard__title'>{props.title}</h1>
                <h2 className='newscard__subtitle'>{props.text}</h2>
              </div>
              <h3 className='newscard__source'>{props.source}</h3>
            </a>
          </figure >
        </Route>
      </Switch>
    </>
  );
}

export default NewsCard;
