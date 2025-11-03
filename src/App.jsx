import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Process from './components/Process';
import ContactForm from './components/ContactForm';

export default function App() {
  // Custom cursor state
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, select');
      setHover(!!target);
    };
    const onOut = (e) => {
      const target = e.relatedTarget;
      if (!target || !(target instanceof Element)) setHover(false);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <div className="scroll-smooth bg-[#F8F8F8] text-[#1A1A1A]">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Process />
        <ContactForm />
      </main>
      <Footer />

      {/* Custom Cursor */}
      <div
        className="fixed top-0 left-0 z-50 pointer-events-none"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1A1A1A]/60 bg-white/30 backdrop-blur-sm transition-all duration-150`} 
          style={{ width: hover ? 36 : 18, height: hover ? 36 : 18 }}
        />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/50 border-b border-[#1A1A1A]/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-[6px] bg-[#1A1A1A]" />
          <span className="font-extrabold tracking-widest" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>KDK</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#o-que-fazemos" className="hover:opacity-70 transition">O que fazemos</a>
          <a href="#processo" className="hover:opacity-70 transition">Processo</a>
          <a href="#contato" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] text-white border border-[#1A1A1A]">Contato</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-[6px] bg-white" />
          <span className="font-extrabold tracking-widest">KDK</span>
        </div>
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} Kodiak Corporation. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
