import React, { useState } from 'react';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/UI/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you! Your message has been sent. We will contact you shortly.');
    };

    return (
        <div className="animate-fade-in pb-20">
            <div className="bg-secondary text-white py-16 mb-12">
                <div className="container-padding">
                    <h1 className="text-4xl font-heading font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Get in touch for consultations, quotes, or emergency support.
                    </p>
                </div>
            </div>

            <div className="container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div>
                        <SectionTitle
                            subtitle="Get In Touch"
                            title="We're Here to Help"
                            centered={false}
                        />
                        <p className="text-gray-600 mb-8">
                            Reach out to us using the form or the contact details below. Our team is ready to assist you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-red-50 p-3 rounded-full mr-4 text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">Phone</h4>
                                    <p className="text-gray-600">+251 9XX XXX XXX</p>
                                    <p className="text-sm text-gray-500">Mon-Sat, 8am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-red-50 p-3 rounded-full mr-4 text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">Email</h4>
                                    <p className="text-gray-600">info@besusolutions.com</p>
                                    <p className="text-sm text-gray-500">Online support 24/7</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-red-50 p-3 rounded-full mr-4 text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">Office Location</h4>
                                    <p className="text-gray-600">Bole Sub-City, District 03</p>
                                    <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
                                        placeholder="+251..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
                                    placeholder="info@besusolutions.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
                                >
                                    <option value="">Select a service...</option>
                                    <option value="Biomedical">Biomedical Equipment</option>
                                    <option value="Industrial">Industrial Machinery</option>
                                    <option value="Electrical">Electrical Systems</option>
                                    <option value="Fitness">Fitness Equipment</option>
                                    <option value="Other">Other Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" className="w-full justify-center">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
