"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import LoadingLogo from '../../public/LoadingLogo.png';


function Loading() {
    return (
      <div className="relative flex justify-center items-center h-screen">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <Image 
          src={LoadingLogo}
          alt="Loading avatar"
          width={112}
          height={112}
          className="rounded-full"
        />
      </div>
    )
  }

export default function LoadingAnimation({ children }: { children: React.ReactNode }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    isLoading ? <Loading /> : <>{children}</>
  );
}
