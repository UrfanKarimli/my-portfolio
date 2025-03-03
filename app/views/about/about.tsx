"use client";


import React from 'react'
import Biography from './components/Biography';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

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


