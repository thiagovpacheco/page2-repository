import React, { useEffect, useRef } from 'react';
import { Search, ShoppingCart } from 'lucide-react';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const frameCount = 80;
        const images = [];
        let loadedImages = 0;
        const currentFrame = { index: 0 };
        let animationId;
        let lastTime = 0;
        const fps = 24;
        const interval = 1000 / fps;

        const currentFrameSrc = (index) => {
            const paddedIndex = index.toString().padStart(3, '0');
            return `/assets/32qydqpbv1rmy0cwhngssqyjmm_result__${paddedIndex}.jpg`;
        };

        const drawFrame = (img) => {
            if (!ctx || !img || !img.width) return;

            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            // We only want to set width/height on resize, but here we enforce correct sizes
            if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                ctx.scale(dpr, dpr);
            }

            const canvasLogicWidth = rect.width;
            const canvasLogicHeight = rect.height;

            ctx.clearRect(0, 0, canvasLogicWidth, canvasLogicHeight);

            const canvasRatio = canvasLogicWidth / canvasLogicHeight;
            const imgRatio = img.width / img.height;

            let drawWidth, drawHeight, drawX, drawY;

            if (canvasRatio > imgRatio) {
                drawWidth = canvasLogicWidth;
                drawHeight = canvasLogicWidth / imgRatio;
                drawX = 0;
                drawY = (canvasLogicHeight - drawHeight) / 2;
            } else {
                drawWidth = canvasLogicHeight * imgRatio;
                drawHeight = canvasLogicHeight;
                drawX = canvasLogicWidth - drawWidth;
                drawY = 0;
            }

            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        };

        const renderLoop = (time) => {
            if (!lastTime) lastTime = time;
            const deltaTime = time - lastTime;

            if (deltaTime > interval) {
                currentFrame.index = (currentFrame.index + 1) % frameCount;
                drawFrame(images[currentFrame.index]);
                lastTime = time - (deltaTime % interval);
            }

            animationId = requestAnimationFrame(renderLoop);
        };

        const startAnimation = () => {
            animationId = requestAnimationFrame(renderLoop);
        };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrameSrc(i);
            img.onload = () => {
                loadedImages++;
                if (i === 0) {
                    // Initialize dimensions manually for the first frame before starting loop
                    const dpr = window.devicePixelRatio || 1;
                    const rect = canvas.getBoundingClientRect();
                    canvas.width = rect.width * dpr;
                    canvas.height = rect.height * dpr;
                    ctx.scale(dpr, dpr);
                    drawFrame(img);
                }
                if (loadedImages === frameCount) {
                    startAnimation();
                }
            };
            images.push(img);
        }

        const handleResize = () => {
            if (images[currentFrame.index] && images[currentFrame.index].complete) {
                drawFrame(images[currentFrame.index]);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-[100] bg-gradient-to-b from-black/90 to-transparent">
                <div className="text-[1.8rem] font-[800] tracking-[-0.5px]">
                    Burger<span className="text-[#E8441A]">.</span>
                </div>

                <nav className="hidden md:flex gap-10">
                    <a
                        href="#"
                        className="text-white text-base relative pb-[5px] opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#E8441A] after:transition-all after:duration-300 after:w-full"
                    >
                        Início
                    </a>
                    <a
                        href="#menu"
                        className="text-white text-base relative pb-[5px] opacity-80 transition-opacity hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#E8441A] after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                    >
                        Cardápio
                    </a>
                    <a
                        href="#story"
                        className="text-white text-base relative pb-[5px] opacity-80 transition-opacity hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#E8441A] after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                    >
                        Nossa História
                    </a>
                    <a
                        href="#"
                        className="text-white text-base relative pb-[5px] opacity-80 transition-opacity hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#E8441A] after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                    >
                        Contato
                    </a>
                </nav>

                <div className="flex items-center gap-6">
                    <button className="text-white opacity-80 hover:opacity-100 hover:scale-110 transition-all p-2 rounded-full cursor-pointer">
                        <Search size={22} />
                    </button>
                    <button className="text-white opacity-80 hover:opacity-100 hover:scale-110 transition-all p-2 rounded-full cursor-pointer relative">
                        <ShoppingCart size={22} />
                    </button>
                    <button className="bg-[#E8441A] hover:bg-[#e64a19] text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(232,68,26,0.4)] cursor-pointer">
                        Cadastre-se
                    </button>
                </div>
            </header>

            <main className="relative min-h-screen flex items-center px-[5%] overflow-hidden bg-[#0a0000]">
                <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full opacity-90 drop-shadow-[0_0_50px_rgba(232,68,26,0.15)] object-cover bg-black"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent"></div>
                </div>

                <section className="relative z-20 w-full max-w-[600px] p-12 mt-16 rounded-[2rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-[fadeInUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                    <div className="flex flex-col">

                        {/* Note: The image shows white for 'Bite into' and orange for 'Perfection' with a brown block shadow behind Perfection */}
                        <h1 className="text-[5.5rem] font-[900] leading-[1.0] mb-8 tracking-[-3px]">
                            <span className="text-white">Sabor em</span> <br />
                            <span className="text-[#F5A623] relative inline-block z-10 w-full mt-2">
                                Perfeição
                                <span className="absolute bottom-[2px] left-0 w-[105%] h-[35%] bg-[#3a1a10] -z-10 rounded-sm"></span>
                            </span>
                        </h1>

                        <p className="text-[1.15rem] text-[#e0e0e0] leading-[1.6] mb-12 max-w-[90%] font-normal">
                            Experimente nosso hambúrguer. Suculento, carregado de sabor e elaborado com ingredientes premium, uma experiência inesquecível.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-center">
                            <button className="bg-[#E8441A] hover:bg-[#e64a19] text-white border-none px-8 py-4 rounded-full font-bold text-lg cursor-pointer flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg w-full sm:w-auto group">
                                Pedir Agora
                                <span className="transition-transform group-hover:translate-x-1 font-normal">→</span>
                            </button>
                            <button className="bg-[#1A1010] text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg cursor-pointer transition-all hover:border-white/40 hover:bg-[#2a1a1a] hover:-translate-y-1 shadow-lg w-full sm:w-auto">
                                Ver Cardápio
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Hero;
