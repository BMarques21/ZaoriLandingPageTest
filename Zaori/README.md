# Zaori Capital Landing Page

A modern, responsive landing page for Zaori Capital built with React and Vite, featuring a clean design inspired by contemporary fintech aesthetics while maintaining Zaori's unique branding.

## 🌟 Project Overview

This project transforms the original Zaori Capital landing page into a modern, Liqi-i# Zaori Capital - Digital Assets Landing Page

## Overview

Zaori Capital's modern, responsive landing page showcases our cutting-edge financial technology platform that combines AI-powered solutions with blockchain infrastructure. Built with React and designed with a focus on user experience, this landing page presents our comprehensive suite of digital finance solutions for SMEs, service providers, fund managers, and enterprises.

## 🌟 Key Features

### Multi-Language Support
- **English**, **French**, and **Portuguese** localization
- Automatic language detection based on browser preferences
- Seamless language switching with flag-based selector

### Responsive Design
- Mobile-first approach with breakpoints at 768px and 480px
- Optimized for all device sizes from mobile phones to desktop
- Interactive hamburger menu for mobile navigation

### Modern UI/UX
- **Liqi-inspired design** with gradient backgrounds and glass morphism effects
- **Golden accent colors** for buttons and interactive elements
- **Gradient text effects** for headings and titles
- **Smooth animations** and hover effects throughout

### Professional Branding
- Custom Zaori logo integration
- Consistent typography using system fonts
- Professional color scheme with pastel gradients

## 🛠 Technology Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 6.0.1
- **Internationalization**: react-i18next 15.0.0
- **Styling**: Pure CSS with modern features (Grid, Flexbox, Custom Properties)
- **Language Detection**: i18next-browser-languagedetector

## 📱 Sections

### Header
- Logo with "ZaoriCapital" branding
- Navigation menu (AI & Blockchain, Why Zaori, Features, Contact)
- Language switcher (EN/FR/PT flags)
- Responsive hamburger menu for mobile

### Hero Section
- Compelling value proposition
- Call-to-action button
- AI-powered dashboard mockup
- Customer rating display

### Features Section
- Three main service cards:
  - **Multipurpose AI Agents** - Finance-focused automation
  - **Blockchain Smart Contracts** - Transparent, self-executing contracts
  - **Asset Tokenization** - Instant blockchain tokenization

### Solutions Section
- Tabbed interface showcasing solutions for:
  - Service Providers
  - SMEs (Small and Medium Enterprises)
  - Fund Managers
  - Enterprises
- Personalized feature highlights for each user type

### Innovation Section
- Technology showcase with interface mockup
- Detailed platform benefits
- Central Bank technology integration messaging

### Footer
- Company information and logo
- Organized link sections (Solutions, Company, Connect, Legal)
- Social media links
- Copyright and legal information

## 🎨 Design Philosophy

The design follows modern fintech aesthetics with:
- **Clean, professional layout** that builds trust
- **Strategic use of gradients** for visual interest
- **High contrast text** for accessibility
- **Consistent spacing and typography** for professionalism
- **Interactive elements** that enhance user engagement

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd Zaori

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Commands

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run lint     # Run ESLint checks
npm run preview  # Preview production build
```

## 🌍 Internationalization

The application supports three languages with comprehensive translations:

- **English (en)** - Default language
- **French (fr)** - Complete French localization
- **Portuguese (pt)** - Complete Portuguese localization

All text content is externalized through i18next, making it easy to add new languages or modify existing translations.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section
│   ├── Features.jsx     # Features showcase
│   ├── Solutions.jsx    # Solutions tabs
│   ├── Innovation.jsx   # Innovation section
│   ├── Footer.jsx       # Site footer
│   └── LanguageSwitcher.jsx # Language selection
├── imgs/                # Image assets
│   └── logoZaori.png    # Company logo
├── App.jsx              # Main application component
├── App.css              # Global styles
├── i18n.js              # Internationalization config
├── main.jsx             # Application entry point
└── index.css            # Minimal base styles
```

## 🎯 Business Value

This landing page serves as a powerful digital presence for Zaori Capital, effectively communicating:

- **Technology Leadership** in AI and blockchain finance
- **Comprehensive Solutions** for various market segments
- **Professional Credibility** through polished design and UX
- **Global Accessibility** through multi-language support
- **User-Centric Approach** with responsive design

## 📊 Performance Considerations

- **Optimized Bundle Size** with Vite's efficient bundling
- **Lazy Loading** for images and components
- **Minimal Dependencies** to reduce load times
- **Modern CSS** using efficient selectors and properties
- **Semantic HTML** for better SEO and accessibility

