import Link from "next/link";
import { useState } from "react"

export default function AllProjectsButton() {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        boxShadow: isHovered ? 'rgb(129, 140, 248) 0px 0px 0px 0px' : 'rgb(129, 140, 248) 6px 5px 0px 0px',
        transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
        transform: isHovered ? 'scale(1.10)' : 'scale(1)',
    }

    return (
        <>
            <div 
                className="flex items-center justify-center my-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link href="/projects">
                    <button 
                        className="bg-white px-4 py-2 dark:text-white dark:bg-black"
                        style={buttonStyle}
                        >Show All Projects
                    </button>
                </Link>
            </div>
        </>
    )
}