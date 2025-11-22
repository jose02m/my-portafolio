import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: "0 14px 40px rgba(18, 13, 38, 0.10)" }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="bg-card rounded-xl2 p-5 shadow-soft border border-black/5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="text-muted text-sm mt-1">{project.role}</p>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-purple-400 border border-black/5">
          {project.year}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map(t => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full bg-card2 text-ink/80 border border-black/5"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-2">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="text-sm px-3 py-2 rounded-lg bg-primary text-white hover:bg-primaryDark transition"
          >
            Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            className="text-sm px-3 py-2 rounded-lg bg-white border border-black/10 hover:bg-card2 transition"
          >
            Código
          </a>
        )}
      </div>
    </motion.article>
  );
}
