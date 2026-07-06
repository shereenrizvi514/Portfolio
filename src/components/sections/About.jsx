import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { PROFILE, STATS } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="text-gradient text-4xl font-bold sm:text-5xl">
      {display}+
    </span>
  );
}

const ABOUT_DETAILS = [
  { label: "Name", value: PROFILE.name },
  { label: "University", value: PROFILE.university },
  { label: "Degree", value: PROFILE.degree },
  { label: "Semester", value: PROFILE.semester },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="Profile"
          title="A student who'd rather build than just study."
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-white/70">{PROFILE.bio}</p>

            <div className="glass grid grid-cols-1 gap-4 rounded-2xl p-6 sm:grid-cols-2">
              {ABOUT_DETAILS.map((detail) => (
                <div
                  key={detail.label}
                  className="transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-sm text-white/80">{detail.value}</p>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                Currently Learning
              </p>
              <p className="mt-2 text-white/80">
                Studying Artificial Intelligence at Pak Austria Fachhochschule,
                building independent projects alongside coursework, and open
                to internship opportunities in AI or web development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-5"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center transition-transform hover:-translate-y-1"
              >
                <Counter value={stat.value} />
                <p className="mt-2 text-xs uppercase tracking-wide text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
