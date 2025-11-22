import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import SkillPill from "./components/SkillPill.jsx";
import ContactCard from "./components/ContactCard.jsx";
import ConstellationBG from "./components/ConstellationBG.jsx";

import { motion } from "framer-motion";

import {
  Workflow, Bot, Braces, Code2, Server, Database, LineChart,
  FileCode2, Globe, FlaskConical, Gitlab, KanbanSquare, ClipboardList,
  Terminal, Sheet
} from "lucide-react";

const projects = [
  {
    title: "Automatización de procesos con n8n + IA",
    role: "Automatización / Integración IA",
    year: "2022",
    description:
      "Diseño y construcción de flujos automatizados con n8n para procesos internos, consumo de APIs y envío automático de reportes. Creación de GPTs conectados a n8n para ejecutar tareas, consultar sistemas y procesar datos en tiempo real.",
    tags: ["n8n", "GPTs", "APIs", "Automatización"],
    demo: "",
    repo: "",
  },
  {
    title: "Dashboards y ETL en Power BI",
    role: "Data Analyst / BI Developer",
    year: "2022",
    description:
      "Análisis y visualización de datos con Power BI. Procesos ETL y automatización de reportes para requerimientos internos/externos, mejorando la eficiencia en generación de informes.",
    tags: ["Power BI", "ETL", "Excel", "Data Vizualization"],
    demo: "",
    repo: "",
  },
  {
    title: "Desarrollo Web Back-end (Node/Express)",
    role: "Back-end Developer",
    year: "2021",
    description:
      "Desarrollo de módulos y APIs REST usando Node.js y Express. Integración con MySQL y MongoDB, uso de Postman, Git y maquetación web a partir de diseños establecidos.",
    tags: ["Node.js", "Express", "MySQL", "MongoDB", "REST"],
    demo: "",
    repo: "",
  },
];

const skills = [
  { name: "Automatización con n8n", icon: Workflow },
  { name: "Integración IA + GPTs", icon: Bot },
  { name: "JavaScript", icon: Braces },
  { name: "Python", icon: Code2 },
  { name: "Node.js / Express / NestJS", icon: Server },
  { name: "SQL / PL-SQL", icon: Database },
  { name: "Power BI / ETL", icon: LineChart },
  { name: "MySQL / MongoDB / SQL Server", icon: Database },
  { name: "HTML", icon: FileCode2 },
  { name: "CSS", icon: Globe },
  { name: "Postman", icon: FlaskConical },
  { name: "GitLab", icon: Gitlab },
  { name: "JIRA", icon: ClipboardList },
  { name: "SCRUM", icon: ClipboardList },
  { name: "Kanban", icon: KanbanSquare },
  { name: "Linux Server", icon: Terminal },
  { name: "Excel Avanzado", icon: Sheet },
];

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink relative">
      <ConstellationBG opacity={0.10} density={0.20} speed={0.40} linkDist={160} />

      <div className="relative z-10">
        <Navbar />

        {/* HERO */}
        <Section
          id="home"
          title="Hola, soy Jose Carlos Martínez 👋"
          subtitle="Ingeniero de Sistemas enfocado en automatización con IA, desarrollo web y analítica de datos."
        >
          <div className="grid md:grid-cols-5 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3 bg-white rounded-xl2 p-6 shadow-soft border border-black/5"
            >
              <p className="text-muted text-sm">Resumen</p>
              <h1 className="text-3xl md:text-4xl font-semibold mt-2 leading-tight">
                Automatizo procesos con <span className="text-primary">IA + n8n</span>, desarrollo soluciones web y construyo dashboards útiles.
              </h1>
              <p className="mt-4 text-muted leading-relaxed">
                Tengo experiencia creando flujos automatizados, GPTs personalizados conectados a APIs,
                y visualizaciones con Power BI. También he trabajado como docente de Python y JavaScript.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a href="#projects" className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primaryDark transition">
                  Ver proyectos
                </a>
                <a href="#contact" className="px-4 py-2 rounded-lg bg-card2 hover:bg-card transition">
                  Contacto
                </a>
              </div>
            </motion.div>

            <div className="md:col-span-2 grid gap-4">
              <div className="bg-card rounded-xl2 p-5 shadow-soft border border-black/5">
                <p className="text-sm text-muted">Experiencia</p>
                <p className="text-2xl font-semibold mt-1">+3 años</p>
                <p className="text-sm text-muted mt-2">Automatización / Backend / BI</p>
              </div>
              <div className="bg-card rounded-xl2 p-5 shadow-soft border border-black/5">
                <p className="text-sm text-muted">Stack</p>
                <p className="mt-1 font-medium">n8n · GPTs · Node.js · Power BI</p>
                <p className="mt-1 font-medium">Python · SQL · MongoDB · MySQL</p>

              </div>
              <div className="bg-card rounded-xl2 p-5 shadow-soft border border-black/5">
                <p className="text-sm text-muted">Disponibilidad</p>
                <p className="mt-1 font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-tealSoft mr-2" />
                  Freelance / Tiempo completo
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* ABOUT */}
        <Section
          id="about"
          title="Sobre mí"
          subtitle="Un poco de contexto, lo que hago y cómo trabajo."
        >
          <div className="bg-white rounded-xl2 p-6 shadow-soft border border-black/5 grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2">
              <p className="leading-relaxed text-muted">
                Soy Ingeniero de Sistemas con experiencia en desarrollo web, automatización de procesos con n8n,
                integración de GPTs personalizados y análisis/visualización de datos.
              </p>
              <p className="leading-relaxed text-muted mt-3">
                Me caracterizo por ser proactivo, analítico y orientado a resultados. Me adapto rápido a entornos dinámicos
                y disfruto crear soluciones eficientes que reduzcan carga operativa y mejoren la toma de decisiones.
              </p>

            </div>
            <div className="bg-card rounded-xl2 p-5">
              <p className="text-sm text-muted">Ubicación</p>
              <p className="font-medium mt-1">Colombia / Remoto</p>
              <p className="text-sm text-muted mt-4">Idiomas</p>
              <p className="font-medium mt-1">Español · Inglés</p>
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          title="Proyectos destacados"
          subtitle="Algunos trabajos recientes."
        >
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map(p => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section
          id="skills"
          title="Skills"
          subtitle="Herramientas."
        >
          <div className="grid md:grid-cols-3 gap-3">
            {skills.map(s => (
              <SkillPill key={s.name} skill={s} />
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          title="Contacto"
          subtitle="¿Hacemos algo juntos?"
        >
          <ContactCard />
        </Section>

        <footer className="py-8 text-center text-sm text-muted">
          Hecho con React · Vite · Tailwind · Framer Motion
        </footer>
      </div>
    </div>
  );
}
