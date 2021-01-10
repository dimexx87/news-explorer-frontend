import React, { useState, useEffect } from 'react';
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
      {
        isMain
          ? <header className={
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
              onNoMain={rest.onNoMain}
              onMain={rest.onMain}
              onMenu={handleMenu}
              onCloseMenu={closeMenu}
              isMenu={isMenu}
              isMain={isMain}
            />
          </header>
          : <>
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
                onNoMain={rest.onNoMain}
                onMain={rest.onMain}
                onMenu={handleMenu}
                onCloseMenu={closeMenu}
                isMenu={isMenu}
              />
            </header>
            <SavedNewsHeader />
          </>
      }
    </main>
  );
}

export default Header;
