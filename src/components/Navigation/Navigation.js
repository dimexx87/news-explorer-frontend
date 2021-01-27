import React, { useState } from 'react';
import {
  Route, Switch, Link, useHistory,
} from 'react-router-dom';
import './Navigation.css';
import CurrentUserContext from '../../context/CurrentUserContext';

function Navigation({
  isMenu, onMenu, onCloseMenu, onNoMain, onMain, onRegister, onLogin, isMain, ...rest
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const history = useHistory();

  return (
    <>
      {/* Main */}
      <Switch>
        <Route exact path="/">
          <nav className={
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
                {
                  rest.loggedIn
                    ? <Link
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
                    : null
                }
              </li>
              <li>
                {
                  rest.loggedIn
                    ? <Link
                      to="/"
                      onClick={rest.logOut}
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
                        {currentUser.name}
                      </h1>
                      <div className={
                        isMenu
                          ? 'header__log-link_logout header__log-link_logout_white'
                          : 'header__log-link_logout header__log-link_logout_white'
                      }
                      ></div>
                    </Link>
                    : <Link
                      to="/sign-in"
                      className={
                        isMenu
                          ? 'header__log-button header__log-button-small'
                          : 'header__log-button'}
                      onClick={onLogin}
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
                    </Link>
                }

              </li>
              {
                isMenu
                  ? <button onClick={onCloseMenu} className='header__nav-button header__nav-button-close'></button>
                  : <button onClick={onMenu} className='header__nav-button'></button>
              }
            </ul>
          </nav>
        </Route>
      </Switch>
      {/* SavedNews */}
      <Switch>
        <Route path="/saved-news">
          <nav className={
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
              {/* <li> */}
              <button
                onClick={rest.logOut}
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
                  {currentUser
                    ? currentUser.name
                    : null}
                </h1>
                <div className={
                  isMenu
                    ? 'header__log-link_logout header__log-link_logout_white'
                    : 'header__log-link_logout'
                }
                ></div>
              </button>
              {/* </li> */}
              {
                isMenu
                  ? <button onClick={onCloseMenu} className='header__nav-button header__nav-button_black header__nav-button-close'></button>
                  : <button onClick={onMenu} className='header__nav-button header__nav-button_black'></button>
              }
            </ul>
          </nav>
        </Route>
      </Switch>
    </>

  );
}

export default Navigation;
