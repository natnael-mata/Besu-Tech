import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionTitle from '../UI/SectionTitle';

const faqs = [
    {
        question: "What industries do you specialize in?",
        answer: "We specialize in Biomedical engineering, industrial manufacturing, hospitality (laundry and kitchen systems), and commercial building electromechanical systems."
    },
    {
        question: "Do you offer emergency repair services?",
        answer: "Yes, we provide 24/7 priority response for our contract clients and rapid emergency dispatch for critical system failures in hospitals and factories."
    },
    {
        question: "Are your technicians certified?",
        answer: "All our engineers and technicians hold industry-standard certifications for biomedical equipment calibration and industrial electrical systems."
    },
    {
        question: "How do maintenance contracts work?",
        answer: "Our maintenance contracts are tailored to your facility. They typically include scheduled inspections, priority response, and discounted rates on genuine spare parts."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-[#fbfcfd]" id="faq">
            <div className="container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <SectionTitle
                            subtitle="Support Intelligence"
                            title="Frequently Asked Questions"
                            centered={false}
                        />
                        <p className="text-gray-500 text-lg mt-6 leading-relaxed max-w-md">
                            Clear answers to help you understand our technical process, response standards, and service commitment.
                        </p>
                        <div className="mt-10 p-8 glass rounded-3xl border border-primary/5 inline-block">
                            <p className="text-sm font-bold text-secondary mb-2">Need a custom inquiry?</p>
                            <a href="#contact" className="text-primary font-black text-sm uppercase tracking-widest hover:underline">Drop us a line →</a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`rounded-[2rem] transition-all duration-500 overflow-hidden ${openIndex === index ? 'bg-white shadow-xl shadow-secondary/5 border-transparent' : 'bg-transparent border border-gray-100 hover:border-primary/20'}`}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex justify-between items-center p-8 text-left transition-colors"
                                >
                                    <span className={`font-black tracking-tight text-lg ${openIndex === index ? 'text-primary' : 'text-secondary'}`}>{faq.question}</span>
                                    <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-primary text-white rotate-0' : 'bg-slate-100 text-secondary rotate-90'}`}>
                                        {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-8 pb-8 text-gray-500 leading-relaxed font-medium">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
