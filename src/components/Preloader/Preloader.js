import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <main className='content'>
      <section className='preloader'>
        <div className='circle-preloader'></div>
        <h1 className='preloader__title'>Идет поиск новостей...</h1>
      </section>
    </main>
  );
}

export default Preloader;
