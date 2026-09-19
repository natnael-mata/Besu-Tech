import React from 'react';

const TrustStrip = () => {
    const partners = [
        { name: "Yekatit 12 Hospital Medical College", logo: "/partners/yekatit-12.png" },
        { name: "De Leopol Hotel", logo: "/partners/de-leopol.png" },
        { name: "Ajora", logo: "/partners/ajora.png" },
        { name: "Karamara General Hospital", logo: "/partners/karamara.png" },
        { name: "Abebech Gobena Charity", logo: "/partners/abebech-gobena.png" },
    ];

    // Combine for a longer strip
    const allPartners = [...partners, ...partners, ...partners];

    return (
        <div className="bg-white border-y border-gray-100 py-12 overflow-hidden">
            <div className="container-padding mb-10">
                <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Engineered for Industry Leaders</p>
            </div>

            <div className="flex w-fit animate-infinite-scroll">
                <div className="flex items-center gap-16 md:gap-24 px-12">
                    {allPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-4 group cursor-default h-24 md:h-32 justify-center min-w-[150px] md:min-w-[200px]"
                        >
                            <div className="h-12 md:h-20 flex items-center justify-center filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-full max-w-full object-contain"
                                    onError={(e) => {
                                        // Fallback to text if image fails
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <span className="hidden text-xs md:text-sm font-black text-secondary/40 uppercase tracking-tighter whitespace-nowrap">
                                    {partner.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Clone for seamless loop */}
                <div className="flex items-center gap-16 md:gap-24 px-12" aria-hidden="true">
                    {allPartners.map((partner, index) => (
                        <div
                            key={`clone-${index}`}
                            className="flex flex-col items-center gap-4 group cursor-default h-24 md:h-32 justify-center min-w-[150px] md:min-w-[200px]"
                        >
                            <div className="h-12 md:h-20 flex items-center justify-center filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-full max-w-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <span className="hidden text-xs md:text-sm font-black text-secondary/40 uppercase tracking-tighter whitespace-nowrap">
                                    {partner.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustStrip;
