"use client";


import React from 'react'
import Biographi from './components/biography';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';

export default function AboutPage() {
  return (
    <div className='z-20 sticky bottom-0'>
      <div className=' mx-5 lg:mx-9 mt-20 h-full flex flex-col gap-16 '>
        <Biographi/>
        <Skills/>
        <Experience/>
        <Education/>
      </div>
    </div>
  )
}


