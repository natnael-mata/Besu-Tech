import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../UI/Logo';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <Logo className="h-10 md:h-12" />
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Precision engineering for life and industry. We provide comprehensive installation, maintenance, and repair services for biomedical and electromechanical systems.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Our Services</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link to="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="text-gray-300">Biomedical Engineering</li>
                            <li className="text-gray-300">Industrial Machinery</li>
                            <li className="text-gray-300">Electrical Systems</li>
                            <li className="text-gray-300">Fitness Equipment</li>
                            <li className="text-gray-300">Preventive Maintenance</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">Addis Ababa, Ethiopia</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-primary flex-shrink-0" />
                                <span className="text-gray-300">+251 9XX XXX XXX</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-3 text-primary flex-shrink-0" />
                                <span className="text-gray-300">info@besusolutions.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Besu Electromechanical & Biomedical Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
