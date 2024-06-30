"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Languages from '../Header/Languages';
import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";
import { motion, Variants } from "framer-motion";

const NewHeader: React.FC = () => {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { name: language === "english" ? "Why Parking Time?" : "Varför Parking Time?", href: '/#whyparking' },
    { name: language === "english" ? "About us" : "Om oss", href: '/about' },
    { name: language === "english" ? "News" : "Nyheter", href: '/newsPost' },
    { name: language === "english" ? "FAQ" : "Vanliga frågor", href: '/faq' },
  ];

  const isLinkActive = (href: string) => {
    if (href.includes('#')) {
      return pathname === href.split('#')[0];
    }
    return pathname === href;
  };

  const clickedLink = () => {
    setHoveredLink(null);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    setHoveredLink(null);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest("#hamburger-icon")
      ) {
        setIsMenuOpen(false);
        console.log("navbar disi tiklandi");
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);


  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const menuVariants: Variants = {
    open: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50%)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  };

  return (
    <header id="myHeader" className="bg-primary fixed flex justify-center w-full h-[64px] z-50 shadow-md">
        <div className=" bg-primary fixed w-full h-16 flex items-center justify-between px-4 z-50 max-w-[1750px]">
        <Link onClick={handleLogoClick} href="/" className="text-xl font-bold sticky z-50">
          <Image src="/images/logo-1.png" alt="logo" width={60} height={60} />
        </Link>
        <nav className="hidden md:flex items-center space-x-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={link.href}
              className={`relative text-gray-600 hover:text-black transition-all  ${
                isLinkActive(link.href) || hoveredLink === link.href ? 'active' : ''
              }`}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => setHoveredLink(null)} 
            >
              {link.name}
              <span
                id={`${link.href}span`}
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-transform duration-300 transform ${
                  isLinkActive(link.href) || hoveredLink === link.href ? 'scale-x-100' : 'scale-x-0'
                }`}
              ></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-3 py-[12px] leading-3 text-buttonText rounded-xl border h-5 bg-black text-white hover:bg-white hover:text-black shadow-xs shadow-white transform transition-transform duration-400"
          >
            {language === "english" ? "Contact us" : "Kontakta oss"}
          </Link>
          <Languages />
        </nav>
        <div id="hamburger-icon" className="md:hidden sticky z-50">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes className="w-4 h-4 text-gray-200 opacity-70" />
            ) : (
              <FaBars className="w-4 h-4 text-gray-200 opacity-70" />
            )}
          </button>
        </div>
            <motion.div
              ref={menuRef}
              animate={isMenuOpen ? "open" : "closed"}
              variants={menuVariants}
              className="fixed flex flex-col top-[64px] left-0 w-full h-[400px] bg-primary shadow-md p-3 md:hidden"
            >
              <motion.nav className="flex flex-col space-y-3">
                {links.map((link) => (
                  <motion.li
                  className="list-none"
                  variants={itemVariants}
                  >
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-gray-600 hover:text-black transition-all max-w-[155px] ${
                      isLinkActive(link.href) || hoveredLink === link.href ? 'active' : ''
                    }`}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => clickedLink()} 
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-transform duration-300 transform ${
                        isLinkActive(link.href) || hoveredLink === link.href ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    ></span>
                  </Link>

                  </motion.li>
                ))}
                <motion.li
                className="list-none"
                variants={itemVariants}
                >
                <Link
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                  href="/contact"
                  className="px-3 py-[12px] leading-3 text-buttonText rounded-xl border h-5 bg-black text-white hover:bg-white hover:text-black shadow-xs shadow-white transform transition-transform duration-400"
                >
                  {language === "english" ? "Contact us" : "Kontakta oss"}
                </Link>
                </motion.li>
                <Languages />
              </motion.nav>
            </motion.div>
    </div>
      </header>
  );
};

export default NewHeader;
