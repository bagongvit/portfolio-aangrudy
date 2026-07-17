"use client";

import { navigation } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import NavLink from "./NavLink";

export default function DesktopNav() {
  const activeSection = useActiveSection();

  return (
    <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl md:flex">
      {navigation.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          active={activeSection === item.href.replace("#", "")}
        />
      ))}
    </nav>
  );
}
