import React from 'react';
import SectionTitle from '../UI/SectionTitle';

const testimonials = [
    {
        quote: "Besu Solutions saved us critical downtime. Their response time for our CT scan repair was incredible, and the team was highly professional.",
        author: "Dr. Abebe K.",
        role: "Medical Director",
        company: "Sunrise Hospital",
        initials: "AK"
    },
    {
        quote: "We rely on Besu for all our gym equipment maintenance. They are reliable, knowledgeable, and fair with pricing.",
        author: "Fitsum Tessema",
        role: "General Manager",
        company: "Alpha Health Club",
        initials: "FT"
    },
    {
        quote: "Excellent service for our industrial laundry systems. The preventive maintenance plan has significantly reduced breakdowns.",
        author: "Sara Yohannes",
        role: "Operations Head",
        company: "Global Textile",
        initials: "SY"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
            <div className="container-padding">
                <SectionTitle
                    subtitle="Success Stories"
                    title="Voices of Trust"
                    centered={true}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {testimonials.map((item, index) => (
                        <div key={index} className="flex flex-col h-full glass p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500 hover:-translate-y-2 group">
                            <div className="flex gap-1 mb-8">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="h-4 w-4 text-primary fill-primary" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed mb-10 flex-grow font-medium italic">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-white font-black text-sm group-hover:bg-primary transition-colors duration-500">
                                    {item.initials}
                                </div>
                                <div>
                                    <h4 className="font-black text-secondary tracking-tight group-hover:text-primary transition-colors">{item.author}</h4>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.role} • {item.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
