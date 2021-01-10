import React from 'react';
import './PopupWithForm.css';
import { Link } from 'react-router-dom';

function PopupWithForm({
  isOpen, onClose, name, title, buttonText, spanText, children, ...rest
}) {
  return (
      <section className={
        isOpen
          ? `popup popup_type_${name} popup_opened`
          : `popup popup_type_${name}`
      }
      >
        <form className='popup__container'>
          <h1 className='popup__title'>{title}</h1>
          <>{children}</>
          <button
            onClick={onClose}
            type="button"
            className='popup__btn-close'></button>
          <button className='popup__btn-submit'>{buttonText}</button>
          <button
            onClick={rest.onRegister}
            className="popup__switch">
            или <span className="popup__subtitle popup__subtitle_m">{spanText}</span>
          </button>
        </form>
      </section>
  );
}

export default PopupWithForm;
