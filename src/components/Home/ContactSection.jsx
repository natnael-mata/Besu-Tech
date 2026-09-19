import React, { useState } from 'react';
import SectionTitle from '../UI/SectionTitle';
import Button from '../UI/Button';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Transmission Successful. Our engineers will respond shortly.');
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="contact">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1D3557 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="container-padding relative z-10">
                <div className="glass-dark rounded-[3rem] overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Contact Info Side */}
                        <div className="p-10 md:p-16 lg:p-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
                            <SectionTitle
                                subtitle="Network Access"
                                title="Ready to Optimize Your Infrastructure?"
                                centered={false}
                                className="text-white"
                            />
                            <p className="text-gray-300 text-lg mb-12 mt-6 leading-relaxed">
                                Connect with our technical advisory team for enterprise assessments and service scheduling.
                            </p>

                            <div className="space-y-10">
                                <div className="flex items-start group">
                                    <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mr-6">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Direct Line</p>
                                        <p className="text-xl font-bold text-white">+251 9XX XXX XXX</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mr-6">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Electronic Mail</p>
                                        <p className="text-xl font-bold text-white">info@besusolutions.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mr-6">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Regional HQ</p>
                                        <p className="text-xl font-bold text-white">Addis Ababa, Ethiopia</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="p-10 md:p-16 lg:p-20 bg-white">
                            <h3 className="text-3xl font-black text-secondary mb-10 tracking-tight">System Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name / Organization"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-slate-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Secure Email Address"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-slate-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="relative group">
                                    <textarea
                                        name="message"
                                        placeholder="Describe your technical requirements..."
                                        required
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-slate-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all resize-none"
                                    ></textarea>
                                </div>
                                <Button type="submit" variant="primary" className="w-full h-16 rounded-2xl justify-center text-lg gap-3 shadow-xl shadow-primary/20 group">
                                    Initialize Communication <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
