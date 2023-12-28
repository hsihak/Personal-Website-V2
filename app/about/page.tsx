"use client";
import Image from 'next/image'
import ProfilePhoto from '@/public/Profile-Photo.jpg';
import { MdEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { getAboutInfo } from '@/app/lib/sanity.query';
import { AboutType } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import BackButton from '../components/buttons/Backbutton';

export default function About() {
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

  return (
    <div className='divide-y divide-gray-500 dark:divide-gray-700'>
      <motion.div
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        >

      
      <SectionHeading>
        About Me
      </SectionHeading>
      {userData.map((user, index) => (
        <article key={index} className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='flex flex-col items-center pt-8'>
            <Image src={ProfilePhoto} alt={`${user.name} Profile Photo`} className='h-48 w-48 rounded-full object-cover object-top shadow-indigo-400 shadow-lg '/>
            <h1 className='text-3xl font-bold pt-4'>{user.name}</h1>
            <div className='md:text-lg text-gray-800  dark:text-gray-400 mb-2 md:mt-1'>
              <h3>{user.jobTitle}</h3>
            </div>
            <div className='flex items-center gap-4 text-2xl'>
              <Link href={user.email} legacyBehavior>
                    <a
                      className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 '
                      target={'_blank'}>
                      <MdEmail className=' hover:fill-blue-500' />
                    </a>
                  </Link>

                <Link href={user.github} legacyBehavior>
                  <a
                    className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 '
                    target={'_blank'}>
                    <BsGithub className=' hover:fill-purple-600' />
                  </a>
                </Link>

                <Link href={user.linkedin} legacyBehavior>
                  <a
                    className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 '
                    target={'_blank'}>
                    <BsLinkedin className=' hover:fill-blue-700' />
                  </a>
                </Link>

                <Link href={user.twitter} legacyBehavior>
                  <a
                    className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 '
                    target={'_blank'}>
                    <BsTwitter className=' hover:fill-sky-400' />
                  </a>
                </Link>
            </div>
          </div>
          <div className='md:text-lg text-gray-800 dark:text-gray-400 mb-2 md:mt-1 col-span-2 lg:pr-8'>
            <div className='font-normal lg:pt-4 pb-8 lg:col-span-2 text-base mx-auto lg:mx-0 grid gap-4'>
              <p>{user.paragraphOne}</p>
              <p>{user.paragraphTwo}</p>
              <p>{user.paragraphThree}</p>
            </div>
          </div>
        </article>
      ))}
        <div className="my-10 flex items-center justify-center">
            <BackButton/>
        </div>
      </motion.div>
    </div>
  );
}
