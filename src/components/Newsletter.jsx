import React from 'react';

const Newsletter = () => {
    return (
        <section className="py-16 px-[5%] bg-[#0D0D0D]">
            <div className="max-w-[1400px] mx-auto bg-gradient-to-br from-[#E8441A] to-[#F5A623] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(232,68,26,0.3)]">

                {/* Floating background elements */}
                {/* We use some simple SVG shapes to represent ingredients floating slowly */}
                <svg className="absolute top-10 left-10 w-24 h-24 text-white/20 animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="40" />
                </svg>
                <svg className="absolute bottom-10 right-10 w-32 h-32 text-white/20 animate-[spin_25s_linear_infinite_reverse]" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M10,50 Q30,20 50,50 T90,50 Q70,80 50,50 T10,50" />
                </svg>
                <svg className="absolute top-20 right-20 w-16 h-16 text-white/20 animate-bounce" viewBox="0 0 100 100" fill="currentColor">
                    <rect x="20" y="20" width="60" height="60" rx="10" />
                </svg>

                <div className="relative z-10 w-full max-w-2xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#1A1A1A] mb-4">
                        Ganhe 20% de Desconto<br />no Primeiro Pedido
                    </h2>
                    <p className="text-[#1A1A1A]/80 font-medium text-lg mb-10">
                        Junte-se ao clube para descontos exclusivos, itens secretos e novidades frescas.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Digite seu endereço de e-mail"
                            required
                            className="flex-grow rounded-full px-8 py-4 text-black border-2 border-transparent focus:border-white focus:outline-none shadow-inner bg-white/90 placeholder:text-gray-500 font-sans"
                        />
                        <button
                            type="submit"
                            className="rounded-full bg-[#1A1A1A] text-[#F2F0E9] px-10 py-4 font-bold hover:bg-black transition-colors shadow-lg whitespace-nowrap"
                        >
                            Garantir Oferta
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
