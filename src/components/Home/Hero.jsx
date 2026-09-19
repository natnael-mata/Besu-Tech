import React from 'react';
import Button from '../UI/Button';
import { ArrowRight, Activity } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-section relative mesh-gradient border-b border-gray-100 overflow-hidden min-h-screen flex items-center pt-20 md:pt-32">
            {/* Background elements */}
            <div className="absolute inset-0 dot-pattern opacity-[0.07]"></div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[20vw] h-[20vw] min-w-[300px] min-h-[300px] bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[15vw] h-[15vw] min-w-[250px] min-h-[250px] bg-secondary/5 rounded-full blur-[80px]"></div>

            <div className="container-padding relative z-10 w-full py-10 lg:py-0">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 text-left order-2 lg:order-1">
                        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/50 mb-6 animate-fade-in-up">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-secondary">
                                Engineering Excellence Since 2014
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-secondary mb-6 animate-fade-in-up delay-100 tracking-tighter leading-[1.1]">
                            Besu Tech <br />
                            <span className="text-gradient">Electromechanical</span> <br />
                            <span className="text-gradient">& Biomedical Solutions</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600/90 mb-10 leading-relaxed font-semibold animate-fade-in-up delay-200 max-w-xl">
                            Be U Tech Engineering. We bridge the gap between complex machinery and peak operational performance.
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-6 animate-fade-in-up delay-300">
                            <Button
                                href="#contact"
                                variant="primary"
                                className="px-8 py-3.5 rounded-lg text-lg"
                            >
                                Get Started
                            </Button>
                            <Button
                                href="#services"
                                variant="outline"
                                className="px-8 py-3.5 rounded-lg text-lg group bg-white/60"
                            >
                                Expertise <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Three Smaller Image Boxes order-1 for mobile, starts below nav */}
                    <div className="w-full lg:w-1/2 relative min-h-[350px] md:min-h-[500px] animate-fade-in-up delay-200 order-1 lg:order-2">
                        {/* Image Box 1 - Industrial Laundry */}
                        <div className="absolute top-0 right-0 w-[65%] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl z-10 border border-white/40">
                            <div className="w-full h-full bg-slate-100 relative group overflow-hidden fade-edges">
                                <img
                                    src="/laundry-service.png"
                                    alt="Industrial Laundry"
                                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent flex items-end p-4">
                                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Industrial Laundry</span>
                                </div>
                            </div>
                        </div>

                        {/* Image Box 2 - Generator Service */}
                        <div className="absolute top-[20%] -left-2 w-[60%] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl z-20 hover:z-40 transition-all duration-500 border border-white/40">
                            <div className="w-full h-full bg-slate-100 relative group overflow-hidden fade-edges">
                                <img
                                    src="/generator-service.png"
                                    alt="Power Systems"
                                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent flex items-end p-4">
                                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Power Systems</span>
                                </div>
                            </div>
                        </div>

                        {/* Image Box 3 - Dental/Biomedical Service */}
                        <div className="absolute bottom-4 right-[15%] w-1/2 aspect-square rounded-[2rem] overflow-hidden shadow-xl z-30 hover:z-40 transition-all duration-500 border border-white/40">
                            <div className="w-full h-full bg-slate-100 relative group overflow-hidden fade-edges">
                                <img
                                    src="/dental-service.png"
                                    alt="Health Technology Specialist"
                                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent flex items-end p-4">
                                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Health Tech</span>
                                </div>
                            </div>
                        </div>

                        {/* Shrunken Stat Tags */}
                        <div className="absolute -top-4 left-1/4 glass py-2 px-4 rounded-full z-50 shadow-lg border-white/40 flex items-center gap-2">
                            <Activity size={14} className="text-primary" />
                            <span className="text-[11px] font-black text-secondary uppercase tracking-widest leading-none">Live Uptime: 99.9%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;