import {
  Mail,
  Github,
  Linkedin,
  Globe,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Terminal,
} from "lucide-react";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { CvPDF } from "./CvPDF";

const SkillBadge = ({ children }) => (
  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200">
    {children}
  </span>
);

export const CvTemplate = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 font-sans text-slate-900">
      <div
        id="cv"
        className="w-[794px] min-h-[1123px] mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-slate-200"
      >
        {/* HEADER */}
        <header className="bg-slate-900 text-white p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="flex items-center gap-5">
                <img
                  src="https://api.dicebear.com/7.x/identicon/svg?seed=jhonjairo"
                  alt="Jairo Dueñas"
                  className="w-20 h-20 rounded-full border-4 border-slate-700 object-cover"
                />

                <div>
                  <h1 className="text-4xl font-extrabold">
                    Jhon Jairo Dueñas Vega
                  </h1>

                  <p className="text-blue-400 text-lg mt-1">
                    Ingeniero de Sistemas | Fullstack Developer
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <Mail size={16} />
                  jairo_251180@hotmail.com
                </span>

                <span>📞 3206515236</span>

                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  Colombia | Remoto
                </span>

                <a
                  href="https://portafolio-react-rose.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Globe size={16} />
                  Portafolio Web
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-blue-600 transition"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/jairodue%C3%B1as/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-blue-600 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </header>

        {/*Botón descargar pdf*/}
        <PDFDownloadLink
          document={<CvPDF />}
          fileName="Jairo-Duenas-CV.pdf"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Descargar CV
        </PDFDownloadLink>

        <div className="p-8 grid md:grid-cols-3 gap-8">
          {/* SIDEBAR */}
          <aside className="space-y-8">
            <section>
              <h3 className="text-sm font-bold text-blue-600 mb-3 flex gap-2 items-center">
                <Code2 size={18} /> Frontend
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Vite",
                  "JavaScript",
                  "Tailwind",
                  "HTML5",
                  "CSS3",
                ].map((s) => (
                  <SkillBadge key={s}>{s}</SkillBadge>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold text-blue-600 mb-3 flex gap-2 items-center">
                <Database size={18} /> Backend / DB
              </h3>

              <div className="flex flex-wrap gap-2">
                {["Supabase", "PostgreSQL", "Node.js"].map((s) => (
                  <SkillBadge key={s}>{s}</SkillBadge>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold text-blue-600 mb-3 flex gap-2 items-center">
                <Terminal size={18} /> Tools
              </h3>

              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Vercel", "VS Code"].map((s) => (
                  <SkillBadge key={s}>{s}</SkillBadge>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold mb-2">Idiomas</h3>
              <p className="text-sm text-slate-600">Español: Nativo</p>
              <p className="text-sm text-slate-600">Inglés: A2</p>
            </section>
          </aside>

          {/* MAIN */}
          <main className="md:col-span-2 space-y-8">
            {/* PERFIL */}
            <section>
              <h2 className="text-xl font-bold border-b pb-2 mb-3">
                Perfil Profesional
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Ingeniero de Sistemas enfocado en desarrollo de aplicaciones web
                modernas con React y Vite. Experiencia construyendo interfaces
                rápidas, consumo de APIs y backend serverless con Supabase.
                Apasionado por crear soluciones eficientes, escalables y con
                excelente experiencia de usuario.
              </p>
            </section>

            {/* PROYECTOS */}
            <section>
              <h2 className="text-xl font-bold border-b pb-2 mb-4">
                Proyectos Destacados
              </h2>

              <div className="space-y-6">
                {/* PROYECTO 1 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-slate-800">
                      App Control de Gastos
                    </h4>

                    <div className="flex gap-3">
                      <a
                        href="https://control-gastos-react-vite-one.vercel.app/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
                      >
                        Demo <ExternalLink size={14} />
                      </a>

                      <a
                        href="https://github.com/JairoDuenas/control_gastos-React-Vite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-slate-600 hover:underline"
                      >
                        Code <Github size={14} />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-3">
                    Aplicación web para gestión de finanzas personales con
                    autenticación, gráficos en tiempo real y almacenamiento en
                    base de datos.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <SkillBadge>React</SkillBadge>
                    <SkillBadge>Vite</SkillBadge>
                    <SkillBadge>Supabase</SkillBadge>
                    <SkillBadge>PostgreSQL</SkillBadge>
                  </div>
                </div>

                {/* PROYECTO 2 */}
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-slate-800">
                      Pokédex App
                    </h4>

                    <div className="flex gap-3">
                      <a
                        href="https://react-pokemons-gamma.vercel.app/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
                      >
                        Demo <ExternalLink size={14} />
                      </a>

                      <a
                        href="https://github.com/JairoDuenas/react-pokemons"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-slate-600 hover:underline"
                      >
                        Code <Github size={14} />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-3">
                    Aplicación interactiva para explorar Pokémon de la primera
                    generación con filtros dinámicos y diseño responsive.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <SkillBadge>React</SkillBadge>
                    <SkillBadge>API REST</SkillBadge>
                    <SkillBadge>Styled-components</SkillBadge>
                  </div>
                </div>
              </div>
            </section>

            {/* EXPERIENCIA */}
            <section>
              <h2 className="text-xl font-bold border-b pb-2 mb-3">
                Experiencia
              </h2>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Desarrollador Web Freelance</h4>

                  <p className="text-xs text-slate-500">2023 - Actualidad</p>

                  <p className="text-sm text-slate-600">
                    Desarrollo de aplicaciones web con React, integración con
                    APIs y despliegue en Vercel.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <footer className="mt-8 text-center text-slate-400 text-xs">
        <p>
          Generado con React + Vite + Tailwind CSS | {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};
