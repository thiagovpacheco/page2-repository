import React from 'react';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0D0D0D] pt-24 px-[5%] pb-8 relative z-10 border-t border-white/5 rounded-t-[4rem] mt-[-2rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="lg:col-span-1">
                        <div className="text-[2rem] font-[800] tracking-[-0.5px] text-white mb-4">
                            Burger<span className="text-[#E8441A]">.</span>
                        </div>
                        <p className="text-white/50 text-base font-light mb-8 max-w-xs">
                            Não é fast food. É comida boa feita rápido.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#E8441A] hover:text-white transition-all transform hover:-translate-y-1">
                                <Instagram size={18} />
                            </a>
                            {/* Using MessageCircle as TikTok placeholder since Lucide doesn't have tiktok natively without svgs */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#E8441A] hover:text-white transition-all transform hover:-translate-y-1">
                                <MessageCircle size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#E8441A] hover:text-white transition-all transform hover:-translate-y-1">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-sans">Cardápio</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/50 hover:text-[#E8441A] transition-colors">Hambúrgueres Clássicos</a></li>
                            <li><a href="#" className="text-white/50 hover:text-[#E8441A] transition-colors">Combos Promocionais</a></li>
                            <li><a href="#" className="text-white/50 hover:text-[#E8441A] transition-colors">Acompanhamentos</a></li>
                            <li><a href="#" className="text-white/50 hover:text-[#E8441A] transition-colors">Bebidas e Shakes</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-sans">A Empresa</h4>
                        <ul className="space-y-4">
                            <li><a href="#story" className="text-white/50 hover:text-[#E8441A] transition-colors">Nossa História</a></li>
                            <li><a href="#" className="text-white/50 hover:text-[#E8441A] transition-colors">Lojas</a></li>
                            <li><a href="#" className="text-white/50 hover:text-[#E8441A] transition-colors">Trabalhe Conosco</a></li>
                            <li><a href="#" className="text-white/50 hover:text-[#E8441A] transition-colors">Imprensa</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-sans">Suporte</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/50 hover:text-[#E8441A] transition-colors">Fale Conosco</a></li>
                            <li><a href="#" className="text-white/50 hover:text-[#E8441A] transition-colors">Dúvidas Frequentes</a></li>
                            <li><a href="#" className="text-white/50 hover:text-[#E8441A] transition-colors">Guia Nutricional</a></li>
                            <li><a href="#" className="text-white/50 hover:text-[#E8441A] transition-colors">Termos de Serviço</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm font-light">
                        &copy; {new Date().getFullYear()} Burger. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-white/40 text-sm font-sans">Cozinha Aberta 11h – 23h</span>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_#22c55e]"></div>
                            <span className="text-white/70 text-xs font-mono">Todos Sistemas Operacionais</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
