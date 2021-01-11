import React from 'react';
import './About.css';
import author from '../../images/girl.jpg';

function About(props) {
  return (
    <main className='content'>
      <section className='about'>
        <img className="about__image" alt="Фото профиля" src={author} />
        <div className="about__description">
          <h1 className="about__title">Об авторе</h1>
          <p className="about__subtitle">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
          <p className="about__subtitle">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
        </div>
      </section>
    </main>
  );
}

export default About;
