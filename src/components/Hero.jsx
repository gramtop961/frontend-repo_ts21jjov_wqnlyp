import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function TopographicBackground({ intensity = 12 }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setOffset({ x, y });
    };

    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  const layer = (depth, opacity) => (
    <div
      key={depth}
      className="absolute inset-0"
      style={{
        transform: `translate3d(${offset.x * intensity * depth}px, ${offset.y * intensity * depth}px, 0)`,
        transition: 'transform 0.08s linear',
      }}
    >
      <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`grad-${depth}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1A1A1A" stopOpacity={opacity} />
            <stop offset="100%" stopColor="#1A1A1A" stopOpacity={opacity * 0.6} />
          </linearGradient>
        </defs>
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M 0 ${100 + i * 80} C 300 ${40 + i * 80}, 900 ${160 + i * 80}, 1200 ${100 + i * 80}`}
            fill="none"
            stroke={`url(#grad-${depth})`}
            strokeWidth={1.2}
            strokeLinecap="round"
            opacity={opacity}
          />
        ))}
      </svg>
    </div>
  );

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden>
      {layer(0.2, 0.20)}
      {layer(0.6, 0.14)}
      {layer(1.0, 0.10)}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-[#F8F8F8] text-[#1A1A1A]">
      <TopographicBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F8F8]/70 via-[#F8F8F8]/40 to-[#F8F8F8] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#1A1A1A]/10 bg-white/60 backdrop-blur"
        >
          <div className="h-2 w-2 rounded-full bg-[#1A1A1A]" />
          <span className="text-xs tracking-widest uppercase">Kodiak Corporation</span>
          <div className="h-2 w-2 rounded-full bg-[#1A1A1A]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: 'easeOut' }}
          className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          style={{ fontFamily: 'Manrope, Inter, system-ui' }}
        >
          Transformando Influência em Marcas.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
          className="mt-4 text-lg md:text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto"
        >
          Desenvolvemos e operamos marcas sob medida para influenciadores. Você foca na imagem; nós cuidamos do resto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a href="#contato" className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1A1A1A] text-white border border-[#1A1A1A]">
            <span className="font-medium">Quero ser parceiro</span>
            <span className="h-2 w-2 rounded-full bg-white group-hover:scale-150 transition-transform" />
          </a>
          <a href="#processo" className="px-6 py-3 rounded-full border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors">
            Como funciona
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-14 flex items-center justify-center"
        >
          <BearMark />
        </motion.div>
      </div>
    </section>
  );
}

function BearMark() {
  // Geometric/line-art bear logomark
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="opacity-80">
      <g stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 80 C 40 30, 90 20, 140 40" />
        <path d="M140 40 C 160 30, 185 35, 190 55" />
        <path d="M30 90 C 60 70, 120 70, 170 85" />
        <path d="M40 70 L 50 55 L 70 50 L 85 60 L 95 75" />
        <circle cx="155" cy="50" r="3" fill="#1A1A1A" />
        <path d="M120 45 L 135 55 L 150 60" />
      </g>
      <text x="100" y="110" textAnchor="middle" fill="#1A1A1A" fontFamily="Manrope, Inter, system-ui" fontSize="14" letterSpacing="3">
        K D K
      </text>
    </svg>
  );
}
