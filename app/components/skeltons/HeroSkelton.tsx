import React from 'react';

export default function HeroSkeleton() {
  const userDataSkeleton = [{}]; // Array with an empty object to simulate a single user

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 justify-center pt-24">
        <div className="grid col-span-3">
            <div className="grid gap-6">
                <div className="h-8 bg-gray-300 rounded w-3/4 md:w-1/2"></div>
                <div className="h-12 bg-gray-300 rounded w-3/4 md:w-1/2"></div>
            </div>

            <div className="grid place-content-center gap-2">
                <div className="h-8 bg-gray-300 rounded w-full md:w-3/4"></div>
                <div className="h-8 bg-gray-300 rounded w-full md:w-3/4"></div>
                <div className="h-8 bg-gray-300 rounded w-full md:w-3/4"></div>
            </div>
        </div>

      {userDataSkeleton.map((user, index) => (
        <div className="col-span-2" key={index}>

          <div className="h-48 w-48 bg-gray-300 rounded-full mt-4"></div>
          

          <div className="w-3/5 h-6 bg-gray-300 rounded mt-2"></div>
          <div className="w-2/5 h-5 bg-gray-300 rounded mt-1"></div>

          <div className="flex mt-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      ))}

      
    </div>
  )
}
