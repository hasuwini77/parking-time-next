'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import Link from 'next/link';
import MyFlags from './Flags';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext'; 
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className='mx-0'>
      {/* Mobile Header */}
      <div className="sm:hidden bg-primary relative flex items-center h-16 z-50">
        {/* Navbar Brand */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <Link href="/" className="cursor-pointer p-0 m-0">
            <Image src="/images/logo-1.png" alt="logo" width={60} height={60} />
          </Link>
        </div>
        {/* Navbar Hamburger Button */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50">
          <Button
            className="text-white bg-primary p-2 h-12 w-12 flex items-center justify-center border-none"
            onClick={toggleMobileMenu}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes size={30} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaBars size={30} />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {isMobileMenuOpen && (
    <div ref={menuRef} className="fixed top-0 left-0 w-full h-full bg-primary z-40 overflow-y-auto max-h-[100vh]">
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%', transition: { duration: 0.3 } }}
        transition={{ type: 'tween', duration: 0.6 }}
        className="h-full flex flex-col justify-center items-center"
      >
              <Navbar isBordered={!isMobileMenuOpen} className="bg-primary mb-10">
                <NavbarContent className="flex flex-col items-center gap-4">
                  <NavbarItem>
                    <Link href="/" className="text-white text-buttonText" onClick={toggleMobileMenu}>
                      {language === 'english' ? 'Why Parking Time?' : 'Varför Parking Time?'}
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link href="/about" className="text-white text-buttonText" onClick={toggleMobileMenu}>
                      {language === 'english' ? 'About us' : 'Om oss'}
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link href="/news" className="text-white text-buttonText" onClick={toggleMobileMenu}>
                      {language === 'english' ? 'News' : 'Nyheter'}
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link href="/#" className="text-white text-buttonText" onClick={toggleMobileMenu}>
                      {language === 'english' ? 'FAQ' : 'FAQ'}
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Button className='rounded-lg h-5 bg-white hover:bg-green shadow-xs shadow-white'>
                    <Link href="/contact" className="text-black hover:text-white text-buttonText" onClick={toggleMobileMenu}>
                      {language === 'english' ? 'Contact us' : 'Kontakta oss'}
                    </Link>
                    </Button>
                  </NavbarItem>
                  <NavbarItem>
          <MyFlags />
        </NavbarItem>
                </NavbarContent>
              </Navbar>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
{/* Desktop Header */}
<div className="hidden sm:block w-full" >
  <Navbar isBordered className="bg-primary w-full flex items-center justify-between">
    {/* Logo Section */}
    <div className="flex items-center">
      <NavbarBrand className="">
        <Link href="/" className="cursor-pointer">
          <Image src="/images/logo-1.png" alt="logo" width={60} height={60} className="min-w-[60px] min-h-[60px] sm:min-w-[60px] sm:min-h-[60px]"  />
        </Link>
      </NavbarBrand>
    </div>

    {/* Main Navigation */}
    <div className="flex flex-row items-center justify-end">
      <NavbarContent className="gap-4">
        <NavbarItem isActive>
          <Link href="/" aria-current="page" className="text-white">
            {language === 'english' ? 'Why Parking Time?' : 'Varför Parking Time?'}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/about">
            {language === 'english' ? 'About us' : 'Om oss'}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/news">
            {language === 'english' ? 'News' : 'Nyheter'}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            {language === 'english' ? 'FAQ' : 'Vanliga frågor'}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="/contact" className="bg-white text-black size-2 h-5 w-[120px]">
            {language === 'english' ? 'Contact us' : 'Kontakta oss'}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <MyFlags />
        </NavbarItem>
      </NavbarContent>
    </div>
  </Navbar>
</div>

    </div>
  );
};

export default Header;
