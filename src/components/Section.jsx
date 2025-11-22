import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14 md:py-18">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted mt-2 max-w-2xl">{subtitle}</p>
          )}
        </div>
        {children}
      </motion.div>
    </section>
  );
}
