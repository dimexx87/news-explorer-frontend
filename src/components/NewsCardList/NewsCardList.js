import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import imageOne from '../../images/imageOne.png';
import imageTwo from '../../images/imageTwo.png';
import imageThree from '../../images/imageThree.png';

function NewsCardList(props) {
  return (
      <section className='newscardlist'>
        <NewsCard
          category={'Природа'}
          image={imageOne}
          date={'2 августа, 2019'}
          title={'Национальное достояние – парки'}
          text={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
          source={'Дзен'}
          isMain={props.isMain}
        />

        <NewsCard
          category={'Природа'}
          image={imageTwo}
          date={'2 августа, 2019'}
          title={'Лесные огоньки: история одной фотографии'}
          text={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'}
          source={'Афиша'}
          isMain={props.isMain}
        />

        <NewsCard
          category={'Тайга'}
          image={imageThree}
          date={'2 августа, 2019'}
          title={'«Первозданная тайга»: новый фотопроект Игоря Шпиленка'}
          text={'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...'}
          source={'Медиазона'}
          isMain={props.isMain}
        />

        <NewsCard
          category={'Природа'}
          image={imageOne}
          date={'2 августа, 2019'}
          title={'Национальное достояние – парки'}
          text={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
          source={'Дзен'}
          isMain={props.isMain}
        />

        <NewsCard
          category={'Природа'}
          image={imageTwo}
          date={'2 августа, 2019'}
          title={'Лесные огоньки: история одной фотографии'}
          text={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'}
          source={'Афиша'}
          isMain={props.isMain}
        />
      </section>
  );
}

export default NewsCardList;
