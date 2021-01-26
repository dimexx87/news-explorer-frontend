import React from 'react';
import './NoResult.css';
import noresult from '../../images/not-found.svg';

function NoResult(props) {
  return (
    <section className='preloader'>
      <img className='noresult__image' src={noresult} />
      <h1 className='noresult__title'>Ничего не найдено</h1>
      <h2 className='noresult__subtitle'>К сожалению по вашему запросу ничего не найдено.</h2>
    </section>
  );
}

export default NoResult;
