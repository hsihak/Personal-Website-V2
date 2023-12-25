"use client"

import React, { useState } from 'react';
import Image from 'next/image';

type ImageProps = {
    imageSrc: string;
};

export default function BlurImage({ imageSrc }: ImageProps) {
    const [isLoading, setLoading] = useState(true);

    return (
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                    alt=""
                    src={imageSrc}
                    fill
                    className={`
                        duration-700 ease-in-out group-hover:opacity-75 object-cover rounded-md
                        ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}
                    `}
                    onLoad={() => setLoading(false)}
                />
            </div>
    );
}
