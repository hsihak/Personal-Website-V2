import { ReactNode } from "react";

export function SectionHeading({children}: {children: ReactNode}) {
    return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-gray-500 dark:divide-gray-700'>
        <div className='space-y-2 pt-5 pb-8 md:space-y-5'>
            <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-13'>
            {children}
            </h1>
        </div>
        <div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
        </div>
    </div>
    )
}