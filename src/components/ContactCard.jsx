import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const socials = [
  {
    name: "Email",
    href: "mailto:martinezblanco2306@gmail.com",
    Icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://co.linkedin.com/in/jose-carlos-martinez-blanco-26a2281b5",
    Icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/jose02m",
    Icon: Github,
  },
];

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-start gap-6"
    >
      {/* Íconos circulares */}
      <div className="flex justify-center w-full gap-6 md:gap-8 mb-2">
        {socials.map(({ name, href, Icon }) => (
          <motion.a
            key={name}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group w-14 h-14 rounded-full bg-white border border-black/5 shadow-soft 
                       grid place-items-center transition hover:bg-card2"
            aria-label={name}
            title={name}
          >
            <Icon className="w-6 h-6 text-primary group-hover:text-primaryDark transition" />
          </motion.a>
        ))}
      </div>

      {/* Formulario (lo mantenemos igual) */}
      <div className="w-full bg-white rounded-xl2 p-5 shadow-soft border border-black/5">
        <p className="text-sm text-muted mb-2">Mensaje rápido</p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid md:grid-cols-3 gap-3"
        >
          <input
            className="md:col-span-1 px-3 py-2 rounded-lg bg-card2 border border-black/5 outline-none focus:ring-4 focus:ring-ringSoft"
            placeholder="Tu nombre"
          />
          <input
            className="md:col-span-1 px-3 py-2 rounded-lg bg-card2 border border-black/5 outline-none focus:ring-4 focus:ring-ringSoft"
            placeholder="Tu email"
          />
          <input
            className="md:col-span-1 px-3 py-2 rounded-lg bg-card2 border border-black/5 outline-none focus:ring-4 focus:ring-ringSoft"
            placeholder="Asunto"
          />
          <textarea
            rows="4"
            className="md:col-span-3 px-3 py-2 rounded-lg bg-card2 border border-black/5 outline-none focus:ring-4 focus:ring-ringSoft"
            placeholder="Cuéntame sobre tu proyecto…"
          />
          <button className="md:col-span-3 justify-self-start px-4 py-2 rounded-lg bg-primary text-white hover:bg-primaryDark transition">
            Enviar
          </button>
        </form>
        <p className="text-xs text-muted mt-2">
          (Form demo: aquí puedes conectar EmailJS, Formspree, etc.)
        </p>
      </div>
    </motion.div>
  );
}
