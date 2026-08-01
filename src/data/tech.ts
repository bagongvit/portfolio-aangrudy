export interface Tech {
  id: number;
  name: string;
  category: "Backend" | "Frontend" | "Database & Tools" | "DevOps";
  description: string;
  experience: number;
  masteries: string[];
  projectsUsed: string[];
}

export const techData: Tech[] = [
  {
    id: 1,
    name: "Laravel",
    category: "Backend",
    description:
      "Architecting robust, enterprise-grade REST APIs, authentication systems, and scalable backend applications with clean MVC patterns.",
    experience: 88,
    masteries: [
      "RESTful API Architecture & Swagger/OpenAPI",
      "Eloquent ORM & Complex Database Optimization",
      "Authentication, RBAC & Policy Enforcement",
      "Queue Workers, Redis Caching & Event Dispatching",
    ],
    projectsUsed: ["Ayokulakan Marketplace", "DevBlog Platform"],
  },
  {
    id: 2,
    name: "Next.js",
    category: "Frontend",
    description:
      "Developing SEO-friendly, blazing fast full-stack React applications utilizing App Router, Server Components, and SSR/SSG rendering.",
    experience: 90,
    masteries: [
      "Next.js App Router & Server Components",
      "Server-Side Rendering (SSR) & Static Generation (SSG)",
      "SEO Optimization & Metadata API",
      "Turbopack & Production Export Optimizations",
    ],
    projectsUsed: ["Portfolio Showcase", "TaskFlow App", "DevBlog Frontend"],
  },
  {
    id: 3,
    name: "React",
    category: "Frontend",
    description:
      "Creating highly responsive, component-driven user interfaces with custom hooks, complex state management, and smooth 60fps animations.",
    experience: 92,
    masteries: [
      "Component-Driven Modular Architecture",
      "Custom React Hooks & Context API",
      "State Management with Zustand & React Query",
      "Framer Motion & Three.js Canvas Integrations",
    ],
    projectsUsed: ["Portfolio Showcase", "TaskFlow App", "Ayokulakan Web App"],
  },
  {
    id: 4,
    name: "TypeScript",
    category: "Frontend",
    description:
      "Writing type-safe, self-documenting code bases to eliminate runtime errors and maintain long-term codebase scale.",
    experience: 88,
    masteries: [
      "Strict Type Systems & Generic Interfaces",
      "API Schema Contract Validation",
      "Utility Types & Complex Type Guarding",
      "Integration with React, Next.js & Node.js",
    ],
    projectsUsed: ["Portfolio Showcase", "TaskFlow App", "DevBlog Platform"],
  },
  {
    id: 5,
    name: "Tailwind CSS",
    category: "Frontend",
    description:
      "Designing ultra-modern, responsive design systems with sleek dark modes, custom color palettes, and glassmorphism UI.",
    experience: 90,
    masteries: [
      "Custom Design Token Systems & Theme Configs",
      "Responsive Layout Grid & Flexbox Architectures",
      "Glassmorphism, Gradient Effects & Micro-animations",
      "Tailwind Merge & CVA Utility Patterns",
    ],
    projectsUsed: ["Portfolio Showcase", "TaskFlow App", "Ayokulakan Marketplace"],
  },
  {
    id: 6,
    name: "MySQL",
    category: "Database & Tools",
    description:
      "Designing optimized relational database schemas, indexes, and complex SQL query tuning for high-concurrency environments.",
    experience: 85,
    masteries: [
      "Relational Schema Design & Normalization",
      "Query Performance Profiling & Index Tuning",
      "Foreign Key Constraints & Transaction Isolation",
      "Database Migrations & Seeders",
    ],
    projectsUsed: ["Ayokulakan Marketplace", "DevBlog Backend"],
  },
  {
    id: 7,
    name: "Git",
    category: "DevOps",
    description:
      "Managing version control workflows, feature branching strategies, code reviews, and CI/CD automated deployment pipelines.",
    experience: 95,
    masteries: [
      "Git Flow & Feature Branch Strategies",
      "Conflict Resolution & Interactive Rebase",
      "GitHub Actions & Automated Testing Pipelines",
      "Release Tagging & Version Management",
    ],
    projectsUsed: ["All Engineering Projects"],
  },
  {
    id: 8,
    name: "Docker",
    category: "DevOps",
    description:
      "Containerizing application services for consistent development environments and seamless production deployment.",
    experience: 83,
    masteries: [
      "Dockerfile Optimization & Multi-stage Builds",
      "Docker Compose Multi-container Orchestration",
      "Container Network & Volume Management",
      "Environment Standardization across OS Platforms",
    ],
    projectsUsed: ["Ayokulakan Marketplace", "DevBlog Platform"],
  },
];
