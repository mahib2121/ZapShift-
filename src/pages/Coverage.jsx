import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useLoaderData } from 'react-router-dom';

const Coverage = () => {
    const warehouses = useLoaderData();

    const pos = [23.6850, 90.3563];

    // CREATE MAP REFERENCE
    const mapRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();

        const location = e.target.location.value.trim();
        if (!location) return;

        const district = warehouses.find(c =>
            c.district.toLowerCase().includes(location.toLowerCase())
        );

        if (district) {
            const coord = [district.latitude, district.longitude];
            mapRef.current.flyTo(coord, 12); // zoom to district
        } else {
            alert("District not found");
        }
    };

    return (
        <div className="
            w-full mx-auto 
            bg-white rounded-4xl 
            flex flex-col 
            gap-6 md:gap-[50px]
            p-6 md:p-[80px_109px]
        ">

            <p className="
                text-[30px] md:text-[56px] 
                font-['Urbanist'] font-extrabold 
                leading-[36px] md:leading-[67px] 
                text-[rgba(3,55,61,1)] text-left
            ">
                We are available in 64 Districts
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="w-full">
                <input
                    type="text"
                    name="location"
                    placeholder="Search district..."
                    className="input input-sm w-full max-w-xs"
                />
            </form>

            {/* Map Box */}
            <div className="
                w-full 
                h-[350px]        
                md:h-[600px]     
                rounded-xl overflow-hidden
            ">
                <MapContainer
                    center={pos}
                    zoom={7}
                    scrollWheelZoom={false}
                    className="w-full h-full"
                    ref={mapRef}   // IMPORTANT
                >
                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {warehouses.map((center, index) => (
                        <Marker
                            key={index}
                            position={[center.latitude, center.longitude]}
                        >
                            <Popup>
                                <strong>{center.district}</strong> <br />
                                Service Area: {center.covered_area.join(', ')}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

        </div>
    );
};

export default Coverage;
