import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
  SiDocker,
  SiGit,
} from "react-icons/si";

// Warna disesuaikan dengan brand color resmi masing-masing tech.
// Tiap icon juga punya kelas animasi (`anim`) yang berbeda supaya
// gerakannya tidak seragam — dipilih yang paling "cocok" dengan
// bentuk/karakter logo masing-masing:
const icons = [
  {
    Icon: SiReact,
    x: "10%",
    y: "18%",
    size: 32,
    color: "#61DAFB",
    // Logo React berbentuk atom simetris — rotasi pelan menerus pas sekali
    anim: "animate-tech-rotate-slow",
  },
  {
    Icon: SiNextdotjs,
    x: "78%",
    y: "12%",
    size: 28,
    color: "#ffffff",
    anim: "animate-tech-float",
  },
  {
    Icon: SiVuedotjs,
    x: "45%",
    y: "8%",
    size: 30,
    color: "#4FC08D",
    anim: "animate-tech-float-diagonal",
  },
  {
    Icon: SiTailwindcss,
    x: "20%",
    y: "72%",
    size: 30,
    color: "#38bdf8",
    // Logo Tailwind (angin/gelombang) — efek "bernapas" terasa pas
    anim: "animate-tech-pulse",
  },
  {
    Icon: SiTypescript,
    x: "85%",
    y: "50%",
    size: 32,
    color: "#3178C6",
    anim: "animate-tech-float-x",
  },
  {
    Icon: SiLaravel,
    x: "60%",
    y: "80%",
    size: 28,
    color: "#FF2D20",
    anim: "animate-tech-orbit",
  },
  {
    Icon: SiDocker,
    x: "5%",
    y: "55%",
    size: 30,
    color: "#2496ED",
    anim: "animate-tech-float-rotate",
  },
  {
    Icon: SiGit,
    x: "50%",
    y: "92%",
    size: 26,
    color: "#F05032",
    anim: "animate-tech-float-diagonal",
  },
];

export default function FloatingTechIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {icons.map(({ Icon, x, y, size, color, anim }, index) => (
        <div
          key={index}
          className={`absolute opacity-90 ${anim}`}
          style={{
            left: x,
            top: y,
            width: size,
            height: size,
            color,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          <Icon className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}
