import React from "react";

const OurServices = () => {
    const items = [
        {
            title: "Express & Standard Delivery",
            desc: "We deliver parcels within 24–72 hours in Dhaka, Chattogram, Sylhet, Khulna, and Rajshahi. Express delivery inside Dhaka within 4–6 hours.",
        },
        {
            title: "Nationwide Delivery",
            desc: "We deliver parcels to every district with doorstep delivery, ensuring your products reach customers within 48–72 hours.",
        },
        {
            title: "Fulfillment Solution",
            desc: "Inventory management, online order processing, packaging, and after-sales support — all tailored for your business.",
        },
        {
            title: "Cash on Home Delivery",
            desc: "100% secure Cash on Delivery anywhere in Bangladesh with guaranteed product safety.",
        },
        {
            title: "Corporate Logistics Service",
            desc: "Custom corporate logistics including warehouse & inventory management for enterprise needs.",
        },
        {
            title: "Reverse Logistics",
            desc: "Allow customers to return or exchange products through our nationwide reverse logistics support.",
        },
    ];

    return (
        <div className="w-full bg-secondary py-16 px-6 rounded-4xl">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl font-semibold text-white text-center">
                    Our Services
                </h2>

                <p className="text-white text-center max-w-2xl mx-auto mt-3 mb-12">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm
                         hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default OurServices;
