export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    company: "Ayokulakan",
    position: "Software Engineer",
    period: "2025 - Present",
    location: "Indonesia",
    description:
      "Developing and maintaining marketplace applications, focusing on scalable backend systems and smooth user experiences.",
    responsibilities: [
      "Develop backend features and REST APIs using Laravel.",
      "Build responsive, accessible frontend interfaces.",
      "Optimize database queries and application performance.",
      "Collaborate closely with cross-functional teams and stakeholders.",
    ],
    technologies: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
  },
  {
    id: 2,
    company: "Personal Projects",
    position: "Software Engineer",
    period: "2024 - Present",
    location: "Remote",
    description:
      "Building personal projects to sharpen software engineering skills, experiment with new tools, and stay current with modern development practices.",
    responsibilities: [
      "Develop modern, production-ready web applications.",
      "Apply clean architecture and maintainable code patterns.",
      "Design and build reusable React components.",
      "Handle end-to-end deployment to production environments.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Git"],
  },
];
