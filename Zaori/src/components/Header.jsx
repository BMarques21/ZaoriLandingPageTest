import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../imgs/logoZaori.png';

const Header = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Zaori Logo" className="logo-image" />
          <span className="logo-text">ZaoriCapital</span>
        </div>
        
        <nav className={`nav-menu ${mobileMenuOpen ? 'nav-menu-open' : ''}`}>
          <a href="#ai-blockchain" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.aiBlockchain')}
          </a>
          <a href="#why-zaori" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.whyZaori')}
          </a>
          <a href="#who-we-serve" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.whoWeServe')}
          </a>
          <a href="#features" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.features')}
          </a>
          <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.contact')}
          </a>
        </nav>
        
        <div className="nav-actions">
          <LanguageSwitcher />
          <a href="#login" className="nav-link">{t('nav.login')}</a>
          <a href="#get-started" className="btn-primary">{t('nav.getStarted')}</a>
          
          <button 
            className="hamburger-menu"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div 
          className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
