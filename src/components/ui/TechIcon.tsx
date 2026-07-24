"use client";

import {
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";

const icons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Laravel: SiLaravel,
  Firebase: SiFirebase,
  TailwindCSS: SiTailwindcss,
  Tailwind: SiTailwindcss,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  NodeJS: SiNodedotjs,
  Node: SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Prisma: SiPrisma,
  Postman: SiPostman,
  Vercel: SiVercel,
  "Framer Motion": TbBrandFramerMotion,
};

interface Props {
  name: string;
}

export default function TechIcon({ name }: Props) {
  const Icon = icons[name as keyof typeof icons];

  if (!Icon) {
    return (
      <div
        className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        bg-blue-500/10
        font-bold
        text-blue-400
      "
      >
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <div
      className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-xl
      bg-white/5
      transition-all
      duration-300
      group-hover:scale-110
      group-hover:bg-blue-500/15
      "
    >
      <Icon
        size={28}
        className="
        text-zinc-300
        transition-all
        duration-300
        group-hover:text-blue-400
        group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,.8)]
      "
      />
    </div>
  );
}
