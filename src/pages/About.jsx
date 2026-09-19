import React from 'react';
import SectionTitle from '../components/UI/SectionTitle';

const About = () => {
    return (
        <div className="animate-fade-in pb-20">
            <div className="bg-secondary text-white py-16 mb-12">
                <div className="container-padding">
                    <h1 className="text-4xl font-heading font-bold mb-4">About Besu Solutions</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Bridging the gap between advanced technology and operational reliability since 2015.
                    </p>
                </div>
            </div>

            <div className="container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Text Content */}
                    <div>
                        <SectionTitle
                            subtitle="Our Story"
                            title="Excellence in Engineering"
                            centered={false}
                        />
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-4">
                                Besu Electromechanical & Biomedical Solutions was founded with a singular mission: to provide world-class technical support for critical infrastructure in Ethiopia.
                            </p>
                            <p className="mb-4">
                                We recognized a gap in the market—while high-tech medical and industrial equipment was being imported, the local capacity to maintain it was lagging. This successfully shortened the lifespan of expensive machinery and caused frequent, costly downtime.
                            </p>
                            <p className="mb-4">
                                Today, we have grown into a premier engineering firm with a team of certified professionals who understand the intricate details of both biomedical instrumentation and heavy industrial machinery.
                            </p>
                            <h3 className="text-xl font-bold text-secondary mt-8 mb-4">Our Core Values</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Precision:</strong> Close enough is not good enough, especially in healthcare.</li>
                                <li><strong>Integrity:</strong> Honest assessments and transparent pricing.</li>
                                <li><strong>Responsiveness:</strong> We treat your downtime as our emergency.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Image/Visual Content */}
                    <div className="relative">
                        <div className="bg-gray-200 rounded-lg h-96 w-full flex items-center justify-center text-gray-400">
                            {/* Placeholder for About Image */}
                            [Team Photo / Workshop Image]
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-lg text-white hidden md:block">
                            <p className="text-2xl font-bold font-heading mb-2">500+</p>
                            <p className="text-sm uppercase tracking-wider">Projects Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
