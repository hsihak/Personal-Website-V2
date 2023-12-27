import Image from "next/image";
import { client } from "../lib/sanity"
import BlurImage from "../components/BlurImage";
import ProjectButton from "../components/buttons/Projectbutton";
import { BsGithub } from 'react-icons/bs';
import { MdOutlineTerminal } from "react-icons/md";
import Link from "next/link";
import BackButton from "../components/buttons/Backbutton";
import { SiAdobexd, SiDevpost } from "react-icons/si";
import { ProjectType } from "../types";
import { getProject } from "@/sanity/sanity.query";


export default async function Projects() {
 
    const data : ProjectType[] = await getProject();

    return (
    <>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-gray-500 dark:divide-gray-700'>
            <div className='space-y-2 pt-5 pb-8 md:space-y-5'>
                <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-13'>
                Projects
                </h1>
            </div>
            <div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-1 lg:gap-16 pt-8">
                
            {data.map((project, index) => (
                <article key={index} className="flex flex-col md:flex-row w-full relative">
                    {index % 2 === 0 ? (
                        <>
                            {/* Image on the left for even index */}
                            <div className="h-60 md:h-96 w-3/5 relative border border-gray-400 rounded-md overflow-hidden dark:shadow-gray-700 shadow-indigo-100 transition duration-300 delay-150 hover:delay-200 hover:scale-105">
                                <BlurImage imageSrc={project.imageUrl}/>
                            </div>

                            {/* Text on the right for even index */}
                            
                            <div className="flex items-center flex-col justify-center w-full md:w-2/5 gap-4">
                                <h2 className="text-4xl font-bold">{project.title}</h2>
                                <p className="line-clamp-3 bg-indigo-300 rounded-md px-4 py-1 text-center dark:bg-indigo-700 ml-[-40px] relative z-20 bg-opacity-50">{project.overview}</p>

                                <div className="text-2xl flex gap-6">
                                    {/* Github link */}
                                    {project.githubLink != undefined && (
                                        <Link href={project.githubLink} legacyBehavior>
                                            <a  className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 dark:border-white dark:border'
                                                target={'_blank'}>
                                                <BsGithub className='hover:fill-purple-600'/>
                                            </a>
                                        </Link>
                                    )}

                                    {/* Live Demo Link */}
                                    {project.demoLink != undefined && (
                                        <Link href={project.demoLink} legacyBehavior>
                                            <a  className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 dark:border-white dark:border'
                                                target={'_blank'}>
                                                <MdOutlineTerminal className='hover:fill-blue-400'/>
                                            </a>
                                        </Link>
                                    )}

                                    {/* DevPost Link */}
                                    {project.devPostLink != undefined && (
                                        <Link href={project.devPostLink} legacyBehavior>
                                            <a  className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 dark:border-white dark:border'
                                                target={'_blank'}>
                                                <SiDevpost className='hover:fill-blue-400'/>
                                            </a>
                                        </Link>
                                    )}

                                    {/* Prototype Link */}
                                    {project.prototypeLink != undefined && (
                                        <Link href={project.prototypeLink} legacyBehavior>
                                            <a  className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 dark:border-white dark:border'
                                                target={'_blank'}>
                                                <SiAdobexd className=' hover:fill-fuchsia-900'/>
                                            </a>
                                        </Link>
                                    )}
                                </div>
                                <ProjectButton slug={project.slug}/>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Text on the left for odd index */}
                            <div className="flex items-center flex-col justify-center w-full md:w-2/5 gap-4 px-4">
                                <h2 className="text-4xl font-bold">{project.title}</h2>
                                <p className="line-clamp-3 bg-indigo-300 rounded-md px-4 py-1 text-center dark:bg-indigo-700 mr-[-40px] relative z-20 bg-opacity-50">{project.overview}</p>
                                <div className="text-2xl flex gap-4">
                                    {/* Github link */}
                                    {project.githubLink != undefined && (
                                        <Link href={project.githubLink} legacyBehavior>
                                            <a  className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 dark:border-white dark:border'
                                                target={'_blank'}>
                                                <BsGithub className='hover:fill-purple-600'/>
                                            </a>
                                        </Link>
                                    )}

                                    {/* Live Demo Link */}
                                    {project.demoLink != undefined && (
                                        <Link href={project.demoLink} legacyBehavior>
                                            <a  className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 dark:border-white dark:border'
                                                target={'_blank'}>
                                                <MdOutlineTerminal className='hover:fill-blue-400'/>
                                            </a>
                                        </Link>
                                    )}

                                    {/* DevPost Link */}
                                    {project.devPostLink != undefined && (
                                        <Link href={project.devPostLink} legacyBehavior>
                                            <a  className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 dark:border-white dark:border'
                                                target={'_blank'}>
                                                <SiDevpost className='hover:fill-blue-400'/>
                                            </a>
                                        </Link>
                                    )}

                                    {/* Prototype Link */}
                                    {project.prototypeLink != undefined && (
                                        <Link href={project.prototypeLink} legacyBehavior>
                                            <a  className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 dark:border-white dark:border'
                                                target={'_blank'}>
                                                <SiAdobexd className=' hover:fill-fuchsia-900'/>
                                            </a>
                                        </Link>
                                    )}
                                </div>
                                <ProjectButton slug={project.slug}/>
                            </div>

                            {/* Image on the right for odd index */}
                            <div className="h-60 md:h-96 w-3/5 relative border border-gray-400 rounded-md overflow-hidden dark:shadow-gray-700 shadow-indigo-100 transition duration-300 delay-150 hover:delay-200 hover:scale-105 ">
                                <BlurImage imageSrc={project.imageUrl}/>
                            </div>
                        </>
                    )}
                </article>
                ))}

            </div>
        </div>            
        <div className="my-10 flex items-center justify-center">
            <BackButton/>
        </div>
    </>
    )
}