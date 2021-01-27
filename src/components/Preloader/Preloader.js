import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <section className='preloader'>
      <div className='circle-preloader'></div>
      <h1 className='preloader__title'>Идет поиск новостей...</h1>
    </section>
  );
}

export default Preloader;
