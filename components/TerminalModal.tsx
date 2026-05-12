'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/locale/translations';
// Definimos la estructura del historial
type HistoryItem = { command: string; output: React.ReactNode };

export default function TerminalModal() {
    const { lang } = useLanguage();
    const dictionary = translations[lang];

    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<HistoryItem[]>([]);

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
                        {dictionary.terminal.commands.help.subtitle}<br />
                        <span className="text-electric-blue">whoami</span>   - {dictionary.terminal.commands.whoami.description}<br />
                        <span className="text-electric-blue">stack</span>    - {dictionary.terminal.commands.stack.description}<br />
                        <span className="text-electric-blue">clear</span>    - {dictionary.terminal.commands.clear.description}<br />
                        <span className="text-electric-blue">sudo</span>     - {dictionary.terminal.commands.sudo.description}<br />
                        <span className="text-electric-blue">duck</span>     - {dictionary.terminal.commands.duck.description}<br />
                        <span className="text-electric-blue">exit</span>     - {dictionary.terminal.commands.exit.description}<br />
                    </div>
                );
                break;
            case 'whoami':
                output = dictionary.terminal.commands.whoami.output;
                break;
            case 'stack':
                output = dictionary.terminal.commands.stack.output;
                break;
            case 'sudo':
                output = dictionary.terminal.commands.sudo.output;
                break;
            case 'duck':
                output = dictionary.terminal.commands.duck.output;
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
                output = dictionary.terminal.commands.unknown.output(cmd);
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
                            <div className="mb-4 whitespace-pre-wrap">
                                {dictionary.terminal.init.title}<br />
                                {dictionary.terminal.init.subtitle}
                            </div>
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