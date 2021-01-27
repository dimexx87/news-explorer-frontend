import React from 'react';
import './InfoTooltip.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function InfoTooltip(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      title={'Пользователь успешно зарегистрирован!'}
      spanText={'Войти'}
      name={'infoForm'}
    >
    </PopupWithForm>
  );
}

export default InfoTooltip;
