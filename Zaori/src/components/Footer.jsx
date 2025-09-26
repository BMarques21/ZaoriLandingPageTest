import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../imgs/logoZaori.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Zaori Logo" className="footer-logo-image" />
              <span className="footer-logo-text">ZaoriCapital</span>
            </div>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">🔴</a>
              <a href="#" className="social-link">📺</a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>{t('footer.solutions')}</h4>
              <a href="#">{t('footer.forProviders')}</a>
              <a href="#">{t('footer.forSmes')}</a>
              <a href="#">{t('footer.whiteLabel')}</a>
            </div>
            
            <div className="link-group">
              <h4>{t('footer.company')}</h4>
              <a href="#">{t('footer.aboutUs')}</a>
              <a href="#">{t('footer.careers')}</a>
              <a href="#">{t('footer.blog')}</a>
              <a href="#">{t('footer.contact')}</a>
            </div>
            
            <div className="link-group">
              <h4>{t('footer.connect')}</h4>
              <a href="#">{t('footer.help')}</a>
              <a href="#">{t('footer.learnTokens')}</a>
              <a href="#">{t('footer.faq')}</a>
              <a href="#">{t('footer.support')}</a>
            </div>
            
            <div className="link-group">
              <h4>{t('footer.legal')}</h4>
              <a href="#">{t('footer.terms')}</a>
              <a href="#">{t('footer.privacy')}</a>
              <a href="#">{t('footer.compliance')}</a>
              <a href="#">{t('footer.ethics')}</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <div className="footer-legal-links">
            <a href="#">{t('footer.privacyPolicy')}</a>
            <a href="#">{t('footer.termsOfService')}</a>
            <a href="#">{t('footer.cookiePolicy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
