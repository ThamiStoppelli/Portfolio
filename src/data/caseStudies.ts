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
        ]
    },

    blizzard1: {
        hero: {
            title: "Blizzard",
            role: "Lead Frontend Developer • UX Collaboration",
            year: "2022",
            duration: "1 year",
            description:
            "Real-time energy monitoring and control platform focused on operational visibility, device management and scalable IoT integration.",
            heroImage: "/images/blizzard/hero-mockup.png"
        },

        overview: {
            challenge:
            "Universities and large facilities often struggle with fragmented monitoring systems, limited operational visibility and inefficient energy management workflows. Operators lack centralized real-time insights and intuitive interfaces for monitoring and controlling infrastructure.",
            goal:
            "Develop a scalable real-time monitoring platform capable of consolidating energy consumption, device management and operational analytics into a centralized and intuitive dashboard experience."
        },

        metrics: [
            "Real-time monitoring",
            "IoT integration",
            "Remote device control",
            "Awarded scientific paper"
        ],

        sections: [
            {
            title: "My Role",
            text:
                "I worked as the lead frontend developer for the project, responsible for implementing the dashboard architecture, building the user interface and translating product requirements into scalable frontend solutions. I also actively participated in UX discussions, stakeholder presentations, usability decisions and technical communication throughout the project lifecycle."
            },

            {
            title: "Problem Space",
            text:
                "Energy monitoring systems are often fragmented, overly technical and difficult to operate efficiently. Operators usually need to navigate disconnected tools, interpret complex datasets and manually monitor infrastructure health without centralized operational visibility. This creates inefficiencies in maintenance, delayed responses and poor energy optimization."
            },

            {
            title: "Research & Discovery",
            image: "/images/blizzard/research-discovery.png",
            text:
                "The discovery phase focused on understanding operational workflows, monitoring pain points and infrastructure management needs within a university environment. Key findings revealed the importance of real-time visibility, simplified dashboard interactions and centralized control mechanisms for operators managing multiple electrical systems simultaneously."
            },

            {
            title: "Benchmark & Competitive Analysis",
            image: "/images/blizzard/benchmarking.png",
            text:
                "A competitive analysis was conducted across industrial monitoring and energy management platforms such as Schneider Electric EcoStruxure, Siemens Desigo CC, ABB Ability and GE Digital. Most systems prioritized technical depth but introduced high complexity, dense interfaces and steep learning curves. Blizzard aimed to simplify operational workflows through a cleaner dashboard architecture and more intuitive monitoring experience."
            },

            {
            title: "Product Strategy",
            text:
                "The platform was designed around centralized operational visibility. Instead of exposing raw technical infrastructure directly to users, the interface abstracts complex IoT data into actionable monitoring states, device controls and automation workflows. This approach improves usability while preserving scalability for larger infrastructures."
            },

            {
            title: "System Architecture",
            image: "/images/blizzard/system-architecture.png",
            text:
                "The system architecture connects IoT devices, monitoring services and dashboard interfaces into a centralized operational layer. Real-time infrastructure data flows through backend services into monitoring modules responsible for device visualization, automation scheduling and remote management."
            },

            {
            title: "User Flows",
            image: "/images/blizzard/user-flows.png",
            text:
                "Core flows were designed around three primary actions: monitoring energy consumption, remotely controlling electrical devices and configuring automated operational schedules. Navigation and interaction patterns prioritized rapid status recognition and low-friction operational control."
            },

            {
            title: "Early Exploration",
            image: "/images/blizzard/wireframes.png",
            text:
                "Initial explorations focused on dashboard hierarchy, real-time visualization patterns and operational clarity. Early wireframes tested different layouts for monitoring density, component prioritization and rapid scanning across multiple infrastructure states."
            },

            {
            title: "Dashboard Design System",
            image: "/images/blizzard/design-system.png",
            text:
                "A modular dashboard system was established to maintain consistency across monitoring cards, charts, tables and operational controls. The visual structure prioritized readability, fast information scanning and clear hierarchy for data-heavy environments."
            },

            {
            title: "Engineering & Frontend Architecture",
            image: "/images/blizzard/frontend-architecture.png",
            text:
                "The frontend architecture was structured around modular and reusable components, enabling scalable dashboard development and maintainable real-time rendering flows. State management, API communication and visualization layers were organized to support continuous operational updates without compromising interface responsiveness."
            },

            {
            title: "Real-Time Data Visualization",
            image: "/images/blizzard/data-visualization.png",
            text:
                "The dashboard translates complex operational and energy datasets into simplified visual interfaces using charts, status indicators and monitoring modules. The goal was to reduce cognitive overload while maintaining precise operational visibility for decision-making."
            },

            {
            title: "From Concept to Implementation",
            image: "/images/blizzard/concept-to-implementation.png",
            text:
                "The project evolved from initial operational requirements into a fully functional monitoring platform through close collaboration between development, research and product discussions. Frontend implementation translated complex infrastructure workflows into scalable and intuitive dashboard interactions."
            },

            {
            title: "Technical Stack",
            text:
                "The platform was developed using modern web technologies focused on scalability and real-time responsiveness. The frontend architecture relied on reusable component structures, API integrations and dynamic rendering strategies to support continuous monitoring workflows and IoT communication."
            },

            {
            title: "Challenges & Tradeoffs",
            text:
                "One of the primary challenges involved balancing technical complexity with usability. Industrial monitoring systems naturally expose dense operational information, requiring careful prioritization of hierarchy, feedback states and interaction flows to avoid cognitive overload while preserving functional depth."
            },

            {
            title: "Impact & Outcomes",
            image: "/images/blizzard/project-outcomes.png",
            text:
                "Blizzard consolidated fragmented monitoring workflows into a centralized operational platform capable of improving visibility, simplifying infrastructure management and supporting more efficient energy monitoring processes. The project also resulted in an awarded scientific paper presented before an academic evaluation board."
            },

            {
            title: "Impact & Learnings",
            text:
                "This project strengthened my experience building scalable frontend systems for real-world operational environments while collaborating closely with product and UX discussions. It reinforced the importance of translating technically complex workflows into interfaces that remain intuitive, actionable and operationally efficient."
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