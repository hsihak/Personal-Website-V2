import { ReactNode } from "react";

export function SubSectionHeading({children}: {children: ReactNode}) {
    return (
    <div className=' max-w-screen-xl mx-auto divide-y divide-gray-500 dark:divide-gray-700'>
        <div className='space-y-2 pt-5 pb-8 md:space-y-5'>
            <h1 className='font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-2xl md:leading-13'>
            {children}
            </h1>
        </div>
        <div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
        </div>
    </div>
    )
}