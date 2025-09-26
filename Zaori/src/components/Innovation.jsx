import React from 'react';
import { useTranslation } from 'react-i18next';

const Innovation = () => {
  const { t } = useTranslation();

  return (
    <section className="innovation">
      <div className="container">
        <div className="innovation-content">
          <div className="innovation-interface">
            <div className="interface-placeholder">
              Blockchain Transaction Interface
              
              Modern interface showing automated compliance checks, smart contract execution, real-time audit trails, transaction verification, and regulatory reporting in an intuitive dashboard.
            </div>
            <div className="innovation-badge">
              <span>🔗</span>
              {t('innovation.badge')}
            </div>
          </div>
          
          <div className="innovation-info">
            <h2 className="gradient-text">{t('innovation.title')}</h2>
            <p>{t('innovation.description')}</p>
            
            <div className="innovation-features">
              <div className="feature-item">
                <h4>{t('innovation.feature1.title')}</h4>
                <p>{t('innovation.feature1.description')}</p>
              </div>
              
              <div className="feature-highlights">
                <div className="highlight">
                  <span className="checkmark">✓</span>
                  {t('innovation.highlight1')}
                </div>
                <div className="highlight">
                  <span className="checkmark">✓</span>
                  {t('innovation.highlight2')}
                </div>
              </div>
            </div>
            
            <button className="btn-primary-large">{t('innovation.cta')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
