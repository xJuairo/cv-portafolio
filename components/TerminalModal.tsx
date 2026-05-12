'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Definimos la estructura del historial
type HistoryItem = { command: string; output: React.ReactNode };

export default function TerminalModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<HistoryItem[]>([
        { command: '', output: 'JUL.dev Terminal OS v1.0.0\nEscribe "help" para ver los comandos disponibles.' }
    ]);

    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Escuchar el evento personalizado para abrir la terminal
    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            setTimeout(() => inputRef.current?.focus(), 100);
        };
        window.addEventListener('openTerminal', handleOpen);
        return () => window.removeEventListener('openTerminal', handleOpen);
    }, []);

    // Auto-scroll hacia abajo cuando se actualiza el historial
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    // Lógica de comandos
    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        let output: React.ReactNode = '';

        if (cmd === '') return;

        switch (cmd) {
            case 'help':
                output = (
                    <div className="text-slate-300">
                        Comandos disponibles:<br />
                        <span className="text-electric-blue">whoami</span>   - Muestra información del usuario<br />
                        <span className="text-electric-blue">stack</span>    - Lista las tecnologías principales<br />
                        <span className="text-electric-blue">clear</span>    - Limpia la terminal<br />
                        <span className="text-electric-blue">sudo</span>     - Ejecutar como administrador<br />
                        <span className="text-electric-blue">duck</span>     - Sorpresa<br />
                        <span className="text-electric-blue">exit</span>     - Cierra la terminal
                    </div>
                );
                break;
            case 'whoami':
                output = 'Jairo Ulises López Durón - Ingeniero en Sistemas, desarrollador Full Stack. Radicando en Ciudad de México.';
                break;
            case 'stack':
                output = 'Backend: Java, Spring Boot, Quarkus | Infra: AWS, Docker, Linux, Rancher| Frontend: Next.js, React | Tools: Neovim';
                break;
            case 'sudo':
                output = 'Buen intento. Este incidente será reportado. 🚨';
                break;
            case 'duck':
                output = `
                ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                ⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⣩⣭⣶⣶⣮⣭⡙⠿⣿⣿⣿⣿⣿⣿
                ⣿⣿⣿⣿⣿⣿⠿⣋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⢿⣿⣿⣿
                ⣿⣿⣿⣿⣿⡃⠄⠹⡿⣿⣿⣿⣿⠟⠛⣿⣿⣿⣿⣷⡌⢿⣿⣿
                ⣿⣿⣿⣿⣿⠐⣠⡶⣶⣲⡎⢻⣿⣤⣴⣾⣿⣿⣿⣿⣿⠸⣿⣿
                ⣿⠟⣋⡥⡶⣞⡯⣟⣾⣺⢽⡧⣥⣭⣉⢻⣿⣿⣿⣿⣿⣆⢻⣿
                ⡃⣾⢯⢿⢽⣫⡯⣷⣳⢯⡯⠯⠷⠻⠞⣼⣿⣿⣿⣿⣿⣿⡌⣿
                ⣦⣍⡙⠫⠛⠕⣋⡓⠭⣡⢶⠗⣡⣶⡝⣿⣿⣿⣿⣿⣿⣿⣧⢹
                ⣿⣿⣿⣿⣿⣿⣘⣛⣋⣡⣵⣾⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸
                ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸
                ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸`;
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            case 'exit':
                setIsOpen(false);
                setInput('');
                return;
            default:
                output = `Comando no encontrado: ${cmd}. Escribe "help" para ver la lista.`;
        }

        setHistory((prev) => [...prev, { command: cmd, output }]);
        setInput('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="w-full max-w-2xl bg-[#0a0a0a] border border-slate-700 rounded-xl shadow-2xl overflow-hidden font-mono"
                        onClick={() => inputRef.current?.focus()}
                    >
                        {/* Barra superior de la ventana (estilo macOS/Linux) */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-slate-800">
                            <div className="flex gap-2">
                                <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"></button>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 text-center text-xs text-slate-500 font-bold tracking-widest">
                                bash - xJuairo@jul-dev: ~
                            </div>
                        </div>

                        {/* Cuerpo de la terminal */}
                        <div className="p-4 h-96 overflow-y-auto text-sm text-slate-300">
                            {history.map((item, i) => (
                                <div key={i} className="mb-4">
                                    {item.command && (
                                        <div className="flex items-center gap-2 text-electric-blue mb-1">
                                            <span>xJuairo@jul-dev:~$</span>
                                            <span className="text-white">{item.command}</span>
                                        </div>
                                    )}
                                    <div className="whitespace-pre-wrap">{item.output}</div>
                                </div>
                            ))}

                            {/* Input activo */}
                            <form onSubmit={handleCommand} className="flex items-center gap-2 text-electric-blue">
                                <span>xJuairo@jul-dev:~$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0 p-0"
                                    spellCheck="false"
                                    autoComplete="off"
                                />
                            </form>
                            <div ref={bottomRef} />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}