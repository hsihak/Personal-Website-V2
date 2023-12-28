"use client";
import Project from './components/sections/Project';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import { Suspense } from 'react';

const LoadingComponent = () => <div>Loading...</div>;

export default function Home() {

  return (
    <div className=' pt-12 md:pt-32'>
        <Hero/>
        <Project/>
        <Experience/>
    </div>
  )
}
