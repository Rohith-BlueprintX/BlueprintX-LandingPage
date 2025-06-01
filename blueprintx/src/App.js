import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, CheckCircle, ArrowRight, Users, Target, Zap, Shield, BarChart3, Cog, Globe, Brain } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Business Process Transformation",
      description: "Elevating Customer Experience Through Scalable Support Frameworks",
      features: [
        "Operational Diagnostics & Process Optimization",
        "Framework Standardization for Growth",
        "Omnichannel Support Enablement",
        "Knowledge-Centric Support Systems",
        "Real-time Performance Analytics"
      ]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "SaaS Integration & CRM Implementation",
      description: "Accelerating Growth with Intelligent SaaS Infrastructure",
      features: [
        "Unified CRM Architecture",
        "Frictionless System Integration",
        "Workflow Process Automation",
        "Vendor Lifecycle Management",
        "Strategic CRM Orchestration"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Process Outsourcing Strategy",
      description: "Orchestrating Outsourcing for Operational Excellence",
      features: [
        "Strategic Vendor Alignment",
        "Contract & SLA Optimization",
        "Robust Governance Frameworks",
        "Data-Driven Performance Oversight",
        "Risk Mitigation & Compliance"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web & Application Development",
      description: "Engineering Digital Assets That Drive Competitive Advantage",
      features: [
        "Full-Stack Development Solutions",
        "CRM-Integrated Digital Experiences",
        "API & Data Layer Integration",
        "UX-Centric Design Principles",
        "Scalable Revenue Enablers"
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Custom AI Implementation",
      description: "Embedding AI to Scale Intelligence Across Operations",
      features: [
        "AI Model Selection & Benchmarking",
        "Agentic AI Workflow Integration",
        "Explainable AI & Bias Mitigation",
        "Continuous Performance Optimization",
        "Measurable ROI Achievement"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics & Intelligence",
      description: "Turning Data into Strategic Advantage",
      features: [
        "Data Engineering & Warehousing",
        "Interactive BI & Visualization",
        "Advanced Analytics & Forecasting",
        "Data Governance & Quality Assurance",
        "Actionable Decision Intelligence"
      ]
    }
  ];

  const capabilities = [
    "Agentic AI Framework Development",
    "Enterprise Customer Service Operations",
    "Sales and Accounting Automation",
    "Regulatory Compliance Implementation",
    "Cloud Security and Optimization",
    "Financial Modeling and Forecasting",
    "Business Continuity Planning",
    "Privacy and Secure Development Lifecycle",
    "SaaS Relationship Management",
    "BPO Governance and Vendor Management",
    "Product Management and Digital Delivery",
    "Analytical First-Principles Methodology",
    "SEO-Optimized Web Applications"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Fixed Navigation Header */}
      <header className={`fixed-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-section">
            <div className="logo-placeholder">
              <span className="logo-text">BlueprintX</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`mobile-nav-button ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transforming Ambition into <span className="text-gradient">Action</span>
            </h1>
            <p className="hero-subtitle">
              BlueprintX enables organizations to execute complex transformation strategies with precision. 
              Specializing in Business Process Transformation, SaaS implementation, Agentic AI integration, 
              and scalable digital transformation.
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-primary"
              >
                Explore Services <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="floating-card">
                <Brain className="w-8 h-8 text-blue-600" />
                <span>AI Integration</span>
              </div>
              <div className="floating-card">
                <Zap className="w-8 h-8 text-indigo-600" />
                <span>Process Automation</span>
              </div>
              <div className="floating-card">
                <Target className="w-8 h-8 text-purple-600" />
                <span>Strategic Growth</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About BlueprintX</h2>
            <p className="section-subtitle">
              Building future-ready enterprises through proven methodologies, technology alignment, 
              and an uncompromising commitment to value realization.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3>30+ Years Experience</h3>
              <p>
                Our leadership team brings over three decades of collective expertise across mission-critical 
                domains, ensuring exceptional value delivery.
              </p>
            </div>
            <div className="about-card">
              <Target className="w-12 h-12 text-indigo-600 mb-4" />
              <h3>Strategic Excellence</h3>
              <p>
                We convert data-driven insights into actionable outcomes, aligning every engagement 
                with long-term business objectives.
              </p>
            </div>
            <div className="about-card">
              <Zap className="w-12 h-12 text-purple-600 mb-4" />
              <h3>Innovation Focus</h3>
              <p>
                Specializing in cutting-edge technologies including Agentic AI frameworks and 
                scalable digital transformation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive transformation services designed to drive measurable business outcomes
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="solutions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise Solutions</h2>
            <p className="section-subtitle">
              Tailored solutions that address complex business challenges with precision and scalability
            </p>
          </div>

          <div className="solutions-content">
            <div className="solution-highlight">
              <h3>Agentic AI Framework Development</h3>
              <p>
                Accelerated deployment of production-grade, agentic AI frameworks tailored for 
                real-world, industry-specific applications. Our focus is on scalable architecture, 
                reliable model orchestration, and contextual adaptability.
              </p>
            </div>
            
            <div className="solution-highlight">
              <h3>Enterprise Customer Service Operations</h3>
              <p>
                Comprehensive management of large-scale customer support ecosystems, including 
                design and optimization of omnichannel support workflows, performance metrics, 
                and SLA governance structures.
              </p>
            </div>

            <div className="solution-highlight">
              <h3>Regulatory Compliance Implementation</h3>
              <p>
                Expert implementation of data protection and governance frameworks aligned with 
                global standards including GDPR, CCPA/CPRA, and ISO/IEC 27001, 42001, and 27701.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="capabilities-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core Capabilities</h2>
            <p className="section-subtitle">
              Comprehensive expertise across critical business and technology domains
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="capability-item">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ready to Transform?</h2>
            <p className="section-subtitle">
              Let's discuss how BlueprintX can accelerate your digital transformation journey
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Get Started Today</h3>
              <p>
                Partner with BlueprintX to unlock your organization's full potential through 
                strategic transformation and cutting-edge technology implementation.
              </p>
              <div className="contact-highlights">
                <div className="contact-highlight">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <span>Strategic Consultation</span>
                </div>
                <div className="contact-highlight">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3" />
                  <span>Rapid Implementation</span>
                </div>
                <div className="contact-highlight">
                  <Shield className="w-6 h-6 text-purple-600 mr-3" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <div className="form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Company" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Tell us about your transformation needs..." 
                    rows="5" 
                    className="form-input"
                  ></textarea>
                </div>
                <button className="btn-primary full-width">
                  Start Your Transformation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo-placeholder">
                <span className="logo-text">BlueprintX</span>
              </div>
              <p>Transforming Ambition into Action</p>
            </div>
            <div className="footer-contact">
              <div className="footer-section">
                <h4>Contact</h4>
                <ul>
                  <li>Mail: dennis@blueprintx.net</li>
                  <li>Phone: +31 6 15876896</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} BlueprintX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;