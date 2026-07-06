import { motion } from "framer-motion";

export default function SectionHeading({ index, label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14 max-w-2xl"
    >
      <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-cyan/80">
        <span className="text-purple">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-cyan to-transparent" />
        <span className="uppercase">{label}</span>
      </div>
      <h2 className="text-4xl font-bold text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-white/60">{description}</p>
      )}
    </motion.div>
  );
}
