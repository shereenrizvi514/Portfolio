import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function MagneticButton({
  children,
  className,
  variant = "primary",
  as = "button",
  ...props
}) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.3}px)`;
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  }

  function handleClick(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.position = "absolute";
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.borderRadius = "9999px";
    ripple.style.background = "rgba(255,255,255,0.35)";
    ripple.style.transform = "scale(0)";
    ripple.style.opacity = "1";
    ripple.style.pointerEvents = "none";
    ripple.style.transition = "transform 0.6s ease, opacity 0.6s ease";
    el.appendChild(ripple);
    requestAnimationFrame(() => {
      ripple.style.transform = "scale(1)";
      ripple.style.opacity = "0";
    });
    setTimeout(() => ripple.remove(), 650);
    props.onClick?.(e);
  }

  const base =
    "relative isolate overflow-hidden inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-shadow duration-300";
  const variants = {
    primary:
      "bg-gradient-to-r from-electric via-cyan to-purple text-white shadow-[0_0_25px_-5px_rgba(59,130,246,0.7)] hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.8)]",
    ghost:
      "glass text-white hover:border-cyan/50 hover:shadow-[0_0_25px_-8px_rgba(34,211,238,0.6)]",
  };

  const Comp = motion[as] ?? motion.button;

  return (
    <Comp
      ref={ref}
      data-cursor="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileTap={{ scale: 0.96 }}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
