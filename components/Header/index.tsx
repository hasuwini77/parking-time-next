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


  // Close mobile menu when switching to desktop view
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
    <div>
      {/* Mobile Header */}
      <div className="sm:hidden bg-primary flex flex-row">
        <Navbar className="bg-primary">
          {/* Navbar Brand */}
          <NavbarContent>
            <Link href="/" className="cursor-pointer m-0">
              <Image src="/images/logo-1.png" alt="logo" width={60} height={60} />
            </Link>
          </NavbarContent>
          {/* Navbar Hamburger Button */}
          <NavbarContent className="flex-end">
            <NavbarItem>
            <MyFlags />
            </NavbarItem>
            <NavbarItem>
              <Button
                className="text-white bg-primary size-2 h-[50px] w-[30px] border-1"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div ref={menuRef} className="fixed top-0 left-0 w-full h-[40%] bg-primary">
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%', transition: { duration: 0.3 } }} // Added exit animation
              transition={{ type: 'tween', duration: 0.6 }}
              className="h-[70%] flex flex-col justify-center items-center"
            >
              <Navbar className="bg-primary">
                <NavbarContent className="flex flex-col gap-4">
                  <NavbarItem>
                    <Link href="/" className="text-white" onClick={toggleMobileMenu}>
                      {language === 'english' ? 'Why Parking Time?' : 'Varför Parking Time?'}
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link href="/about" className="text-white" onClick={toggleMobileMenu}>
                      {language === 'english' ? 'About us' : 'Om oss'}
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link href="/news" className="text-white" onClick={toggleMobileMenu}>
                      {language === 'english' ? 'News' : 'Nyheter'}
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link href="/contact" className="text-white" onClick={toggleMobileMenu}>
                      {language === 'english' ? 'Contact us' : 'Kontakta oss'}
                    </Link>
                  </NavbarItem>
                </NavbarContent>
              </Navbar>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Desktop Header */}
      <div className="hidden sm:block">
        <Navbar isBordered className="bg-primary">
          <NavbarBrand>
            <Link href="/" className='cursor-pointer'> 
              <Image src="/images/logo-1.png" alt="logo" width={60} height={60} />
            </Link>
          </NavbarBrand>
          <NavbarContent className="gap-4 justify-center">
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
          </NavbarContent>
          <NavbarContent className="justify-end">
            <NavbarItem>
              <Button as={Link} href="/contact" className="bg-white text-black size-2 h-5">
                {language === 'english' ? 'Contact us' : 'Kontakta oss'}
              </Button>
            </NavbarItem>
            <NavbarItem>
              <MyFlags />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
