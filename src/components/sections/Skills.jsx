import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SKILL_CATEGORIES } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";
import TiltCard from "../ui/TiltCard";

function CircularProgress({ value, size = 84, stroke = 6, color = "#22d3ee" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg ref={ref} width={size} height={size} className="-rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={inView ? offset : circumference}
        style={{
          transition: "stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)",
          filter: `drop-shadow(0 0 6px ${color}90)`,
        }}
      />
    </svg>
  );
}

function SkillBar({ name, level }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-white/80">{name}</span>
        <span className="font-mono text-xs text-cyan">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-electric via-cyan to-purple shadow-[0_0_10px_rgba(34,211,238,0.6)]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const categories = useMemo(() => ["All", ...SKILL_CATEGORIES.map((c) => c.category)], []);
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === filter);

  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          label="Capabilities"
          title="What I work with."
          description="A growing toolkit spanning languages, tools, and the professional habits that make a project actually ship."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-cursor="hover"
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? "border-cyan/50 bg-cyan/10 text-cyan shadow-[0_0_20px_-6px_rgba(34,211,238,0.7)]"
                  : "border-white/10 text-white/50 hover:border-white/25 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {visible.map((group) => {
            const avg = Math.round(
              group.skills.reduce((sum, s) => sum + s.level, 0) / group.skills.length
            );
            return (
              <TiltCard key={group.category} className="glass rounded-2xl p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                  <div className="relative h-[84px] w-[84px]">
                    <CircularProgress value={avg} />
                    <span className="absolute inset-0 flex items-center justify-center font-mono text-sm text-white">
                      {avg}%
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
