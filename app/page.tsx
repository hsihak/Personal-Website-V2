"use client";
import ProjectCarousel from './components/sections/ProjectCarousel';
import AllProjectsButton from './components/buttons/AllProjectsbutton';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';


export default function Home() {

  return (
    <div className=' pt-12 md:pt-32'>
        <Hero/>
        <ProjectCarousel/>
        <AllProjectsButton/>
        <Experience/>
    </div>
  )
}
