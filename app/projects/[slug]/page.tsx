
import BlurImage from "@/app/components/BlurImage";
import { client } from "@/app/lib/sanity";

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

    return (
    <div className="bg-white">
        <div className="flex items-center justify-center flex-col  mt-10 pt-10 gap-4">
            <h1 className="text-3xl tracking-widest">{project.title}</h1>
            <hr className=" w-1/4 border-1 border-indigo-300" />
            <ul className="flex gap-4 py-10">
                <li className=" bg-slate-300">React</li>
                <li className=" bg-slate-300">TypeScript</li>
                <li className=" bg-slate-300">Sanity</li>
                <li className=" bg-slate-300">TailwindCSS</li>
            </ul>
            <div className=" h-60 w-96 relative">
                <BlurImage imageSrc={project.imageUrl}/>
            </div>
            {/* <div>
                {project.overview}
                Project Details
            </div> */}
        </div>

        {/* Creating subsections */}
        <div className="flex justify-between pt-20">
            <div className="flex flex-col items-center gap-6 px-4">
                <h2 className="text-center text-2xl font-semibold">Why?</h2>
                <hr className=" border-indigo-300 w-1/12" />
                <p>{project.overview}</p>
            </div>
            <div>
                <div className=" h-60 w-96 relative">
                    <BlurImage imageSrc={project.imageUrl}/>
                </div>
            </div>

        </div>
            {/* Features */}
        <div className="flex justify-between pt-20">
            <div>
                <div className=" h-60 w-96 relative">
                    <BlurImage imageSrc={project.imageUrl}/>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6 px-4">
                <h2 className="text-center text-2xl font-semibold">Features</h2>
                <hr className=" border-indigo-300 w-1/12" />
                <p>{project.overview}</p>
            </div>
        </div>

        
    </div>);
}