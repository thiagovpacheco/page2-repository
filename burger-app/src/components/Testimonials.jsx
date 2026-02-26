import React from 'react';

const testimonials = [
    {
        rating: 5,
        quote: "O melhor hambúrguer que já comi nesta cidade. Ponto. A crosta na carne smash é absolutamente irreal.",
        name: "Michael R.",
        location: "Centro"
    },
    {
        rating: 5,
        quote: "Venho aqui desde que abriram. A atenção aos detalhes nunca caiu. Comida incrível.",
        name: "Sarah J.",
        location: "Zona Oeste"
    },
    {
        rating: 5,
        quote: "Uma experiência religiosa. O molho ranch apimentado nas batatas mudou minha vida completamente.",
        name: "David T.",
        location: "Bairro Alto"
    },
    {
        rating: 4.8,
        quote: "Vale a hora de viagem. O BBQ Bacon é monstruoso e os sabores são perfeitamente balanceados.",
        name: "Emily W.",
        location: "Subúrbio"
    },
    {
        rating: 5,
        quote: "Finalmente, uma hamburgueria que leva seu ofício a sério. Ingredientes de alta qualidade, perfeitamente executados.",
        name: "James C.",
        location: "Centro Empresarial"
    },
    {
        rating: 5,
        quote: "O ambiente, o serviço, a refeição. É uma aula magna de como administrar um restaurante moderno.",
        name: "Oliver K.",
        location: "Zona Leste"
    }
];

// Duplicate original array for seamless looping in CSS
const duplicatedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
    return (
        <section className="py-24 bg-[#0D0D0D] border-t border-white/5 overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-[#F2F0E9] text-5xl font-sans font-bold mb-4">
                    O Que as Pessoas Estão <span className="font-serif italic text-white/50">Dizendo</span>
                </h2>
                <div className="w-24 h-1 bg-[#E8441A] mx-auto opacity-80"></div>
            </div>

            {/* Ticker Container */}
            <div className="relative flex overflow-x-hidden hide-scrollbar group">

                {/* Decorative left/right fade gradients */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>

                <div className="flex gap-6 py-4 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap px-4">
                    {duplicatedTestimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="w-[400px] whitespace-normal bg-[#1A1010] p-8 rounded-[2rem] border border-white/5 flex-shrink-0 flex flex-col justify-between hover:border-white/20 transition-colors cursor-grab active:cursor-grabbing"
                        >
                            <div>
                                <div className="flex text-[#F5A623] mb-6 gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-xl">
                                            {i < Math.floor(item.rating) ? '★' : (item.rating % 1 !== 0 ? '★' : '☆')}
                                        </span>
                                    ))}
                                </div>
                                <p className="font-serif italic text-[#F2F0E9] text-xl leading-relaxed mb-8 text-wrap">
                                    "{item.quote}"
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-4 flex justify-between items-center text-sm font-mono text-white/50">
                                <span className="font-bold text-[#E8441A]">{item.name}</span>
                                <span>{item.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// We need to add the keyframes for the marquee to Tailwind index.css or arbitrary tailwind config.
// The easiest here is to ensure global css has it, which we can add later if missing, 
// though tailwind arbitrary values [marquee_40s_linear_infinite] require keyframes setup.
// Let's add the keyframes to index.css

export default Testimonials;
