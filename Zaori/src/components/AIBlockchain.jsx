import React from 'react';
import { useTranslation } from 'react-i18next';

const AIBlockchain = () => {
  const { t } = useTranslation();

  return (
    <section className="ai-blockchain">
      <div className="container">
        <div className="ai-blockchain-content">
          <h2 className="ai-blockchain-title gradient-text">
            {t('aiBlockchain.title')}
          </h2>
          
          <div className="ai-blockchain-description">
            <p>
              {t('aiBlockchain.description1')}
            </p>
            <p className="highlight-text">
              {t('aiBlockchain.description2')}
            </p>
          </div>
          
          <div className="ai-blockchain-features">
            <div className="ai-feature-card">
              <h3 className="gradient-text">{t('aiBlockchain.feature1.title')}</h3>
              <p>{t('aiBlockchain.feature1.description')}</p>
            </div>
            
            <div className="ai-feature-card">
              <h3 className="gradient-text">{t('aiBlockchain.feature2.title')}</h3>
              <p>{t('aiBlockchain.feature2.description')}</p>
            </div>
            
            <div className="ai-feature-card">
              <h3 className="gradient-text">{t('aiBlockchain.feature3.title')}</h3>
              <p>{t('aiBlockchain.feature3.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBlockchain;
