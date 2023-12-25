"use client";
import Image from 'next/image'
import ProfilePhoto from '@/public/Profile-Photo.jpg';
import { MdEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import { motion } from "framer-motion";

interface Data {
  name: string;
  jobTitle: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
}

export default function About() {
  const [userData, setUserData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const query = `*[_type == 'about'] {
        name,
        jobTitle,
        email,
        github,
        linkedin,
        twitter,
        paragraphOne,
        paragraphTwo,
        paragraphThree,
      }`;
      
      try {
        const data = await client.fetch(query);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
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

      
      <div className='space-y-2 pt-5 pb-8 md:space-x-5'>
        {/* <h1 className='text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-13'>
          About Me
        </h1> */}
      </div>
      {userData.map((user, index) => (
        <article key={index} className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='flex flex-col items-center pt-8'>
            <Image src={ProfilePhoto} alt={`${user.name} Profile Photo`} className='h-48 w-48 rounded-full object-cover object-top shadow-indigo-400 shadow-lg '/>
            <h1 className='text-3xl font-bold pt-4'>{user.name}</h1>
            <div className='md:text-lg text-gray-800  dark:text-gray-400 mb-2 md:mt-1'>
              <h3>{user.jobTitle}</h3>
            </div>
            <div className='flex items-center gap-4 text-2xl'>
              <Link href={'mailto:s.hsihak@gmail.com'} legacyBehavior>
                    <a
                      className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 '
                      target={'_blank'}>
                      <MdEmail className=' hover:fill-blue-500' />
                    </a>
                  </Link>

                <Link href={'https://github.com/hsihak'} legacyBehavior>
                  <a
                    className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 '
                    target={'_blank'}>
                    <BsGithub className=' hover:fill-purple-600' />
                  </a>
                </Link>

                <Link href={'https://www.linkedin.com/in/hangsin/'} legacyBehavior>
                  <a
                    className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 '
                    target={'_blank'}>
                    <BsLinkedin className=' hover:fill-blue-700' />
                  </a>
                </Link>

                <Link href={'https://twitter.com/'} legacyBehavior>
                  <a
                    className='p-1.5 rounded shadow cursor-pointer hover:scale-110 hover:transition hover:duration-400 '
                    target={'_blank'}>
                    <BsTwitter className=' hover:fill-sky-400' />
                  </a>
                </Link>
            </div>
          </div>
          {/* <div className='md:text-lg text-gray-800 dark:text-gray-400 mb-2 md:mt-1 col-span-2 lg:pr-8'>
            <div className='font-normal lg:pt-4 pb-8 lg:col-span-2 text-base mx-auto lg:mx-0 grid gap-4'>
              <p>{user.paragraphOne}</p>
              <p>{user.paragraphTwo}</p>
              <p>{user.paragraphThree}</p>
            </div>
          </div> */}
        </article>
      ))}
      </motion.div>
    </div>
  );
}
