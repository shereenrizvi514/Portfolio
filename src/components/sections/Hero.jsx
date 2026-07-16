import { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineDownload } from "react-icons/hi";
import { PROFILE } from "../../constants/data";
import MagneticButton from "../ui/MagneticButton";

const HeroScene = lazy(() => import("../three/HeroScene"));

function TypingHeadline({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[wordIndex];
    const speed = deleting ? 35 : 60;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-1 inline-block h-[1em] w-[3px] animate-pulse-glow bg-cyan align-middle" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20"
    >
      <Suspense fallback={null}>
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
          <HeroScene />
        </div>
      </Suspense>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-[0.2em] text-cyan"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            AVAILABLE FOR INTERNSHIPS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I'm {PROFILE.firstName}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 h-10 font-display text-2xl font-semibold sm:text-3xl"
          >
            <TypingHeadline words={PROFILE.taglineWords} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-white/60"
          >
            {PROFILE.role}. {PROFILE.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#contact"
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </MagneticButton>
            <MagneticButton as="a" href={PROFILE.resumeUrl} variant="ghost" download>
              <HiOutlineDownload /> Download CV
            </MagneticButton>
          </motion.div>
        </div>

        {/* Floating 3D glass card with profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 12 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-xs"
          style={{ perspective: "1000px" }}
        >
          <div className="glass animate-float relative aspect-[4/5] w-full rounded-[2rem] p-3 shadow-[0_30px_80px_-20px_rgba(59,130,246,0.45)]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-electric/20 via-transparent to-purple/20">
              <img
                src="/profile.png"
                alt={PROFILE.name}
                className="h-full w-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-bg-soft/90 px-4 py-3 font-mono text-xs text-cyan glow-border backdrop-blur">
              BS-AI · 4th semester
            </div>
            <div className="absolute -top-5 -right-4 rounded-2xl bg-bg-soft/90 px-4 py-3 font-mono text-xs text-purple glow-border backdrop-blur">
              {PROFILE.location}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 hover:text-cyan"
      >
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <HiArrowDown />
      </motion.a>
    </section>
  );
}
