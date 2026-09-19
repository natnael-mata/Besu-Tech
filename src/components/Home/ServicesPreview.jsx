import React from 'react';
import { Stethoscope, Factory, Zap, Dumbbell, ArrowUpRight } from 'lucide-react';
import SectionTitle from '../UI/SectionTitle';

const services = [
    {
        icon: <Stethoscope size={32} />,
        title: "Biomedical Engineering",
        description: "Precision calibration and installation for high-end diagnostic imaging and surgical systems.",
        tag: "HealthTech"
    },
    {
        icon: <Factory size={32} />,
        title: "Industrial Machinery",
        description: "Heavy-duty maintenance for Boilers, Steam Generators and automated laundry systems.",
        tag: "Industrial"
    },
    {
        icon: <Zap size={32} />,
        title: "Electrical Systems",
        description: "Enterprise-grade power solutions, backup generators, and distribution network management.",
        tag: "Power"
    },
    {
        icon: <Dumbbell size={32} />,
        title: "Fitness & Wellness",
        description: "Technical support for commercial fitness centers and specialized physical therapy hardware.",
        tag: "Wellness"
    },
];

const ServicesPreview = () => {
    return (
        <section id="services" className="py-24 bg-[#fbfcfd]">
            <div className="container-padding">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <SectionTitle
                            subtitle="Expertise Domains"
                            title="Engineered for Performance"
                            centered={false}
                        />
                    </div>
                    <a href="/services" className="px-6 py-3 bg-white border border-gray-100 rounded-full text-sm font-bold text-secondary shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 group">
                        Explore Full Directory <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="glass p-8 rounded-[2rem] hover:bg-white transition-all duration-500 group relative overflow-hidden border border-transparent hover:border-primary/10">
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>

                            <div className="flex justify-between items-start mb-8">
                                <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                                    {service.icon}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-primary transition-colors">
                                    {service.tag}
                                </span>
                            </div>

                            <h3 className="text-xl font-black text-secondary mb-4 tracking-tight leading-tight group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed mb-8 group-hover:text-gray-600 transition-colors">
                                {service.description}
                            </p>

                            <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                <span>Learn More</span>
                                <ArrowUpRight size={14} className="text-primary" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
