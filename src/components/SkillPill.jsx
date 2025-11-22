import { motion } from "framer-motion";

export default function SkillPill({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl2 bg-white border border-black/5 shadow-soft"
    >
      <div className="w-10 h-10 rounded-xl bg-card2 flex items-center justify-center">
        {Icon ? (
          <Icon className="w-5 h-5 text-primary" />
        ) : (
          <span className="text-primary font-semibold">★</span>
        )}
      </div>

      <span className="font-medium text-sm md:text-base">
        {skill.name}
      </span>
    </motion.div>
  );
}
