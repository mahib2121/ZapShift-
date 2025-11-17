import React from 'react';

const Feature = () => {
    const features = [
        {
            title: "Live Parcel Tracking",
            desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
            img: "../../src/assets/live-tracking.png",
        },
        {
            title: "100% Safe Delivery",
            desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            img: "../../src/assets/safe-delivery.png",
        },
        {
            title: "24/7 Call Center Support",
            desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
            img: "../../src/assets/Callcenter.jpg",
        }
    ];

    return (
        <div className="w-full bg-[#F5F7F9] py-10">
            <div className="max-w-6xl mx-auto space-y-6">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-6 bg-white rounded-xl shadow-sm p-6"
                    >
                        {/* Left Illustration */}
                        <div className="w-1/4 flex justify-center">
                            <img src={item.img} alt={item.title} className="w-32 h-32 object-contain" />
                        </div>

                        {/* Dotted Divider */}
                        <div className="border-r-2 border-dotted border-gray-300 h-28"></div>

                        {/* Text Content */}
                        <div className="w-3/4">
                            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feature;
