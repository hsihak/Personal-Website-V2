import React from 'react';

export default function AboutSkeleton() {
  return (
    <div className='divide-y divide-gray-500 dark:divide-gray-700'>
        <div className='p-8'>
          <div className='animate-pulse'>
            <div className='rounded-full bg-gray-300 h-48 w-48 mx-auto'></div>
            <div className='h-6 bg-gray-300 rounded mt-4 w-1/2 mx-auto'></div>
            <div className='h-4 bg-gray-300 rounded mt-2 w-1/3 mx-auto'></div>
            <div className='flex justify-center mt-4 gap-4'>
              { /* Icons placeholders */ }
              <div className='h-8 w-8 bg-gray-300 rounded'></div>
              <div className='h-8 w-8 bg-gray-300 rounded'></div>
              <div className='h-8 w-8 bg-gray-300 rounded'></div>
              <div className='h-8 w-8 bg-gray-300 rounded'></div>
            </div>
            <div className='mt-8'>
              <div className='h-4 bg-gray-300 rounded w-3/4 mx-auto'></div>
              <div className='h-4 bg-gray-300 rounded w-3/4 mx-auto my-2'></div>
              <div className='h-4 bg-gray-300 rounded w-3/4 mx-auto'></div>
            </div>
          </div>
        </div>
    </div>
  );
}
