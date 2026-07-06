import { motion } from "framer-motion";
import { EXPERIENCE } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="03"
          label="Track Record"
          title="Experience & Education"
        />

        <div className="relative ml-3 border-l border-white/10 pl-10">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative pb-14 last:pb-0"
            >
              <span className="absolute -left-[3.05rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-bg-soft ring-4 ring-bg">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-electric to-purple shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
              </span>

              <p className="font-mono text-xs tracking-[0.15em] text-cyan">
                {item.date}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-purple">{item.org}</p>

              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-white/60"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
