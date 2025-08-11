import { FaGithub, FaLinkedin } from "react-icons/fa";
import CursorHalo from "@/components/CursorHalo";

import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jhon Contreras — Front End Developer</title>
        <meta name="description" content="Portafolio de Jhon Contreras" />
      </Head>
      <main className="min-h-screen bg-slate-900 relative overflow-hidden">
        <CursorHalo />
        {/* Decorative blurred gradients */}
        <div className="absolute -left-24 -top-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#006E9F] to-indigo-500 opacity-40 blur-3xl pointer-events-none animate-float1"></div>
        <div className="absolute right-0 bottom-0 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-pink-500 via-rose-400 to-amber-300 opacity-30 blur-3xl pointer-events-none animate-float2"></div>

        <div className="relative z-10 flex min-h-screen items-start justify-center px-6 py-24">
          <section className="max-w-6xl w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 h-auto md:h-[70vh]">
              <div className="flex-1 flex items-center justify-start">
                <div>
                  <h1
                    className={`${inter.className} text-4xl sm:text-6xl font-extrabold tracking-tight text-white`}
                  >
                    Jhon Contreras
                  </h1>
                  <p
                    className={`${inter.className} mt-3 text-2xl text-gray-200`}
                  >
                    Front End Developer
                  </p>
                  <p
                    className={`${inter.className} text-md text-blue-400 font-light mt-1`}
                  >
                    React · Next.js · TypeScript · Tailwind
                  </p>
                  <div className="mt-10 flex items-center gap-4">
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
              </div>

              <div className="flex-1 flex items-center justify-start">
                {/* Example hero card / screenshot placeholder */}
                <div className="w-full ">
                  <p className={`${inter.className} font-light text-gray-300`}>
                    Ingeniero en Informática y Desarrollador Front-End con más
                    de 7 años de experiencia en creación de sitios e interfaces
                    web funcionales y escalables. He colaborado tanto en
                    agencias como freelance, trabajando junto a equipos de UX/UI
                    y clientes de diversos sectores.
                  </p>
                  <p
                    className={`${inter.className} mt-3 font-light text-gray-300`}
                  >
                    Especializado en React, TypeScript, Next.js, HTML, CSS/SASS
                    y WordPress/WooCommerce. Experiencia en integración de APIs,
                    pasarelas de pago y optimización de rendimiento.
                  </p>
                  <p
                    className={`${inter.className} mt-3 font-light text-gray-300`}
                  >
                    Comprometido con código limpio, experiencias fluidas en
                    múltiples dispositivos y trabajo colaborativo para entregar
                    valor en cada proyecto.
                  </p>
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
    </>
  );
}
