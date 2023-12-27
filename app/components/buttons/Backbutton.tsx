"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoChevronBack } from "react-icons/io5";

const BackButton: React.FC = () => {

    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        boxShadow: isHovered ? 'rgb(129, 140, 248) 0px 0px 0px 0px' : 'rgb(129, 140, 248) 6px 5px 0px 0px',
        transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
        transform: isHovered ? 'scale(1.10)' : 'scale(1)',
    }

    const router = useRouter();

    const handleBack = () => {
        router.back();
    };


    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button 
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 dark:text-white dark:bg-black rounded-lg bg-indigo-100 border border-black dark:border-white"
            style={buttonStyle}
            >
                <IoChevronBack />
                Go Back
            </button>
        </div>
    );
};

export default BackButton;
