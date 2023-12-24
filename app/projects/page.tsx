import Image from "next/image";
import { client } from "../lib/sanity"
import BlurImage from "../components/BlurImage";
import ProjectButton from "../components/Projectbutton";

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

async function getProjects() {
    const query = `*[_type == "project"] {
        title,
          overview,
          link,
          _id,
          "imageUrl": image.asset->url,
          slug
      }`

      const data = await client.fetch(query);

      return data;
}

export const revalidate = 60;

export default async function Projects() {
 
    const data : Data[] = await getProjects();

    console.log("Test:",data);

    return (
    <>
        <div className='divide-y divide-gray-500 dark:divide-gray-700'>
            <div className='space-y-2 pt-5 pb-8 md:space-y-5'>
                <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-13'>
                Projects
                </h1>
            </div>
            <div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
                
                {data.map((project) => (
                    
                    <article key={project._id} className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-indigo-100 transition duration-300 delay-150 hover:delay-200 hover:scale-105">
                        <div className="h-56 w-full relative">
                            {/* <Image 
                            width={500}
                            height={500}
                            src={project.imageUrl} 
                            alt="Project Overview" 
                            className="w-full h-full object-cover"/> */}
                            <BlurImage imageSrc={project.imageUrl}/>
                            
                        </div>

                        <div className="p-4 sm:p-6 ">
                            <a href={project.link} target="_blank">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                            </a>
                            <p className="line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                {project.overview}
                            </p>
                            
                            {/* <p className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-500">
                                Learn More!
                            <span className="block transition-all group-hover:ms-0.5">
                                &rarr;
                            </span>
                            </p> */}

                            <ProjectButton slug={project.slug}/>
                        </div>
                    </article>
                ))}
            </div>
        </div>            
    </>
    )
}