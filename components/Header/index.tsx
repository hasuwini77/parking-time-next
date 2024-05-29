'use client';

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import Link from 'next/link';
import MyFlags from './Flags';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext'; 

const Header: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Navbar isBordered className="bg-primary">
      <NavbarBrand>
        <Image src="/images/logo-1.png" alt="logo" width={60} height={60} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 justify-center">
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
  );
};

export default Header;
