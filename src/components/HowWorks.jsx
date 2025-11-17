import React from "react";
import { FaTruck } from "react-icons/fa";

const items = [
    {
        title: "Booking Pick & Drop",
        desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        title: "Cash On Delivery",
        desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        title: "Delivery Hub",
        desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        title: "Booking SME & Corporate",
        desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
];

const HowWorks = () => {
    return (
        <div className="w-full bg-[#ECEFF1] py-16 px-6 rounded-4xl ">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                    How it Works
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all"
                        >
                            <FaTruck className="text-teal-700 text-3xl mb-4" />

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

export default HowWorks;
