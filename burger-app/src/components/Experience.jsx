import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, Leaf, Beaker } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: <Flame className="w-8 h-8 text-[#E8441A]" />,
        title: "Técnica Smash Premium",
        desc: "Prensado manualmente a 230°C para máxima formação de crosta e selagem de sabor."
    },
    {
        icon: <Leaf className="w-8 h-8 text-[#F5A623]" />,
        title: "Ingredientes da Fazenda",
        desc: "Produtos de origem local, entregues frescos diariamente. Sem conservantes, nunca."
    },
    {
        icon: <Beaker className="w-8 h-8 opacity-80" />,
        title: "Laboratório de Receitas",
        desc: "Cada molho é testado mais de 40 vezes antes de entrar no cardápio para garantir a perfeição."
    }
];

const Experience = () => {
    const sectionRef = useRef(null);
    const quoteRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Split text animation logic
            const lines = quoteRef.current.querySelectorAll('.quote-line');

            gsap.fromTo(lines,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );

            const items = sectionRef.current.querySelectorAll('.feature-item');
            gsap.fromTo(items,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-[5%] bg-[#0D0D0D] border-t border-white/5 relative overflow-hidden">
            {/* Abstract background glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-[600px] bg-[#E8441A]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">

                {/* Left Side: Quote */}
                <div className="pr-0 lg:pr-12" ref={quoteRef}>
                    <div className="w-16 h-1 bg-[#E8441A] mb-8 lg:mb-12"></div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-[#F2F0E9] leading-[1.1]">
                        <span className="block quote-line opacity-100 transform-none">"Nós não fazemos </span>
                        <span className="block quote-line opacity-100 transform-none text-white/40">fast food.</span>
                        <br />
                        <span className="block quote-line opacity-100 transform-none">Fazemos hambúrgueres </span>
                        <span className="block quote-line opacity-100 transform-none text-[#F5A623]">premium, com o nosso tempero."</span>
                    </h2>
                </div>

                {/* Right Side: Features */}
                <div className="flex flex-col gap-8 lg:gap-12 lg:pl-12 lg:border-l border-white/10">
                    {features.map((feat, idx) => (
                        <div key={idx} className="feature-item flex gap-6 items-start group">
                            <div className="w-16 h-16 rounded-[1.5rem] bg-[#1A1010] border border-white/5 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_20px_rgba(232,68,26,0.15)] group-hover:border-[#E8441A]/30">
                                {feat.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-sans text-[#F2F0E9] mb-2">{feat.title}</h3>
                                <p className="text-lg text-white/50 leading-relaxed font-light">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
