import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Solutions = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('providers');

  const tabs = [
    { id: 'providers', label: t('solutions.tab1') },
    { id: 'smes', label: t('solutions.tab2') },
    { id: 'managers', label: t('solutions.tab3') },
    { id: 'enterprises', label: t('solutions.tab4') }
  ];

  const solutionData = {
    providers: {
      title: t('solutions.providers.title'),
      description: t('solutions.providers.description'),
      features: [
        t('solutions.providers.feature1'),
        t('solutions.providers.feature2')
      ],
      cta: t('solutions.providers.cta'),
      imagePlaceholder: "Service Provider Dashboard\n\nInterface showing client onboarding automation, compliance workflows, KYC processes, document management, and real-time audit trails for service providers managing SME clients."
    },
    smes: {
      title: t('solutions.smes.title'),
      description: t('solutions.smes.description'),
      features: [
        t('solutions.smes.feature1'),
        t('solutions.smes.feature2')
      ],
      cta: t('solutions.smes.cta'),
      imagePlaceholder: "SME Dashboard\n\nInterface showing tokenized assets, investment opportunities, simplified compliance tools, automated onboarding, and access to institutional-grade financial instruments."
    },
    managers: {
      title: "For Fund Managers",
      description: "Professional fund management tools with blockchain transparency, automated compliance, and institutional-grade reporting for managing tokenized investment portfolios.",
      features: [
        "Advanced portfolio analytics and performance tracking.",
        "Automated compliance reporting and audit trails."
      ],
      cta: "Get started",
      imagePlaceholder: "Fund Manager Interface\n\nPortfolio analytics dashboard with blockchain audit trails, automated compliance reporting, fund performance metrics, and investor communication tools."
    },
    enterprises: {
      title: "For Enterprises",
      description: "Enterprise-grade financial solutions with white-label infrastructure, API integration, and custom tokenization solutions for large-scale operations.",
      features: [
        "White-label infrastructure and API integration.",
        "Custom tokenization solutions for enterprise needs."
      ],
      cta: "Contact sales",
      imagePlaceholder: "Enterprise Solutions\n\nCorporate finance management interface with white-label branding, API integration tools, custom tokenization workflows, and enterprise compliance dashboards."
    }
  };

  const currentSolution = solutionData[activeTab];

  return (
    <section className="solutions" id="who-we-serve">
      <div className="container">
        <div className="section-header">
          <h2>{t('solutions.title')}</h2>
        </div>
        
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="solution-content">
          <div className="solution-image">
            <div className="image-placeholder">
              {currentSolution.imagePlaceholder}
            </div>
          </div>
          
          <div className="solution-info">
            <h3>{currentSolution.title}</h3>
            <p>{currentSolution.description}</p>
            
            <ul className="solution-features">
              {currentSolution.features.map((feature, index) => (
                <li key={index}>
                  <span className="checkmark">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="btn-primary-large">{currentSolution.cta}</button>
            
            <div className="compliance-badge">
              {t('solutions.compliance')}
              <div className="badge-logo">CVM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
