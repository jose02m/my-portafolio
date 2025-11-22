import { motion } from "framer-motion";

const links = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur bg-bg/70 border-b border-black/5"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg">
          <span className="text-primary">Mi</span>Portafolio
        </a>
        <div className="hidden md:flex gap-2">
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="px-3 py-1.5 rounded-full text-sm text-muted hover:text-ink hover:bg-card2 transition"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-full bg-primary text-white shadow-soft hover:bg-primaryDark transition"
        >
          Hablemos
        </a>
      </div>
    </motion.nav>
  );
}
