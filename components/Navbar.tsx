'use client';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { translations } from '@/locale/translations';

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const dictionary = translations[lang];

  const navItems = [
    { name: dictionary.nav.experience, href: '#experiencia' },
    { name: dictionary.nav.projects, href: '#proyectos' },
    { name: dictionary.nav.about, href: '#sobre-mi' },
    { name: '?', href: '#x' },
  ];

  const cycleTheme = () => {
    const themes: ('neon' | 'light' | 'dracula' | 'coffee')[] = ['neon', 'light', 'dracula', 'coffee'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // REF: Fondo y borde de la Navbar adaptables
      className="fixed top-0 left-0 w-full z-50 bg-main/80 backdrop-blur-lg border-b border-border-line transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand personal */}
        <div className="flex items-center gap-2">
          {/* REF: Punto animado en color de acento */}
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse transition-colors duration-300"></div>
          {/* REF: Nombre adaptable */}
          <span className="text-text-primary font-mono font-bold tracking-tighter transition-colors duration-300">JUL.dev</span>
        </div>

        {/* Links de navegación (Escritorio) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            if (item.name === '?') {
              return (
                <motion.a
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new Event('openTerminal'));
                  }}
                  onTap={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new Event('openTerminal'));
                  }}
                  // REF: El glow ahora usa el color de acento
                  whileHover={{ scale: 1.1, textShadow: "0px 0px 8px var(--color-accent)" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-xs text-accent transition-all duration-300 relative group font-mono font-bold flex items-center cursor-pointer"
                  title="Terminal de comandos oculta"
                >
                  <span className="leading-none">{'>'}</span>
                  <span className="animate-pulse leading-none ml-[2px]">_</span>
                  {/* REF: Línea inferior adaptable */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              );
            }
            return (
              <a
                key={item.name}
                href={item.href}
                // REF: Textos de los links adaptables
                className="text-xs uppercase tracking-[0.2em] text-text-secondary hover:text-accent transition-all duration-300 relative group"
              >
                {item.name}
                {/* REF: Línea inferior adaptable */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          })}
        </div>

        {/* =========================================
            CONTROLES Y BOTONES (Agrupados a la derecha)
            ========================================= */}
        <div className="flex items-center gap-3">

          {/* 1. CLON DE LA TERMINAL: Solo visible en Móvil */}
          <motion.a
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event('openTerminal'));
            }}
            onTap={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event('openTerminal'));
            }}
            whileHover={{ scale: 1.1, textShadow: "0px 0px 8px var(--color-accent)" }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-xs text-accent transition-all duration-300 font-mono font-bold flex items-center cursor-pointer px-2"
          >
            <span>{'>'}</span>
            <span className="animate-pulse ml-[2px]">_</span>
          </motion.a>

          {/* 2. Botón de Descargar CV */}
          <motion.a
            href={`/${dictionary.files.cv}`}
            download={dictionary.files.cv_dl}
            whileHover={{
              scale: 1.05,
              // REF: El glow y fondo hover ahora usan el color de acento
              boxShadow: "0px 0px 15px var(--color-accent)",
              backgroundColor: "var(--color-accent)"
            }}
            whileTap={{ scale: 0.95 }}
            // REF: Colores y bordes adaptables
            className="px-4 py-1.5 border border-accent text-accent rounded-full text-xs font-bold tracking-wide transition-colors duration-300 hover:text-main"
          >
            {dictionary.nav.downloadCV}
          </motion.a>

          {/* 3. BOTÓN DE TEMA */}
          <motion.button
            onClick={cycleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // REF: Colores adaptables
            className="p-1.5 rounded-full border border-border-line text-text-secondary hover:text-accent hover:border-accent transition-colors duration-300 flex items-center justify-center"
            title="Cambiar Tema"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.53-.21-1.04-.59-1.41C13.54 17.72 13.38 17.2 13.38 17c0-.55.45-1 1-1h1.12c3.59 0 6.5-2.91 6.5-6.5C22 4.91 17.52 2 12 2z"></path>
              <circle cx="6.5" cy="9.5" r="1.5"></circle>
              <circle cx="10.5" cy="6.5" r="1.5"></circle>
              <circle cx="14.5" cy="6.5" r="1.5"></circle>
              <circle cx="18.5" cy="10.5" r="1.5"></circle>
            </svg>
          </motion.button>

          {/* 4. Botón de Idioma */}
          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // REF: Colores adaptables
            className="px-3 py-1.5 rounded-full border border-border-line text-xs font-bold tracking-widest text-text-secondary hover:text-text-primary hover:border-accent transition-colors duration-300 flex items-center gap-2"
          >
            {/* REF: Ícono de mundo adaptable */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent transition-colors duration-300">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            {lang === 'es' ? 'EN' : 'ES'}
          </motion.button>

        </div>
      </div>
    </motion.nav>
  );
}