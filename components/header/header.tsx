import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='w-full   sticky top-0 z-50  shadow-md py-4 px-9'>
        <nav className=' '>
            <ul className='flex justify-between items-center'>
                <li className='text-2xl font-bold text-white text-shadow font-roboto'>Urfan Karimli</li>
                <li className='flex space-x-4'>
                    <Link href='/' className='text-lg'>Home</Link>
                    <Link href='/about' className='text-lg'>About</Link>
                    <Link href='#' className='text-lg'>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