## 🔧 Customization

The codebase is structured for easy customization:
- **CSS Custom Properties** for theming
- **Component-based Architecture** for modularity
- **Centralized Translations** for content management
- **Configurable Styling** through CSS classes

## 📞 Contact & Support

For technical inquiries or business discussions regarding this landing page:
- **Company**: Zaori Capital
- **Technology**: AI & Blockchain Digital Finance
- **Focus**: SME and Enterprise Financial Solutions

---

*This landing page represents Zaori Capital's commitment to combining cutting-edge technology with exceptional user experience to deliver the future of digital finance.*d design while preserving all Zaori-specific content and branding elements, particularly the iconic golden leaf logo.

### Key Features

- **Modern Design**: Clean, contemporary UI inspired by leading fintech platforms
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Dynamic tabs, hover effects, and smooth transitions  
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **Internationalization**: Full i18n support with English, French, and Portuguese translations
- **Language Detection**: Automatic browser language detection with manual override

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd Zaori

# Install dependencies (including i18n support)
npm install

# Start the development server
npm run dev
```

**Note**: After cloning, you'll need to run `npm install` again to install the newly added internationalization dependencies:
- `react-i18next` - React integration for i18next
- `i18next` - Core internationalization library  
- `i18next-browser-languagedetector` - Browser language detection

Visit `http://localhost:5174` to view the application.

### Build for Production

```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with logo and menu
│   ├── Hero.jsx           # Main hero section with CTA
│   ├── Features.jsx       # Service offerings cards
│   ├── Solutions.jsx      # Tabbed solutions for different user types
│   ├── Innovation.jsx     # Technology innovation showcase
│   ├── Footer.jsx         # Footer with links and social media
│   └── LanguageSwitcher.jsx # Language selection dropdown
├── App.jsx                # Main app component
├── App.css               # Component styles
├── index.css             # Global styles
├── i18n.js               # Internationalization configuration
└── main.jsx              # App entry point
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#007bff` - Main CTA buttons and links
- **Gradient**: `#667eea` to `#764ba2` - Used for accent text and visual elements
- **Golden Accent**: `#ffd700` - Zaori's signature golden leaf
- **Neutral Grays**: Various shades for text and backgrounds
- **Success Green**: `#28a745` - For positive indicators

### Typography
- **Font Family**: System font stack for optimal performance
- **Headings**: Bold weights (600-700) for impact
- **Body Text**: Regular weight (400) for readability
- **Small Text**: Used for metadata and secondary information

### Components

#### Header
- Sticky navigation bar with Zaori logo (including golden leaf)
- Horizontal navigation menu
- CTA buttons (Login, Get Started)

#### Hero Section  
- Large heading with gradient text
- Descriptive subtitle
- Primary CTA button
- Social proof with customer avatars and ratings
- Dashboard mockup visualization

#### Features Section
- Grid layout of service cards
- Each card includes:
  - Service icon and title
  - Company information
  - Status badges (Active, Compliance, Region)
  - Key metrics (efficiency, application, terms)
  - Progress bars showing availability
- Dual CTA buttons at bottom

#### Solutions Section
- Tab-based navigation for different user types:
  - Service Providers
  - SMEs  
  - Fund Managers
  - Enterprises
- Content switches based on active tab
- Visual mockup paired with descriptive content
- Individual CTA for each solution type

#### Innovation Section
- Split layout with interface mockup and content
- Highlights technology benefits
- Feature list with checkmarks
- Single CTA button

#### Footer
- Multi-column link organization
- Social media icon links
- Company information
- Legal and compliance links
- Copyright notice

## 🖼️ Image Placeholders

The following images need to be sourced and replaced:

### Hero Section
- **Customer Avatars (3x)**: Professional headshots of diverse customers for social proof
- **Dashboard Mockup**: AI-powered financial dashboard showing portfolio analytics, blockchain transactions, and compliance metrics in a modern interface

### Features Section  
- **AI Agent Icon**: Modern robot or AI symbol
- **Blockchain Icon**: Chain or block symbol
- **Tokenization Icon**: Diamond or gem symbol

### Solutions Section
- **Service Provider Dashboard**: Interface showing client onboarding automation, compliance workflows, and KYC processes
- **SME Dashboard**: Interface showing tokenized assets, investment opportunities, and simplified compliance tools
- **Fund Manager Interface**: Portfolio analytics dashboard with blockchain audit trails
- **Enterprise Solutions**: Corporate finance management interface

