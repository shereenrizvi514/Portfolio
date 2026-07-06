import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_LINKS, PROFILE } from "../../constants/data";
import useActiveSection from "../../hooks/useActiveSection";
import { cn } from "../../utils/cn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
  const active = useActiveSection(ids);

  function handleClick(href) {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav className="glass flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-3 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]">
        <a
          href="#home"
          data-cursor="hover"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="font-display text-lg font-bold tracking-tight text-white"
        >
          {PROFILE.firstName}
          <span className="text-cyan">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-cursor="hover"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-white" : "text-white/50 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          data-cursor="hover"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#contact");
          }}
          className="hidden rounded-full bg-gradient-to-r from-electric to-purple px-5 py-2 text-sm font-semibold text-white shadow-[0_0_20px_-4px_rgba(59,130,246,0.7)] md:inline-flex"
        >
          Let's Talk
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="glass absolute left-4 right-4 top-[4.2rem] rounded-2xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
