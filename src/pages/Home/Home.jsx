import React from 'react';
import Banner from '../../components/Hero/Banner';
import HowWorks from '../../components/HowWorks';
import OurServices from '../../components/OurServices';
import Brands from '../../components/Brands';
import Feature from '../../components/Feature';
import ReviewCard from '../ReviewPage';
import ReviewPage from '../ReviewPage';

const reviewPromis = fetch('/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <>
            <div className="relative w-full">

                {/* Banner */}
                <Banner />

                {/* Buttons overlay */}
                <div className="absolute bottom-10 left-10 flex items-center gap-4">
                    <button className="px-6 py-3 bg-lime-300 rounded-full font-semibold">
                        Track Your Parcel
                    </button>

                    <button className="px-6 py-3 border border-gray-300 rounded-full font-semibold">
                        Be A Rider
                    </button>
                </div>
            </div>
            <div>
                <HowWorks></HowWorks>
            </div>
            <div>
                <OurServices></OurServices>
            </div>
            <div className="px-6 py-3">
                <h2 className="text-3xl font-semibold text-black text-center gap-4 p-4 px-4.5">
                    We've helped thousands of sales teams
                </h2>
                <Brands />
            </div>
            <div>
                <Feature></Feature>
                {/* <ReviewCard reviewPromis={reviewPromis}></ReviewCard> */}
                <ReviewPage reviewPromis={reviewPromis}></ReviewPage>
            </div>



        </>
    );
};

export default Home;
