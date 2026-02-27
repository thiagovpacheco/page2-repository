import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ComboDeal = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Background parallax effect
            gsap.to(imageRef.current, {
                y: "20%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-12 px-[5%] bg-[#0D0D0D]">
            <div
                ref={containerRef}
                className="w-full max-w-[1400px] mx-auto min-h-[600px] rounded-[3rem] relative overflow-hidden flex items-center justify-center border border-white/5"
            >
                {/* Parallax Image Background */}
                <div
                    ref={imageRef}
                    className="absolute inset-x-0 -top-[20%] h-[140%] w-full bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop')" }}
                ></div>

                {/* Cinematic dark overlay */}
                <div className="absolute inset-0 bg-[#0D0D0D]/80 backdrop-blur-[2px]"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 md:px-12 flex flex-col items-center max-w-3xl">
                    <span className="font-mono text-[#E8441A] tracking-widest text-sm uppercase px-4 py-1.5 rounded-full border border-[#E8441A]/30 bg-[#E8441A]/10 mb-6 font-bold shadow-lg">
                        COMBO LIMITADO
                    </span>

                    <h2 className="text-5xl md:text-7xl font-sans font-bold text-[#F2F0E9] mb-4 leading-tight">
                        A <span className="font-serif italic text-[#F5A623]">Torre</span> Definitiva
                    </h2>

                    <p className="text-xl text-[#e0e0e0] font-light mb-8 max-w-xl mx-auto">
                        Três carnes smash, cebola caramelizada, peito bovino defumado, bacon crocante, intercalado com queijo apimentado. Inclui batatas rústicas com cheddar e bebida refil.
                    </p>

                    <div className="flex items-center gap-4 mb-10 text-2xl">
                        <span className="text-white/40 line-through font-mono font-medium">R$55,90</span>
                        <span className="text-[#F5A623] font-mono font-bold text-4xl">R$45,90</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
                        <button className="group relative overflow-hidden rounded-full border-none bg-[#E8441A] py-4 px-10 font-sans font-semibold text-white shadow-[0_8px_30px_rgba(232,68,26,0.4)] transition-transform hover:-translate-y-1">
                            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 inline-block">Pedir Este Combo</span>
                        </button>
                        <button className="group relative overflow-hidden rounded-full border border-white/30 bg-white/5 backdrop-blur-md py-4 px-10 font-sans font-semibold text-white transition-all hover:-translate-y-1 hover:border-white hover:bg-white/10">
                            <span className="relative z-10 transition-transform duration-300 inline-block">Ver Cardápio Completo</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ComboDeal;
