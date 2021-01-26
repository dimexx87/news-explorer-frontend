import React from 'react';
import {
  Link, Route, Switch, useHistory,
} from 'react-router-dom';
import './PopupWithForm.css';

function PopupWithForm({
  isOpen, isRegOpen, onClose, name, title, buttonText, spanText, children, onSubmit, error, ...rest
}) {
  return (
    <>
      {/* sign-in */}
      <Switch>
        <Route path="/sign-in">
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
              {error ? (
                <span className="popup__submit-error popup__submit-error_active">
                  {rest.message}
                </span>
              ) : <span className="popup__submit-error">
                  {rest.message}
                </span>
              }
              {
                buttonText
                  ? <button
                    onClick={onSubmit}
                    type="button"
                    className=
                    {
                      rest.disabled
                        ? 'popup__btn-submit popup__btn-submit_disabled'
                        : 'popup__btn-submit'
                    }
                    disabled={rest.disabled}
                  >
                    {buttonText}
                  </button>
                  : null
              }
              <Link
                onClick={rest.onRegister}
                to="/sign-up"
                className="popup__switch">
                или <span className="popup__subtitle popup__subtitle_m">{spanText}</span>
              </Link>
            </form>
          </section>
        </Route>
      </Switch>

      {/* sign-up */}
      <Switch>
        <Route path="/sign-up">
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
              {error ? (
                <span className="popup__submit-error popup__submit-error_active">
                  {rest.message}
                </span>
              ) : <span className="popup__submit-error">
                  {rest.message}
                </span>
              }
              {
                buttonText
                  ? <button
                    onClick={onSubmit}
                    type="button"
                    className=
                    {
                      rest.disabled
                        ? 'popup__btn-submit popup__btn-submit_disabled'
                        : 'popup__btn-submit'
                    }
                    disabled={rest.disabled}
                  >
                    {buttonText}
                  </button>
                  : null
              }
              <Link
                onClick={rest.onLogin}
                to="/sign-in"
                className="popup__switch">
                или <span className="popup__subtitle popup__subtitle_m">{spanText}</span>
              </Link>
            </form>
          </section>
        </Route>
      </Switch>

      {/* info */}
      <Switch>
        <Route path="/info">
          <section className={
            isOpen
              ? `popup popup_type_${name} popup_opened`
              : `popup popup_type_${name}`
          }
          >
            <form className='popup__container'>
              <h1 className='popup__title'>{title}</h1>
              <Link
                onClick={rest.onLogin}
                to="/sign-in"
                className="popup__switch popup__switch_info">
                <span className="popup__subtitle popup__subtitle_m">{spanText}</span>
              </Link>
            </form>
          </section>
        </Route>
      </Switch>
    </>
  );
}

export default PopupWithForm;
