import { useRef } from "react";
import { cn } from "../../utils/cn";

export default function TiltCard({ children, className, intensity = 10 }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * intensity}deg) rotateY(${
      px * intensity
    }deg) translateZ(10px)`;
    el.style.setProperty("--gx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(py + 0.5) * 100}%`);
  }

  function handleLeave() {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative transition-transform duration-300 ease-out will-change-transform",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(500px circle at var(--gx, 50%) var(--gy, 50%), rgba(59,130,246,0.12), transparent 60%)",
      }}
    >
      {children}
    </div>
  );
}
