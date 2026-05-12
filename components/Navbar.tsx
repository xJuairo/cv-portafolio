'use client';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { translations } from '@/locale/translations';

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();

  const dictionary = translations[lang];

  const navItems = [
    { name: dictionary.nav.experience, href: '#experiencia' },
    { name: dictionary.nav.projects, href: '#proyectos' },
    { name: dictionary.nav.about, href: '#sobre-mi' },
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
                  onTap={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new Event('openTerminal'));
                  }}
                  whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(0, 209, 255, 0.8)" }}
                  whileTap={{ scale: 0.9 }}
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
        {/* CLON DE LA TERMINAL: Solo visible en Móvil */}
        <motion.a
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event('openTerminal'));
          }}
          onTap={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event('openTerminal'));
          }}
          className="md:hidden text-xs text-electric-blue font-mono font-bold flex items-center cursor-pointer px-2"
        >
          <span>{'>'}</span>
          <span className="animate-pulse ml-[2px]">_</span>
        </motion.a>
        <motion.a
          href={`/${dictionary.files.cv}`}
          download={dictionary.files.cv_dl}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(0, 209, 255, 0.4)",
            backgroundColor: "rgba(0, 209, 255, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 border border-[#00D1FF] text-[#00D1FF] rounded-lg text-sm font-bold tracking-wide transition-colors hover:text-white"
        >
          {dictionary.nav.downloadCV}
        </motion.a>
        {/* Botón de Contacto Rápido / Idioma */}
        <motion.button
          onClick={toggleLanguage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-1.5 rounded-full border border-slate-700 text-xs font-bold tracking-widest text-slate-300 hover:text-white hover:border-electric-blue transition-colors flex items-center gap-2"
        >
          {/* Un ícono de mundo clásico */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-blue">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          {/* Si está en español, el botón sugiere cambiar a EN, y viceversa */}
          {lang === 'es' ? 'EN' : 'ES'}
        </motion.button>
      </div>
    </motion.nav>
  );
}
