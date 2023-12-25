import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { client } from "../lib/sanity";
import BlurImage from "./BlurImage";
import ProjectButton from "./Projectbutton";

interface Slug {
    current: string;
    _type: string;
}

interface Data {
    title: string,
    overview: string,
    link: string,
    _id: string,
    imageUrl: string,
    slug: Slug;
}

export const revalidate = 60;

export default function ProjectCarousel() {
    const [projects, setProjects] = useState<Data[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = () => {
            const query = `*[_type == "project"] {
                title,
                overview,
                link,
                _id,
                "imageUrl": image.asset->url,
                slug
            }`;

            client.fetch(query)
                .then(data => {
                    setProjects(data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching projects:", error);
                    setIsLoading(false);
                });
        };

        fetchProjects();
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
            <div className=' pt-52'>
            
            <Carousel responsive={responsive} >
                {projects.map((project) => (
                    <article 
                        key={project._id} 
                        className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-indigo-100 transition duration-300 delay-150 hover:delay-200 hover:scale-105"
                        style={carouselItemStyle}
                    >
                        <div className="h-56 w-full relative">
                            <BlurImage imageSrc={project.imageUrl}/>
                        </div>

                        <div className="p-4 sm:p-6">
                            <a href={project.link} target="_blank">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                            </a>
                            <p className="line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                {project.overview}
                            </p>
                            <ProjectButton slug={project.slug}/>
                        </div>
                    </article>
                ))}
            </Carousel>
            </div>
        </>
    )
}
