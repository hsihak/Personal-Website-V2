
import BackButton from "@/app/components/Backbutton";
import BlurImage from "@/app/components/BlurImage";
import { client } from "@/app/lib/sanity";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { MdOutlineTerminal } from "react-icons/md";

type Props = {
    params: {slug: string}
}


async function getProject(slug: string) {
    const query = `*[_type == "project" && slug.current == '${slug}'][0]{
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

export default async function ProjectDetails ({params}: Props) {
    

    const project = await getProject(params.slug)

    console.log("Loading from Project Details:", params.slug)

    const customStatusLabel = {
        content: '""', // This is a workaround as pseudo-elements can't be added directly via inline styles
        position: 'absolute',
        right: '-10px', // Adjust as needed
        top: '50%',
        borderWidth: '10px', // Size of the arrow
        borderStyle: 'solid',
        borderColor: 'transparent transparent transparent #48BB78', // Use the Tailwind green-500 color
        transform: 'translateY(-50%)'
    };
    

    return (
    <div className="bg-white dark:bg-slate-800 rounded-lg px-4 pb-4">
        <div className="flex items-center justify-center flex-col  mt-10 pt-10 gap-4">
            <h1 className="text-3xl tracking-widest">{project.title}</h1>
            <hr className=" border-2 rounded-lg border-indigo-300 w-1/12 mx-auto" />
            {/* Project Status Label */}
            <div className="bg-green-500 text-white px-4 py-2 relative arrow-box">
                <p>Completed</p>
            </div>

            <ul className="flex gap-4 py-10">
                <li className="rounded-lg px-4 bg-slate-300 dark:bg-indigo-600">React</li>
                <li className="rounded-lg px-4 bg-slate-300 dark:bg-indigo-600">TypeScript</li>
                <li className="rounded-lg px-4 bg-slate-300 dark:bg-indigo-600">Sanity</li>
                <li className="rounded-lg px-4 bg-slate-300 dark:bg-indigo-600">TailwindCSS</li>
            </ul>
            <div className=" h-60 w-96 relative border-black border rounded-lg">
                <BlurImage imageSrc={project.imageUrl}/>
            </div>

            {/* Project External Links */}
            <div className="text-2xl flex gap-6">
                <Link href={project.link} legacyBehavior>
                    <a  className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 dark:border-white dark:border'
                        target={'_blank'}>
                        <BsGithub className='hover:fill-purple-600'/>
                    </a>
                </Link>
                <Link href={project.link} legacyBehavior>
                    <a  className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 dark:border-white dark:border'
                        target={'_blank'}>
                        <MdOutlineTerminal className='hover:fill-blue-400'/>
                    </a>
                </Link>
            </div>
            <hr className=" border-2 rounded-lg border-indigo-300 w-1/12 mt-12 mx-auto" />
        </div>



        {/* Creating subsections */}
        <div className="flex justify-between pt-24">
            <div className="grid md:grid-cols-2 md:grid-flow-col justify-items-center place-items-center">
                <div className="grid justify-items-center gap-6 px-4">
                    <h2 className="text-center text-2xl font-semibold">Why?</h2>
                    <p>{project.overview}</p>
                </div>
                <div>
                    <div className=" h-60 w-96 relative border-black border rounded-lg">
                        <BlurImage imageSrc={project.imageUrl}/>
                    </div>
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
                    <p>{project.overview}</p>
                </div>
            </div>
        </div>
        <hr className=" border-2 rounded-lg border-indigo-300 w-1/12 mt-12 mx-auto" />

        <div className="my-10 flex items-center justify-center">
            <BackButton/>
        </div>

        
    </div>);
}