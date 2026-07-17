import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import MotionWrapper from "./MotionWrapper";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroButtons() {
  return (
    <MotionWrapper delay={0.2}>
      <div className="mt-10 flex flex-wrap gap-4">
        <MagneticButton>
          <Link
            href="#projects"
            className="
            group relative inline-flex items-center gap-2 overflow-hidden
            rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3
            font-semibold text-white shadow-lg shadow-blue-500/20
            transition-all duration-300 hover:-translate-y-0.5
            hover:shadow-xl hover:shadow-blue-500/30
          "
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">View Projects</span>
            <ArrowRight
              size={18}
              className="relative transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </MagneticButton>

        <MagneticButton strength={0.3}>
          <a
            href={profile.resume}
            target="_blank"
            className="
            group inline-flex items-center gap-2 rounded-xl border
            border-white/10 bg-white/[0.02] px-6 py-3 font-semibold text-white
            backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5
            hover:border-blue-500/50 hover:bg-white/5
          "
          >
            <Download
              size={18}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
            Download CV
          </a>
        </MagneticButton>
      </div>
    </MotionWrapper>
  );
}
