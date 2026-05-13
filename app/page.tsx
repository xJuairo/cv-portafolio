'use client';

import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import spotifyData from './data/spotify_stats.json';
import TerminalModal from '../components/TerminalModal';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/locale/translations';
import { useTheme } from '@/context/ThemeContext';

const maxMinutes = Math.max(...spotifyData.top_artists.map(a => a.minutes));

const FadeInView = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.8,
      delay: delay,
      ease: [0.21, 0.47, 0.32, 0.98]
    }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const { lang } = useLanguage();
  const dictionary = translations[lang];
  const { theme } = useTheme();
  return (
    <main className="min-h-screen bg-main text-text-primary p-6 md:p-12 md:py-20 font-sans selection:bg-accent selection:text-main transition-colors duration-300">
      <Navbar />

      {/* Contenedor Grid Principal */}
      <section id="experiencia">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

          {/* =========================================
              COLUMNA IZQUIERDA (Perfil y Stack)
              ========================================= */}
          <div className="lg:col-span-4 space-y-6">

            {/* Tarjeta de Perfil Principal */}
            <FadeInView delay={0.1}>
              <div className="bg-card border border-border-line rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 relative overflow-hidden group shadow-lg">
                {/* Brillo superior decorativo */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 group-hover:opacity-100 transition-opacity"></div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-2 tracking-tight transition-colors duration-300">
                  {dictionary.hero.firstName} <br /> {dictionary.hero.lastName}
                </h1>
                <h2 className="text-accent font-medium mb-8 uppercase tracking-wider text-sm transition-colors duration-300">
                  {dictionary.hero.subtitle}
                </h2>

                <div className="space-y-4 text-sm text-text-secondary transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-text-secondary opacity-70">📍</span>
                    <span>{dictionary.hero.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-text-secondary opacity-70">✉️</span>
                    <span className="hover:text-accent transition-colors cursor-pointer">{dictionary.hero.email}</span>
                  </div>
                </div>
              </div>
            </FadeInView>

            {/* Tarjeta de Educación */}
            <FadeInView delay={0.1}>
              <div className="bg-card border border-border-line rounded-2xl p-6 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-text-primary font-semibold mb-4 flex items-center gap-2 transition-colors duration-300">
                  <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] transition-colors duration-300"></span>
                  {dictionary.education.title}
                </h3>
                <div>
                  <h3 className="text-text-primary font-semibold transition-colors duration-300">{dictionary.education.university}</h3>
                  <h4 className="text-text-primary opacity-90 font-medium transition-colors duration-300">{dictionary.education.degree}</h4>
                  <p className="text-xs text-text-secondary mt-1 font-mono uppercase tracking-widest transition-colors duration-300">{dictionary.education.date}</p>
                </div>
              </div>
            </FadeInView>

            {/* Tarjeta de Stack Tecnológico */}
            <FadeInView delay={0.1}>
              <div className="bg-card border border-border-line rounded-2xl p-6 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-text-primary font-semibold mb-4 flex items-center gap-2 transition-colors duration-300">
                  <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] transition-colors duration-300"></span>
                  {dictionary.stack.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Spring Boot', 'Quarkus', 'AWS', 'Docker', 'Oracle DB PL/SQL', 'Neovim', 'Linux', 'Windows', 'Jenkins', 'Rancher', 'Git', 'Maven', 'Gradle', 'Vue.js', 'PrimeFaces', 'Angular', 'React', 'TypeScript', 'HTML5', 'CSS', 'JavaScript', 'JPA/Hibernate'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono border border-border-line rounded-md text-text-secondary bg-main hover:border-accent hover:text-accent transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>

          {/* =========================================
              COLUMNA DERECHA (Contenido Principal)
              ========================================= */}
          <div className="lg:col-span-8 space-y-6">

            {/* Tarjeta de Perfil Profesional */}
            <FadeInView delay={0.1}>
              <div className="bg-card border border-border-line rounded-2xl p-8 md:p-10 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-text-primary font-bold mb-6 text-xl tracking-tight transition-colors duration-300">{dictionary.profile.title}</h3>
                <div className="text-text-secondary leading-relaxed space-y-4 transition-colors duration-300">
                  <p>
                    {dictionary.profile.p1}
                  </p>
                  <p>
                    {dictionary.profile.p2}
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* Tarjeta de Experiencia */}
            <FadeInView delay={0.1}>
              <div className="bg-card border border-border-line rounded-2xl p-8 md:p-10 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-text-primary font-bold mb-8 text-xl tracking-tight transition-colors duration-300">{dictionary.experience.title}</h3>

                <div className="relative pl-6 border-l-2 border-border-line space-y-12 transition-colors duration-300">

                  {/* Trabajo 1 */}
                  <div className="relative group">
                    {/* Punto en la línea de tiempo */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-main border-2 border-border-line group-hover:border-accent group-hover:shadow-[0_0_12px_var(--color-accent)] transition-all duration-300"></div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
                      <h4 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">{dictionary.experience.gs.role}</h4>
                      <span className="text-accent text-sm font-mono mt-1 sm:mt-0 bg-accent/10 px-3 py-1 rounded-full transition-colors duration-300">
                        {dictionary.experience.gs.company} | {dictionary.experience.gs.date}
                      </span>
                    </div>

                    <ul className="list-disc list-outside ml-4 space-y-3 text-text-secondary marker:text-accent transition-colors duration-300">
                      {dictionary.experience.gs.bullets.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Trabajo 2 */}
                  <div className="relative group">
                    {/* Punto en la línea de tiempo */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-main border-2 border-border-line group-hover:border-accent group-hover:shadow-[0_0_12px_var(--color-accent)] transition-all duration-300"></div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
                      <h4 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">{dictionary.experience.inegi.role}</h4>
                      <span className="text-accent text-sm font-mono mt-1 sm:mt-0 bg-accent/10 px-3 py-1 rounded-full transition-colors duration-300">
                        {dictionary.experience.inegi.company} | {dictionary.experience.inegi.date}
                      </span>
                    </div>

                    <ul className="list-disc list-outside ml-4 space-y-3 text-text-secondary marker:text-accent transition-colors duration-300">
                      {dictionary.experience.inegi.bullets.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Galería de Proyectos */}
      <section id="proyectos">
        <div className="max-w-6xl mx-auto space-y-6 mt-6">
          <FadeInView delay={0.1}>
            <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-accent transition-colors duration-300"></span>
              {dictionary.projects.title}
            </h3>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(dictionary.projects.content).map((project: any, index: number) => (
              <FadeInView key={index} delay={0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative bg-card border border-border-line rounded-2xl p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_var(--color-accent)] flex flex-col justify-between h-full"
                >
                  {/* Contenido Superior */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h4>
                      {/* Ícono de Enlace Externo */}
                      <a href={project.link} className="text-text-secondary hover:text-accent transition-colors duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                    <p className="text-sm text-text-secondary mb-6 leading-relaxed transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Tecnologías del Proyecto */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech: string) => (
                      <span key={tech} className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono bg-main border border-border-line text-text-secondary rounded-md transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="sobre-mi" className="mt-20 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-accent transition-colors duration-300"></span>
          {dictionary.about.aboutMe.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Tarjeta de Biografía (Ocupa 2 columnas) */}
          <div className="md:col-span-2">
            <FadeInView delay={0.1}>
              <motion.div
                className="bg-card border border-border-line hover:border-accent/50 rounded-2xl p-8 transition-colors duration-300 h-full"
              >
                <h4 className="text-lg font-bold text-text-primary mb-4 transition-colors duration-300">{dictionary.about.aboutMe.subtitle}</h4>
                <div className="space-y-4 text-text-secondary leading-relaxed text-sm transition-colors duration-300">
                  <p>
                    {dictionary.about.aboutMe.p1}
                  </p>
                  <p>
                    {dictionary.about.aboutMe.p2}
                  </p>
                </div>
              </motion.div>
            </FadeInView>
          </div>

          {/* Tarjeta de Spotify Stats (Ocupa 1 columna) */}
          <FadeInView delay={0.1}>
            <motion.div
              className="bg-card border border-border-line hover:border-accent/50 rounded-2xl p-6 relative overflow-hidden group transition-colors duration-300 min-h-[350px] flex flex-col justify-between h-full"
            >
              {/* IMAGEN DE FONDO (El contorno neón) */}
              <div
                className="absolute -bottom-4 -right-4 w-96 h-96 opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  // 3. Reemplaza el asset duro azul por un ternary basado en el tema
                  // Usamos una sintaxis de "Map" para que el código sea limpio:
                  backgroundImage: `url('${{
                      dracula: '/top_artist_dracula.png',
                      coffee: '/top_artist_coffee.png',
                      light: '/top_artist_light.png',
                      neon: '/top_artist_neon.png'
                    }[theme] || '/top_artist_neon.png' // Default por seguridad
                    }')`,

                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom right',

                  // 4. IMPORTANTE: Quita mixBlendMode: 'screen'
                  // mixBlendMode: 'screen' -> ESTA CLASE SÓLO FUNCIONA EN TARJETAS NEGRAS. 
                  // Si la quitas, el Asset Swapping funcionará perfecto en el tema Light.

                  maskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 90%)',
                  WebkitMaskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 90%)'
                }}
              ></div>

              {/* Encabezado */}
              <div className="flex justify-between items-center relative z-10">
                <h4 className="text-sm font-bold text-text-primary uppercase tracking-widest transition-colors duration-300">
                  {dictionary.about.spotify.title}
                </h4>
                <i className="fa-brands fa-spotify text-[#1DB954] text-xl"></i>
              </div>

              <div className="space-y-4 relative z-10 mt-6">
                <div className="mb-6">
                  <p className="text-[10px] text-text-secondary uppercase tracking-widest transition-colors duration-300">{dictionary.about.spotify.totalMinutes}</p>
                  <p className="text-3xl font-bold text-text-primary transition-colors duration-300">
                    {spotifyData.total_minutes.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-text-secondary uppercase tracking-widest mb-3 transition-colors duration-300">{dictionary.about.spotify.topArtists}</p>

                  <div className="space-y-3">
                    {spotifyData.top_artists.map((artist, index) => {
                      const widthPercentage = (artist.minutes / maxMinutes) * 100;

                      return (
                        <div key={artist.name}>
                          <div className="flex justify-between text-xs text-text-primary opacity-90 mb-1 transition-colors duration-300">
                            <span className="font-medium drop-shadow-md">{artist.name}</span>
                            <span className="text-text-secondary">{(artist.minutes / 60).toFixed(0)} hrs</span>
                          </div>
                          <div className="w-full bg-main/80 rounded-full h-1.5 backdrop-blur-sm transition-colors duration-300">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${widthPercentage}%` }}
                              transition={{ duration: 1, delay: index * 0.15 }}
                              className="bg-accent h-1.5 rounded-full transition-colors duration-300"
                            ></motion.div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeInView>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-border-line pt-8 pb-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-0">

          {/* Izquierda: Copyright y Marca */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-text-primary font-bold tracking-wide flex items-center gap-2 transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-accent transition-colors duration-300"></span>
              JUL . dev
            </span>
            <p className="text-xs text-text-secondary transition-colors duration-300">
              © {new Date().getFullYear()} {dictionary.footer.copyright}
            </p>
          </div>

          {/* Centro: El guiño a Green IT y Stack */}
          <div className="text-center">
            <p className="text-[10px] text-text-secondary uppercase tracking-widest flex items-center justify-center gap-2 transition-colors duration-300">
              Construido con <span className="text-text-primary transition-colors duration-300">Next.js & Tailwind</span>
              <span className="text-accent transition-colors duration-300">|</span>
              <span className="text-green-500/80">🌿 Green IT Optimized</span>
            </p>
          </div>

          {/* Derecha: Enlaces Sociales */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/xJuairo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
              title="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/jairo-ulises-lopez-duron-1b5b322a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
              title="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="mailto:jairouliseslopezduron@gmail.com"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
              title="Enviar Correo"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>

        </div>
      </footer>

      <TerminalModal />
    </main>
  );
}