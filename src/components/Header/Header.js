import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Header.css';
import '../../vendor/fonts/fonts.css';
import Navigation from '../Navigation/Navigation';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function Header({ isMain, ...rest }) {
  const [isMenu, setIsMenu] = useState(false);

  const closeMenu = () => {
    setIsMenu(false);
  };

  const handleMenu = () => {
    setIsMenu(true);
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.keyCode === 27) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  useEffect(() => {
    const handleMouseClose = (e) => {
      if (e.target === e.target.closest('.header__popup')) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleMouseClose);
    return () => {
      document.removeEventListener('click', handleMouseClose);
    };
  }, []);

  return (
    <main className='content'>
      {/* Main */}
      <Switch>
        <Route exact path="/">
          <header className={
            isMenu
              ? 'header header__popup header__popup_opened'
              : 'header'}>
            <a
              href="/"
              className={
                isMenu
                  ? 'header__logo header__logo_menu'
                  : 'header__logo'
              }
            >
              NewsExplorer
            </a>
            <Navigation
              onLogin={rest.onLogin}
              onRegister={rest.onRegister}
              onNoMain={rest.onNoMain}
              onMain={rest.onMain}
              onMenu={handleMenu}
              onCloseMenu={closeMenu}
              isMenu={isMenu}
              isMain={isMain}
              loggedIn={rest.loggedIn}
              logOut={rest.logOut}
            />
          </header>
        </Route>
      </Switch>
      {/* SavedNews */}
      <Switch>
        <Route path="/saved-news">
          <header className={
            isMenu
              ? 'header header__popup header__popup_opened'
              : 'header'}>
            <a
              href="/"
              className={
                isMenu
                  ? 'header__logo header__logo_menu'
                  : 'header__logo header__logo_black'
              }
            >
              NewsExplorer
            </a>
            <Navigation
              onLogin={rest.onLogin}
              onRegister={rest.Register}
              onNoMain={rest.onNoMain}
              onMain={rest.onMain}
              onMenu={handleMenu}
              onCloseMenu={closeMenu}
              isMenu={isMenu}
              loggedIn={rest.loggedIn}
              logOut={rest.logOut}
            />
          </header>
          <SavedNewsHeader />
        </Route>
      </Switch>
    </main>
  );
}

export default Header;
