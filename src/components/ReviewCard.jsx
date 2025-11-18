import React from "react";

import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewCard = ({ review }) => {
    const {
        userName,
        ratings,
        review: userReview,
        user_photoURL,
        date,
    } = review;

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    // Convert rating to stars
    const stars = Array.from({ length: 5 }, (_, i) =>
        i < Math.floor(ratings) ? (
            <AiFillStar key={i} className="text-yellow-500 text-xl" />
        ) : (
            <AiOutlineStar key={i} className="text-yellow-500 text-xl" />
        )
    );

    return (
        <div className="card w-full max-w-xl bg-white shadow-md rounded-2xl p-8 mx-auto">
            {/* Quote Icon */}
            < BiSolidQuoteSingleLeft className="text-4xl text-primary" />

            {/* Review */}
            <p className="mt-4 text-gray-700 leading-relaxed">{userReview}</p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-dashed">
                {/* User Info */}
                <div className="flex items-center gap-4">
                    <img
                        src={user_photoURL}
                        alt={userName}
                        className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{userName}</h3>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>

                {/* Ratings */}
                <div className="flex items-center gap-1">{stars}</div>
            </div>
        </div>
    );
};

export default ReviewCard;
