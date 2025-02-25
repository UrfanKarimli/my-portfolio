"use client";

import Link from 'next/link'
import { useEffect, useState } from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { Drawer } from 'antd';
import { IoMenu } from 'react-icons/io5';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className={`w-full   sticky top-0 z-50  shadow-md py-4 px-5 lg:px-9 ${isScrolled ? 'bg-myBlue bg-opacity-30 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className=' '>
        <div className='flex justify-between items-center ur:hidden'>
          <button onClick={showDrawer}>
          <IoMenu  className='text-2xl text-myWhite '/>
          </button>
          <Drawer  width={150}  onClose={onClose} open={open} className=' ant-drawer-content'>
            <ul className=' flex flex-col items-center space-y-4'>
              <li>
                <Link href='/' className='font-semibold text-myWhite '>Home</Link>
              </li>
              <li>
                <Link href='/about' className='font-semibold text-myWhite '>About</Link>
              </li>
              <li>
                <Link target='_blank' href='https://www.linkedin.com/in/%C3%BCrfan-k%C9%99rimli/' className='text-xl text-myWhite light-shadow hover:scale-110 '>
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link target='_blank' href='https://www.instagram.com/karimli_urfan/' className='text-xl text-myWhite light-shadow hover:scale-110 '>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/994997564177" target="_blank" rel="noopener noreferrer" className='text-xl text-myWhite light-shadow hover:scale-110 '>
                  <FaWhatsapp />
                </Link>
              </li>
              <li>
                <Link target='_blank' href='mailto:urfankarim@gmail.com' className='text-xl text-myWhite light-shadow hover:scale-110 '>
                  <GoMail />
                </Link>
              </li>
            </ul>
          </Drawer>
        </div>
        <ul className='hidden ur:flex justify-between items-center'>
          <li className='flex space-x-4  font-roboto'>
            <Link href='/' className='text-lg text-myWhite light-shadow hover:scale-110 '>Home</Link>
            <Link href='/about' className='text-lg text-myWhite light-shadow hover:scale-110'>About</Link>
          </li>
          <li className='flex space-x-4'>
            <Link target='_blank' href='https://www.linkedin.com/in/%C3%BCrfan-k%C9%99rimli/' className='text-xl text-myWhite light-shadow hover:scale-110 '>
              <FaLinkedin />
            </Link>
            <Link target='_blank' href='https://www.instagram.com/karimli_urfan/' className='text-xl text-myWhite light-shadow hover:scale-110 '>
              <FaInstagram />
            </Link>
            <Link href="https://wa.me/994997564177" target="_blank" rel="noopener noreferrer" className='text-xl text-myWhite light-shadow hover:scale-110 '>
              <FaWhatsapp />
            </Link>
            <Link target='_blank' href='mailto:urfankarim@gmail.com' className='text-xl text-myWhite light-shadow hover:scale-110 '>
              <GoMail />
            </Link>

          </li>
        </ul>
      </nav>
    </header>
  )
}
