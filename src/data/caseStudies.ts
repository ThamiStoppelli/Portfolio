type Block = {
  text?: string;
  image?: string;
  caption?: string;
};

type Section = {
  title: string;
  text?: string;
  image?: string;
  video?: string;
  blocks?: Block[];
};

type CaseStudy = {
  hero: {
    title: string;
    role: string;
    year: string;
    duration: string;
    description: string;
    heroImage: string;
  };
  overview: {
    challenge: string;
    goal: string;
  };
  metrics: string[];
  sections: Section[];
  behanceUrl?: string;
};

export const caseStudies: Record<string, CaseStudy> = {
    buscasaudavel: {
        hero: {
            title: "Busca Saudável (Healthy Search)",
            role: "UX/UI Designer • Frontend Developer",
            year: "2023",
            duration: "10 months",
            description: "End to End Product Design Case Study",
            heroImage: "/images/busca-saudavel/hero-mockup.png"
        },

        overview: {
            challenge:
                "People with food allergies and dietary restrictions struggle to quickly identify safe products and access trustworthy nutritional information.",
            goal:
                "Design a searchable and personalized platform that simplifies safe food discovery through filters, nutrition insights and educational content."
        },

        metrics: [
            "12 user interviews",
            "8 pain points identified",
            "6 competitors analyzed",
            "Responsive web product built"
        ],

        sections: [
            {
                title: "Problem",
                text:
                    "Users with dietary restrictions struggle to quickly identify safe food products due to fragmented information, unclear labeling and lack of effective filtering tools. This creates a high cognitive load and low confidence during decision making. The challenge was to simplify product discovery by improving clarity, personalization and speed, enabling safer and more efficient choices."
            },
            {
                title: "Research & Discovery",
                blocks: [
                    {
                        text:"To align assumptions and identify key uncertainties, I started with a CSD matrix (Certainties, Suppositions and Doubts). This helped structure initial hypotheses around user behavior, food safety concerns and information gaps, guiding what needed validation during research.",
                        image:"/images/busca-saudavel/CSD-matrix.png"
                    },
                    {
                        text:"I then conducted competitor benchmarking to analyze how existing platforms handle food search, filtering and nutritional transparency. This revealed gaps in personalization, clarity of information and efficiency, reinforcing the need for a more intuitive and user-centered experience.",
                        image:"/images/busca-saudavel/benchmarking.png"
                    }
                ]
            },
            {
                title: "Target Audience",
                image: "/images/busca-saudavel/users.png",
                text:
                    "Three primary audiences were identified: consumers with allergies/following specific diets, nutrition professionals and conscious companies looking to promote their products."
            },
            {
                title: "Key Insights",
                image: "/images/busca-saudavel/insights.png",
                text:
                    "Research showed that speed, personalization, immediate feedback and clarity of information were critical to building user trust."
            },
            {
                title: "User Journey",
                image: "/images/busca-saudavel/journey.png",
                text:
                    "The core journey was mapped across search, filtering, product evaluation and favorites, simplifying the decision process."
            },
            {
                title: "Information Architecture",
                image: "/images/busca-saudavel/architecture.png",
                text:
                    "A scalable structure was created to organize products, filters, nutritional data, educational content and personalized preferences."
            },
            {
                title: "Wireframes",
                image: "/images/busca-saudavel/wireframes.png",
                text:
                    "Low fidelity exploration focused on usability, layout hierarchy and reducing friction before moving into high fidelity design."
            },
            {
                title: "Design System",
                image: "/images/busca-saudavel/design-system.png",
                text:
                    "A lightweight design system was created with reusable components, visual consistency and accessibility in mind."
            },
            {
                title: "Branding & Visual Identity",
                image: "/images/busca-saudavel/logo.png",
                text: "The visual identity was designed to communicate clarity, trust and health. The logo combines a magnifying glass with a leaf, reinforcing the idea of searching for healthy and safe food choices. Soft green tones were selected to convey freshness and well-being, while maintaining a clean and accessible visual language across the product. The symbol bridges search and nutrition, aligning the brand with the product’s core functionality."
            },
            {
                title: "Final Solution",
                blocks: [
                    {
                        text:"The product evolved from early wireframes to high fidelity interfaces and final implementation. The process focused on translating user needs into scalable UI components and a functional product experience.",
                        image:"/images/busca-saudavel/process-timeline.png"
                    },
                    {
                        text: "The final responsive web product combines personalized food discovery, custom filters, nutritional analysis, educational tips and community-driven feedback.",
                        image: "/images/busca-saudavel/final-solution.png",
                    }
                ]
            },
            {
                title: "Impact",
                image: "/images/busca-saudavel/impact.png",
                text:
                    "The project demonstrated how user-centered design can transform a complex and anxiety-driven task into a simpler, more trustworthy experience."
            },

            // {
            //     title:"Challenges & Tradeoffs",
            //     text:"Balancing data density with simplicity..."
            // },

            // {
            //     title:"What I'd Improve Next",
            //     text:"Expand personalization and accessibility..."
            // },

            // {
            //     title:"Key Learnings",
            //     text:"Trust is shaped as much by IA as UI."
            // }
        ],
        behanceUrl: "https://www.behance.net/gallery/248123099/Busca-Saudavel-The-Nutrition-Label-UIUX-Case-Study"
    },
    
    timecurrencyapp: {
        hero: {
            title: "Time & Currency App",
            role: "React Native Developer • Product Designer",
            year: "2025",
            duration: "4 months",
            description:
            "Mobile product that unifies time zones, weather and currency comparison into a single intuitive experience",
            heroImage: "/images/time-currency/hero-mockup.png"
        },

        overview: {
            challenge:
            "Frequent travelers and remote workers rely on multiple fragmented tools to manage time zones, weather conditions and currency conversions, leading to constant context switching and inefficient decision-making.",
            goal:
            "Design and build a lightweight, mobile-first application that consolidates essential global information into a fast, intuitive and unified experience."
        },

        metrics: [
            "3 integrated utilities",
            "Real-time data APIs",
            "Cross-screen synchronization",
            "Built with React Native + TypeScript"
        ],

        sections: [
            {
            title: "See it in action",
            video: "/videos/time-currency-app.mp4"
            },
            {
            title: "Problem",
            text:
                "Managing time zones, weather conditions and currency conversions typically requires switching between multiple apps. This fragmented workflow forces users to repeatedly search, compare and mentally reconcile information, creating unnecessary friction in everyday decisions."
            },
            {
            title: "Benchmark & Market Analysis",
            image: "/images/time-currency/benchmarking.png",
            text:
                "A competitive analysis across tools such as World Clock, Time Buddy, Apple Weather, Google Weather, AccuWeather, XE Currency and Wise revealed a consistent pattern: each product performs well in isolation but lacks integration. Time apps lack contextual data, weather apps are not optimized for multi-location comparison and currency apps prioritize accuracy over usability. This fragmentation highlighted the opportunity for a unified, comparison-focused experience."
            },
            {
            title: "Target Use Cases",
            image: "/images/time-currency/use-cases.png",
            text:
                "The product is designed for two primary contexts: frequent travelers and global remote workers. Travelers need fast access to time, weather and currency information when moving across locations, while remote workers require accurate time synchronization and contextual data to manage distributed teams and financial operations. These scenarios guided key product decisions around comparison, speed and clarity."
            },
            {
            title: "Product Strategy",
            text:
                "Instead of merging all functionalities into a single overloaded interface, the product was divided into three focused modules: Time, Weather and Currency. Time and Weather share a location-based mental model and can be synchronized, while Currency remains independent due to its different interaction logic. This approach reduces complexity and preserves predictability."
            },
            {
            title: "Product Evolution",
            image: "/images/time-currency/logo-wireframes.png",
            text:
                "The product evolved from an initial visual identity into progressively more structured interface explorations. Early wireframes focused on comparison clarity, fast scanning and lightweight interaction patterns optimized for mobile usage."
            },
            {
            title: "Design System",
            image: "/images/time-currency/design-system.png",
            text:
                "A lightweight design system was established to ensure consistency and scalability across the product. System fonts were used to maintain native behavior, while a minimal color palette and unified iconography support fast visual scanning and clear interaction patterns."
            },
            {
            title: "Current Solution",
            image: "/images/time-currency/final-ui.png",
            text:
                "The application delivers a unified experience for managing global information. Users can compare time zones across multiple cities, monitor weather conditions with expandable contextual details and convert currencies using real-time exchange rates. The interface is designed around fast scanning, low friction interactions and mobile-first usability."
            },
            {
            title: "Core Features",
            image: "/images/time-currency/core-features-overview.png",
            text:
                "The product is structured around three core utilities: time comparison, weather monitoring and currency conversion. Users can dynamically add and remove cities or currencies, simulate different times, view contextual weather insights and perform real-time conversions, all within a consistent interaction model."
            },

            {
            title: "Interaction Design",
            image: "/images/time-currency/interaction-patterns.png",
            text:
                "The interface relies on simple and predictable interaction patterns such as searchable modals, expandable data cards, toggle-based time formats, synchronization actions and inline editable inputs. These decisions reduce cognitive load and make complex comparisons intuitive on mobile devices."
            },
            {
            title: "From Concept to Implementation",
            image: "/images/time-currency/concept-to-app.png",
            text:
                "The product evolved from low-fidelity wireframes into a fully functional mobile application. Design decisions were translated into real features through API integration, state management and interaction logic, bridging the gap between concept and execution."
            },
            {
            title: "Engineering & Architecture",
            image: "/images/time-currency/architecture.png",
            text:
                "The application was built using React Native, Expo and TypeScript following a modular architecture. Components, services, hooks and state layers are separated to improve scalability, maintainability and predictability across the product."            },
            {
            title: "Data Flow & API Orchestration",
            image: "/images/time-currency/api-integration.png",
            text:
                "The application coordinates multiple external APIs through a centralized state layer. Geocoding, weather, timezone and currency services are orchestrated to minimize redundant requests, synchronize shared location data and maintain predictable rendering behavior across modules."            },
            {
            title: "State & Synchronization",
            image: "/images/time-currency/sync.png",
            text:
                "React Context combined with persistent local storage powers cross-screen synchronization between Time and Weather modules. Shared location state reduces redundant API requests while preserving predictable user behavior and fast rendering performance."
            },
            {
            title: "Challenges & Tradeoffs",
            text:
                "Handling location data consistently across different APIs was a key challenge. The current implementation uses a simplified location model based on city, country and country code, requiring multiple resolution steps. A more robust approach using full location objects with coordinates and timezone is planned for future iterations."
            },
            {
            title: "Impact & Outcomes",
            image: "/images/time-currency/project-outcomes.png",
            text:
                "The project resulted in a streamlined experience that consolidates multiple workflows into a single interface. It reduces cognitive load, improves decision speed and establishes a scalable foundation for future iterations."
            },
            {
            title: "Next Improvements",
            text:
                "Planned improvements include drag-and-drop reordering, enhanced currency selection flows, stronger fallback states for API inconsistencies, expanded datasets, refined dark mode support and deterministic location modeling for more robust synchronization."
            },
            {
            title: "Impact & Learnings",
            text:
                "This project strengthened my ability to design and build real-world mobile products while balancing user experience decisions with technical constraints. It reinforced the importance of mental models when combining multiple utilities and demonstrated how simplifying interactions can significantly improve everyday workflows."
            }
        ],
        behanceUrl: "https://www.behance.net/gallery/249086161/Time-Currency-Unified-Travel-Utility-Case-Study"
    },

    blizzard: {
        hero: {
            title: "Blizzard",
            role: "Lead Frontend Developer • UX Collaboration",
            year: "2022–2023",
            duration: "1 year, 5 months",
            description:
            "IoT energy management platform for university infrastructure, focused on operational visibility, remote device control and scalable frontend architecture.",
            heroImage: "/images/blizzard/hero-mockup.png"
        },

        overview: {
            challenge:
            "UNIFOR’s maintenance division had no centralized way to monitor distributed electrical devices, identify abnormal consumption, control equipment remotely or automate daily energy routines across campus infrastructure.",
            goal:
            "Build a web platform that transformed distributed IoT devices into a centralized, observable and controllable operational system for energy monitoring and infrastructure management."
        },

        metrics: [
            "20 AC units deployed",
            "2-month validation",
            "IoT + MQTT architecture",
            "Scientific paper presented"
        ],

        sections: [
            {
            title: "My Role",
            text:
                "I worked as the lead frontend developer and sole frontend engineer on the project. I implemented the web platform, built reusable dashboard interfaces, integrated backend APIs and translated complex operational requirements into usable frontend flows. Beyond implementation, I actively participated in requirements gathering, stakeholder presentations, UX discussions and product decisions alongside the PM, backend developer and design team."
            },
            {
            title: "Problem Context",
            text:
                "Universities are energy-intensive environments with hundreds of distributed devices such as air conditioners, lighting and water fountains. At UNIFOR, each device existed largely in isolation, making energy monitoring reactive and operational decisions harder to coordinate. The maintenance division needed a centralized way to understand what was on, what was off, what was consuming abnormally and what could be safely automated or shut down."
            },
            {
            title: "Operational Complexity",
            image: "/images/blizzard/operational-complexity.png",
            text:
                "The challenge was not simply building a dashboard. Blizzard had to support live device data, multiple user roles, physical-world actions, academic scheduling rules and operational safety constraints. Each interaction needed to balance speed, clarity and responsibility because turning a device on or off could affect real people inside university buildings."
            },
            {
            title: "Discovery & Key Insights",
            image: "/images/blizzard/discovery-insights.png",
            text:
                "Requirements gathering with the DMO operations team revealed three key insights: operators searched through both spatial and categorical mental models; routine manual control should be the exception rather than the goal; and scheduling needed to follow the university’s own academic time-slot vocabulary instead of generic clock time."
            },
            {
            title: "Information Architecture",
            image: "/images/blizzard/information-architecture.png",
            text:
                "The product was structured around two parallel taxonomies. Users could navigate devices spatially through buildings, rooms and equipment, or categorically through device types such as air conditioners. This dual structure respected how maintenance staff actually think: sometimes the question is where the issue is, and sometimes it is what type of device is causing it."
            },
            {
            title: "Role-Based Information Design",
            image: "/images/blizzard/role-based-access.png",
            text:
                "Blizzard was designed around three operational roles: Operador, Administrador and Gestor. The interface grows with each role’s responsibilities, but access was not treated only as security. It was also an information design decision. Frontline operators do not see aggregate consumption dashboards or financial analytics because that information is not part of their daily work."
            },
            {
            title: "Scheduling System",
            image: "/images/blizzard/scheduling-system.png",
            text:
                "The scheduling system was built around UNIFOR’s academic time-slot language, using blocks such as MAB, MCD, MEF, TAB, TCD, TEF, NAB and NCD. Instead of asking users to translate institutional routines into generic clock times, the interface speaks the same language already used by staff."
            },
            {
            title: "Bulk Operations",
            image: "/images/blizzard/bulk-operations.png",
            text:
                "Because operators needed to manage many devices at once, bulk actions were designed as a primary affordance. Users could select multiple devices, see the number of selected items and perform group actions through confirmation flows. Managing an entire set of devices should take a few intentional steps, not dozens of repetitive clicks."
            },
            {
            title: "Operational Safety Patterns",
            image: "/images/blizzard/confirmation-modals.png",
            text:
                "Every physical-world action required confirmation. In most digital products, confirmation modals can feel like friction. In Blizzard, they were a safety mechanism. Turning off equipment in an active classroom affects physical spaces, so the interface needed to prevent accidental actions while keeping workflows efficient."
            },
            {
            title: "Dashboard & Data Visualization",
            image: "/images/blizzard/data-visualization.png",
            text:
                "The dashboard translates operational and energy data into visual surfaces that support fast decision-making. Charts, status indicators, consumption cards and alert panels were structured to make live readings, daily consumption, costs and comparative trends easier to scan without overwhelming operators or administrators."
            },
            {
            title: "Frontend & System Architecture",
            image: "/images/blizzard/system-architecture.png",
            text:
                "The system connects Sonoff IoT devices to an MQTT broker, where backend services process telemetry and continuously update MongoDB. The frontend consumes this state through REST APIs using axios. The real-time guarantee lives in the backend and persistence layer, while the frontend focuses on making that constantly changing system understandable, actionable and visually stable."
            },
            {
            title: "The Sonoff Pivot",
            image: "/images/blizzard/sonoff-pivot.png",
            text:
                "A major technical and business decision emerged during development: replacing custom-built Blizzard hardware with commercial Sonoff IoT devices. The custom device cost around R$180 per unit, while Sonoff cost around R$88.75, reducing the estimated cost for 128 units from R$23,040 to R$11,360. Because the architecture was device-agnostic above the hardware layer, the frontend and product structure absorbed the pivot without requiring a redesign."
            },
            {
            title: "Design Collaboration",
            image: "/images/blizzard/design-collaboration.png",
            text:
                "Although my official role was frontend developer, I participated deeply in UX and product conversations. I contributed to discussions around information density, card hierarchy, empty states, scheduling flows, confirmation modals and location navigation. I was not the visual designer, but I helped ensure the implemented interface worked under real data, real workflows and real operational constraints."
            },
            {
            title: "Technical Decisions",
            text:
                "Several engineering decisions were made deliberately based on project context. The frontend used React, JavaScript, CSS, styled-components, axios, react-router-dom, recharts and Material UI. State management remained simple, relying on React hooks and a focused AuthContext instead of adding Redux prematurely. The architecture prioritized pragmatic delivery, maintainability and clear separation between UI, API communication and IoT data flow."
            },
            {
            title: "Impact & Outcomes",
            image: "/images/blizzard/project-outcomes.png",
            text:
                "Blizzard was deployed to approximately 20 air-conditioning units in UNIFOR’s Bloco D and validated by the DMO operations team over a two-month period. The platform was operational at handoff and designed to scale to additional infrastructure categories such as lighting and water fountains. The project was also documented in a scientific article presented at UNIFOR’s XXVIII Encontro de Iniciação à Pesquisa."
            },
            {
            title: "Key Learnings",
            text:
                "Blizzard taught me that frontend development in complex systems is not only about implementing screens. It is about understanding workflows, respecting domain language, designing around operational responsibility and making technical complexity usable. The project also reinforced that real-time behavior is a system property, not just a frontend feature, and that mature engineering sometimes means choosing the simpler, more maintainable solution over the most custom one."
            }
        ]
    },

    cuidarpsi1: {
        hero: {
            title: "CuidarPsi",
            role: "Frontend Developer • Product Designer",
            year: "2022",
            duration: "2 years",
            description: "Clinical management system",
            heroImage: "research-placeholder"
        },

        overview: {
            challenge:
                "Psychologists and interns lacked a centralized system to manage clinical sessions, supervision workflows and sensitive patient data.",

            goal:
                "Design a secure and intuitive healthcare platform that improves clinical workflows, supervision and access to information."        
        },

        metrics: [
            "User centered flows",
            "Service UX focus",
            "Trust driven interface",
            "Prototype developed"
        ],

        sections: [
            {
                title: "Problem",
                text:
                    "Users often struggle with uncertainty, trust barriers and complex paths when seeking mental health support."
            },

            {
                title: "Discovery",
                image: "research-placeholder",
                text:
                    "Research focused on understanding emotional friction, service expectations and trust signals."
            },

            {
                title: "Audience & Needs",
                image: "persona-placeholder",
                text:
                    "Different user profiles and emotional needs informed product decisions."
            },

            {
                title: "Service Flow",
                image: "flow-placeholder",
                text:
                    "User journeys were designed to reduce anxiety and simplify access to support."
            },

            {
                title: "Wireframes",
                image: "wireframe-placeholder"
            },

            {
                title: "Visual Identity",
                image: "brand-placeholder"
            },

            {
                title: "Final Solution",
                image: "final-ui-placeholder"
            },

            {
                title: "Impact",
                text:
                    "The project explored how UX can create safer and more human centered healthcare experiences."
            }
        ]
    },
    //spreader life
    //gol
    credito: {
        hero: {
            title: "Credit Operations Platform",
            role: "Product Designer • Frontend Developer",
            year: "2025-2026",
            duration: "on going",
            description: "Enterprise SaaS Case Study",
            heroImage: "research-placeholder"
        },

        overview: {
            challenge:
                "Complex credit and financial workflows often create friction through dense interfaces, fragmented data and difficult operational processes.",
                // "Enterprise credit operations involve dense data, complex decision flows and high-stakes financial processes that often create friction for users.",
            goal:
                "Improve enterprise usability through clearer workflows, scalable information architecture and better interaction patterns."
        },

        metrics: [
            "Complex B2B workflows",
            "Data heavy interfaces",
            "Advanced filtering UX",
            "Enterprise redesign"
        ],

        sections: [
            {
                title: "Problem",
                text:
                    "Users operated in highly complex financial workflows with overloaded screens, difficult filters and low efficiency in repetitive tasks."
            },

            {
                title: "Research & Discovery",
                image: "research-placeholder",
                text:
                    "Discovery focused on workflow pain points, operational bottlenecks and opportunities to simplify critical interactions."
            },

            {
                title: "Complex Filters & Saved Views",
                image: "filters-placeholder",
                text:
                    "A major focus was redesigning advanced filters, saved views and conditional interactions for better usability."
            },

            {
                title: "Information Architecture",
                image: "ia-placeholder",
                text:
                    "Navigation and data structures were reorganized to reduce cognitive load across dense enterprise processes."
            },

            {
                title: "Reporting & Data Visualization",
                image: "report-placeholder",
                text:
                    "Complex reporting interfaces were redesigned to improve readability and decision support."
            },

            {
                title: "Wireframes",
                image: "wireframe-placeholder"
            },

            {
                title: "System Design",
                image: "designsystem-placeholder"
            },

            {
                title: "Final Solution",
                image: "enterprise-ui-placeholder"
            },

            {
                title: "Impact",
                text:
                    "The work improved clarity, efficiency and scalability across mission critical financial workflows."
            }

        ]
    },
    legisnote: {
        hero: {
            title: "Legisnote",
            role: "Product Designer • Enterprise UX",
            year: "2026",
            duration: "2 months (redesign and creation of new filtering system)", 
            // new feature
            description: "B2B SaaS Product Case Study",
            heroImage: "research-placeholder"
        },

        overview: {
            challenge:
                "Legislative monitoring requires navigating high volumes of information, complex filtering and fast decision making under constant updates.",
            goal:
                "Improve monitoring workflows through smarter filtering, clearer information structures and scalable interaction design."
        },

        metrics: [
            "Information heavy product",
            "Advanced filter redesign",
            "Complex monitoring flows",
            "B2B SaaS UX"
        ],

        sections: [
            {
                title: "Problem",
                text:
                    "Users faced friction managing large information sets, confusing filters and inconsistent workflows across the platform."
            },

            {
                title: "Research & Discovery",
                image: "research-placeholder",
                text:
                    "Discovery focused on understanding monitoring behaviors, workflow pain points and filtering complexity."
            },

            {
                title: "Filtering Experience",
                image: "filters-placeholder",
                text:
                    "A core challenge was redesigning filtering interactions to make them scalable, consistent and easier to use."
            },

            {
                title: "Information Architecture",
                image: "ia-placeholder",
                text:
                    "Content structures and navigation models were refined to support faster access to relevant legislative information."
            },

            {
                title: "Interaction Patterns",
                image: "interaction-placeholder",
                text:
                    "Reusable interaction patterns were explored for dense workflows and data heavy screens."
            },

            {
                title: "Wireframes",
                image: "wireframe-placeholder"
            },

            {
                title: "Design System",
                image: "designsystem-placeholder"
            },

            {
                title: "Final Solution",
                image: "saas-ui-placeholder"
            },

            {
                title: "Impact",
                text:
                    "The redesign improved findability, usability and confidence in a complex monitoring environment."
            }

        ]
    }
}