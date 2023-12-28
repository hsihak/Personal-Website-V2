import React, { useEffect, useState } from 'react';
import {motion} from "framer-motion";
import BlurImage from "../BlurImage";
import ProfilePhoto from '../../../public/Profile-Photo.jpg';
import Image from "next/image";
import { MdEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';
import { AboutType } from '@/app/types';
import { getAboutInfo } from '@/app/lib/sanity.query';
import { slideInFromLeft, slideInFromRight } from '@/app/utils/motion';

export default function Hero() {

    
  const [isHovered, setIsHovered] = useState(false);
  const [userData, setUserData] = useState<AboutType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    async function fetchAboutInfo() {
      try {
        const fetchedAboutInfo = await getAboutInfo();
        setUserData(fetchedAboutInfo);
      } catch (error) {
        console.error("Error fetching about info:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAboutInfo();
  }, []);


  console.log('User Info Data: ', userData);

  const imageStyle = {
    boxShadow: isHovered ? 'rgb(129, 140, 248) 0px 0px 0px 0px' : 'rgb(129, 140, 248) 15px 5px 0px 0px',
    transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.10)' : 'scale(1)',
  };
  
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center mt-10 w-full z-[20]'
    >
      {/* Left Content */}
      <div className="grid grid-cols-1 md:grid-cols-5 justify-items-center">
        <div className="grid uppercase col-span-3">
          <div className="grid gap-6">
            <motion.span variants={slideInFromLeft(0.5)}>
              <h2 className=" text-3xl">Hello. I&apos;m</h2>
            </motion.span>
            <motion.span variants={slideInFromLeft(0.8)}>
              <h1 className="text-4xl md:text-7xl font-semibold">Hang 👋</h1>
            </motion.span>
          </div>
          <motion.div 
          variants={slideInFromLeft(1)}
          className="grid place-content-center gap-2">
            <p className="text-2xl md:text-4xl">Aspiring <span className=" bg-indigo-300 border border-indigo-800 dark:bg-indigo-600">Full Stack</span> Developer</p>
            <p className="text-2xl md:text-4xl">Based in Waterloo</p>
          </motion.div>
        </div>

        {/* Right Content */}
        {userData.map((user, index) => (
            <div className="grid col-span-2 justify-items-center" key={index}>
                <motion.div
                variants={slideInFromRight(0.5)}
                >
                  <Link href='/about'>
                      <Image 
                      src={ProfilePhoto} 
                      alt={`Profile Photo`} 
                      className='h-48 w-48 rounded-full object-cover object-top cursor-pointer'
                      style={imageStyle}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      />
                  </Link>
                </motion.div>
                <motion.div
                variants={slideInFromRight(0.8)}
                >
                  <h1 className='text-3xl font-bold pt-4'>Hangsihak Sin</h1>
                </motion.div>
                <motion.div 
                variants={slideInFromRight(0.8)}
                className='md:text-lg text-gray-800  dark:text-gray-400 mb-2 md:mt-1'>
                    <h3>2nd Year Bachelor of Computer Science</h3>
                </motion.div>

                <motion.div 
                variants={slideInFromRight(1)}
                className='flex items-center gap-4 text-2xl'>
                    <Link href={user.email} legacyBehavior>
                        <a
                        className='p-1.5 md:p-2 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400'
                        target={'_blank'}>
                        <MdEmail className=' hover:fill-blue-500' />
                        </a>
                    </Link>

                    <Link href={user.github} legacyBehavior>
                    <a
                        className='p-1.5 md:p-2 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400'
                        target={'_blank'}>
                        <BsGithub className=' hover:fill-purple-600' />
                    </a>
                    </Link>

                    <Link href={user.linkedin} legacyBehavior>
                    <a
                        className='p-1.5 md:p-2 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400'
                        target={'_blank'}>
                        <BsLinkedin className=' hover:fill-blue-700' />
                    </a>
                    </Link>

                    <Link href={user.twitter} legacyBehavior>
                    <a
                        className='p-1.5 md:p-2 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400'
                        target={'_blank'}>
                        <BsTwitter className=' hover:fill-sky-400' />
                    </a>
                    </Link>
                </motion.div>
              </div>

        ))}
      </div>

    </motion.div>

  )

}