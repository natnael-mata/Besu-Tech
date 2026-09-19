import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../UI/Button';
import Logo from '../UI/Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            // ScrollSpy Logic
            const sections = ['home', 'why-us', 'services', 'testimonials', 'faq', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 200 && rect.bottom >= 200;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'Why Us', href: '#why-us', id: 'why-us' },
        { name: 'Services', href: '#services', id: 'services' },
        { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
        { name: 'FAQ', href: '#faq', id: 'faq' },
    ];

    return (
        <header className="absolute top-0 left-0 right-0 z-50 py-0">
            <div className="container-padding">
                <nav className="rounded-[2.5rem] px-10 md:px-14 py-6 flex justify-between items-center bg-transparent">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <Logo className="h-14 md:h-24 group-hover:scale-105 transition-transform duration-500" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`text-[14px] font-black uppercase tracking-[0.25em] transition-all relative py-2 ${activeSection === item.id ? 'text-primary' : 'text-primary/70 hover:text-primary hover:tracking-[0.35em]'}`}
                            >
                                {item.name}
                                {activeSection === item.id && (
                                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary animate-fade-in shadow-lg shadow-primary/20"></span>
                                )}
                            </a>
                        ))}

                        {/* Distinct Contact Button */}
                        <Button
                            href="#contact"
                            variant="primary"
                            className="px-8 py-3.5 rounded-lg text-[13px] ml-4 hover:scale-105"
                        >
                            Contact Us
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <Button
                            href="#contact"
                            variant="primary"
                            className="px-6 py-2.5 rounded-lg text-[11px]"
                        >
                            Contact
                        </Button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="h-10 w-10 flex items-center justify-center text-primary transition-colors"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-6 animate-fade-in-up px-4">
                        <div className="glass p-10 rounded-[3rem] flex flex-col space-y-8 shadow-2xl border border-white/40">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`text-xl font-black uppercase tracking-[0.2em] ${activeSection === item.id ? 'text-primary' : 'text-primary/80'}`}
                                    onClick={() => {
                                        setIsOpen(false);
                                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <Button
                                href="#contact"
                                variant="primary"
                                className="w-full py-4 text-xl rounded-2xl"
                                onClick={() => setIsOpen(false)}
                            >
                                Get in Touch
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
