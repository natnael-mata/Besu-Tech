import React from 'react';
import Button from '../UI/Button';

const CTASection = () => {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container-padding text-center">
                <h2 className="text-3xl font-heading font-bold text-secondary mb-6">
                    Ready to Optimize Your Equipment Performance?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Contact our certified engineers for a diagnostic visit or a customized maintenance proposal.
                </p>
                <div className="flex justify-center gap-4">
                    <Button to="/contact" variant="primary">Get in Touch</Button>
                    <Button to="/services" variant="outline">Browse Services</Button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