### Innovation Section
- **Blockchain Transaction Interface**: Modern interface showing automated compliance checks, smart contract execution, and real-time audit trails

## 🌍 Internationalization (i18n)

The application supports three languages with full translation coverage:

### Supported Languages
- **🇺🇸 English (en)** - Default language
- **🇫🇷 French (fr)** - Complete French translations
- **🇵🇹 Portuguese (pt)** - Complete Portuguese translations

### Language Features
- **Automatic Detection**: Browser language is detected automatically on first visit
- **Manual Override**: Users can manually select their preferred language using the dropdown
- **Persistent Selection**: Language preference is saved in localStorage
- **Dynamic Switching**: Content updates immediately when language is changed
- **Flag Icons**: Visual country flags for easy language identification

### Translation Coverage
All user-facing content is fully translated including:
- Navigation menu items
- Hero section (title, description, CTA buttons)
- Feature cards (titles, descriptions, metrics)
- Solutions tabs and content
- Innovation section
- Footer links and legal text
- Button labels and status indicators

### Technical Implementation
- **Library**: `react-i18next` with `i18next` core
- **Detection**: `i18next-browser-languagedetector` for automatic language detection
- **Structure**: Organized by components with nested translation keys
- **Fallback**: English as fallback language for missing translations
- **Performance**: Lazy loading of translation resources

### Adding New Languages
To add support for additional languages:

1. Add the new language to `src/i18n.js` resources object
2. Update the languages array in `LanguageSwitcher.jsx`
3. Provide complete translations for all existing keys
4. Test language switching and content display

### Translation Keys Structure
```javascript
{
  "nav": {
    "aiBlockchain": "Navigation item",
    "whyZaori": "Navigation item"
  },
  "hero": {
    "title": "Main headline",
    "description": "Subtitle text"
  },
  // ... additional sections
}
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- **Components**: Functional components with hooks
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Structure**: Each component in its own file
- **Styling**: CSS-in-JS approach with modular CSS classes

### Adding New Components

1. Create new `.jsx` file in `src/components/`
2. Import and use in `App.jsx`
3. Add corresponding styles to `App.css`
4. Follow existing naming conventions

## 📱 Responsive Design

The layout is fully responsive with breakpoints at:

- **Desktop**: 1200px+ (default layout)
- **Tablet**: 768px-1199px (adjusted grid layouts)
- **Mobile**: <768px (single column layouts, hidden nav menu)

Key responsive features:
- Grid layouts collapse to single columns on mobile
- Navigation menu hidden on mobile (hamburger menu can be added)
- Font sizes scale appropriately
- Button sizes adjust for touch interfaces

## 🔧 Configuration

### Vite Configuration
The project uses Vite's default React configuration with:
- Hot Module Replacement (HMR)
- ESLint integration  
- Optimized build output

### ESLint Configuration
Configured for React development with:
- React hooks rules
- React refresh rules
- Modern JavaScript standards

## 🎯 Content Strategy

### Messaging
- **Hero**: Focuses on "new era" positioning and financial innovation
- **Features**: Emphasizes specific technology benefits with metrics
- **Solutions**: Addresses different user personas with tailored messaging
- **Innovation**: Highlights platform advantages and technology leadership

### Call-to-Actions
- Primary: "Start Investing" - main conversion goal
- Secondary: "Get Started", "Create Account" - funnel entry points
- Tertiary: "Learn more" - engagement actions

## 🚧 Future Enhancements

### Phase 2 Features
- [ ] Mobile hamburger menu
- [ ] Animation library integration (Framer Motion)
- [ ] Contact form functionality
- [ ] Blog/resources section
- [ ] Multi-language support

### Performance Optimizations
- [ ] Image optimization and lazy loading
- [ ] Bundle splitting for better caching
- [ ] SEO meta tags and structured data
- [ ] Progressive Web App features

### Accessibility Improvements
- [ ] ARIA labels for screen readers
- [ ] Keyboard navigation support
- [ ] High contrast mode support
- [ ] Focus management

## 📊 Analytics & Tracking

Ready for integration with:
- Google Analytics 4
- Facebook Pixel
- LinkedIn Insight Tag
- Custom event tracking for CTAs

## 🔒 Security Considerations

- All external links use proper security attributes
- Form inputs properly validated (when forms are added)
- No sensitive data exposed in client-side code
- Content Security Policy ready for implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is proprietary to Zaori Capital. All rights reserved.

---

**Built with ❤️ for Zaori Capital**

*For technical questions or support, please contact the development team.*+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
