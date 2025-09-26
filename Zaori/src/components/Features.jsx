import React from 'react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: '🤖',
      title: t('features.card1.title'),
      company: t('features.card1.company'),
      description: t('features.card1.description'),
      profitability: '20,98%',
      minApplication: 'R$ 25,00',
      term: '549 days',
      totalVolume: 'R$ 300,000.00',
      raised: 'R$ 50,728.26',
      available: 'R$ 249,271.74',
      progress: 17
    },
    {
      icon: '⛓️',
      title: t('features.card2.title'),
      company: t('features.card2.company'),
      description: t('features.card2.description'),
      profitability: '18,57%',
      minApplication: 'R$ 25,00',
      term: '188 days', 
      totalVolume: 'R$ 200,000.00',
      raised: 'R$ 148,471.19',
      available: 'R$ 51,528.81',
      progress: 74
    },
    {
      icon: '💎',
      title: t('features.card3.title'),
      company: t('features.card3.company'),
      description: t('features.card3.description'),
      profitability: '20,98%',
      minApplication: 'R$ 25,00',
      term: '367 days',
      totalVolume: 'R$ 200,000.00', 
      raised: 'R$ 197,907.35',
      available: 'R$ 2,092.65',
      progress: 99
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">{t('features.title')}</h2>
          <p>{t('features.description')}</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-info">
                  <h3>{feature.title}</h3>
                  <p>{feature.company}</p>
                </div>
              </div>
              
              <div className="feature-tags">
                <span className="tag tag-active">Active</span>
                <span className="tag tag-compliance">RCVM 88</span>
                <span className="tag tag-region">CR</span>
              </div>
              
              <p style={{fontSize: '14px', color: '#666', marginBottom: '16px'}}>
                {feature.description}
              </p>
              
              <div className="feature-metrics">
                <div className="metric">
                  <span className="metric-label">{t('features.profitability')}</span>
                  <span className="metric-value" style={{color: '#28a745'}}>{feature.profitability} ao ano</span>
                </div>
                <div className="metric">
                  <span className="metric-label">{t('features.minApplication')}</span>
                  <span className="metric-value">{feature.minApplication}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">{t('features.term')}</span>
                  <span className="metric-value">{feature.term}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">{t('features.totalVolume')}</span>
                  <span className="metric-value">{feature.totalVolume}</span>
                </div>
              </div>
              
              <div className="progress-section">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{width: `${feature.progress}%`}}
                  ></div>
                </div>
                <div className="progress-info">
                  <span>{t('features.raised')}: {feature.raised}</span>
                  <span>{t('features.available')}: {feature.available}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-actions">
          <button className="btn-primary-large">{t('features.cta1')}</button>
          <button className="btn-secondary-large">{t('features.cta2')}</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
