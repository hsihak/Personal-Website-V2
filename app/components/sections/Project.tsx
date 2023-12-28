import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { client } from "../../lib/sanity";
import BlurImage from "../BlurImage";
import ProjectButton from "../buttons/Projectbutton";
import { ProjectType } from '../../types';
import { getProjects } from '@/app/lib/sanity.query';
import AllProjectsButton from '../buttons/AllProjectsbutton';
import ScrollTriggerProvider from '../providers/ScrollTriggerProvider';


export default function ProjectCarousel() {
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchProjectData() {
            try {
                const fetchedProjects = await getProjects();
                setProjects(fetchedProjects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProjectData();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 800 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    const carouselItemStyle: React.CSSProperties = {
        margin: '10px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '350px',
    };

    return (
        <>
            <div className=''>
            
            <Carousel responsive={responsive} >
                {projects.map((project, index) => (
                    <ScrollTriggerProvider key={index} index={index}>
                        <article 
                            className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-indigo-100 transition duration-300 delay-150 hover:delay-200 hover:scale-105"
                            style={carouselItemStyle}
                        >
                            <div className="h-56 w-full relative">
                                <BlurImage imageSrc={project.imageUrl}/>
                            </div>

                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                    {project.overview}
                                </p>
                                <ProjectButton slug={project.slug}/>
                            </div>
                        </article>
                    </ScrollTriggerProvider>
                ))}
            </Carousel>
            <AllProjectsButton/>
            </div>
        </>
    )
}
