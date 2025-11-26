export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Spread Technology",
    role: "Analyst Developer",
    period: "Aug 2024 – Present",
    location: "Remote",
    bullets: [
      "Development, maintenance and restructuring of legacy projects.",
      "UI/UX interface design and interactive prototypes for projects and technical proposals.",
      "Stack: JavaScript, ReactJS, Angular, .NET Core, TypeScript, PostgreSQL, Figma."
    ]
  },
  {
    company: "Fortes Innovaro",
    role: "Systems Developer",
    period: "Oct 2023 – Jul 2024",
    location: "Fortaleza, Brazil",
    bullets: [
      "ERP system development and maintenance using Nginstack and SQL.",
      "Improved existing modules and built new features for business users."
    ]
  },
  {
    company: "Vortex DTEC (Unifor Innovation Lab)",
    role: "Fullstack Web & Mobile Developer",
    period: "May 2022 – Oct 2023",
    location: "Fortaleza, Brazil",
    bullets: [
      "Built responsive frontend features with ReactJS and React Native.",
      "Developed APIs and integrations with IoT technology using Node.js.",
      "Worked with SQL and MongoDB databases for project data."
    ]
  },
  {
    company: "Vortex DTEC",
    role: "UI/UX Designer",
    period: "Oct 2021 – May 2022",
    location: "Fortaleza, Brazil",
    bullets: [
      "Created wireframes, high-fidelity UI and interactive prototypes in Figma.",
      "Conducted UX research, requirements gathering and usability testing."
    ]
  },
  {
    company: "University of Fortaleza",
    role: "Scientific Initiation Scholar",
    period: "May 2022 – Feb 2023",
    location: "Fortaleza, Brazil",
    bullets: [
      "Front-end development and UI prototyping for academic software.",
      "Authored two scientific articles on digital innovation projects I worked directly on."
    ]
  }
];