import React from 'react';

export default function ProjectCarouselSkeleton() {
    const numberOfSkeletonItems = 3; 

    return (
        <div className="flex flex-wrap justify-center pt-52 animate-pulse">
            {Array.from({ length: numberOfSkeletonItems }).map((_, index) => (
                <div key={index} className=" m-2 p-4 max-w-screen-2xl h-56 w-full bg-gray-200 rounded-lg shadow-md">
                    <div className="h-40 bg-gray-300 rounded-md"></div>
                    <div className="mt-4 space-y-3">
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/5"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
