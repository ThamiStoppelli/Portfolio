export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
};

export const education: EducationItem[] = [
  {
    institution: "University of Fortaleza (UNIFOR)",
    degree: "Bachelor’s Degree in Analysis and Systems Development",
    period: "2021 – 2023",
    location: "Fortaleza, Brazil",
    details: [
      "Focused on software development, databases and web technologies.",
      "Strong emphasis on frontend development, APIs and systems architecture."
    ]
    },
  {
    institution: "University of Fortaleza (UNIFOR)",
    degree: "Bachelor’s Degree in Law",
    period: "2014 – 2021",
    location: "Fortaleza, Brazil",
    details: [
      "Legal research, critical thinking and structured problem-solving.",
      "Strong background in ethics, data protection and regulatory reasoning."
    ]
  },
  {
    institution: "University of Lisbon – Faculty of Law",
    degree: "Exchange Student – Law",
    period: "2019 – 2020",
    location: "Lisbon, Portugal",
    details: [
      "International academic experience in European legal systems.",
      "Classes fully taught in English in a multicultural environment."
    ]
  }
]