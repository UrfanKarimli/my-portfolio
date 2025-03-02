"use client";

import { useEffect, useState } from 'react';

import BurgerMenu from './components/burger-menu';
import DesktopHeader from './components/desktop-header';
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
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




  return (
    <header className={`w-full sticky top-0 z-50 shadow-md py-4 px-5 lg:px-9 ${isScrolled ? 'bg-myBlue bg-opacity-30 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav>
        <DesktopHeader />
        <BurgerMenu />

      </nav>
    </header>
  );
}
