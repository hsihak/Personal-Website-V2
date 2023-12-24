
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
    <div>
        {project.title}
        {project.overview}
        Project Details

        
    </div>);
}