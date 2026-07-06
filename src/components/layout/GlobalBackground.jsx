import { useEffect, useRef } from "react";

// Lightweight canvas starfield — cheaper than a DOM node per star.
function StarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let raf;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.floor((canvas.width * canvas.height) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.8,
      }));
    }

    function draw(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#bcd4ff";
      for (const s of stars) {
        const twinkle = 0.5 + 0.5 * Math.sin(time * 0.001 * s.speed + s.phase);
        ctx.globalAlpha = 0.15 + twinkle * 0.55;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-30 opacity-70"
      aria-hidden="true"
    />
  );
}

export default function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-40 overflow-hidden bg-bg">
      {/* Base grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 75%)",
        }}
      />

      {/* Stars */}
      <StarCanvas />

      {/* Aurora / gradient mesh orbs — drift slowly, blurred */}
      <div className="absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full bg-electric/30 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-purple/25 blur-[130px] animate-float" />
      <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-cyan/20 blur-[110px] animate-float-slow" />

      {/* Mouse-reactive spotlight */}
      <div
        className="absolute inset-0 opacity-60 transition-opacity"
        style={{
          background:
            "radial-gradient(600px circle at calc(var(--mx, 0.5) * 100%) calc(var(--my, 0.5) * 100%), rgba(59,130,246,0.12), transparent 60%)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#050816_100%)]" />
    </div>
  );
}
