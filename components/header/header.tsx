"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { IoMenu } from 'react-icons/io5';
import LocaleSwitcher from '../local-switcher/LocaleSwitcher';
import { useHeaderData } from './components/useHeaderData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { menuItems, socialLinks } = useHeaderData();
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
    <header className={`w-full sticky top-0 z-50 shadow-md py-4 px-5 lg:px-9 ${isScrolled ? 'bg-myBlue bg-opacity-30 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav>
        <div className='flex justify-between items-center ur:hidden'>
          <button onClick={showDrawer}>
            <IoMenu className='text-2xl text-myWhite ' />
          </button>
          <Drawer width={200} onClose={onClose} open={open} className='ant-drawer-content'>
            <ul onClick={() => { setOpen(false) }} className='flex flex-col items-center space-y-4'>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className='font-semibold text-myWhite'>{item.name}</Link>
                </li>
              ))}
              <li>
                <LocaleSwitcher />
              </li>
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <Link target='_blank' href={social.href} className='text-xl text-myWhite light-shadow hover:scale-110'>
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </Drawer>
        </div>

        <ul className='hidden ur:flex justify-between items-center'>
          <li className='flex space-x-4 font-roboto'>
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className='text-lg text-myWhite light-shadow hover:scale-110'>
                {item.name}
              </Link>
            ))}
          </li>
          <li className='flex items-center space-x-4'>
            <LocaleSwitcher />
            {socialLinks.map((social, index) => (
              <Link key={index} target='_blank' href={social.href} className='text-xl text-myWhite light-shadow hover:scale-110'>
                {social.icon}
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
}
