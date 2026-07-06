import { motion } from "framer-motion";
import { FiGithub, FiMail, FiArrowUp } from "react-icons/fi";
import { PROFILE } from "../../constants/data";

const SOCIALS = [
  { icon: FiGithub, href: PROFILE.github, label: "GitHub" },
  { icon: FiMail, href: `mailto:${PROFILE.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-xs text-white/40">
          © {new Date().getFullYear()} {PROFILE.name} · Built with React, Three.js
          & a lot of coffee
        </p>

        <div className="flex items-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              data-cursor="hover"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:-translate-y-1 hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_18px_-4px_rgba(34,211,238,0.7)]"
            >
              <s.icon />
            </a>
          ))}

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -3 }}
            aria-label="Back to top"
            data-cursor="hover"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-purple text-white shadow-[0_0_20px_-4px_rgba(59,130,246,0.8)]"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
