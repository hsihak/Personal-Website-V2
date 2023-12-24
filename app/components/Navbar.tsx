"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Themebutton from "./Themebutton";

export default function Navbar() {
    let pathname = usePathname() || '/';
return (
    <Disclosure as="nav">
        {({open}) => (
            <>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex justify-between w-full">
                            <div className="flex items-center">
                                <Link href="/">
                                    <h1 className="text-3xl font-bold">
                                        Hangsihak <span className="text-indigo-500">Sin</span>
                                    </h1>
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                                <Link 
                                href="/" 
                                prefetch 
                                className={`${pathname == "/" ? 'border-indigo-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium' : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium'}`}>
                                    Home
                                </Link>
                                <Link 
                                href="/projects" 
                                prefetch 
                                className={`${pathname == "/projects" ? 'border-indigo-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium' : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium'}`}>
                                    Projects
                                </Link>
                                <Themebutton/>
                            </div>
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <Themebutton/>
                            <Disclosure.Button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:hover:bg-gray-800">
                                {open ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                  
                                ): (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </Disclosure.Button>
                        </div>
                    </div>
                </div>
                <Disclosure.Panel className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link href="/" prefetch className={`${pathname == "/" 
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800' 
                            : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'}`}>
                            Home
                        </Link>
                        <Link href="/projects" prefetch className={`${pathname == "/" 
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800' 
                            : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'}`}>
                            Projects
                        </Link>
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
)

}