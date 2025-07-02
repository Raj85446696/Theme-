import React, { useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import data from '../../CourseData.json';
import MainCard from './MainCards';

const initialDatas = data;

export default function Cards() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        "Technical Skills",
        "Life Skills",
        "Social Skills",
        "Business and Mgmt Skills"
    ];

    const handleCategoryClick = (category) => {
        setSearchTerm(prevTerm => (prevTerm === category ? '' : category));
    };

    const filteredDatas = useMemo(() => {
        if (!searchTerm) return initialDatas;
        const lower = searchTerm.toLowerCase();
        return initialDatas.filter(data =>
            data.title.toLowerCase().includes(lower) ||
            data.origin.toLowerCase().includes(lower) ||
            data.university.toLowerCase().includes(lower) ||
            data.course_id.toLowerCase().includes(lower) ||
            data.category.toLowerCase().includes(lower)
        );
    }, [searchTerm]);

    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-6 md:p-10 antialiased mt-5">
            {/* Search Bar */}
            <div className="w-full flex justify-center mb-6">
                <div className="relative w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Filter courses by title, origin ..."
                        className="w-full px-5 py-2 mb-7 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-700 placeholder-gray-400 text-lg md:text-xl"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-3 top-6 -translate-y-1/2 text-gray-500 hover:text-red-600 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6 mb-10 mt-5">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        className={`flex-1 min-w-[150px] max-w-[200px] px-4 py-3 md:px-6 md:py-4 border-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
                        font-semibold text-base md:text-lg text-center
                        ${searchTerm === category
                                ? 'bg-yellow-500 text-white border-yellow-600'
                                : 'bg-white text-yellow-700 border-yellow-500 hover:bg-yellow-500 hover:text-white'}
                        focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Cards Grid */}
            {filteredDatas.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
                    {filteredDatas.map((data, index) => (
                        <MainCard key={index} data={data} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-600 text-lg mt-8">
                    No courses found matching your search.
                </div>
            )}

            {/* View All */}
            <div
                className="text-1xl font-semibold text-yellow-400 mt-20 hover:text-blue-500 hover:underline cursor-pointer"
                onClick={() => navigate('/course')}
            >
                View All Courses
            </div>
        </div>
    );
}
