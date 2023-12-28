import { BsGithub } from 'react-icons/bs';
import { MdOutlineTerminal } from "react-icons/md";
import { SiAdobexd, SiDevpost } from "react-icons/si";

export default function ProjectsSkeleton() {
    return (
        <>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='space-y-2 pt-5 pb-8 md:space-y-5'>
                    <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-13'>
                        Loading Projects...
                    </h1>
                </div>

                <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-1 lg:gap-16 pt-8 animate-pulse">
                    <article className="flex flex-col md:flex-row w-full">
                        <div className="h-60 md:h-96 md:w-3/5 bg-gray-300 rounded-md">
                        </div>

                        <div className="flex items-center flex-col justify-center w-full md:w-2/5 gap-4">
                            <h2 className="text-4xl font-bold text-gray-500">Project Title</h2>
                            <p className="bg-gray-300 rounded-md h-6 w-full"></p>

                            <div className="text-2xl flex gap-6">
                                <BsGithub className='text-gray-300'/>
                                <MdOutlineTerminal className='text-gray-300'/>
                                <SiDevpost className='text-gray-300'/>
                                <SiAdobexd className='text-gray-300'/>
                            </div>
                            <button className="bg-gray-300 rounded-md h-10 w-32"></button> 
                        </div>
                    </article>
                </div>
            </div>
            <div className="my-10 flex items-center justify-center">
                <div className="bg-gray-300 rounded-md h-10 w-32"></div> 
            </div>
        </>
    )
}
