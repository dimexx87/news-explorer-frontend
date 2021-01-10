import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({
  isMenu, onMenu, onCloseMenu, onNoMain, onMain, onLogin, isMain, ...rest
}) {
  return (
    <>
      {
        isMain
          ? <nav className={
            isMenu
              ? 'header__popup'
              : null
          }
          >
            {/* MainPage Navigation */}
            <ul className={
              isMenu
                ? 'header__navigation header__navigation-small'
                : 'header__navigation'
            }>
              <li>
                <Link
                  onClick={onMain}
                  to="/"
                  className={
                    isMenu
                      ? 'header__nav-link header__nav-link-small'
                      : 'header__nav-link header__nav-link_aсtive'
                  }
                >
                  Главная
            </Link>
              </li>
              <li>
                <Link
                  to="/saved-news"
                  onClick={onNoMain}
                  className={
                    isMenu
                      ? 'header__nav-link header__nav-link-small'
                      : 'header__nav-link'
                  }
                >
                  Сохраненные статьи
            </Link>
              </li>
              <li>
                <button
                  onClick={onCloseMenu}
                  onClick={onLogin}
                  type="button"
                  className={
                    isMenu
                      ? 'header__log-button header__log-button-small'
                      : 'header__log-button'}
                >
                  <h1
                    className={
                      isMenu
                        ? 'header__log-link header__log-link-small'
                        : 'header__log-link'
                    }
                  >
                    Авторизоваться
                  </h1>
                </button>
              </li>
              {
                isMenu
                  ? <button onClick={onCloseMenu} className='header__nav-button header__nav-button-close'></button>
                  : <button onClick={onMenu} className='header__nav-button'></button>
              }
            </ul>
          </nav>

          : <nav className={
            isMenu
              ? 'header__popup'
              : null
          }>
            {/* SavedNews Navigation */}
            <ul className={
              isMenu
                ? 'header__navigation header__navigation-small'
                : 'header__navigation'
            }>
              <li>
                <Link
                  onClick={onMain}
                  to="/"
                  className={
                    isMenu
                      ? 'header__nav-link header__nav-link-small'
                      : 'header__nav-link header__nav-link_black'
                  }
                >
                  Главная
            </Link>
              </li>
              <li>
                <Link
                  to="/saved-news"
                  onClick={onNoMain}
                  className={
                    isMenu
                      ? 'header__nav-link header__nav-link-small'
                      : 'header__nav-link header__nav-link_black header__nav-link_aсtive_black'
                  }
                >
                  Сохраненные статьи
            </Link>
              </li>
              <li>
                <button
                  onClick={onCloseMenu}
                  onClick={onLogin}
                  type="button"
                  className={
                    isMenu
                      ? 'header__log-button header__log-button-small'
                      : 'header__log-button'}
                >
                  <h1
                    className={
                      isMenu
                        ? 'header__log-link header__log-link-small'
                        : 'header__log-link header__log-link_black'
                    }
                  >
                    Грета
                  </h1>
                  <div className={
                    isMenu
                      ? 'header__log-link_logout header__log-link_logout_white'
                      : 'header__log-link_logout'
                  }
                  ></div>
                </button>
              </li>
              {
                isMenu
                  ? <button onClick={onCloseMenu} className='header__nav-button header__nav-button_black header__nav-button-close'></button>
                  : <button onClick={onMenu} className='header__nav-button header__nav-button_black'></button>
              }
            </ul>
          </nav>
      }

    </>

  );
}

export default Navigation;
