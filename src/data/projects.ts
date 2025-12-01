export type Project = {
  id: string;
  name: string;
  role: string;
  description: string;
  techStack: string[];
  details: string[];
  githubUrl?: string;
  figmaUrl?: string;
  liveUrl?: string;
  additionalInfo?: string;
};

export const projects: Project[] = [
  {
    id: "blizzard",
    name: "Blizzard – Energy Monitoring & Control System",
    role: "Frontend Developer",
    description:
      "Web-based system for monitoring and controlling electrical devices and energy consumption in a university environment.",
    techStack: [
      "JavaScript",
      "Web Dashboards",
      "IoT Integration",
      "Figma",
      "Node JS",
      "MongoDB",
      "Data Visualization"
    ],
    details: [
      "Displayed real-time and historical energy consumption through dynamic data visualizations.",
      "Enabled remote control of electrical devices (on/off) via the web system.",
      "Implemented automated scheduling to optimize energy usage and reduce waste."
    ],
    githubUrl: "https://github.com/ThamiStoppelli/blizzard-front-end",
    figmaUrl: "https://www.figma.com/proto/NB1BU9XnDSsBuZ4aR1SvAt/Blizzard--Copy---Copy-?page-id=47%3A3&node-id=67-12&p=f&viewport=71%2C126%2C0.02&t=DfPJfOTiqIF9q70m-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=67%3A12"
  },
  {
    id: "busca-saudavel",
    name: "Healthy Search – Food Search & Nutrition Platform",
    role: "UI/UX Designer & Frontend Developer", 
    description:
      "Web and mobile platform for searching food products based on nutritional composition, allergens and dietary restrictions.",
    techStack: [
      "React",
      "JavaScript",
      "Styled Components",
      "React Native",
      "Node.js",
      "MongoDB",
      "REST APIs"
    ],
    details: [
      "Developed an intuitive food search experience focused on allergies and dietary restrictions.",
      "Implemented customizable filters for allergens, ingredients and nutritional components.",
      "Built features for saving favorite products and delivering personalized nutrition tips."
    ],
    githubUrl: "https://github.com/ThamiStoppelli/busca-saudavel-frontend-web",
    figmaUrl: "https://www.figma.com/proto/oXi5IgGHMEtEAn9KBCSrFT/Projeto-Aplicado---Busca-Saudavel?page-id=1%3A2&node-id=460-2523&p=f&viewport=-676%2C-381%2C0.02&t=0WIUdkKSUTju6bP0-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=460%3A2523&show-proto-sidebar=1",
    additionalInfo: "https://www.canva.com/design/DAG51AN48oI/RmVZe5mQdI2oG0x_nTn_kA/edit?utm_content=DAG51AN48oI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: "time-currency-app",
    name: "Time & Currency Converter App",
    role: "Full Stack Mobile Developer & UI/UX Designer",
    description:
      "Mobile app aimed at globetrotters and international professionals for real-time comparison of time zones, currencies and weather across multiple cities and countries simultaneously.",
    techStack: [
      "React", 
      "TypeScript", 
      "Styled Components", 
      "REST API"
    ],
    details: [
      "Built real-time comparison system for time zones, currencies and weather.",
      "Designed modular and reusable UI components for scalable feature growth.",
      "Optimized user experience for travelers and digital nomads."
    ],
    githubUrl: "https://github.com/ThamiStoppelli/Time-Currency-App",
    //add video
  },
  {
    id: "project-cuidar-psi",
    name: "Anni – Psychology Management System",
    role: "Frontend Developer",
    description:
      "Web system for psychologists and psychology interns to manage clinical sessions, patient follow-ups and supervision workflows in an academic healthcare environment.",
    techStack: [
      "React",
      "TypeScript",
      "Styled Components",
      "Figma",
      "REST APIs"
    ],
    details: [
      "Built a fully responsive frontend based on high-fidelity Figma designs.",
      "Implemented role-based access control to protect sensitive patient data.",
      "Centralized patient records, session tracking and intern supervision in a single platform."
    ],
    figmaUrl: "https://www.figma.com/proto/NXRKxfrhiky4zFHYag3MYg/Cuidar-Psi--Copy-?page-id=115%3A169&node-id=1105-5411&p=f&viewport=-184%2C-8%2C0.03&t=VC79YV1sgb7oNwXn-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=748%3A390&show-proto-sidebar=1",
    additionalInfo: "https://diariodonordeste.verdesmares.com.br/metro/psicologia-e-ferramenta-importante-para-lidar-com-perdas-e-transformacoes-de-relacoes-1.3088666"
  },
];
