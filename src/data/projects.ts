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
      "Platform marketplace untuk transaksi grosir dengan sistem multi-vendor.",
    longDescription:
      "Ayokulakan adalah platform marketplace B2B yang menghubungkan pembeli grosir dengan supplier. Saya bertanggung jawab membangun sistem backend untuk manajemen produk, transaksi multi-vendor, dan integrasi payment gateway, sekaligus frontend yang responsif untuk pengalaman belanja yang mulus di berbagai perangkat.",
    image: "/images/projects/ayokulakan-cover.png",
    screenshots: [
      "/images/projects/ayokulakan-1.png",
      "/images/projects/ayokulakan-2.png",
      "/images/projects/ayokulakan-3.png",
    ],
    technologies: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    features: [
      "Sistem multi-vendor dengan dashboard terpisah per seller",
      "Integrasi payment gateway dan tracking pengiriman",
      "Pencarian produk dengan filter kategori & harga real-time",
      "Manajemen stok otomatis dengan notifikasi low-stock",
    ],
    challenges:
      "Tantangan terbesar adalah mengoptimalkan query database saat traffic tinggi, khususnya di halaman listing produk yang menggabungkan data dari banyak vendor sekaligus. Solusinya dengan indexing yang tepat dan caching di layer aplikasi.",
    role: "Full Stack Developer",
    year: "2025",
    github: "https://github.com/bagongvit/ayokulakan",
    demo: "https://ayokulakan.example.com",
  },
  {
    title: "TaskFlow - Task Management App",
    description:
      "Aplikasi manajemen tugas dengan drag-and-drop board, mirip Trello, dibangun untuk belajar state management yang kompleks.",
    longDescription:
      "TaskFlow adalah aplikasi manajemen tugas berbasis board (kanban-style) yang saya bangun sebagai personal project untuk mendalami React state management dan drag-and-drop interaction. Aplikasi ini mendukung multi-board, real-time update antar kolom, dan penyimpanan data yang persisten.",
    image: "/images/projects/taskflow-1.png",
    screenshots: [
      "/images/projects/taskflow-1.png",
      "/images/projects/taskflow-2.png",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    features: [
      "Drag-and-drop task antar kolom (To Do, In Progress, Done)",
      "Multi-board support dengan penyimpanan lokal per board",
      "Dark mode toggle dan responsive di semua ukuran layar",
      "Filter task berdasarkan label dan prioritas",
    ],
    challenges:
      "Bagian tersulit adalah mengelola state drag-and-drop supaya update posisi task terasa instan tanpa lag, terutama saat board memiliki banyak task. Saya menyelesaikannya dengan optimistic UI update dan library drag-and-drop yang ringan.",
    role: "Frontend Developer",
    year: "2025",
    github: "https://github.com/username/taskflow",
    demo: "https://taskflow.example.com",
  },
  {
    title: "DevBlog - Personal Blog Platform",
    description:
      "Platform blog sederhana dengan CMS custom untuk menulis artikel teknis, dibangun dari nol menggunakan Laravel sebagai backend API.",
    longDescription:
      "DevBlog adalah platform blog personal yang saya bangun untuk menulis catatan teknis dan pembelajaran seputar web development. Backend dibangun dengan Laravel sebagai REST API, sementara frontend menggunakan Next.js untuk performa loading yang cepat dan SEO yang baik.",
    image: "/images/projects/devblog-1.png",
    screenshots: [
      "/images/projects/devblog-1.png",
      "/images/projects/devblog-2.png",
    ],
    technologies: ["Laravel", "Next.js", "TypeScript", "PostgreSQL"],
    features: [
      "CMS custom untuk menulis & mengedit artikel dengan Markdown editor",
      "Sistem kategori dan tag untuk organisasi konten",
      "Server-side rendering untuk performa dan SEO optimal",
      "Komentar pembaca dengan sistem moderasi sederhana",
    ],
    challenges:
      "Tantangannya adalah membangun editor Markdown yang nyaman dipakai sekaligus aman dari XSS saat konten di-render sebagai HTML. Saya menyelesaikannya dengan sanitasi HTML di sisi backend sebelum data dikirim ke frontend.",
    role: "Full Stack Developer",
    year: "2024",
    github: "https://github.com/username/devblog",
    demo: "https://devblog.example.com",
  },
];
