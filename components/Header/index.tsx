"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FaBars, FaTimes } from "react-icons/fa";
import Languages from "./Languages";
import DarkModeSwitch from "../DarkModeSwitch";

const Header: React.FC = () => {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (window.location.hash === "#whyparking") {
      setActiveLink("/#whyparking");
    } else {
      setActiveLink(window.location.pathname);
    }
  }, []);

  return (
    <div className="mx-0 fixed w-full top-0 z-[9999]">
      {/* Mobile Header */}
      <div className="md:hidden bg-primary relative flex items-center h-16 z-50">
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <Link href="/" className="cursor-pointer p-0 m-0">
            <Image src="/images/logo-1.png" alt="logo" width={60} height={60} />
          </Link>
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50">
          <Button
            className="text-darkblack bg-primary p-2 h-12 w-12 flex items-center justify-center border-none"
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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="fixed top-[-50px] left-0 w-full bg-primary z-40 overflow-y-auto"
            style={{ height: "calc(100vh + 50px)" }}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%", transition: { duration: 0.3 } }}
              transition={{ type: "tween", duration: 0.6 }}
              className="h-full flex flex-col justify-center items-center"
            >
              <Navbar
                isBordered={!isMobileMenuOpen}
                className="bg-primary mb-10"
              >
                <NavbarContent className="flex flex-col items-center gap-4">
                  <NavbarItem className="transition-colors duration-400">
                    <Link
                      href="/#whyparking"
                      className="text-darkblack text-buttonText   hover:border-b hover:dorder-gray"
                      onClick={() => {
                        handleSetActiveLink("/#whyparking");
                        toggleMobileMenu();
                      }}
                    >
                      {language === "english"
                        ? "Why Parking Time?"
                        : "Varför Parking Time?"}
                    </Link>
                  </NavbarItem>
                  <NavbarItem className="transition-colors duration-400">
                    <Link
                      href="/about"
                      className="text-darkblack text-buttonText   hover:border-b hover:dorder-gray"
                      onClick={() => {
                        handleSetActiveLink("/about");
                        toggleMobileMenu();
                      }}
                    >
                      {language === "english" ? "About us" : "Om oss"}
                    </Link>
                  </NavbarItem>
                  <NavbarItem className="transition-colors duration-400">
                    <Link
                      href="/newsPost"
                      className="text-darkblack text-buttonText   hover:border-b hover:dorder-gray"
                      onClick={() => {
                        handleSetActiveLink("/newsPost");
                        toggleMobileMenu();
                      }}
                    >
                      {language === "english" ? "News" : "Nyheter"}
                    </Link>
                  </NavbarItem>
                  <NavbarItem className="transition-colors duration-400">
                    <Link
                      href="/faq"
                      className="text-darkblack text-buttonText  hover:border-b hover:dorder-gray" 
                      onClick={() => {
                        handleSetActiveLink("/faq");
                        toggleMobileMenu();
                      }}
                    >
                      {language === "english" ? "FAQ" : "FAQ"}
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                      <Link
                        href="/contact"
                        className="px-4 py-[12px] text-buttonText rounded-xl border h-5 bg-black text-white hover:bg-white hover:text-black shadow-xs shadow-white transform transition-transform duration-400"
                        onClick={() => {
                          handleSetActiveLink("/contact");
                          toggleMobileMenu();
                        }}
                      >
                        {language === "english" ? "Contact us" : "Kontakta oss"}
                      </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Languages />
                  </NavbarItem>
                </NavbarContent>
              </Navbar>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Desktop Header */}
      <div className="hidden md:block w-full bg-primary ">
        <div className="w-full md:px-0">
          <Navbar isBordered className="bg-primary w-full">
            <div className="w-full flex justify-between items-center ">
              <NavbarBrand className="grow-0">
                <Link href="/" className="cursor-pointer">
                  <Image
                    src="/images/logo-1.png"
                    alt="logo"
                    width={60}
                    height={60}
                    className="min-w-[60px] min-h-[60px] "
                  />
                </Link>
              </NavbarBrand>
              <div className="flex">
                <NavbarContent className="flex flex-row justify-between items-center gap-0 navbar-ul-basis">
                  <NavbarItem className="transition-colors duration-500 px-[12px]">
                    <Link
                      href="/#whyparking"
                      aria-current="page"
                      className={`relative ${
                        activeLink === "/#whyparking" ? "active" : ""
                      }`}
                      onClick={() => handleSetActiveLink("/#whyparking")}
                      onMouseEnter={() => setHoveredLink("/#whyparking")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{
                        transition: "color 0.5s ease-out",
                      }}
                    >
                      <span className="group">
                        {language === "english"
                          ? "Why Parking Time?"
                          : "Varför Parking Time?"}
                        <span
                          className={`absolute left-0 top-3 w-full h-[2px] bg-black transform origin-left transition-transform duration-500 ${
                            activeLink === "/#whyparking" ||
                            hoveredLink === "/#whyparking"
                              ? "scale-x-100"
                              : "scale-x-0"
                          }`}
                        ></span>
                      </span>
                    </Link>
                  </NavbarItem>
                  <NavbarItem className="transition-colors duration-500 px-[12px]">
                    <Link
                      style={{
                        transition: "color 0.5s ease-out",
                      }}
                      className={`relative ${
                        activeLink === "/about" ? "active" : ""
                      }`}
                      href="/about"
                      onClick={() => handleSetActiveLink("/about")}
                      onMouseEnter={() => setHoveredLink("/about")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="group">
                        {language === "english" ? "About us" : "Om oss"}
                        <span
                          className={`absolute left-0 top-3 w-full h-[2px] bg-black transform origin-left transition-transform duration-500 ${
                            activeLink === "/about" || hoveredLink === "/about"
                              ? "scale-x-100"
                              : "scale-x-0"
                          }`}
                        ></span>
                      </span>
                    </Link>
                  </NavbarItem>
                  <NavbarItem className="transition-colors duration-500 px-[12px]">
                    <Link
                      style={{
                        transition: "color 0.5s ease-out",
                      }}
                      className={`relative ${
                        activeLink === "/newsPost" ? "active" : ""
                      }`}
                      href="/newsPost"
                      onClick={() => handleSetActiveLink("/newsPost")}
                      onMouseEnter={() => setHoveredLink("/newsPost")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="group">
                        {language === "english" ? "News" : "Nyheter"}
                        <span
                          className={`absolute left-0 top-3 w-full h-[2px] bg-black transform origin-left transition-transform duration-500 ${
                            activeLink === "/newsPost" ||
                            hoveredLink === "/newsPost"
                              ? "scale-x-100"
                              : "scale-x-0"
                          }`}
                        ></span>
                      </span>
                    </Link>
                  </NavbarItem>
                  <NavbarItem className="transition-colors duration-500 px-[12px]">
                    <Link
                      style={{
                        transition: "color 0.5s ease-out",
                      }}
                      className={`relative ${
                        activeLink === "/faq" ? "active" : ""
                      }`}
                      href="/faq"
                      onClick={() => handleSetActiveLink("/faq")}
                      onMouseEnter={() => setHoveredLink("/faq")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="group">
                        {language === "english" ? "FAQ" : "Vanliga frågor"}
                        <span
                          className={`absolute left-0 top-3 w-full h-[2px] bg-black transform origin-left transition-transform duration-500 ${
                            activeLink === "/faq" || hoveredLink === "/faq"
                              ? "scale-x-100"
                              : "scale-x-0"
                          }`}
                        ></span>
                      </span>
                    </Link>
                  </NavbarItem>
                  <NavbarItem className=" transform transition-transform duration-500 px-[12px] ">
                    <Button
                      as={Link}
                      href="/contact"
                      className="bg-black text-white h-5 w-[120px] border border-gray  hover:bg-white hover:text-black hover:border hover:border-gray"
                      onClick={() => handleSetActiveLink("/contact")}
                    >
                      {language === "english" ? "Contact us" : "Kontakta oss"}
                    </Button>
                  </NavbarItem>
                  <NavbarItem></NavbarItem>
                </NavbarContent>
                <Languages />
              </div>
            </div>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
