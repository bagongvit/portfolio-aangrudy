import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          {/* Big 404 */}
          <h1 className="bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-[8rem] font-black leading-none tracking-tight text-transparent sm:text-[10rem]">
            404
          </h1>

          {/* Badge */}
          <span className="-mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Page Not Found
          </span>

          <h2 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
            Oops, halaman yang kamu cari tidak ditemukan.
          </h2>

          <p className="mt-4 max-w-md text-balance leading-8 text-zinc-400">
            Halaman mungkin sudah dipindahkan, dihapus, atau URL yang kamu ketik
            salah. Yuk kembali ke halaman utama.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="
                group relative inline-flex items-center gap-2 overflow-hidden
                rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3
                font-semibold text-white shadow-lg shadow-blue-500/20
                transition-all duration-300 hover:-translate-y-0.5
                hover:shadow-xl hover:shadow-blue-500/30
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Home size={18} className="relative" />
              <span className="relative">Back to Home</span>
            </Link>

            <Link
              href="/#contact"
              className="
                inline-flex items-center gap-2 rounded-xl border border-white/10
                bg-white/[0.02] px-6 py-3 font-semibold text-white
                backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5
                hover:border-blue-500/50 hover:bg-white/5
              "
            >
              <ArrowLeft size={18} />
              Contact Me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
