import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "Shereen picked up our design system fast and shipped the author profile page with details we hadn't even specified — the theme switcher and image upload were her own additions.",
    author: "Web Development Team",
    role: "Furson Studio",
  },
  {
    quote:
      "She's the one who ends up debugging everyone else's C++ segfaults during group projects, and still explains the fix without making you feel bad about it.",
    author: "Course Project Teammate",
    role: "BS-AI, Pak Austria Fachhochschule",
  },
  {
    quote:
      "Reliable and fast — gave her a rough brief for a book detail page and she came back with theme switching and parental guidance notes we hadn't asked for.",
    author: "Project Supervisor",
    role: "Furson Studio",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  function go(dir) {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          index="06"
          label="Kind Words"
          title="What people say."
        />

        <div className="glass relative mx-auto min-h-[220px] rounded-2xl p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg leading-relaxed text-white/80">
                "{current.quote}"
              </p>
              <p className="mt-6 font-semibold text-cyan">{current.author}</p>
              <p className="text-sm text-white/50">{current.role}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => go(-1)}
            data-cursor="hover"
            aria-label="Previous testimonial"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 p-2 text-white/50 hover:border-cyan/50 hover:text-cyan"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => go(1)}
            data-cursor="hover"
            aria-label="Next testimonial"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 p-2 text-white/50 hover:border-cyan/50 hover:text-cyan"
          >
            <FiChevronRight />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-cyan" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
