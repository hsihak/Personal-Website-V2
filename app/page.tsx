import Image from 'next/image'
import ProfilePhoto from '@/public/Profile-Photo.jpg';
// React icons
import { MdEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
// Next Link
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='divide-y divide-gray-500 dark:divide-gray-700'>
        <div className='space-y-2 pt-5 pb-8 md:space-x-5'>
          <h1 className='text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-13'>
            About Me
          </h1>
        </div>
        <div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='flex flex-col items-center pt-8'>
            <Image src={ProfilePhoto} alt='Hangsihak Sin Profile Photo' className='h-48 w-48 rounded-2xl object-cover object-top'/>
            <h1 className='text-3xl font-bold pt-4'>Hangsihak Sin</h1>
            <div className='md:text-lg text-gray-800  dark:text-gray-400 mb-2 md:mt-1'>
              <h3>Aspiring Software Developer</h3>
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
      {/* About Me - Paragraphs */}

      <div className='md:text-lg text-gray-800  dark:text-gray-400 mb-2 md:mt-1 col-span-2 lg:pr-8'>
        <div className='font-normal lg:pt-4 pb-8 lg:col-span-2 text-base mx-auto lg:mx-0 grid gap-4'>
          <p>Hello!!! My name is Hang, a Second Year Bachelor of Computer Science Student at Conestoga College</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quo, esse culpa obcaecati minus quaerat neque quis libero ipsa doloremque at dolor cupiditate, consectetur magni perspiciatis, accusamus reiciendis officiis facilis.
          Deleniti nobis sapiente eveniet alias, at repellendus quod, fuga tenetur cupiditate ad ut sequi, consequuntur perspiciatis blanditiis ab voluptatibus recusandae quos quae maxime adipisci. Natus itaque laborum autem debitis pariatur?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et ab impedit illum ratione porro fuga inventore sit debitis iusto veritatis, saepe omnis modi sed. Provident ab hic accusamus laborum.</p>
        </div>
      </div>
        </div>
      </div>
      
    </>
  )
}
