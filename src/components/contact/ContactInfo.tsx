import { Mail, MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import { contactData } from "@/data/contact";
import SocialLinks from "./SocialLinks";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
    color: "blue",
  },
  {
    icon: MapPin,
    label: "Location",
    value: contactData.location,
    href: null,
    color: "blue",
  },
  {
    icon: Briefcase,
    label: "Availability",
    value: contactData.availability,
    href: null,
    color: "emerald",
  },
] as const;

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <span className="inline-flex w-fit items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
        Contact Information
      </span>

      <h3 className="mt-6 text-3xl font-bold text-white">
        Let&apos;s work together.
      </h3>

      <p className="mt-4 leading-8 text-zinc-400">
        I&apos;m always interested in new opportunities, freelance projects, and
        collaborations. Feel free to reach out anytime.
      </p>

      {/* Divider */}
      <div className="my-8 h-px w-full bg-gradient-to-r from-white/10 via-white/10 to-transparent" />

      {/* Contact Items */}
      <div className="space-y-3">
        {items.map(({ icon: Icon, label, value, href, color }) => {
          const content = (
            <div
              className={`
                group flex items-center gap-4 rounded-2xl border border-white/10
                bg-white/[0.02] p-4 transition-all duration-300
                ${href ? "hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-white/[0.04]" : "hover:border-white/20"}
              `}
            >
              <div
                className={`
                  flex h-11 w-11 shrink-0 items-center justify-center rounded-xl
                  transition-transform duration-300 group-hover:scale-110
                  ${color === "emerald" ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400"}
                `}
              >
                <Icon size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  {label}
                </p>
                <p
                  className={`mt-0.5 truncate font-medium ${
                    color === "emerald" ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {value}
                </p>
              </div>

              {href && (
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-zinc-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400"
                />
              )}
            </div>
          );

          return href ? (
            <a key={label} href={href} className="block">
              {content}
            </a>
          ) : (
            <div key={label}>{content}</div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="my-8 h-px w-full bg-gradient-to-r from-white/10 via-white/10 to-transparent" />

      {/* Social Links */}
      <div className="mt-auto">
        <h4 className="text-lg font-semibold text-white">Connect with me</h4>

        <div className="mt-6">
          <SocialLinks
            github={contactData.socials.github}
            linkedin={contactData.socials.linkedin}
            email={contactData.email}
          />
        </div>
      </div>
    </div>
  );
}
