import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Header
      "nav.aiBlockchain": "AI & Blockchain",
      "nav.whyZaori": "Why Zaori",
      "nav.whoWeServe": "Who We Serve",
      "nav.features": "Features",
      "nav.contact": "Contact",
      "nav.login": "Login",
      "nav.getStarted": "Get Started",
      
      // Hero
      "hero.badge": "Zaori Digital Assets Explore high-yield opportunities",
      "hero.title": "The new era of investments is now within your reach",
      "hero.description": "We bring you the most modern blockchain and tokenization technology so you can seize all opportunities with greater efficiency and maximum security.",
      "hero.cta": "Start Investing",
      "hero.rating": "5★ +2000 clients",
      "hero.dashboardPlaceholder": "AI-Powered Financial Dashboard\n\nShowing portfolio analytics, blockchain transactions, compliance metrics, and real-time market data in a modern, intuitive interface.",
      
      // AI & Blockchain
      "aiBlockchain.title": "A New Standard: Multiple AI Agents + Blockchain Automation",
      "aiBlockchain.description1": "Zaori deploys multiple specialized AI agents, each expertly trained on European and Luxembourg financial regulation. Our platform automates compliance, due diligence, onboarding, and audit, enabling service providers and SMEs to work with confidence.",
      "aiBlockchain.description2": "Our unique combination of AI and blockchain delivers not just smarter workflows, but also real-time audit trails, and secure, compliant tokenization of financial assets. Smart contracts bring unprecedented transparency, automating enforcement and ensuring that every step is verifiable, auditable and tamper-proof.",
      "aiBlockchain.feature1.title": "Multipurpose AI Agents",
      "aiBlockchain.feature1.description": "Each agent is fine-tuned for finance: onboarding, compliance, document review, due diligence, investor checks, and more.",
      "aiBlockchain.feature2.title": "Blockchain Smart Contracts",
      "aiBlockchain.feature2.description": "Automate and audit every legal and financial process with transparent, self-executing contracts. No manual reconciliation — everything verifiable on-chain.",
      "aiBlockchain.feature3.title": "Asset Tokenization",
      "aiBlockchain.feature3.description": "Tokenize receivables and financial instruments instantly on blockchain. Unlock new liquidity and compliance possibilities for SMEs and investors.",
      
      // Features
      "features.title": "The best token opportunities for you",
      "features.description": "Discover selected tokens to enhance your investments.",
      "features.card1.title": "Multipurpose AI Agents",
      "features.card1.company": "By Zaori AI Systems S.A.",
      "features.card1.description": "Each agent is fine-tuned for finance: onboarding, compliance, document review, due diligence, investor checks, and more.",
      "features.card2.title": "Blockchain Smart Contracts", 
      "features.card2.company": "By Zaori Blockchain Ltd.",
      "features.card2.description": "Automate and audit every legal and financial process with transparent, self-executing contracts. No manual reconciliation — everything verifiable on-chain.",
      "features.card3.title": "Asset Tokenization",
      "features.card3.company": "By Zaori Digital Ltd.",
      "features.card3.description": "Tokenize receivables and financial instruments instantly on blockchain. Unlock new liquidity and compliance possibilities for SMEs and investors.",
      "features.profitability": "Profitability",
      "features.minApplication": "Min. Application",
      "features.term": "Term",
      "features.totalVolume": "Total Volume",
      "features.raised": "Raised",
      "features.available": "Available",
      "features.cta1": "Start Investing",
      "features.cta2": "Create Account",
      
      // Solutions
      "solutions.title": "Personalized solutions for all profiles",
      "solutions.tab1": "For Service Providers",
      "solutions.tab2": "For SMEs", 
      "solutions.tab3": "For Fund Managers",
      "solutions.tab4": "For Enterprises",
      "solutions.providers.title": "For Service Providers",
      "solutions.providers.description": "Pioneer platform for you to maximize your profitability and access assets that were previously only available to large financial institutions and professional investors.",
      "solutions.providers.feature1": "Complete dashboards and easy interface.",
      "solutions.providers.feature2": "Clear reports for certain decisions.",
      "solutions.providers.cta": "Start investing",
      "solutions.smes.title": "For SMEs",
      "solutions.smes.description": "SMEs get access to digitized, compliant financial instruments and capital markets — without having to hire experts or navigate regulation alone. All powered by the advisors they already trust.",
      "solutions.smes.feature1": "Automated compliance and onboarding.",
      "solutions.smes.feature2": "Access to tokenized financial instruments.",
      "solutions.smes.cta": "Get started",
      "solutions.compliance": "Authorized by the Securities Commission",
      
      // Innovation
      "innovation.badge": "Zaori Innovation",
      "innovation.title": "Innovations that increase the efficiency of your investments",
      "innovation.description": "We use the same technology that the Central Bank is implementing throughout the country, promoting fundraising and investments with efficiency and reliability.",
      "innovation.feature1.title": "Detailed Reports and Intuitive Platform", 
      "innovation.feature1.description": "Get access to complete dashboards and a simple interface that makes it easy to track each operation. Our detailed reports offer a clear view of operations performance, allowing you to make strategic decisions based on reliable and updated data.",
      "innovation.highlight1": "Complete dashboards and easy interface.",
      "innovation.highlight2": "Clear reports for certain decisions.",
      "innovation.cta": "Start investing",
      
      // Footer
      "footer.about": "About Zaori Digital Assets",
      "footer.description": "Multipurpose AI agents + Blockchain. Compliant digital finance for SMEs & their trusted partners.",
      "footer.solutions": "Solutions",
      "footer.forProviders": "For Service Providers", 
      "footer.forSmes": "For SMEs",
      "footer.whiteLabel": "White-Label/API",
      "footer.company": "Company",
      "footer.aboutUs": "About Us",
      "footer.careers": "Careers",
      "footer.blog": "Blog",
      "footer.contact": "Contact",
      "footer.connect": "Connect",
      "footer.help": "Help",
      "footer.learnTokens": "Learn about tokens",
      "footer.faq": "FAQ",
      "footer.support": "Support",
      "footer.legal": "Legal",
      "footer.terms": "Terms of Service",
      "footer.privacy": "Privacy Policy",
      "footer.compliance": "Compliance",
      "footer.ethics": "Code of Ethics and Conduct",
      "footer.copyright": "© 2025 Zaori Capital. All rights reserved.",
      "footer.privacyPolicy": "Privacy Policy",
      "footer.termsOfService": "Terms of Service",
      "footer.cookiePolicy": "Cookie Policy"
    }
  },
  fr: {
    translation: {
      // Header
      "nav.aiBlockchain": "IA & Blockchain",
      "nav.whyZaori": "Pourquoi Zaori",
      "nav.whoWeServe": "Qui nous servons",
      "nav.features": "Fonctionnalités",
      "nav.contact": "Contact",
      "nav.login": "Connexion",
      "nav.getStarted": "Commencer",
      
      // Hero
      "hero.badge": "Zaori Digital Assets Explorer les opportunités à haut rendement",
      "hero.title": "La nouvelle ère des investissements est maintenant à votre portée",
      "hero.description": "Nous vous apportons la technologie blockchain et de tokenisation la plus moderne pour que vous puissiez saisir toutes les opportunités avec une plus grande efficacité et une sécurité maximale.",
      "hero.cta": "Commencer à investir",
      "hero.rating": "5★ +2000 clients",
      "hero.dashboardPlaceholder": "Tableau de bord financier alimenté par l'IA\n\nAffichage des analyses de portefeuille, des transactions blockchain, des métriques de conformité et des données de marché en temps réel dans une interface moderne et intuitive.",
      
      // AI & Blockchain
      "aiBlockchain.title": "Une Nouvelle Norme : Agents IA Multiples + Automatisation Blockchain",
      "aiBlockchain.description1": "Zaori déploie plusieurs agents IA spécialisés, chacun expertement formé sur la réglementation financière européenne et luxembourgeoise. Notre plateforme automatise la conformité, la diligence raisonnable, l'intégration et l'audit, permettant aux prestataires de services et PME de travailler en toute confiance.",
      "aiBlockchain.description2": "Notre combinaison unique d'IA et de blockchain offre non seulement des workflows plus intelligents, mais aussi des pistes d'audit en temps réel, et une tokenisation sécurisée et conforme des actifs financiers. Les contrats intelligents apportent une transparence sans précédent, automatisant l'application et garantissant que chaque étape est vérifiable, auditable et inviolable.",
      "aiBlockchain.feature1.title": "Agents IA Polyvalents",
      "aiBlockchain.feature1.description": "Chaque agent est spécialisé pour la finance : intégration, conformité, révision de documents, diligence raisonnable, vérifications d'investisseurs, et plus.",
      "aiBlockchain.feature2.title": "Contrats Intelligents Blockchain",
      "aiBlockchain.feature2.description": "Automatisez et auditez chaque processus juridique et financier avec des contrats transparents et auto-exécutables. Aucune réconciliation manuelle — tout vérifiable on-chain.",
      "aiBlockchain.feature3.title": "Tokenisation d'Actifs",
      "aiBlockchain.feature3.description": "Tokenisez instantanément les créances et instruments financiers sur blockchain. Débloquez de nouvelles possibilités de liquidité et de conformité pour les PME et investisseurs.",
      
      // Features
      "features.title": "Les meilleures opportunités de tokens pour vous",
      "features.description": "Découvrez des tokens sélectionnés pour améliorer vos investissements.",
      "features.card1.title": "Agents IA Polyvalents",
      "features.card1.company": "Par Zaori AI Systems S.A.",
      "features.card1.description": "Chaque agent est spécialisé pour la finance : intégration, conformité, révision de documents, diligence raisonnable, vérifications d'investisseurs, et plus.",
      "features.card2.title": "Contrats Intelligents Blockchain",
      "features.card2.company": "Par Zaori Blockchain Ltd.",
      "features.card2.description": "Automatisez et auditez chaque processus juridique et financier avec des contrats transparents et auto-exécutables. Aucune réconciliation manuelle — tout vérifiable on-chain.",
      "features.card3.title": "Tokenisation d'Actifs",
      "features.card3.company": "Par Zaori Digital Ltd.",
      "features.card3.description": "Tokenisez instantanément les créances et instruments financiers sur blockchain. Débloquez de nouvelles possibilités de liquidité et de conformité pour les PME et investisseurs.",
      "features.profitability": "Rentabilité",
      "features.minApplication": "Application Min.",
      "features.term": "Terme",
      "features.totalVolume": "Volume Total",
      "features.raised": "Levé",
      "features.available": "Disponible",
      "features.cta1": "Commencer à investir",
      "features.cta2": "Créer un compte",
      
      // Solutions
      "solutions.title": "Solutions personnalisées pour tous les profils",
      "solutions.tab1": "Pour les Prestataires",
      "solutions.tab2": "Pour les PME",
      "solutions.tab3": "Pour les Gestionnaires",
      "solutions.tab4": "Pour les Entreprises",
      "solutions.providers.title": "Pour les Prestataires de Services",
      "solutions.providers.description": "Plateforme pionnière pour maximiser votre rentabilité et accéder aux actifs qui n'étaient auparavant disponibles que pour les grandes institutions financières et investisseurs professionnels.",
      "solutions.providers.feature1": "Tableaux de bord complets et interface facile.",
      "solutions.providers.feature2": "Rapports clairs pour des décisions certaines.",
      "solutions.providers.cta": "Commencer à investir",
      "solutions.smes.title": "Pour les PME",
      "solutions.smes.description": "Les PME ont accès à des instruments financiers numérisés et conformes ainsi qu'aux marchés de capitaux — sans avoir à engager d'experts ou naviguer seuls dans la réglementation. Le tout alimenté par les conseillers en qui ils ont déjà confiance.",
      "solutions.smes.feature1": "Conformité et intégration automatisées.",
      "solutions.smes.feature2": "Accès aux instruments financiers tokenisés.",
      "solutions.smes.cta": "Commencer",
      "solutions.compliance": "Autorisé par la Commission des Valeurs Mobilières",
      
      // Innovation
      "innovation.badge": "Innovation Zaori",
      "innovation.title": "Innovations qui augmentent l'efficacité de vos investissements",
      "innovation.description": "Nous utilisons la même technologie que la Banque Centrale met en œuvre dans tout le pays, favorisant la levée de fonds et les investissements avec efficacité et fiabilité.",
      "innovation.feature1.title": "Rapports Détaillés et Plateforme Intuitive",
      "innovation.feature1.description": "Accédez à des tableaux de bord complets et une interface simple qui facilite le suivi de chaque opération. Nos rapports détaillés offrent une vue claire des performances des opérations, vous permettant de prendre des décisions stratégiques basées sur des données fiables et actualisées.",
      "innovation.highlight1": "Tableaux de bord complets et interface facile.",
      "innovation.highlight2": "Rapports clairs pour des décisions certaines.",
      "innovation.cta": "Commencer à investir",
      
      // Footer
      "footer.about": "À propos de Zaori Digital Assets",
      "footer.description": "Agents IA polyvalents + Blockchain. Finance numérique conforme pour les PME et leurs partenaires de confiance.",
      "footer.solutions": "Solutions",
      "footer.forProviders": "Pour les Prestataires",
      "footer.forSmes": "Pour les PME",
      "footer.whiteLabel": "Marque Blanche/API",
      "footer.company": "Entreprise",
      "footer.aboutUs": "À propos",
      "footer.careers": "Carrières",
      "footer.blog": "Blog",
      "footer.contact": "Contact",
      "footer.connect": "Connecter",
      "footer.help": "Aide",
      "footer.learnTokens": "Apprendre sur les tokens",
      "footer.faq": "FAQ",
      "footer.support": "Support",
      "footer.legal": "Légal",
      "footer.terms": "Conditions d'utilisation",
      "footer.privacy": "Politique de confidentialité",
      "footer.compliance": "Conformité",
      "footer.ethics": "Code d'éthique et de conduite",
      "footer.copyright": "© 2025 Zaori Capital. Tous droits réservés.",
      "footer.privacyPolicy": "Politique de Confidentialité",
      "footer.termsOfService": "Conditions d'Utilisation",
      "footer.cookiePolicy": "Politique des Cookies"
    }
  },
  pt: {
    translation: {
      // Header
      "nav.aiBlockchain": "IA & Blockchain",
      "nav.whyZaori": "Por que Zaori",
      "nav.whoWeServe": "Quem Servimos",
      "nav.features": "Recursos",
      "nav.contact": "Contato",
      "nav.login": "Login",
      "nav.getStarted": "Começar",
      
      // Hero
      "hero.badge": "Zaori Digital Assets Explore ofertas com alta rentabilidade",
      "hero.title": "A nova era dos investimentos agora está a seu alcance",
      "hero.description": "Aproximamos você da mais moderna tecnologia de blockchain e tokenização para que você aproveite todas as oportunidades com mais eficiência e máxima segurança.",
      "hero.cta": "Começar a investir",
      "hero.rating": "5★ +2000 clientes",
      "hero.dashboardPlaceholder": "Dashboard Financeiro Alimentado por IA\n\nMostrando análises de portfólio, transações blockchain, métricas de compliance e dados de mercado em tempo real numa interface moderna e intuitiva.",
      
      // AI & Blockchain
      "aiBlockchain.title": "Um Novo Padrão: Múltiplos Agentes IA + Automação Blockchain",
      "aiBlockchain.description1": "A Zaori implanta múltiplos agentes IA especializados, cada um expertamente treinado na regulamentação financeira europeia e luxemburguesa. Nossa plataforma automatiza compliance, due diligence, onboarding e auditoria, permitindo que prestadores de serviços e PMEs trabalhem com confiança.",
      "aiBlockchain.description2": "Nossa combinação única de IA e blockchain oferece não apenas fluxos de trabalho mais inteligentes, mas também trilhas de auditoria em tempo real, e tokenização segura e compatível de ativos financeiros. Contratos inteligentes trazem transparência sem precedentes, automatizando a aplicação e garantindo que cada etapa seja verificável, auditável e à prova de adulteração.",
      "aiBlockchain.feature1.title": "Agentes IA Multiuso",
      "aiBlockchain.feature1.description": "Cada agente é especializado para finanças: onboarding, compliance, revisão de documentos, due diligence, verificações de investidores, e mais.",
      "aiBlockchain.feature2.title": "Contratos Inteligentes Blockchain",
      "aiBlockchain.feature2.description": "Automatize e audite cada processo legal e financeiro com contratos transparentes e auto-executáveis. Nenhuma reconciliação manual — tudo verificável on-chain.",
      "aiBlockchain.feature3.title": "Tokenização de Ativos",
      "aiBlockchain.feature3.description": "Tokenize recebíveis e instrumentos financeiros instantaneamente na blockchain. Desbloqueie novas possibilidades de liquidez e compliance para PMEs e investidores.",
      
      // Features
      "features.title": "As melhores oportunidades de tokens para você",
      "features.description": "Descubra tokens selecionados para potencializar seus investimentos.",
      "features.card1.title": "Agentes IA Multiuso",
      "features.card1.company": "Por Zaori AI Systems S.A.",
      "features.card1.description": "Cada agente é especializado para finanças: onboarding, compliance, revisão de documentos, due diligence, verificações de investidores, e mais.",
      "features.card2.title": "Contratos Inteligentes Blockchain",
      "features.card2.company": "Por Zaori Blockchain Ltd.",
      "features.card2.description": "Automatize e audite todos os processos legais e financeiros com contratos transparentes e auto-executáveis. Sem reconciliação manual — tudo verificável on-chain.",
      "features.card3.title": "Tokenização de Ativos",
      "features.card3.company": "Por Zaori Digital Ltd.",
      "features.card3.description": "Tokenize recebíveis e instrumentos financeiros instantaneamente na blockchain. Desbloqueie novas possibilidades de liquidez e compliance para PMEs e investidores.",
      "features.profitability": "Rentabilidade",
      "features.minApplication": "Aplicação Mín.",
      "features.term": "Prazo",
      "features.totalVolume": "Volume Total",
      "features.raised": "Captado",
      "features.available": "Disponível",
      "features.cta1": "Começar a investir",
      "features.cta2": "Criar conta",
      
      // Solutions
      "solutions.title": "Soluções personalizadas para todos os perfis",
      "solutions.tab1": "Para Provedores",
      "solutions.tab2": "Para PMEs",
      "solutions.tab3": "Para Gestores",
      "solutions.tab4": "Para Empresas",
      "solutions.providers.title": "Para Provedores de Serviços",
      "solutions.providers.description": "Plataforma pioneira para você maximizar sua rentabilidade e acessar ativos que antes ficavam só disponíveis para grandes instituições financeiras e investidores profissionais.",
      "solutions.providers.feature1": "Dashboards completos e interface fácil.",
      "solutions.providers.feature2": "Relatórios claros para decisões certas.",
      "solutions.providers.cta": "Começar a investir",
      "solutions.smes.title": "Para PMEs",
      "solutions.smes.description": "PMEs têm acesso a instrumentos financeiros digitalizados e conformes e mercados de capital — sem ter que contratar especialistas ou navegar na regulamentação sozinhas. Tudo alimentado pelos consultores em quem já confiam.",
      "solutions.smes.feature1": "Compliance e onboarding automatizados.",
      "solutions.smes.feature2": "Acesso a instrumentos financeiros tokenizados.",
      "solutions.smes.cta": "Começar",
      "solutions.compliance": "Autorizado pela Comissão de Valores Mobiliários",
      
      // Innovation
      "innovation.badge": "Inovação Zaori",
      "innovation.title": "As inovações que aumentam a eficiência dos seus investimentos",
      "innovation.description": "Utilizamos a mesma tecnologia que o Banco Central está implementando em todo o país, promovendo captações e investimentos com eficiência e confiabilidade.",
      "innovation.feature1.title": "Relatórios detalhados e Plataforma intuitiva",
      "innovation.feature1.description": "Tenha acesso a dashboards completos e uma interface simples que facilita o acompanhamento de cada operação. Nossos relatórios detalhados oferecem uma visão clara do desempenho das operações, permitindo que você tome decisões estratégicas com base em dados confiáveis e atualizados.",
      "innovation.highlight1": "Dashboards completos e interface fácil.",
      "innovation.highlight2": "Relatórios claros para decisões certas.",
      "innovation.cta": "Começar a investir",
      
      // Footer
      "footer.about": "Sobre a Zaori Digital Assets",
      "footer.description": "Agentes IA multiuso + Blockchain. Finanças digitais conformes para PMEs e seus parceiros confiáveis.",
      "footer.solutions": "Soluções",
      "footer.forProviders": "Para Provedores",
      "footer.forSmes": "Para PMEs",
      "footer.whiteLabel": "White-Label/API",
      "footer.company": "Empresa",
      "footer.aboutUs": "Sobre Nós",
      "footer.careers": "Carreiras",
      "footer.blog": "Blog",
      "footer.contact": "Contato",
      "footer.connect": "Conectar",
      "footer.help": "Ajuda",
      "footer.learnTokens": "Aprenda sobre tokens",
      "footer.faq": "Perguntas Frequentes",
      "footer.support": "Suporte",
      "footer.legal": "Jurídico",
      "footer.terms": "Termos de Uso",
      "footer.privacy": "Política de Privacidade",
      "footer.compliance": "Compliance",
      "footer.ethics": "Código de Ética e Conduta",
      "footer.copyright": "© 2025 Zaori Capital. Todos os direitos reservados.",
      "footer.privacyPolicy": "Política de Privacidade",
      "footer.termsOfService": "Termos de Serviço",
      "footer.cookiePolicy": "Política de Cookies"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;