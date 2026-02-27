import React from 'react';

const Story = () => {
    return (
        <section id="story" className="py-24 px-[5%] bg-[#0D0D0D] border-t border-white/5 relative z-10 overflow-hidden">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Rotated Image */}
                <div className="relative w-full max-w-xl mx-auto lg:mx-0">
                    <div className="absolute inset-0 bg-[#E8441A]/20 blur-[100px] rounded-full"></div>
                    <img
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                        alt="Kitchen at Burger."
                        className="w-full h-auto object-cover rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out"
                    />

                    {/* Decorative tag overlay */}
                    <div className="absolute -bottom-6 -right-6 lg:-right-12 z-20 bg-[#1A1010] p-6 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-md hidden sm:block">
                        <div className="flex items-center gap-4">
                            <div className="w-4 h-4 rounded-full bg-[#E8441A] shadow-[0_0_10px_#e8441a]"></div>
                            <p className="font-mono text-sm text-[#F2F0E9]">Na chapa desde 11h</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col">
                    <span className="font-mono text-[#E8441A] tracking-widest text-sm uppercase mb-4 inline-block font-bold">
                        NOSSA HISTÓRIA
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-[#F2F0E9] mb-8 leading-tight">
                        Nascido no Quintal.<br />
                        <span className="text-white/50">Feito para as Ruas.</span>
                    </h2>

                    <div className="space-y-6 text-[#e0e0e0] font-light text-lg mb-12">
                        <p>
                            Tudo começou com uma simples obsessão: aperfeiçoar o smash. O que começou como experimentos de fim de semana em um quintal no subúrbio rapidamente escalou para uma busca culinária em grande escala para construir a experiência definitiva em hambúrguer.
                        </p>
                        <p>
                            Compramos ingredientes apenas de fazendas locais, criamos nosso blend de carne diariamente e assamos nossos pães brioche na própria casa. Sem atalhos, sem concessões. Apenas paixão crua prensada em uma chapa a 230 graus.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative mt-8">
                        <div className="absolute top-3 left-0 w-full h-[2px] bg-white/10"></div>
                        <div className="flex justify-between relative z-10 w-full">

                            <div className="flex flex-col items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-[#1A1010] border-4 border-[#E8441A] relative shadow-[0_0_15px_rgba(232,68,26,0.5)]"></div>
                                <span className="font-mono text-sm text-[#F2F0E9]">2018</span>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-[#1A1010] border-4 border-[#E8441A] relative shadow-[0_0_15px_rgba(232,68,26,0.5)]"></div>
                                <span className="font-mono text-sm text-[#F2F0E9]">2020</span>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-[#1A1010] border-4 border-[#E8441A] relative shadow-[0_0_15px_rgba(232,68,26,0.5)]"></div>
                                <span className="font-mono text-sm text-[#F2F0E9]">2023</span>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-[#E8441A] border-4 border-[#E8441A] shadow-[0_0_20px_#e8441a] relative"></div>
                                <span className="font-mono text-sm text-[#F5A623] font-bold">Hoje</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Story;
