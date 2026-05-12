'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = [
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: '?', href: '#x' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#050505]/70 backdrop-blur-lg border-b border-slate-800/50"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/*Brand personal */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></div>
          <span className="text-white font-mono font-bold tracking-tighter">JUL.dev</span>
        </div>
        {/*Links de navegación*/}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => {
            if (item.name === '?') {
              return (
                <motion.a
                  key={item.name}
                  // Cambiamos el href por el onClick
                  onClick={(e) => {
                    e.preventDefault(); // Evitamos que salte la página
                    window.dispatchEvent(new Event('openTerminal')); // ¡Disparamos el evento!
                  }}
                  whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(0, 209, 255, 0.8)" }}
                  className="text-xs text-electric-blue transition-all duration-300 relative group font-mono font-bold flex items-center cursor-pointer"
                  title="Terminal de comandos oculta"
                >
                  <span className="leading-none">{'>'}</span>
                  <span className="animate-pulse leading-none ml-[2px]">_</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              );
            }
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-electric-blue transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          })}
        </div>
        <motion.a
          href="/cv_jairo_lopez.pdf" // Asegúrate de que el nombre coincida con tu archivo
          download="CV_Jairo_Lopez_Duron.pdf" // El nombre con el que se guardará al descargar
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(0, 209, 255, 0.4)",
            backgroundColor: "rgba(0, 209, 255, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 border border-[#00D1FF] text-[#00D1FF] rounded-lg text-sm font-bold tracking-wide transition-colors hover:text-white"
        >
          Descargar CV
        </motion.a>
        {/* Botón de Contacto Rápido / Idioma */}
        <button className="px-4 py-1.5 border border-electric-blue/30 rounded-full text-[10px] uppercase tracking-widest text-electric-blue hover:bg-electric-blue/10 transition-colors">
          English
        </button>
      </div>
    </motion.nav>
  );
}
