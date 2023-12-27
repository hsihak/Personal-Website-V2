"use client";

import { useRouter } from "next/navigation";

interface Slug {
    current: string;
    _type: string; 
}

interface ProjectButtonProps {
    slug: Slug;
}


export default function ProjectButton({slug}: ProjectButtonProps) {

    const router = useRouter();
    
    function handleClick() {
        if (slug && slug.current) {
            router.push(`/projects/${slug.current}`);
        } else {
            // Handle the case where slug or slug.current is undefined
            console.error('Slug is undefined');
        }
    }

    return (
        <p className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-500 cursor-pointer" onClick={handleClick}>
            Learn More!
            <span className="block transition-all group-hover:ms-0.5">
                &rarr;
            </span>
        </p>
    )

}