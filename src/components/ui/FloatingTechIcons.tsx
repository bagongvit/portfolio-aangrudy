import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
  SiDocker,
  SiGit,
} from "react-icons/si";

const icons = [
  { Icon: SiReact, x: "10%", y: "20%", size: 32, color: "#38bdf8" },
  { Icon: SiNextdotjs, x: "75%", y: "10%", size: 28, color: "#ffffff" },
  { Icon: SiTailwindcss, x: "20%", y: "75%", size: 30, color: "#38bdf8" },
  { Icon: SiTypescript, x: "85%", y: "50%", size: 32, color: "#0ea5e9" },
  { Icon: SiLaravel, x: "60%", y: "80%", size: 28, color: "#f97316" },
  { Icon: SiDocker, x: "5%", y: "55%", size: 30, color: "#22c55e" },
  { Icon: SiGit, x: "50%", y: "10%", size: 26, color: "#f97316" },
];

export default function FloatingTechIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {icons.map(({ Icon, x, y, size, color }, index) => (
        <div
          key={index}
          className="absolute animate-tech-float opacity-90"
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
