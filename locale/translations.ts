export const translations = {
    es: {
        nav: {
            experience: "EXPERIENCIA",
            projects: "PROYECTOS",
            about: "SOBRE MÍ",
            downloadCV: "Descargar CV"
        },
        hero: {
            firstName: "Jairo Ulises",
            lastName: "López Durón",
            subtitle: "INGENIERO EN SISTEMAS COMPUTACIONALES",
            location: "Aguascalientes, México",
            email: "jairouliseslopezduron@gmail.com"
        },
        education: {
            title: "Educación",
            university: "Universidad Autónoma de Aguascalientes",
            degree: "Ingeniería en Sistemas Computacionales",
            date: "[Agosto 2019] - [Diciembre 2024]"
        },
        stack: {
            title: "Stack y Herramientas",
        },
        profile: {
            title: "Perfil Profesional",
            p1: "Desarrollador Full Stack con experiencia en el sector bancario y estadístico, especializado en el desarrollo y mantenimiento de microservicios API REST, SOAP, gRPC y Web Services.",
            p2: "Habilidad en el análisis y resolución de problemas, algoritmos, modelado de datos. Organizado y promotor del uso de las buenas prácticas en el desarrollo de software. Fuertes conocimientos en programación, bases de datos relacionales/no relacionales."
        },
        experience: {
            title: "Experiencia Destacada",
            present: "Actualidad",
            gs: {
                role: "Desarrollador Backend",
                company: "Grupo Salinas",
                date: "[Mayo 2025] - Actualidad",
                bullets: [
                    "Desarrollo y mantenimiento de microservicios para el sector bancario utilizando Spring Boot, Quarkus, Docker, Maven, Git y otras herramientas.",
                    "Participación en procesos de CI/CD, tanto nube como on premise, utilizando herramientas como Jenkins para pipelines, gestión de recursos en AWS, y Rancher para despliegues.",
                    "Creación y ejecución de pruebas unitarias y de integración utilizando JUnit, Mockito, Testcontainers, SonarQube, Checkmarx para asegurar la calidad del código.",
                    "Colaboración con equipos de desarrollo y operaciones para implementar soluciones eficientes y escalables.",
                    "Resolución de incidencias y optimización de procesos de desarrollo y despliegue."
                ]
            },
            inegi: {
                role: "Desarrollador Full Stack",
                company: "INEGI",
                date: "[Abril 2024] - [Mayo 2025]",
                bullets: [
                    "Desarrollo de sistemas estadísticos utilizando Java, PrimeFaces, Vue.js, Gradle, Maven.",
                    "Análisis de requerimientos, creación de modelos de datos de alto rendimiento utilizando Oracle SQL Developer Data Modeler.",
                    "Creación y mantenimiento de procedimientos almacenados, funciones y triggers en Oracle utilizando técnicas de tunning para optimizar el tiempo de ejecución de los procesos.",
                    "Creación y ejecución de pruebas unitarias y de integración utilizando JUnit, Mockito, SonarQube para asegurar la calidad del código.",
                    "Control de versiones y colaboración con equipos de desarrollo utilizando Git.",
                    "Capacitación de personal, explicación de requerimientos, modelos de datos y procesos desarrollados."
                ]
            }
        },
        projects: {
            title: "Proyectos Destacados",
            content: {
                project1: {
                    title: "Motor de reglas de negocio",
                    description: "Motor de reglas de negocio diseñado para desacoplar la lógica de negocio compleja del núcleo del sistema. Ideal para entornos financieros que requieren alta flexibilidad y mantenibilidad.",
                    tech: ["Java", "Spring Boot", "Patrones de Diseño"],
                    link: "https://github.com/xJuairo/business-rules-engine" // Your real link
                },
                project2: {
                    title: "Java Virtual Threads Manager",
                    description: "Gestor de concurrencia avanzada utilizando Virtual Threads (Project Loom). Optimización masiva de rendimiento en el manejo de tareas I/O intensivas para microservicios escalables.",
                    tech: ["Java 25", "Rendimiento", "Concurrencia"],
                    link: "#" // For when you upload it
                },
                project3: {
                    title: "Green IT Portfolio",
                    description: "Este sitio web: desarrollado con un enfoque en eficiencia de recursos, animaciones optimizadas con Framer Motion y una arquitectura limpia en Next.js.",
                    tech: ["Next.js", "Tailwind", "Framer Motion"],
                    link: "#"
                }
            }
        },
        about: {
            aboutMe: {
                title: "SOBRE MÍ",
                subtitle: "El Ingeniero detrás del Código",
                p1: "Soy un Ingeniero en Sistemas enfocado en la construcción de arquitecturas robustas para el sector bancario y financiero. Mi especialidad radica en traducir reglas de negocio complejas en microservicios eficientes, seguros y escalables.",
                p2: "Más allá del código corporativo, soy un apasionado del Green IT. Creo firmemente que la optimización de algoritmos y la eficiencia en la nube no solo ahorran costos operativos, sino que son nuestra responsabilidad para reducir la huella de carbono digital.",
                p3: "Cuando no estoy migrando contenedores en AWS o afinando consultas PL/SQL, me dedico a analizar datos por diversión y explorar la cultura pop japonesa."
            },
            spotify: {
                title: "Spotify Analytics",
                totalMinutes: "MINUTOS TOTALES ESCUCHADOS",
                topArtists: "TOP ARTISTAS"
            }
        },
        footer: {
            copyright: "Jairo Ulises López Durón. Todos los derechos reservados."
        },
        files: {
            cv: "cv_jairo_lopez_es.pdf",
            cv_dl: "CV_Jairo_Ulises_Lopez_Duron_ES.pdf"
        },
        terminal: {
            init: {
                title: "JUL.dev Terminal OS v1.0.0",
                subtitle: "Escribe 'help' para ver los comandos disponibles."
            },
            commands: {
                help: {
                    command: "help",
                    description: "Show all available commands",
                    subtitle: "Comandos disponibles:\n"
                },
                whoami: {
                    command: "whoami",
                    description: "Muestra información del usuario",
                    subtitle: "Información del usuario:\n",
                    output: "Jairo Ulises López Durón - Ingeniero en Sistemas, desarrollador Full Stack. Radicando en Ciudad de México."
                },
                stack: {
                    command: "stack",
                    description: "Muestra el stack y las herramientas utilizadas",
                    subtitle: "Stack & Tools:\n",
                    output: "Backend: Java, Spring Boot, Quarkus | Infra: AWS, Docker, Linux, Rancher| Frontend: Next.js, React | Tools: Neovim"
                },
                clear: {
                    command: "clear",
                    description: "Limpia la terminal"
                },
                sudo: {
                    command: "sudo",
                    description: "Ejecutar como administrador",
                    output: "Buen intento. Este incidente será reportado. 🚨"
                },
                duck: {
                    command: "duck",
                    description: "Sorpresa",
                    output: "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⣩⣭⣶⣶⣮⣭⡙⠿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⠿⣋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⢿⣿⣿⣿\n⣿⣿⣿⣿⣿⡃⠄⠹⡿⣿⣿⣿⣿⠟⠛⣿⣿⣿⣿⣷⡌⢿⣿⣿\n⣿⣿⣿⣿⣿⠐⣠⡶⣶⣲⡎⢻⣿⣤⣴⣾⣿⣿⣿⣿⠸⣿⣿⣿\n⣿⠟⣋⡥⡶⣞⡯⣟⣾⣺⢽⡧⣥⣭⣉⢻⣿⣿⣿⣿⣿⣆⢻⣿\n⡃⣾⢯⢿⢽⣫⡯⣷⣳⢯⡯⠯⠷⠻⠞⣼⣿⣿⣿⣿⣿⣿⡌⣿\n⣦⣍⡙⠫⠛⠕⣋⡓⠭⣡⢶⠗⣡⣶⡝⣿⣿⣿⣿⣿⣿⣿⣧⢹\n⣿⣿⣿⣿⣿⣿⣘⣛⣋⣡⣵⣾⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸"
                },
                exit: {
                    command: "exit",
                    description: "Cierra la terminal"
                },
                unknown: {
                    output: (cmd: string) => `Comando no encontrado: ${cmd}. Escribe "help" para ver la lista.`
                }
            }
        }
    },
    en: {
        nav: {
            experience: "EXPERIENCE",
            projects: "PROJECTS",
            about: "ABOUT ME",
            downloadCV: "Download CV"
        },
        hero: {
            firstName: "Jairo Ulises",
            lastName: "López Durón",
            subtitle: "COMPUTER SYSTEMS ENGINEER",
            location: "Aguascalientes, Mexico",
            email: "jairouliseslopezduron@gmail.com"
        },
        education: {
            title: "Education",
            university: "Universidad Autónoma de Aguascalientes",
            degree: "Computer Systems Engineering",
            date: "[August 2019] - [December 2024]"
        },
        stack: {
            title: "Stack & Tools",
        },
        profile: {
            title: "Professional Profile",
            p1: "Full Stack Developer with experience in the banking and statistical sectors, specialized in developing and maintaining REST, SOAP, gRPC, and Web Services microservices.",
            p2: "Skilled in problem analysis and resolution, algorithms, and data modeling. Organized and a strong advocate for software development best practices. Solid knowledge in programming and relational/non-relational databases."
        },
        experience: {
            title: "Featured Experience",
            present: "Present",
            gs: {
                role: "Backend Developer",
                company: "Grupo Salinas",
                date: "[May 2025] - Present",
                bullets: [
                    "Development and maintenance of microservices for the banking sector using Spring Boot, Quarkus, Docker, Maven, Git, and other tools.",
                    "Participation in cloud and on-premise CI/CD processes using tools like Jenkins for pipelines, AWS for resource management, and Rancher for deployments.",
                    "Creation and execution of unit and integration tests using JUnit, Mockito, Testcontainers, SonarQube, and Checkmarx to ensure code quality.",
                    "Collaboration with development and operations teams to implement efficient and scalable solutions.",
                    "Incident resolution and optimization of development and deployment processes."
                ]
            },
            inegi: {
                role: "Full Stack Developer",
                company: "INEGI",
                date: "[April 2024] - [May 2025]",
                bullets: [
                    "Development of statistical systems using Java, PrimeFaces, Vue.js, Gradle, and Maven.",
                    "Requirements analysis and creation of high-performance data models using Oracle SQL Developer Data Modeler.",
                    "Creation and maintenance of stored procedures, functions, and triggers in Oracle using tuning techniques to optimize process execution times.",
                    "Creation and execution of unit and integration tests using JUnit, Mockito, and SonarQube to ensure code quality.",
                    "Version control and collaboration with development teams using Git.",
                    "Staff training and explanation of requirements, data models, and developed processes."
                ]
            }
        },
        projects: {
            title: "Featured Projects",
            content: {
                project1: {
                    title: "Business Rules Engine",
                    description: "Business Rules Engine designed to decouple complex business logic from the system core. Ideal for financial environments requiring high flexibility and maintainability.",
                    tech: ["Java", "Spring Boot", "Design Patterns"],
                    link: "https://github.com/xJuairo/business-rules-engine" // Your real link
                },
                project2: {
                    title: "Java Virtual Threads Manager",
                    description: "Advanced concurrency manager using Virtual Threads (Project Loom). Massive performance optimization in handling I/O intensive tasks for scalable microservices.",
                    tech: ["Java 25", "Performance Tuning", "Concurrency"],
                    link: "#" // For when you upload it
                },
                project3: {
                    title: "Green IT Portfolio",
                    description: "This website: developed with a focus on resource efficiency, Framer Motion optimized animations, and a clean Next.js architecture.",
                    tech: ["Next.js", "Tailwind", "Framer Motion"],
                    link: "#"
                }
            }
        },
        about: {
            aboutMe: {
                title: "About Me",
                subtitle: "The Engineer Behind the Code",
                p1: "I am a Systems Engineer focused on building robust architectures for the banking and financial sector. My specialty lies in translating complex business rules into efficient, secure, and scalable microservices.",
                p2: "Beyond corporate code, I am passionate about Green IT. I firmly believe that optimizing algorithms and cloud efficiency not only save operational costs but are our responsibility in reducing the digital carbon footprint.",
                p3: "When I'm not migrating containers on AWS or tuning PL/SQL queries, I dedicate time to analyzing data for fun and exploring Japanese pop culture."
            },
            spotify: {
                title: "Spotify Analytics",
                totalMinutes: "TOTAL MINUTES LISTENED",
                topArtists: "TOP ARTISTS"
            }
        },
        footer: {
            copyright: "Jairo Ulises López Durón. All rights reserved."
        },
        files: {
            cv: "cv_jairo_lopez_en.pdf",
            cv_dl: "CV_Jairo_Ulises_Lopez_Duron_EN.pdf"
        },
        terminal: {
            init: {
                title: "JUL.dev Terminal OS v1.0.0",
                subtitle: "Write 'help' to see available commands."
            },
            commands: {
                help: {
                    command: "help",
                    description: "Show all available commands",
                    subtitle: "Available commands:\n"
                },
                whoami: {
                    command: "whoami",
                    description: "Shows user information",
                    subtitle: "User information:\n",
                    output: "Jairo Ulises López Durón - Systems Engineer, Full Stack Developer. Based in Mexico City."
                },
                stack: {
                    command: "stack",
                    description: "Shows the stack and tools used",
                    subtitle: "Stack & Tools:\n",
                    output: "Backend: Java, Spring Boot, Quarkus | Infra: AWS, Docker, Linux, Rancher| Frontend: Next.js, React | Tools: Neovim"
                },
                clear: {
                    command: "clear",
                    description: "Clear the terminal"
                },
                sudo: {
                    command: "sudo",
                    description: "Execute as administrator",
                    output: "Nice try. This incident will be reported. 🚨"
                },
                duck: {
                    command: "duck",
                    description: "Surprise",
                    output: "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⣩⣭⣶⣶⣮⣭⡙⠿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⠿⣋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⢿⣿⣿⣿\n⣿⣿⣿⣿⣿⡃⠄⠹⡿⣿⣿⣿⣿⠟⠛⣿⣿⣿⣿⣷⡌⢿⣿⣿\n⣿⣿⣿⣿⣿⠐⣠⡶⣶⣲⡎⢻⣿⣤⣴⣾⣿⣿⣿⣿⠸⣿⣿⣿\n⣿⠟⣋⡥⡶⣞⡯⣟⣾⣺⢽⡧⣥⣭⣉⢻⣿⣿⣿⣿⣿⣆⢻⣿\n⡃⣾⢯⢿⢽⣫⡯⣷⣳⢯⡯⠯⠷⠻⠞⣼⣿⣿⣿⣿⣿⣿⡌⣿\n⣦⣍⡙⠫⠛⠕⣋⡓⠭⣡⢶⠗⣡⣶⡝⣿⣿⣿⣿⣿⣿⣿⣧⢹\n⣿⣿⣿⣿⣿⣿⣘⣛⣋⣡⣵⣾⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸"
                },
                exit: {
                    command: "exit",
                    description: "Close the terminal"
                },
                unknown: {
                    output: (cmd: string) => `Command not found: ${cmd}. Type "help" to see the list.`
                }
            }
        }
    }
};