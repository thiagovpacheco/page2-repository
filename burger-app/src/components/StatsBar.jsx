import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: 2400, prefix: '', suffix: '+', label: 'Hambúrgueres Servidos Hoje' },
    { value: 4.9, prefix: '', suffix: '★', label: 'Avaliação Média', isFloat: true },
    { value: 12, prefix: '', suffix: '', label: 'Receitas Exclusivas' },
    { value: 2018, prefix: 'Desde ', suffix: '', label: '' }
];

const StatsBar = () => {
    const containerRef = useRef(null);
    const countersRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            countersRef.current.forEach((counter, i) => {
                if (!counter) return;
                const targetValue = stats[i].value;
                const isFloat = stats[i].isFloat;
                const startValue = isFloat ? 0.0 : 0;

                let obj = { val: startValue };

                gsap.to(obj, {
                    val: targetValue,
                    duration: 2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    },
                    onUpdate: () => {
                        if (counter) {
                            const displayVal = isFloat ? obj.val.toFixed(1) : Math.floor(obj.val);
                            counter.innerText = `${stats[i].prefix}${isFloat && displayVal == 4 ? '4.0' : displayVal}${stats[i].suffix}`;
                        }
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full bg-[#1A1010] py-6 sm:py-8 border-y border-white/5 relative z-30 overflow-hidden"
        >
            {/* Mobile marquee animation wrapper */}
            <div className="flex w-max md:w-full mx-auto md:animate-none animate-[marquee_20s_linear_infinite]">

                {/* Grid container for desktop, flex for mobile */}
                <div className="flex items-center gap-12 md:gap-0 px-8 md:px-0 w-full md:grid md:grid-cols-4 md:divide-x md:divide-white/10 md:justify-items-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center whitespace-nowrap px-4 w-full">
                            <div className="font-mono text-xl sm:text-2xl font-bold text-[#F2F0E9] tracking-tight">
                                <span ref={el => countersRef.current[idx] = el}>
                                    {stat.prefix}0{stat.suffix}
                                </span>
                            </div>
                            {stat.label && (
                                <div className="text-xs sm:text-sm font-sans text-[#F2F0E9]/50 uppercase tracking-widest mt-1">
                                    {stat.label}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StatsBar;
