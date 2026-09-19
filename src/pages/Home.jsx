import React from 'react';
import Hero from '../components/Home/Hero';
import TrustStrip from '../components/Home/TrustStrip';
import WhyUs from '../components/Home/WhyUs';
import ServicesPreview from '../components/Home/ServicesPreview';
import Testimonials from '../components/Home/Testimonials';
import FAQ from '../components/Home/FAQ';
import ContactSection from '../components/Home/ContactSection';

const Home = () => {
    return (
        <div className="animate-fade-in">
            <Hero />
            <TrustStrip />
            <WhyUs />
            <ServicesPreview />
            <Testimonials />
            <FAQ />
            <ContactSection />
        </div>
    );
};

export default Home;
