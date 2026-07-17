export interface Tech {
  id: number;
  name: string;
  category: string;
  description: string;
}

export const techData: Tech[] = [
  {
    id: 1,
    name: "Laravel",
    category: "Backend Framework",
    description:
      "Building robust and scalable backend applications with clean architecture.",
  },
  {
    id: 2,
    name: "Next.js",
    category: "React Framework",
    description:
      "Developing SEO-friendly and high-performance web applications.",
  },
  {
    id: 3,
    name: "React",
    category: "Frontend Library",
    description: "Creating reusable and interactive user interfaces.",
  },
  {
    id: 4,
    name: "TypeScript",
    category: "Programming Language",
    description: "Writing type-safe and maintainable JavaScript applications.",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    category: "CSS Framework",
    description: "Building modern and responsive interfaces quickly.",
  },
  {
    id: 6,
    name: "MySQL",
    category: "Database",
    description: "Managing relational data efficiently and securely.",
  },
  {
    id: 7,
    name: "Git",
    category: "Version Control",
    description: "Tracking code changes and collaborating with teams.",
  },
  {
    id: 8,
    name: "Docker",
    category: "Containerization",
    description: "Creating consistent development and deployment environments.",
  },
];
