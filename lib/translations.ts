export type Language = 'EN' | 'DE'

export const translations = {
  EN: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      careers: 'Careers',
      lab: 'Lab',
      insights: 'Insights',
      blog: 'Blog',
      news: 'News',
      contact: 'Contact',
      search: 'Search',
      searchPlaceholder: 'Search services, pages, insights...',
      searchMatching: 'Matching Results',
      searchSuggested: 'Suggested Pages',
      noResults: 'No matching results found for',
      pressEsc: 'Press ESC to exit',
      phone: '+91 8086 22 8000',
      email: 'info@esc-ind.com',
      address: 'Yamuna Building, Technopark Phase 3 campus, Trivandrum',
    },

    // Footer
    footer: {
      certifications: 'Certifications',
      dataProtection: 'Data Protection',
      imprint: 'Imprint',
    },

    // Common Buttons & Labels
    common: {
      exploreServices: 'Explore Services',
      aboutEsc: 'About ESC',
      getInTouch: 'Get in Touch',
      learnMore: 'Learn More',
      viewAll: 'View All',
      readMore: 'Read More',
      readBlog: 'READ BLOG',
      applyNow: 'Apply Now',
      letsTalk: "LET'S TALK",
      backToTop: 'Back to Top',
      whoWeAre: 'Who We Are',
      whatWeDo: 'What We Do',
      ourMission: 'Our Mission',
    },

    // Home Page
    home: {
      hero: {
        powering: 'Powering',
        theFutureOf: 'the Future of',
        utilities: 'Utilities.',
        description:
          'We are the Indo-German IT Back Office & Automation Service Provider of many successful Energy, Gas and Water Industry companies.',
        ctaServices: 'Explore Services',
        ctaAbout: 'About ESC',
      },
      partnership: {
        isoBadge: 'OFFICIAL ISO/IEC 27001:2022',
        ismsTitle: 'Information Security Management System (ISMS)',
        ismsDesc:
          'Our audited Information Security Management System guarantees enterprise-grade security, data protection, and operational resilience across all software and IT operations.',
        viewCert: 'View Certification',
        india: 'India',
        germany: 'Germany',
        headingPre: 'Powering Utilities with',
        headingHighlight: 'Indo-German Excellence',
        desc: 'Our Indo-German model combines cost-effective delivery with European precision — giving Energy and Water organizations the best of both worlds.',
        badgeIsoTitle: 'ISO/IEC 27001:2022',
        badgeIsoDesc: 'Information Security Certified',
        badgeGdprTitle: 'GDPR & EU Compliant',
        badgeGdprDesc: 'Strict European Data Privacy',
      },
      aboutTeaser: {
        badge: 'Who We Are',
        headlinePre: 'Trusted by leading',
        headlineHighlight: 'utility organizations',
        headlinePost: 'worldwide',
        p1: 'We are the IT back office service provider for many Energy, Water and Gas distribution companies.',
        p2: 'Founded on the principle of combining Indian engineering speed with German industrial precision, we help utility leaders modernize SCADA infrastructure, optimize asset lifecycle, and achieve operational sustainability.',
        btn: 'Learn More About ESC',
        stat1Value: '12+',
        stat1Label: 'Years of Engineering Excellence',
        stat1Desc: 'Deep utility domain knowledge since 2012',
        stat2Value: '50+',
        stat2Label: 'Enterprise Utility Clients',
        stat2Desc: 'Trusted across Europe & India',
        stat3Value: '2',
        stat3Label: 'Core Specialized Sectors',
        stat3Desc: 'Energy Grid & Smart Water Operations',
        stat4Value: '3',
        stat4Label: 'Global Delivery Centers',
        stat4Desc: 'Germany & Indian Technology Hubs',
      },
      servicesPreview: {
        badge: 'Enterprise Portfolio',
        headingPre: 'Specialized',
        headingHighlight: 'Utility Solutions',
        headingPost: '& Back Office Services',
        subtitle:
          'Enterprise-grade back-office operations, RPA automation, and digital software development built for energy and water infrastructure.',
        card1Badge: 'BPM & BPO',
        card1Title: 'Business Process Management / Outsourcing (BPM / BPO)',
        card1Category: 'Utilities & Enterprise Operations',
        card1Desc:
          'We provide IT-enabled Business Process Management and Outsourcing services tailored to energy and water utilities. Using SAP IS-U, Wilken, SAP ERP, and other enterprise platforms, we help streamline operational processes, improve data quality, and support efficient business operations.',
        card1Tags: ['SAP IS-U & ERP', 'Process Management', 'Quality Assurance'],

        card2Badge: 'Process Automation',
        card2Title: 'Robotic Process Automation (RPA)',
        card2Category: 'Workflow Automation',
        card2Desc:
          'We automate repetitive business processes to reduce manual effort, improve operational efficiency, and deliver consistent results through streamlined workflows.',
        card2Tags: ['Task Automation', 'Workflow Automation', 'Process Accuracy'],

        card3Badge: 'Digital Transformation',
        card3Title: 'Digitalization',
        card3Category: 'Document & Data Conversion',
        card3Desc:
          'We help businesses convert archived documents containing critical information into digital formats using semi-automated solutions designed for efficient and cost-effective processing.',
        card3Tags: ['Document Digitization', 'Data Capture', 'Semi-Automated'],

        card4Badge: 'Market Intelligence',
        card4Title: 'Market Research',
        card4Category: 'Research & Analysis',
        card4Desc:
          'Together with our sister company, ISI Management Consulting GmbH, we conduct web-based market research, data collection, validation, and analysis tailored to customer requirements.',
        card4Tags: ['Market Data Collection', 'Data Validation', 'Price Comparison'],

        card5Badge: 'Custom Applications',
        card5Title: 'Application Development (Web & Mobile)',
        card5Category: 'iOS, Android & Web',
        card5Desc:
          'We design, develop, and deploy custom web and mobile applications for iOS and Android, helping businesses and partners simplify workflows and manage key activities efficiently.',
        card5Tags: ['Web Applications', 'iOS & Android Apps', 'Workflow Solutions'],
      },
      latestBlogs: {
        badge: 'INSIGHTS & INNOVATION',
        heading: 'Our Latest',
        headingHighlight: 'Blogs',
        readBlog: 'READ BLOG',
      },
      cta: {
        badge: "LET'S TALK",
        headingPre: 'Ready to modernize your',
        headingHighlight: 'energy infrastructure?',
        desc: 'Talk to our team — no sales pitch, just an honest conversation about your challenges and how we can help.',
        btnContact: 'Get in Touch',
        btnServices: 'Explore Services',
      },
    },

    // About Page
    about: {
      heroBadge: 'Who We Are',
      heroTitlePre: 'About',
      heroTitleHighlight: 'ESC',
      heroSubtitle:
        'We are the IT back office service provider for many Energy, Water and Gas distribution companies.',
      scrollPrompt: 'Scroll To Explore',
      missionBadge: 'Our Mission',
      missionTitlePre: 'Your Trusted Partner in',
      missionTitleHighlight: 'Business Process',
      missionTitlePost: 'and Technology Services',
      missionP1:
        'We provide seamless business process management and technology services that help Utility companies focus on growth and strategic goals. Our core expertise includes BPM/BPO, market research, digitalization, software development, web and mobile applications, and website management across platforms such as SAP and Wilken. Through our dedicated Indo-German teams and group companies, we deliver reliable, customer-focused solutions tailored to business needs. We build long-term partnerships through quality-driven delivery, flexible offshore, nearshore, and on-site support, and a commitment to customer satisfaction.',
      valuesBadge: 'Guiding Principles',
      valuesTitle: 'Our Core Values',
      valuesSubtitle:
        'The pillars of engineering discipline, transparency, and innovation that define everything we build.',
      techBadge: 'Technology We Are Into',
      techTitle: 'Our Tech Stack',
      leadershipBadge: 'The People Behind ESC',
      leadershipTitlePre: 'Meet Our',
      leadershipTitleHighlight: 'Leadership Team',
      roles: {
        nagaraj: 'Business Process Management Services',
        pooja: 'Technology and Innovation',
        parvathy: 'Digitalisation',
        reshma: 'Operations & HRM',
        soumya: 'Security & Compliance',
      },
    },

    // Services Page
    services: {
      heroBadge: 'What We Do',
      heroTitle: 'Services & Solutions',
      heroDesc:
        'End-to-end technology and IT back office services purpose-built for energy and water utilities.',
      service1Title: 'Business Process Management / Outsourcing (BPM / BPO)',
      service1Desc:
        'We provide IT-enabled Business Process Management and Outsourcing services tailored to energy and water utilities. Using SAP IS-U, Wilken, SAP ERP, and other enterprise platforms, we help streamline operational processes, improve data quality, and support efficient business operations.',
      service2Title: 'Robotic Process Automation (RPA)',
      service2Desc:
        'We automate repetitive business processes to reduce manual effort, improve operational efficiency, and deliver consistent results through streamlined workflows.',
      service3Title: 'Digitalization',
      service3Desc:
        'We help businesses convert archived documents containing critical information into digital formats using semi-automated solutions designed for efficient and cost-effective processing.',
      service4Title: 'Market Research',
      service4Desc:
        'Together with our sister company, ISI Management Consulting GmbH, we conduct web-based market research, data collection, validation, and analysis tailored to customer requirements.',
      service5Title: 'Application Development (Web & Mobile)',
      service5Desc:
        'We design, develop, and deploy custom web and mobile applications for iOS and Android, helping businesses and partners simplify workflows and manage key activities efficiently.',
      coreCapabilities: 'Core Capabilities',
    },

    // Careers Page
    careers: {
      heroBadge: 'Careers at ESC',
      heroTitlePre: 'Build the Future of',
      heroTitleHighlight: 'Utilities',
      heroDesc:
        'Join our Indo-German team and work on critical infrastructure software and automation that millions rely on daily.',
      perksBadge: 'Why Join ESC?',
      perksTitle: 'Benefits Designed for Growth and Balance',
      perk1Title: 'Global Exposure',
      perk1Desc:
        'Work with clients and colleagues across India and Europe, collaborating daily across time zones and engineering disciplines on infrastructure that matters.',
      perk2Title: 'Cutting-Edge Tech',
      perk2Desc:
        'Work on AI, automation, and modern software for critical infrastructure — solving problems most engineers never get the chance to touch.',
      perk3Title: 'Career Growth',
      perk3Desc: 'Clear growth paths with mentorship from senior engineers.',
      perk4Title: 'Flexible Work',
      perk4Desc: 'Enjoy flexible schedules that fit your day and support a healthy work-life balance.',
      perk5Title: 'Inclusive Culture',
      perk5Desc: 'A diverse Indo-German team that values every voice at the table.',
      perk6Title: 'Health & Wellness',
      perk6Desc: 'Comprehensive health coverage and wellness support for you and your family.',
      openingsTitle: 'Open Positions',
      noOpenings: 'No active job openings at the moment. Please check back soon!',
      applyButton: 'Apply for Position',
    },

    // Contact Page
    contact: {
      heroBadge: 'Global Presence • India · Germany',
      heroTitlePre: "Let's Start a",
      heroTitleHighlight: 'Conversation.',
      heroSubtitle:
        'Discover how ESC helps businesses improve operational efficiency through dependable process support and technology.',
      emailSupport: 'Email Support',
      phoneDirect: 'Phone Direct',
      responseCommitment: 'Response Commitment',
      responseCommitmentTime: 'Within 1 Business Day',
      facilitiesBadge: 'Global Facilities',
      facilitiesTitle: 'Explore Our Locations',
      facilitiesSubtitle:
        'One connected team, working seamlessly across borders to deliver German engineering standards with Indian technical agility.',
      getDirections: 'Get Directions in Google Maps',
      execBadge: 'Executive Leadership',
      execTitle: 'Management Contacts',
      execSubtitle:
        'Direct access to ESC managing directors for enterprise partnerships, executive consulting, and global utility transformation projects.',
      formBadge: 'Send a Direct Message',
      formTitle: 'How Can We Support You?',
      formSubtitle:
        'Fill in your details below and an ESC expert will reach out within 1 business day.',
      formName: 'Full Name *',
      formEmail: 'Work Email *',
      formCompany: 'Organization / Utility Company',
      formArea: 'Area of Interest',
      formAreaSelect: 'Select a capability area',
      formMessage: 'Your Message *',
      formMessagePlaceholder: 'Tell us about your project requirements or challenges...',
      formSubmit: 'Submit Inquiry',
      formSubmitting: 'Sending Message...',
      formPrivacy:
        'We treat your privacy with standard data protection protocol under Indian & EU GDPR regulations.',
      formSuccessTitle: 'Message Sent Successfully',
      formSuccessDesc:
        'Thank you for contacting ESC Utility Services Pvt.Ltd. Our technical consulting team will review your inquiry and get back to you shortly.',
      formSendAnother: 'Send Another Message',
      officesTitle: 'Our Locations',
      indiaOffice: 'India Hub (Trivandrum)',
      germanyOffice: 'Germany Office (Munich)',
    },

    // Certifications Page
    certifications: {
      badge: 'OFFICIAL CERTIFICATION & ISMS COMPLIANCE',
      title: 'ISO/IEC 27001:2022',
      titleHighlight: 'CERTIFIED.',
      subtitle:
        'Commitment to Information Security Excellence — protecting customer data, utility infrastructure, and enterprise intelligence.',
      viewCertBtn: 'View Official Certificate',
      scopeTitle: 'Scope of Certification',
      scopeDesc:
        'Provision of IT-enabled services, software engineering, and back-office management for utility companies.',
      officialDoc: 'OFFICIAL DOCUMENTATION',
      clickToEnlarge: 'Click certificate to view in high resolution',
      viewPdf: 'View / Download Official Certificate (PDF)',
      downloadPdf: 'Download PDF Certificate',
      close: 'Close',
    },

    // Data Protection & Imprint
    legal: {
      dataProtectionBadge: 'PRIVACY & SECURITY',
      dataProtectionTitle: 'DATA PROTECTION.',
      dataProtectionSubtitle:
        'How ESC Utility Services Pvt.Ltd protects your personal information and respects your data privacy rights under EU GDPR and Indian DPDP.',
      imprintBadge: 'LEGAL INFORMATION',
      imprintTitle: 'IMPRINT.',
      imprintSubtitle:
        'Company information, legal notices and website credits for ESC Utility Services Pvt.Ltd.',
      companyName: 'ESC Utility Services Pvt.Ltd',
      registrationTitle: 'Company Registration',
    },

    // Lab Page
    lab: {
      badge: 'ESC INNOVATION LAB',
      titlePre: 'Next-Generation',
      titleHighlight: 'Utility Intelligence.',
      subtitle:
        'Explore experimental AI agents, digital twin simulations, and predictive automation sandboxes developed by our engineering team.',
    },
  },

  DE: {
    // Navigation
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Leistungen',
      careers: 'Karriere',
      lab: 'Lab',
      insights: 'Einblicke',
      blog: 'Blog',
      news: 'Aktuelles',
      contact: 'Kontakt',
      search: 'Suche',
      searchPlaceholder: 'Leistungen, Seiten, Einblicke suchen...',
      searchMatching: 'Passende Ergebnisse',
      searchSuggested: 'Vorgeschlagene Seiten',
      noResults: 'Keine passenden Ergebnisse gefunden für',
      pressEsc: 'ESC zum Schließen drücken',
      phone: '+91 8086 22 8000',
      email: 'info@esc-ind.com',
      address: 'Yamuna Building, Technopark Phase 3 Campus, Trivandrum',
    },

    // Footer
    footer: {
      certifications: 'Zertifizierungen',
      dataProtection: 'Datenschutz',
      imprint: 'Impressum',
    },

    // Common Buttons & Labels
    common: {
      exploreServices: 'Leistungen entdecken',
      aboutEsc: 'Über ESC',
      getInTouch: 'Kontakt aufnehmen',
      learnMore: 'Mehr erfahren',
      viewAll: 'Alle anzeigen',
      readMore: 'Weiterlesen',
      readBlog: 'BEITRAG LESEN',
      applyNow: 'Jetzt bewerben',
      letsTalk: 'LASSEN SIE UNS SPRECHEN',
      backToTop: 'Nach oben',
      whoWeAre: 'Über Uns',
      whatWeDo: 'Was Wir Tun',
      ourMission: 'Unsere Mission',
    },

    // Home Page
    home: {
      hero: {
        powering: 'Gestaltung',
        theFutureOf: 'der Zukunft von',
        utilities: 'Versorgungsunternehmen.',
        description:
          'Wir sind der deutsch-indische IT-Back-Office- und Automatisierungsdienstleister für zahlreiche erfolgreiche Unternehmen der Energie-, Gas- und Wasserwirtschaft.',
        ctaServices: 'Leistungen entdecken',
        ctaAbout: 'Über ESC',
      },
      partnership: {
        isoBadge: 'OFFIZIELLE ISO/IEC 27001:2022',
        ismsTitle: 'Informationssicherheits-Managementsystem (ISMS)',
        ismsDesc:
          'Unser geprüftes Informationssicherheits-Managementsystem garantiert unternehmensweite Sicherheit, Datenschutz und betriebliche Resilienz für sämtliche Software- und IT-Abläufe.',
        viewCert: 'Zertifikat ansehen',
        india: 'Indien',
        germany: 'Deutschland',
        headingPre: 'Starke Versorger durch',
        headingHighlight: 'Deutsch-Indische Spitzenleistung',
        desc: 'Unser deutsch-indisches Modell verbindet kosteneffiziente Umsetzung mit europäischer Präzision – und bietet Energie- und Wasserversorgern das Beste aus beiden Welten.',
        badgeIsoTitle: 'ISO/IEC 27001:2022',
        badgeIsoDesc: 'Informationssicherheit zertifiziert',
        badgeGdprTitle: 'DSGVO & EU-konform',
        badgeGdprDesc: 'Strikter europäischer Datenschutz',
      },
      aboutTeaser: {
        badge: 'Über Uns',
        headlinePre: 'Geschätzt von führenden',
        headlineHighlight: 'Versorgungsunternehmen',
        headlinePost: 'weltweit',
        p1: 'Wir sind der IT-Back-Office-Dienstleister für viele Energie-, Wasser- und Gasverteilungsunternehmen.',
        p2: 'Gegründet auf dem Prinzip, indische Entwicklungsgeschwindigkeit mit deutscher Industriepräzision zu verbinden, unterstützen wir Versorger bei der Modernisierung von SCADA-Infrastrukturen, der Optimierung des Anlagenlebenszyklus und nachhaltigen Betriebsabläufen.',
        btn: 'Mehr über ESC erfahren',
        stat1Value: '12+',
        stat1Label: 'Jahre technische Exzellenz',
        stat1Desc: 'Fundiertes Fachwissen im Versorgungssektor seit 2012',
        stat2Value: '50+',
        stat2Label: 'Große Versorgungs-Kunden',
        stat2Desc: 'Erfolgreich im Einsatz in Europa & Indien',
        stat3Value: '2',
        stat3Label: 'Spezialisierte Kernsektoren',
        stat3Desc: 'Stromnetze & intelligente Wasserwirtschaft',
        stat4Value: '3',
        stat4Label: 'Globale Bereitstellungszentren',
        stat4Desc: 'Technologie-Standorte in Deutschland & Indien',
      },
      servicesPreview: {
        badge: 'Unternehmensportfolio',
        headingPre: 'Spezialisierte',
        headingHighlight: 'Lösungen für Versorger',
        headingPost: '& Back-Office-Dienste',
        subtitle:
          'Professionelle Back-Office-Abläufe, RPA-Automatisierung und moderne Anwendungsentwicklung für die Energie- und Wasserinfrastruktur.',
        card1Badge: 'BPM & BPO',
        card1Title: 'Geschäftsprozessmanagement / Outsourcing (BPM / BPO)',
        card1Category: 'Versorger & Betriebsführung',
        card1Desc:
          'Wir bieten IT-gestützte Geschäftsprozessmanagement- und Outsourcing-Dienstleistungen für Energie- und Wasserversorger. Mit SAP IS-U, Wilken, SAP ERP und weiteren Unternehmensplattformen optimieren wir Betriebsprozesse, steigern die Datenqualität und unterstützen effiziente Abläufe.',
        card1Tags: ['SAP IS-U & ERP', 'Prozessmanagement', 'Qualitätssicherung'],

        card2Badge: 'Prozessautomatisierung',
        card2Title: 'Robotergestützte Prozessautomatisierung (RPA)',
        card2Category: 'Workflow-Automatisierung',
        card2Desc:
          'Wir automatisieren wiederkehrende Geschäftsprozesse, um den manuellen Aufwand zu reduzieren, die betriebliche Effizienz zu steigern und verlässliche Ergebnisse durch optimierte Workflows zu liefern.',
        card2Tags: ['Aufgaben-Automatisierung', 'Workflow-Automatisierung', 'Prozessgenauigkeit'],

        card3Badge: 'Digitale Transformation',
        card3Title: 'Digitalisierung',
        card3Category: 'Dokumenten- & Datenkonvertierung',
        card3Desc:
          'Wir unterstützen Unternehmen dabei, archivierte Dokumente mit geschäftskritischen Daten durch teilautomatisierte, kostengünstige Verfahren in moderne digitale Formate zu überführen.',
        card3Tags: ['Dokumentendigitalisierung', 'Datenerfassung', 'Teilautomatisiert'],

        card4Badge: 'Marktforschung',
        card4Title: 'Marktforschung & Analyse',
        card4Category: 'Recherche & Auswertung',
        card4Desc:
          'Gemeinsam mit unserem Schwesterunternehmen ISI Management Consulting GmbH führen wir webbasierte Marktrecherchen, Datenerhebungen, Validierungen und zielgerichtete Analysen nach Kundenanforderung durch.',
        card4Tags: ['Marktdatenerhebung', 'Datenvalidierung', 'Preisvergleiche'],

        card5Badge: 'Individuelle Anwendungen',
        card5Title: 'Anwendungsentwicklung (Web & Mobile)',
        card5Category: 'iOS, Android & Web',
        card5Desc:
          'Wir konzipieren, entwickeln und implementieren maßgeschneiderte Web- und Mobilanwendungen für iOS und Android, die Arbeitsabläufe vereinfachen und zentrale Aktivitäten effizient steuern.',
        card5Tags: ['Web-Anwendungen', 'iOS & Android Apps', 'Workflow-Lösungen'],
      },
      latestBlogs: {
        badge: 'EINBLICKE & INNOVATION',
        heading: 'Unsere neuesten',
        headingHighlight: 'Blogbeiträge',
        readBlog: 'BEITRAG LESEN',
      },
      cta: {
        badge: 'LASSEN SIE UNS SPRECHEN',
        headingPre: 'Bereit, Ihre Infrastruktur zu',
        headingHighlight: 'modernisieren?',
        desc: 'Sprechen Sie mit unserem Team – kein Verkaufsgespräch, sondern ein offener Dialog über Ihre Herausforderungen und wie wir Sie unterstützen können.',
        btnContact: 'Kontakt aufnehmen',
        btnServices: 'Leistungen entdecken',
      },
    },

    // About Page
    about: {
      heroBadge: 'Über Uns',
      heroTitlePre: 'Über',
      heroTitleHighlight: 'ESC',
      heroSubtitle:
        'Wir sind der IT-Back-Office-Dienstleister für viele Energie-, Wasser- und Gasverteilungsunternehmen.',
      scrollPrompt: 'Nach unten scrollen',
      missionBadge: 'Unsere Mission',
      missionTitlePre: 'Ihr verlässlicher Partner für',
      missionTitleHighlight: 'Geschäftsprozesse',
      missionTitlePost: 'und Technologiedienstleistungen',
      missionP1:
        'Wir bieten nahtloses Geschäftsprozessmanagement und Technologiedienstleistungen, die Versorgungsunternehmen dabei unterstützen, sich auf Wachstum und strategische Ziele zu konzentrieren. Zu unseren Kernkompetenzen gehören BPM/BPO, Marktforschung, Digitalisierung, Softwareentwicklung, Web- und Mobilanwendungen sowie Website-Management auf Plattformen wie SAP und Wilken. Durch unsere engagierten deutsch-indischen Teams und Konzerngesellschaften liefern wir zuverlässige, kundenorientierte Lösungen, die genau auf die geschäftlichen Anforderungen zugeschnitten sind. Wir schaffen langfristige Partnerschaften durch qualitätsorientierte Umsetzung, flexible Offshore-, Nearshore- und On-Site-Unterstützung sowie ein klares Bekenntnis zur Kundenzufriedenheit.',
      valuesBadge: 'Leitprinzipien',
      valuesTitle: 'Unsere Grundwerte',
      valuesSubtitle:
        'Die Pfeiler aus technischer Disziplin, Transparenz und Innovationsfreude, die jedes unserer Projekte prägen.',
      techBadge: 'Technologien, mit denen wir arbeiten',
      techTitle: 'Unser Technologie-Stack',
      leadershipBadge: 'Die Menschen hinter ESC',
      leadershipTitlePre: 'Lernen Sie unser',
      leadershipTitleHighlight: 'Führungsteam kennen',
      roles: {
        nagaraj: 'Geschäftsprozessmanagement-Dienste',
        pooja: 'Technologie und Innovation',
        parvathy: 'Digitalisierung',
        reshma: 'Betrieb & Personalwesen',
        soumya: 'Sicherheit & Compliance',
      },
    },

    // Services Page
    services: {
      heroBadge: 'Was Wir Tun',
      heroTitle: 'Leistungen & Lösungen',
      heroDesc:
        'Ganzheitliche Technologie- und IT-Back-Office-Dienste, speziell entwickelt für Energie- und Wasserversorger.',
      service1Title: 'Geschäftsprozessmanagement / Outsourcing (BPM / BPO)',
      service1Desc:
        'Wir bieten IT-gestützte Geschäftsprozessmanagement- und Outsourcing-Dienstleistungen für Energie- und Wasserversorger. Mit SAP IS-U, Wilken, SAP ERP und weiteren Plattformen optimieren wir Betriebsprozesse und sichern hohe Datenqualität.',
      service2Title: 'Robotergestützte Prozessautomatisierung (RPA)',
      service2Desc:
        'Wir automatisieren repetitive Geschäftsprozesse zur Senkung manueller Aufwände, Steigerung der Effizienz und verlässlicher Umsetzung.',
      service3Title: 'Digitalisierung',
      service3Desc:
        'Wir unterstützen Unternehmen dabei, archivierte Dokumente mit kritischen Informationen in digitale Formate zu überführen.',
      service4Title: 'Marktforschung & Analyse',
      service4Desc:
        'Gemeinsam mit unserem Schwesterunternehmen ISI Management Consulting GmbH führen wir webbasierte Marktrecherchen, Datenanalysen und Validierungen durch.',
      service5Title: 'Anwendungsentwicklung (Web & Mobile)',
      service5Desc:
        'Wir konzipieren und entwickeln maßgeschneiderte Web- und Mobilanwendungen für iOS und Android zur Vereinfachung Ihrer Arbeitsabläufe.',
      coreCapabilities: 'Kernkompetenzen',
    },

    // Careers Page
    careers: {
      heroBadge: 'Karriere bei ESC',
      heroTitlePre: 'Gestalten Sie die Zukunft der',
      heroTitleHighlight: 'Versorgungswirtschaft',
      heroDesc:
        'Werden Sie Teil unseres deutsch-indischen Teams und arbeiten Sie an Software und Automatisierung für kritische Infrastrukturen, auf die sich Millionen verlassen.',
      perksBadge: 'Warum zu ESC?',
      perksTitle: 'Vorteile für persönliche Entwicklung und Work-Life-Balance',
      perk1Title: 'Globale Erfahrung',
      perk1Desc:
        'Arbeiten Sie täglich mit Kollegen und Kunden in Indien und Europa an bedeutsamen Infrastrukturprojekten.',
      perk2Title: 'Modernste Technologien',
      perk2Desc:
        'Entwickeln Sie KI, Automatisierung und moderne Software für kritische Infrastrukturen.',
      perk3Title: 'Berufliche Entwicklung',
      perk3Desc: 'Klare Karrierepfade mit Mentoring durch erfahrene Senior Engineers.',
      perk4Title: 'Flexible Arbeitszeiten',
      perk4Desc: 'Genießen Sie flexible Arbeitszeiten, die zu Ihrem Tag passen und eine gesunde Work-Life-Balance fördern.',
      perk5Title: 'Inklusive Kultur',
      perk5Desc: 'Ein vielfältiges deutsch-indisches Team, in dem jede Meinung zählt.',
      perk6Title: 'Gesundheit & Vorsorge',
      perk6Desc: 'Umfassende Gesundheitsleistungen und Unterstützung für Sie und Ihre Familie.',
      openingsTitle: 'Offene Stellen',
      noOpenings: 'Aktuell sind keine offenen Stellen ausgeschrieben. Schauen Sie bald wieder vorbei!',
      applyButton: 'Jetzt bewerben',
    },

    // Contact Page
    contact: {
      heroBadge: 'Globale Präsenz • Indien · Deutschland',
      heroTitlePre: 'Starten wir ein',
      heroTitleHighlight: 'Gespräch.',
      heroSubtitle:
        'Erfahren Sie, wie ESC Unternehmen dabei unterstützt, ihre betriebliche Effizienz durch zuverlässige Prozessunterstützung und Technologie zu steigern.',
      emailSupport: 'E-Mail Support',
      phoneDirect: 'Telefon Direkt',
      responseCommitment: 'Rückmeldeversprechen',
      responseCommitmentTime: 'Innerhalb von 1 Werktag',
      facilitiesBadge: 'Globale Standorte',
      facilitiesTitle: 'Entdecken Sie unsere Standorte',
      facilitiesSubtitle:
        'Ein vernetztes Team, das nahtlos über Ländergrenzen hinweg deutsche Ingenieursstandards mit indischer Agilität verbindet.',
      getDirections: 'Wegbeschreibung in Google Maps',
      execBadge: 'Geschäftsleitung',
      execTitle: 'Ansprechpartner Geschäftsführung',
      execSubtitle:
        'Direkter Kontakt zu den Geschäftsführern von ESC für strategische Partnerschaften und Transformationsprojekte.',
      formBadge: 'Direkte Nachricht Senden',
      formTitle: 'Wie können wir Sie unterstützen?',
      formSubtitle:
        'Füllen Sie das Formular aus und ein ESC-Experte wird sich innerhalb von 1 Werktag bei Ihnen melden.',
      formName: 'Vollständiger Name *',
      formEmail: 'Geschäftliche E-Mail *',
      formCompany: 'Unternehmen / Versorgungsbetrieb',
      formArea: 'Interessensbereich',
      formAreaSelect: 'Bereich auswählen',
      formMessage: 'Ihre Nachricht *',
      formMessagePlaceholder: 'Beschreiben Sie Ihre Anforderungen oder Herausforderungen...',
      formSubmit: 'Anfrage absenden',
      formSubmitting: 'Wird gesendet...',
      formPrivacy:
        'Wir behandeln Ihre Daten vertraulich gemäß den indischen Datenschutzrichtlinien und der EU-DSGVO.',
      formSuccessTitle: 'Nachricht erfolgreich versendet',
      formSuccessDesc:
        'Vielen Dank für Ihre Kontaktaufnahme. Unser technisches Beratungsteam wird sich in Kürze mit Ihnen in Verbindung setzen.',
      formSendAnother: 'Weitere Nachricht senden',
      officesTitle: 'Unsere Standorte',
      indiaOffice: 'Indien Standort (Trivandrum)',
      germanyOffice: 'Deutschland Standort (München)',
    },

    // Certifications Page
    certifications: {
      badge: 'OFFIZIELLE ZERTIFIZIERUNG & ISMS-COMPLIANCE',
      title: 'ISO/IEC 27001:2022',
      titleHighlight: 'ZERTIFIZIERT.',
      subtitle:
        'Verpflichtung zu höchster Informationssicherheit – Schutz von Kundendaten, Versorgungsinfrastrukturen und Unternehmenswissen.',
      viewCertBtn: 'Offizielles Zertifikat ansehen',
      scopeTitle: 'Geltungsbereich der Zertifizierung',
      scopeDesc:
        'Bereitstellung von IT-Dienstleistungen, Software-Engineering und Back-Office-Management für Versorgungsunternehmen.',
      officialDoc: 'OFFIZIELLE DOKUMENTATION',
      clickToEnlarge: 'Klicken Sie auf das Zertifikat für die Vollansicht',
      viewPdf: 'Offizielles Zertifikat ansehen / herunterladen (PDF)',
      downloadPdf: 'PDF-Zertifikat herunterladen',
      close: 'Schließen',
    },

    // Data Protection & Imprint
    legal: {
      dataProtectionBadge: 'DATENSCHUTZ & SICHERHEIT',
      dataProtectionTitle: 'DATENSCHUTZ.',
      dataProtectionSubtitle:
        'Wie die ESC Utility Services Pvt.Ltd Ihre personenbezogenen Daten schützt und Ihre Datenschutzrechte gemäß EU-DSGVO und indischem DPDP wahrt.',
      imprintBadge: 'RECHTLICHE HINWEISE',
      imprintTitle: 'IMPRESSUM.',
      imprintSubtitle:
        'Unternehmensangaben, rechtliche Hinweise und Impressum der ESC Utility Services Pvt.Ltd.',
      companyName: 'ESC Utility Services Pvt.Ltd',
      registrationTitle: 'Unternehmensangaben',
    },

    // Lab Page
    lab: {
      badge: 'ESC INNOVATION LAB',
      titlePre: 'Zukunftsweisende',
      titleHighlight: 'Versorger-Intelligenz.',
      subtitle:
        'Entdecken Sie experimentelle KI-Agenten, digitale Zwillingssimulationen und prädiktive Automatisierung unseres Entwicklerteams.',
    },
  },
} as const

export type TranslationData = typeof translations.EN
