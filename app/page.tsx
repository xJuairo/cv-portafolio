'use client';

import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import spotifyData from './data/spotify_stats.json';
import TerminalModal from '../components/TerminalModal';

const maxMinutes = Math.max(...spotifyData.top_artists.map(a => a.minutes));

const FadeInView = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.8,
      delay: delay,
      ease: [0.21, 0.47, 0.32, 0.98] // Un "ease" tipo entrada premium
    }}
  >
    {children}
  </motion.div>
);

const projects = [
  {
    title: "Business Rules Engine",
    description: "Motor de reglas dinámico diseñado para desacoplar la lógica de negocio compleja del core del sistema. Ideal para entornos financieros que requieren alta flexibilidad y mantenibilidad.",
    tech: ["Java", "Spring Boot", "Design Patterns"],
    link: "https://github.com/xJuairo/business-rules-engine" // Tu link real
  },
  {
    title: "Java Virtual Threads Manager",
    description: "Gestor de concurrencia avanzada utilizando Virtual Threads (Project Loom). Optimización masiva de rendimiento en el manejo de tareas I/O intensivas para microservicios escalables.",
    tech: ["Java 21", "Performance Tuning", "Concurrency"],
    link: "#" // Para cuando lo subas
  },
  {
    title: "Green IT Portfolio",
    description: "Este sitio web: desarrollado con un enfoque en eficiencia de recursos, animaciones optimizadas con Framer Motion y una arquitectura limpia en Next.js.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 p-6 md:p-12 md:py-20 font-sans selection:bg-[#0f6475] selection:text-black">
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
              <div className="bg-[#0a0a0a] border border-slate-800 rounded-2xl p-8 hover:border-electric-blue/40 transition-all duration-300 relative overflow-hidden group shadow-lg">
                {/* Brillo superior decorativo */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-40 group-hover:opacity-100 transition-opacity"></div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                  Jairo Ulises <br /> López Durón
                </h1>
                <h2 className="text-electric-blue font-medium mb-8 uppercase tracking-wider text-sm">
                  Ingeniero en Sistemas Computacionales
                </h2>

                <div className="space-y-4 text-sm text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-600">📍</span>
                    <span>Aguascalientes, México</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-600">✉️</span>
                    <span className="hover:text-electric-blue transition-colors cursor-pointer">jairouliseslopezduron@gmail.com</span>
                  </div>
                </div>
              </div>
            </FadeInView>

            {/* Tarjeta de Educación */}
            <FadeInView delay={0.2}>
              <div className="bg-[#0a0a0a] border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-electric-blue shadow-[0_0_8px_rgba(0,242,255,0.8)]"></span>
                  Educación
                </h3>
                <div>
                  <h3 className="text-white font-semibold">Universidad Autónoma de Aguascalientes</h3>
                  <h4 className="text-slate-200 font-medium">Licenciatura en Ingeniería en Sistemas</h4>
                  <p className="text-xs text-slate-500 mt-1 font-mono uppercase tracking-widest">Agosto 2019 · Diciembre 2024</p>
                </div>
              </div>
            </FadeInView>

            {/* Tarjeta de Stack Tecnológico */}
            <FadeInView delay={0.3}>
              <div className="bg-[#0a0a0a] border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-electric-blue shadow-[0_0_8px_rgba(0,242,255,0.8)]"></span>
                  Stack & Herramientas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Spring Boot', 'Quarkus', 'AWS', 'Docker', 'Oracle DB PL/SQL', 'Neovim', 'Linux', 'Windows', 'Jenkins', 'Rancher', 'Git', 'Maven', 'Gradle', 'Vue.js', 'PrimeFaces', 'Angular', 'React', 'TypeScript', 'HTML5', 'CSS', 'JavaScript', 'JPA/Hibernate'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono border border-slate-800 rounded-md text-slate-400 bg-black hover:border-electric-blue hover:text-electric-blue transition-colors cursor-default"
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
            <FadeInView delay={0.4}>
              <div className="bg-[#0a0a0a] border border-slate-800 rounded-2xl p-8 md:p-10 hover:border-slate-700 transition-all duration-300">
                <h3 className="text-white font-bold mb-6 text-xl tracking-tight">Perfil Profesional</h3>
                <div className="text-slate-400 leading-relaxed space-y-4">
                  <p>
                    Desarrollador Full Stack con experiencia en el sector bancario y estadístico, especializado en el desarrollo y mantenimiento de microservicios API REST, SOAP, gRPC y Web Services
                  </p>
                  <p>
                    Habilidad en el análisis y resolución de problemas, algoritmos, modelado de datos. Organizado y promotor del uso de las buenas prácticas en el desarrollo de software. Fuertes conocimientos en programación, bases de datos relacionales/no relacionales.
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* Tarjeta de Experiencia */}
            <FadeInView delay={0.5}>
              <div className="bg-[#0a0a0a] border border-slate-800 rounded-2xl p-8 md:p-10 hover:border-slate-700 transition-all duration-300">
                <h3 className="text-white font-bold mb-8 text-xl tracking-tight">Experiencia Destacada</h3>

                <div className="relative pl-6 border-l-2 border-slate-800 space-y-12">

                  {/* Trabajo 1 */}
                  <div className="relative group">
                    {/* Punto en la línea de tiempo */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-slate-700 group-hover:border-electric-blue group-hover:shadow-[0_0_12px_rgba(0,242,255,0.6)] transition-all duration-300"></div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
                      <h4 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">Desarrollador Backend</h4>
                      <span className="text-electric-blue text-sm font-mono mt-1 sm:mt-0 bg-electric-blue/10 px-3 py-1 rounded-full">
                        Grupo Salinas | [Mayo 2025] - Actualidad
                      </span>
                    </div>

                    <ul className="list-disc list-outside ml-4 space-y-3 text-slate-400 marker:text-slate-600">
                      <li>Desarrollo y mantenimiento de microservicios para el sector bancario utilizando <strong className="text-electric-blue font-normal">Spring Boot</strong>, <strong className="text-electric-blue font-normal">Quarkus</strong>, <strong className="text-electric-blue font-normal">Docker</strong>, <strong className="text-electric-blue font-normal">Maven</strong>, <strong className="text-electric-blue font-normal">Git</strong> y otras herramientas.</li>
                      <li>Participación en procesos de CI/CD, tanto nube como on premise, utilizando herramientas como <strong className="text-electric-blue font-normal">Jenkins</strong> para pipelines, gestión de recursos en <strong className="text-electric-blue font-normal">AWS</strong>, y <strong className="text-electric-blue font-normal">Rancher</strong> para despliegues.</li>
                      <li>Creación y ejecución de pruebas unitarias y de integración utilizando <strong className="text-electric-blue font-normal">JUnit</strong>, <strong className="text-electric-blue font-normal">Mockito</strong>, <strong className="text-electric-blue font-normal">Testcontainers</strong>, <strong className="text-electric-blue font-normal">SonarQube</strong>, <strong className="text-electric-blue font-normal">Checkmarx</strong> para asegurar la calidad del código.</li>
                      <li>Colaboración con equipos de desarrollo y operaciones para implementar soluciones eficientes y escalables.</li>
                      <li>Resolución de incidencias y optimización de procesos de desarrollo y despliegue.</li>
                    </ul>
                  </div>

                  {/* Trabajo 2 */}
                  <div className="relative group">
                    {/* Punto en la línea de tiempo */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-slate-700 group-hover:border-electric-blue group-hover:shadow-[0_0_12px_rgba(0,242,255,0.6)] transition-all duration-300"></div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
                      <h4 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">Desarrollador Full Stack</h4>
                      <span className="text-electric-blue text-sm font-mono mt-1 sm:mt-0 bg-electric-blue/10 px-3 py-1 rounded-full">
                        INEGI | [Abril 2024] - [Mayo 2025]
                      </span>
                    </div>

                    <ul className="list-disc list-outside ml-4 space-y-3 text-slate-400 marker:text-slate-600">
                      <li>Desarrollo de sistemas estadísticos utilizando <strong className="text-electric-blue font-normal">Java</strong>, <strong className="text-electric-blue font-normal">PrimeFaces</strong>, <strong className="text-electric-blue font-normal">Vue.js</strong>, <strong className="text-electric-blue font-normal">Gradle</strong>, <strong className="text-electric-blue font-normal">Maven</strong>.</li>
                      <li>Análisis de requerimientos, creación de modelos de datos de alto rendimiento utilizando <strong className="text-electric-blue font-normal">Oracle SQL Developer Data Modeler</strong>.</li>
                      <li>Creación y mantenimiento de procedimientos almacenados, funciones y triggers en <strong className="text-electric-blue font-normal">Oracle</strong> utilizando técnicas de tunning para optimizar el tiempo de ejecución de los procesos.</li>
                      <li>Creación y ejecución de pruebas unitarias y de integración utilizando <strong className="text-electric-blue font-normal">JUnit</strong>, <strong className="text-electric-blue font-normal">Mockito</strong>, <strong className="text-electric-blue font-normal">SonarQube</strong> para asegurar la calidad del código.</li>
                      <li>Control de versiones y colaboración con equipos de desarrollo utilizando <strong className="text-electric-blue font-normal">Git</strong>.</li>
                      <li>Capacitación de personal, explicación de requerimientos, modelos de datos y procesos desarrollados.</li>
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
        <div className="lg:col-span-8 space-y-6 mt-6">

          <FadeInView delay={0.6}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric-blue"></span>
              Proyectos Destacados
            </h3>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <FadeInView key={index} delay={0.65}>
                <motion.div
                  whileHover={{ y: -5, borderColor: 'rgba(0, 209, 255, 0.5)' }}
                  className="group relative bg-[#0a0a0a] border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,209,255,0.1)] flex flex-col justify-between h-full"
                >
                  {/* Contenido Superior */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-bold text-slate-200 group-hover:text-electric-blue transition-colors">
                        {project.title}
                      </h4>
                      {/* Ícono de Enlace Externo genérico (SVG) */}
                      <a href={project.link} className="text-slate-500 hover:text-electric-blue transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tecnologías del Proyecto */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono bg-slate-900 border border-slate-800 text-slate-300 rounded-md">
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
      <section id="sobre-mi" className="mt-20">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-electric-blue"></span>
          Sobre Mí & Data
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Tarjeta de Biografía (Ocupa 2 columnas) */}
          <motion.div
            whileHover={{ borderColor: 'rgba(0, 209, 255, 0.3)' }}
            className="md:col-span-2 bg-[#0a0a0a] border border-slate-800 rounded-2xl p-8 transition-colors"
          >
            <h4 className="text-lg font-bold text-slate-200 mb-4">El Ingeniero detrás del Código</h4>
            <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
              <p>
                Soy un Ingeniero en Sistemas enfocado en la construcción de arquitecturas robustas para el sector bancario y financiero. Mi especialidad radica en traducir reglas de negocio complejas en microservicios eficientes, seguros y escalables.
              </p>
              <p>
                Cuando no estoy migrando contenedores en AWS o afinando consultas PL/SQL, me dedico a analizar datos por diversión y explorar la cultura pop japonesa.
              </p>
            </div>
          </motion.div>
          {/* Tarjeta de Spotify Stats (Ocupa 1 columna) */}
          <motion.div
            whileHover={{ borderColor: 'rgba(0, 209, 255, 0.3)' }}
            className="bg-[#0a0a0a] border border-slate-800 rounded-2xl p-6 relative overflow-hidden group transition-colors min-h-[350px] flex flex-col justify-between"
          >
            {/* IMAGEN DE FONDO (El contorno neón) */}
            <div
              className="absolute -bottom-4 -right-4 w-96 h-96 opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                backgroundImage: "url('/top_artist_neon.png')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
                mixBlendMode: 'screen',
                maskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 90%)',
                WebkitMaskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 90%)'
              }}
            ></div>

            {/* Encabezado */}
            <div className="flex justify-between items-center relative z-10">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest">
                Spotify Analytics
              </h4>
              <i className="fa-brands fa-spotify text-[#1DB954] text-xl"></i>
            </div>

            <div className="space-y-4 relative z-10 mt-6">
              <div className="mb-6">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Minutos Totales Escuchados</p>
                <p className="text-3xl font-bold text-white">
                  {spotifyData.total_minutes.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-3">Top Artistas</p>

                {/* Mapeamos tus datos reales */}
                <div className="space-y-3">
                  {spotifyData.top_artists.map((artist, index) => {
                    // Calculamos el porcentaje para la barra
                    const widthPercentage = (artist.minutes / maxMinutes) * 100;

                    return (
                      <div key={artist.name}>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span className="font-medium drop-shadow-md">{artist.name}</span>
                          <span className="text-slate-400">{(artist.minutes / 60).toFixed(0)} hrs</span>
                        </div>
                        <div className="w-full bg-slate-900/80 rounded-full h-1.5 backdrop-blur-sm">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${widthPercentage}%` }}
                            transition={{ duration: 1, delay: index * 0.15 }}
                            className="bg-electric-blue h-1.5 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-slate-800 pt-8 pb-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-0">

          {/* Izquierda: Copyright y Marca */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-slate-300 font-bold tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric-blue"></span>
              JUL . dev
            </span>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Jairo Ulises López Durón. Todos los derechos reservados.
            </p>
          </div>

          {/* Centro: El guiño a Green IT y Stack */}
          <div className="text-center">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
              Construido con <span className="text-slate-300">Next.js & Tailwind</span>
              <span className="text-electric-blue">|</span>
              <span className="text-green-500/80">🌿 Green IT Optimized</span>
            </p>
          </div>

          {/* Derecha: Enlaces Sociales (Usando SVGs nativos para no depender de librerías extra) */}
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/xJuairo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-electric-blue transition-colors"
              title="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-electric-blue transition-colors"
              title="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:jairouliseslopezduron@gmail.com"
              className="text-slate-400 hover:text-electric-blue transition-colors"
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
