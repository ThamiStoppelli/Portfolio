// src/data/projects.ts
export type Project = {
  id: string;
  name: string;
  role: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    name: "Finance Dashboard Web App",
    role: "Frontend & UI/UX",
    description:
      "Responsive dashboard for financial analytics, built with React and TypeScript, focusing on clean data visualization and smooth interactions.",
    techStack: ["React", "TypeScript", "Styled Components", "REST API"],
    highlights: [
      "Designed and implemented key screens for reports and insights",
      "Component-based architecture with reusable UI patterns",
      "Integrated REST APIs with clear loading and error states",
    ],
    githubUrl: "https://github.com/ThamiStoppelli",
  },
  {
    id: "project-2",
    name: "Mobile App for IoT Control",
    role: "Fullstack (Web & Mobile)",
    description:
      "React Native app connected to IoT devices, allowing users to monitor and control hardware in real time.",
    techStack: ["React Native", "Node.js", "MongoDB", "IoT Integration"],
    highlights: [
      "Built mobile UI with focus on clarity and usability",
      "Developed backend endpoints for device status and actions",
      "Collaborated closely with hardware/IoT team",
    ],
  },
  {
    id: "project-3",
    name: "ERP Module Refactor",
    role: "Frontend & Systems Developer",
    description:
      "Refactor of legacy ERP module, improving UX, performance and maintainability for business users.",
    techStack: ["JavaScript", "Nginstack", "SQL"],
    highlights: [
      "Modernized UI patterns and interaction flows",
      "Reduced technical debt in critical modules",
      "Worked directly with product and business stakeholders",
    ],
  },
  {
    id: "project-4",
    name: "Design System Prototype",
    role: "UI/UX Designer & Frontend Dev",
    description:
      "Internal design system prototype with reusable components, typography and color tokens.",
    techStack: ["Figma", "React", "Styled Components"],
    highlights: [
      "Created component library in Figma and React",
      "Defined spacing, color and typography scales",
      "Documented usage to support team adoption",
    ],
  },
];
