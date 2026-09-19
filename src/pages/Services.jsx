import React from 'react';
import SectionTitle from '../components/UI/SectionTitle';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { Stethoscope, Factory, Zap, Dumbbell, Wrench, Activity, Battery, Monitor } from 'lucide-react';

const allServices = [
    {
        category: "Biomedical Engineering",
        icon: <Stethoscope size={40} className="text-primary" />,
        items: [
            "diagnostic imaging installation (MRI, CT, X-Ray)",
            "Surgical equipment calibration",
            "Life support systems maintenance",
            "Dental chair & unit servicing",
            "Laboratory equipment repair"
        ]
    },
    {
        category: "Industrial Machinery",
        icon: <Factory size={40} className="text-primary" />,
        items: [
            "Industrial laundry system installation",
            "Boiler & steam generator maintenance",
            "Textile machinery repair",
            "Hydraulic & pneumatic systems",
            "Factory automation support"
        ]
    },
    {
        category: "Electrical Systems",
        icon: <Zap size={40} className="text-primary" />,
        items: [
            "Power generator installation & ATS",
            "Transformer maintenance",
            "Industrial circuit breaker testing",
            "Passenger & freight lift maintenance",
            "Building electrical infrastructure"
        ]
    },
    {
        category: "Fitness & Wellness",
        icon: <Dumbbell size={40} className="text-primary" />,
        items: [
            "Commercial gym equipment setup",
            "Treadmill & elliptical repair",
            "Strength conditioning machine assembly",
            "Physiotherapy device calibration",
            "Preventive maintenance for gyms"
        ]
    }
];

const Services = () => {
    return (
        <div className="animate-fade-in pb-20">
            {/* Page Header */}
            <div className="bg-secondary text-white py-16 mb-12">
                <div className="container-padding">
                    <h1 className="text-4xl font-heading font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Specialized technical solutions for healthcare, industry, and commercial facilities.
                    </p>
                </div>
            </div>

            <div className="container-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {allServices.map((service, index) => (
                        <Card key={index} className="border-t-4 border-t-primary" hoverEffect={false}>
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-red-50 rounded-full mr-4">
                                    {service.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-secondary">{service.category}</h2>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-gray-700">
                                        <Activity size={18} className="text-gray-400 mr-2 flex-shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button to="/contact" variant="outline" className="w-full justify-center">
                                Request Service
                            </Button>
                        </Card>
                    ))}
                </div>

                {/* Maintenance Plans Section */}
                <div className="mt-20">
                    <SectionTitle
                        subtitle="Service Contracts"
                        title="Maintenance Plans"
                        centered={true}
                    />
                    <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl font-bold text-secondary mb-4">Why Sign a Maintenance Contract?</h3>
                        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                            Preventive maintenance isn't just a cost—it's an investment in reliability.
                            Our service contracts ensure your critical equipment has 99% uptime, extended lifespan, and safety compliance.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="bg-white p-6 rounded shadow-sm">
                                <Monitor className="mx-auto text-primary mb-3" size={32} />
                                <h4 className="font-bold mb-2">Priority Response</h4>
                                <p className="text-sm text-gray-500">Jump the queue for emergency repairs.</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow-sm">
                                <Wrench className="mx-auto text-primary mb-3" size={32} />
                                <h4 className="font-bold mb-2">Regular Inspections</h4>
                                <p className="text-sm text-gray-500">Scheduled visits to catch issues early.</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow-sm">
                                <Battery className="mx-auto text-primary mb-3" size={32} />
                                <h4 className="font-bold mb-2">Spare Parts</h4>
                                <p className="text-sm text-gray-500">Discounted rates on genuine replacements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
