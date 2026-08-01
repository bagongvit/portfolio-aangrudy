export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots?: string[];
  technologies: string[];
  features: string[];
  challenges?: string;
  role: string;
  year: string;
  github: string;
  demo: string;
}

export const projectData: Project[] = [
  {
    title: "Ayokulakan Marketplace",
    description:
      "A B2B wholesale e-commerce platform featuring multi-vendor management and real-time transaction processing.",
    longDescription:
      "Ayokulakan is a wholesale B2B marketplace platform connecting retail buyers with suppliers. I engineered the backend architecture for product management, multi-vendor transactions, and payment gateway integration, alongside a responsive frontend delivering a seamless shopping experience.",
    image: "/images/projects/ayokulakan-cover.png",
    screenshots: [
      "/images/projects/ayokulakan-1.png",
      "/images/projects/ayokulakan-2.png",
      "/images/projects/ayokulakan-3.png",
    ],
    technologies: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    features: [
      "Multi-vendor architecture with dedicated seller dashboards",
      "Payment gateway integration with automated shipment tracking",
      "Real-time product search with category & price filtering",
      "Automated inventory management with low-stock alerts",
    ],
    challenges:
      "Optimizing database query performance under high traffic, particularly for product listing pages aggregating data across multiple vendors. Solved via targeted indexing and application-level caching layers.",
    role: "Software Engineer",
    year: "2025",
    github: "https://github.com/bagongvit/ayokulakan",
    demo: "https://ayokulakan.example.com",
  },
  {
    title: "TaskFlow - Task Management App",
    description:
      "A Kanban-style productivity application built with drag-and-drop interactions and complex state management.",
    longDescription:
      "TaskFlow is a board-based task management application designed for high productivity. Built as a personal project to master complex React state management and fluid drag-and-drop interactions, it supports multi-board workflows, real-time column updates, and persistent state.",
    image: "/images/projects/taskflow-1.png",
    screenshots: [
      "/images/projects/taskflow-1.png",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    features: [
      "Smooth drag-and-drop task movement across columns (To Do, In Progress, Done)",
      "Multi-board support with persistent local storage",
      "Dark mode toggle & responsive layout across all device viewports",
      "Task filtering by custom labels and priority levels",
    ],
    challenges:
      "Managing drag-and-drop state to ensure instantaneous UI updates without visual lag when boards contain dozens of items. Resolved using optimistic UI updates and lightweight drag-and-drop primitives.",
    role: "Software Engineer",
    year: "2025",
    github: "https://github.com/bagongvit/taskflow",
    demo: "https://taskflow.example.com",
  },
  {
    title: "DevBlog - Personal Tech Publishing Platform",
    description:
      "A fast technical blogging platform featuring a custom CMS, Markdown editor, and server-side rendering.",
    longDescription:
      "DevBlog is a personal technical publishing platform built for sharing engineering notes and tutorials. The backend is engineered with Laravel RESTful APIs, while the frontend leverages Next.js for high-speed page loads and optimal SEO performance.",
    image: "/images/projects/devblog-1.png",
    screenshots: [
      "/images/projects/devblog-1.png",
    ],
    technologies: ["Laravel", "Next.js", "TypeScript", "PostgreSQL"],
    features: [
      "Custom CMS for writing and editing articles with live Markdown preview",
      "Category and tagging taxonomy for content organization",
      "Server-side rendering (SSR) for maximum SEO & performance",
      "Reader comments with simple moderation workflow",
    ],
    challenges:
      "Building a user-friendly Markdown editor while preventing XSS security risks during HTML rendering. Solved through server-side HTML sanitization prior to API dispatch.",
    role: "Software Engineer",
    year: "2024",
    github: "https://github.com/bagongvit/devblog",
    demo: "https://devblog.example.com",
  },
];
