import { useEffect, useRef } from "react";

/**
 * Fondo tipo constelación sutil.
 */
export default function ConstellationBG({
  opacity = 0.14,   // súbelo a 0.18 si quieres más visible
  density = 0.6,
  speed = 0.25,
  linkDist = 140,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // ✅ define primero makeParticle (para no romper)
    const makeParticle = (w, h) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      r: Math.random() * 1.6 + 0.6,
    });

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(
        window.devicePixelRatio, 0,
        0, window.devicePixelRatio,
        0, 0
      );

      const area = w * h;
      const count = Math.max(30, Math.floor((area / 100000) * density * 100));
      particlesRef.current = Array.from({ length: count }, () =>
        makeParticle(w, h)
      );
    };

    const tick = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const particles = particlesRef.current;

      ctx.clearRect(0, 0, w, h);

      // Fondo suave con gradiente (sutil)
      const grad = ctx.createRadialGradient(w * 0.8, h * 0.1, 0, w * 0.8, h * 0.1, w);
      grad.addColorStop(0, `rgba(119,107,200, ${opacity * 0.35})`);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Mover partículas
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      // Líneas entre partículas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * opacity;
            ctx.strokeStyle = `rgba(119,107,200, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Puntos
      for (const p of particles) {
        ctx.fillStyle = `rgba(150,178,183, ${opacity * 1.8})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [opacity, density, speed, linkDist]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
