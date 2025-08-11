import { FaGithub, FaLinkedin } from "react-icons/fa";
import CursorHalo from "@/components/CursorHalo";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 relative overflow-hidden">
      <CursorHalo />
      {/* Decorative blurred gradients */}
      <div className="absolute -left-24 -top-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#006E9F] to-indigo-500 opacity-40 blur-3xl transform-gpu -translate-x-6 -translate-y-6 pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-pink-500 via-rose-400 to-amber-300 opacity-30 blur-3xl transform-gpu translate-x-12 translate-y-12 pointer-events-none"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <section className="max-w-4xl w-full">
          <div className="mx-auto backdrop-blur-sm bg-white/6 border border-white/6 rounded-2xl p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1
                  className={`${inter.className} text-4xl sm:text-5xl font-extrabold tracking-tight text-white`}
                >
                  Jhon Contreras
                </h1>
                <p className={`${inter.className} mt-3 text-2xl text-gray-200`}>
                  Front End Developer
                </p>
                <p
                  className={`${inter.className} text-md text-blue-400 font-light mt-1`}
                >
                  React · Next.js · TypeScript · Tailwind
                </p>

                {/**
                *  <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="#portfolio"
                    className="inline-flex items-center gap-3 rounded-full px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white transition"
                  >
                    Ver portfolio
                  </Link>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 rounded-full px-5 py-2.5 border border-white/10 hover:bg-white/5 text-white transition"
                  >
                    Contacto
                  </Link>
                </div>
                */}
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="https://github.com/Jhon-Contreras"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="inline-flex items-center gap-2 text-gray-200 hover:text-white"
                  >
                    <FaGithub /> <span className="sr-only">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jhoncontrerassoto/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center gap-2 text-gray-200 hover:text-white"
                  >
                    <FaLinkedin /> <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                {/* Example hero card / screenshot placeholder */}
                <div className="w-full max-w-sm rounded-xl border border-white/6 bg-gradient-to-b from-white/3 to-white/2 p-4 shadow-lg">
                  <div className="h-44 rounded-lg bg-gradient-to-br from-white/6 to-white/3 animate-pulse" />
                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-3/4 rounded bg-white/6" />
                    <div className="h-3 w-1/2 rounded bg-white/6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* small footer note */}
          <p
            className={`${inter.className} mt-6 text-center text-xs text-gray-500`}
          >
            Built with Next.js + Tailwind — © {new Date().getFullYear()} Jhon
            Contreras
          </p>
        </section>
      </div>
    </main>
  );
}
