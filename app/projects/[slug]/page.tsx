
import BackButton from "@/app/components/Backbutton";
import BlurImage from "@/app/components/BlurImage";
import { client } from "@/app/lib/sanity";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { MdOutlineTerminal } from "react-icons/md";
import { SiAdobexd } from "react-icons/si";
import { SiDevpost } from "react-icons/si";

type Props = {
    params: {slug: string}
}


async function getProject(slug: string) {
    const query = `*[_type == "project" && slug.current == '${slug}'][0]{
          title,
          projectStatus,
          overview,
          overviewAuthor,
          members,
          date,
          technologies,
          "imageUrl": image.asset->url,
          githubLink,
          demoLink,
          devPostLink,
          prototypeLink,
          _id,
          slug
      }`

      const data = await client.fetch(query);

      return data;
}

export const revalidate = 60;

export default async function ProjectDetails ({params}: Props) {
    

    const project = await getProject(params.slug)

    console.log("Loading from Project Details:", params.slug)

    console.log(project.demoLink)

    return (
    <div className="bg-white dark:bg-slate-800 rounded-lg px-4 pb-4">
        <div className="flex items-center justify-center flex-col  mt-10 pt-10 gap-4">
            <h1 className="text-3xl tracking-widest">{project.title}</h1>
            <hr className=" border-2 rounded-lg border-indigo-300 w-1/12 mx-auto" />
            {/* Article Written by: */}
            <p>Article by: {project.overviewAuthor}</p>

            {/* Program Author: */}
            <span>Authors:
                {project.members.map((member: string, index: number) => (
                    <p key={index}>{member}</p>
                ))}

            </span>

            {/* Project Status Label */}
            <div className={`${project.projectStatus.trim().toLowerCase() == 'completed' ? 'bg-green-400 text-white' : 'bg-amber-500 text-white'} px-4 py-2 relative arrow-box rounded-lg`}>
                <p>{project.projectStatus}</p>
            </div>

            {/* Technologies List */}
            <ul className="flex gap-4 py-10 text-sm flex-wrap justify-center ">
                {project.technologies.map((tag: string, index: number) => (
                    <li className="rounded-lg px-4 bg-slate-300 dark:bg-indigo-600" key={index}>{tag}</li>
                ))} 
            </ul>
            <div className=" h-60 w-96 relative border-black border rounded-lg">
                <BlurImage imageSrc={project.imageUrl}/>
            </div>

            {/* Project External Links */}
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
            <hr className=" border-2 rounded-lg border-indigo-300 w-1/12 mt-12 mx-auto" />
        </div>



        {/* Creating subsections */}
        <div className="flex justify-between pt-24">
            <div className="grid md:grid-cols-2 md:grid-flow-col justify-items-center place-items-center">
                <div className="grid justify-items-center gap-6 px-4">
                    <h2 className="text-center text-2xl font-semibold">Overview</h2>
                    <p className="pb-10 md:pb-0 text-center">{project.overview}</p>
                </div>
                <div className=" h-60 w-96 relative border-black border rounded-lg">
                        <BlurImage imageSrc={project.imageUrl}/>
                </div>
            </div>
        </div>
        <hr className=" border-2 rounded-lg border-indigo-300 w-1/12 mt-12 mx-auto" />

            {/* Features */}
        <div className="flex justify-between pt-24">
            <div className="grid md:grid-cols-2 md:grid-flow-col justify-items-center place-items-center">
                <div>
                    <div className=" h-60 w-96 relative border-black border rounded-lg">
                        <BlurImage imageSrc={project.imageUrl}/>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 px-4">
                    <h2 className="text-center text-2xl font-semibold">Features</h2>
                    <p className="text-center">{project.overview}</p>
                </div>
            </div>
        </div>
        <hr className=" border-2 rounded-lg border-indigo-300 w-1/12 mt-12 mx-auto" />

        <div className="my-10 flex items-center justify-center">
            <BackButton/>
        </div>

        
    </div>);
}