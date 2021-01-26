import React from 'react';
import './About.css';
import author from '../../images/myphoto.jpg';

function About(props) {
  return (
    <main className='content'>
      <section className='about'>
        <img className="about__image" alt="Фото профиля" src={author} />
        <div className="about__description">
          <h1 className="about__title">Об авторе</h1>
          <p className="about__subtitle">Меня зовут Дима. Я руководитель разработки цифровых продуктов крупного банка (PO).  Для меня обчуение в YP это не только технические навыки, но и возможность стать ближе к ребятам, с которыми работаю, глубже понимать проблемы и вместе искать решения.</p>
          <p className="about__subtitle">Я дополню это описание как только смогу сделать свой самостоятельный проект и пойму, что я правда умею! В любом случае обучение стало очень крутым опытом!</p>
        </div>
      </section>
    </main>
  );
}

export default About;
