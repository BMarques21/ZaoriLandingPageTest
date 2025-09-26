import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon"></span>
            {t('hero.badge')}
          </div>
          
          <h1 className="hero-title">
            {t('hero.title')}
          </h1>
          
          <p className="hero-description">
            {t('hero.description')}
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary-large">{t('hero.cta')}</button>
            
            <div className="social-proof">
              <div className="avatars">
                <div className="avatar-placeholder">👤</div>
                <div className="avatar-placeholder">👤</div>
                <div className="avatar-placeholder">👤</div>
              </div>
              <div className="rating">
                <div className="stars">★★★★★</div>
                <div>{t('hero.rating')}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-mockup">
          <div className="dashboard-placeholder">
            {t('hero.dashboardPlaceholder')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
