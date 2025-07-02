// MainCard.jsx
import React from 'react';

const PLACEHOLDER_IMAGE = "https://placehold.co/300x150/e0e0e0/555555?text=Course+Image";

export default function MainCard({ data }) {
    return (
        <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl font-sans">
            <div className="relative w-full h-40 overflow-hidden">
                <img
                    src={data.image || PLACEHOLDER_IMAGE}
                    alt={data.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = PLACEHOLDER_IMAGE;
                    }}
                />
            </div>

            <div className="p-4 flex flex-col space-y-3">
                <div className="flex flex-col items-start">
                    <span className="px-3 py-1 bg-white border-2 border-yellow-500 text-yellow-700 text-sm font-semibold rounded-full shadow-sm">
                        {data.origin}
                    </span>
                    <span className="mt-1 text-gray-600 text-sm">{data.university}</span>
                </div>

                <a href="#" className="text-xl font-bold text-blue-700 hover:underline">
                    {data.title}
                </a>

                <span className="text-gray-500 text-sm uppercase">
                    {data.course_id}
                </span>

                <div className="text-gray-700 text-sm font-medium">
                    Starts: <span className="text-blue-600 hover:underline cursor-pointer">{data.start_date}</span>
                </div>
            </div>
        </div>
    );
}
