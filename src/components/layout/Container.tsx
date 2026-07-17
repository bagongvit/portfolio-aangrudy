import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "max-w-5xl",
  md: "max-w-7xl",
  lg: "max-w-[90rem]",
};

export default function Container({
  children,
  className,
  size = "md",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-10",
        sizeMap[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
