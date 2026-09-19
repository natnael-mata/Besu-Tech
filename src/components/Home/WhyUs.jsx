import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import { CheckCircle2 } from 'lucide-react';

const BioFeatures = [
    "Certified Medical Equipment Technicians",
    "24/7 Emergency Breakdown Support",
    "ISO Compliance Standards",
    "Comprehensive Maintenance Contracts"
];

const WhyUs = () => {
    return (
        <section id="why-us" className="py-20 bg-secondary text-white relative overflow-hidden">
            {/* Decorative cricle */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>

            <div className="container-padding relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionTitle
                            subtitle="Why Clients Choose Besu"
                            title="Technical Excellence You Can Trust"
                            centered={false}
                            className="text-white"
                        />
                        <p className="text-gray-200 mb-8 text-lg opacity-90">
                            We understand that downtime costs money—and in healthcare, it risks lives. That's why we've built a team of specialized engineers dedicated to keeping your critical systems running at peak performance.
                        </p>

                        <ul className="space-y-4">
                            {BioFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 className="text-primary mr-3 flex-shrink-0" />
                                    <span className="font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl border border-gray-700 flex items-center justify-center">
                            {/* Placeholder for an image */}
                            <div className="text-center p-8">
                                <h4 className="text-xl font-bold text-white mb-2">Team at Work</h4>
                                <p className="text-gray-300">Image of engineers repairing equipment</p>
                            </div>
                        </div>
                        {/* Float stat card */}
                        <div className="absolute -bottom-6 -left-6 bg-white text-secondary p-6 rounded shadow-lg max-w-xs">
                            <p className="text-4xl font-bold text-primary mb-1">10+</p>
                            <p className="font-semibold text-sm">Years of Operational Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
