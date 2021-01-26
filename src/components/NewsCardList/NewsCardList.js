import React, { useEffect, useState } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import apiMain from '../../utils/MainApi';
import { getToken } from '../../utils/token';

function NewsCardList({ newsCards, ...rest }) {
  return (
    <section className='newscardlist'>
      {
        newsCards.map((cards) => (
          <NewsCard
            {...cards}
            isMain={rest.isMain}
            loggedIn={rest.loggedIn}
            onDelete={rest.onDelete}
            onSave={rest.onSave}
            onUnSave={rest.onUnSave}
          />
        ))}
    </section>
  );
}

export default NewsCardList;
