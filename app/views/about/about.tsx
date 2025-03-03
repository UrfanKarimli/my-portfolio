"use client";


import Biography from './components/biography';
import Education from './components/education';
import Experience from './components/experience';
import Skills from './components/skills';

export default function AboutPage() {
  return (
    <div className='z-20 sticky bottom-0'>
      <div className=' mx-5 lg:mx-9 mt-20 h-full flex flex-col gap-16 '>
        <Biography/>
        <Skills/>
        <Experience/>
        <Education/>
      </div>
    </div>
  )
}


