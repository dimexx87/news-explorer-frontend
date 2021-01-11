import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <main className='content' >
      <footer className="footer">
        <h2 className="footer__copyright">&copy; 2020 Supersite, Powered by News API</h2>
        <nav className="footer__links">
          <ul className="footer__nav-links">
            <li className="footer__nav-links">
              <a href="/" className="footer__nav-link">Главная</a>
            </li>
            <li className="footer__nav-links">
              <a href="https://praktikum.yandex.ru/" target='_blank' className="footer__nav-link">Яндекс.Практикум</a>
            </li>
          </ul>
          <ul className='footer__nav-link_social'>
            <li className="footer__nav-links">
              <a href="https://github.com/dimexx87" target='_blank'>
                <div className="footer__social-media_git"></div>
              </a>
            </li>
            <li className="footer__nav-links">
              <a href="https://www.facebook.com/" target='_blank' >
                <div className="footer__social-media_facebook"></div>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </main >
  );
}

export default Footer;
