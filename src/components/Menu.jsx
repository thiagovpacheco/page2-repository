import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

const menuItems = [
    {
        id: 1,
        name: "Classic Smash",
        category: "Hambúrgueres",
        desc: "Uma carne suculenta, queijo americano, picles da casa, molho especial e um pão brioche dourado na manteiga.",
        price: "R$35",
        tag: "MAIS VENDIDO",
        tagColor: "bg-[#E8441A]",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Double Stack",
        category: "Hambúrgueres",
        desc: "Duas carnes artesanais, queijo em dobro, cebola caramelizada artesanalmente e geleia de bacon.",
        price: "R$45",
        tag: "MONSTRO",
        tagColor: "bg-[#1A1A1A] border border-[#F5A623] text-[#F5A623]",
        img: "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Crispy Chicken",
        category: "Hambúrgueres",
        desc: "Peito de frango crocante marinado no leitelho, salada picante e um toque de molho apimentado doce.",
        price: "R$38",
        tag: "PICANTE",
        tagColor: "bg-red-600",
        img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "BBQ Bacon",
        category: "Hambúrgueres",
        desc: "Bacon defumado artesanal espesso, anéis de cebola crispy, queijo cheddar envelhecido e molho BBQ da casa.",
        price: "R$42",
        tag: "NOVIDADE",
        tagColor: "bg-[#F5A623] text-black",
        img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Veggie Delight",
        category: "Hambúrgueres",
        desc: "Hambúrguer natural à base de plantas, abacate fresco, pimentões assados e maionese de alho vegana.",
        price: "R$36",
        tag: "VEGETARIANO",
        tagColor: "bg-green-600",
        img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Loaded Fries",
        category: "Acompanhamentos",
        desc: "Batatas rústicas fritas, azeite de trufas, parmesão ralado na hora, ciboulette e molho ranch exclusivo.",
        price: "R$25",
        tag: "PARA DIVIDIR",
        tagColor: "bg-[#1A1A1A] border border-white/20",
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop"
    }
];

const tabs = ["Todos", "Hambúrgueres", "Combos", "Acompanhamentos", "Bebidas"];

const Menu = () => {
    const [activeTab, setActiveTab] = useState("Todos");

    const filteredItems = menuItems.filter(item =>
        activeTab === "Todos" ? true : item.category === activeTab
    );

    return (
        <section className="py-24 px-[5%] bg-[#0D0D0D] relative z-20" id="menu">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col items-center text-center mb-16">
                    <h4 className="text-[#F5A623] font-mono text-sm tracking-widest uppercase mb-4">
                        A Seleção Exclusiva
                    </h4>
                    <h2 className="text-5xl md:text-7xl font-serif italic text-[#F2F0E9] mb-8">
                        Nosso Cardápio
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-white/10 pb-4 w-full max-w-2xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-lg transition-all duration-300 relative ${activeTab === tab
                                    ? 'text-[#E8441A] font-bold'
                                    : 'text-[#e0e0e0] opacity-60 hover:opacity-100'
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <span className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-[#E8441A]"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-[#1A1010] rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(232,68,26,0.3)] hover:border-[#E8441A]/20 flex flex-col h-full"
                        >
                            <div className="relative h-64 w-full overflow-hidden rounded-t-[2rem]">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 z-10">
                                    <span className={`inline-block text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider ${item.tagColor}`}>
                                        {item.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold font-sans text-[#F2F0E9] group-hover:text-[#E8441A] transition-colors">
                                        {item.name}
                                    </h3>
                                    <span className="font-mono text-[#E8441A] font-bold text-xl">
                                        {item.price}
                                    </span>
                                </div>

                                <p className="font-serif italic text-lg text-[#e0e0e0]/70 leading-relaxed mb-8 flex-grow">
                                    {item.desc}
                                </p>

                                <button className="relative w-full overflow-hidden rounded-full border border-[#E8441A]/50 py-3.5 px-6 font-semibold text-[#E8441A] transition-colors group/btn hover:text-[#1A1010] mt-auto">
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <ShoppingBag size={18} />
                                        Adicionar ao Carrinho
                                    </span>
                                    {/* Switched z-0 to -z-10 so it doesn't cover text if stacking context differs, and ensured text color changes on hover */}
                                    <div className="absolute inset-0 h-full w-full translate-y-full bg-[#E8441A] transition-transform duration-300 ease-out group-hover/btn:translate-y-0 -z-10"></div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
