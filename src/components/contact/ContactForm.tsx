"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  SendHorizonal,
  Loader2,
  User,
  Mail,
  MessageSquare,
  Tag,
  CheckCircle2,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const fields = [
  {
    name: "name" as const,
    label: "Full Name",
    type: "text",
    placeholder: "Aang Rudy",
    icon: User,
  },
  {
    name: "email" as const,
    label: "Email Address",
    type: "email",
    placeholder: "your@email.com",
    icon: Mail,
  },
  {
    name: "subject" as const,
    label: "Subject",
    type: "text",
    placeholder: "Project Discussion",
    icon: Tag,
  },
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const formData = new FormData();

      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
      );

      formData.append("redirect", "https://aangrudy.my.id");

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("subject", form.subject);
      formData.append("message", form.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <div>
      <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>

      <p className="mt-3 text-zinc-400">
        Fill out the form below and I&apos;ll get back to you as soon as
        possible.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {fields.map(({ name, label, type, placeholder, icon: Icon }) => (
          <div key={name}>
            <label
              htmlFor={name}
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              {label}
            </label>

            <div
              className={`
                flex items-center gap-3 rounded-xl border bg-zinc-900/60 px-4 py-3
                transition-all duration-300
                ${
                  focused === name
                    ? "border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
                    : "border-white/10 hover:border-white/20"
                }
              `}
            >
              <Icon
                size={18}
                className={`shrink-0 transition-colors duration-300 ${
                  focused === name ? "text-blue-400" : "text-zinc-500"
                }`}
              />
              <input
                id={name}
                name={name}
                type={type}
                value={form[name]}
                onChange={handleChange}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused(null)}
                placeholder={placeholder}
                className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
              />
            </div>
          </div>
        ))}

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Message
          </label>

          <div
            className={`
              flex items-start gap-3 rounded-xl border bg-zinc-900/60 px-4 py-3
              transition-all duration-300
              ${
                focused === "message"
                  ? "border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
                  : "border-white/10 hover:border-white/20"
              }
            `}
          >
            <MessageSquare
              size={18}
              className={`mt-0.5 shrink-0 transition-colors duration-300 ${
                focused === "message" ? "text-blue-400" : "text-zinc-500"
              }`}
            />
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              placeholder="Tell me about your project..."
              className="w-full resize-none bg-transparent text-white outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="
            group relative inline-flex w-full items-center justify-center gap-2
            overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500
            px-6 py-3.5 font-semibold text-white
            transition-all duration-300
            hover:shadow-lg hover:shadow-blue-500/25
            disabled:cursor-not-allowed disabled:opacity-70
          "
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle2 size={18} />
              Message Sent!
            </>
          ) : (
            <>
              <SendHorizonal
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
              Send Message
            </>
          )}
        </button>

        {/* Status message */}
        {status === "error" && (
          <p className="text-center text-sm text-red-400">
            Please complete all fields before sending.
          </p>
        )}
        {status === "success" && (
          <p className="text-center text-sm text-emerald-400">
            Thanks! I&apos;ll get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}
