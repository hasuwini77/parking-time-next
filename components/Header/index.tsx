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
import MyFlags from "./Flags";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FaBars, FaTimes } from "react-icons/fa";
import Languages from "./Languages";

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
    setActiveLink("/");
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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="fixed top-0 left-0 w-full h-full bg-primary z-40 overflow-y-auto max-h-[100vh]"
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
                      className="text-white text-buttonText  hover:text-green2"
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
                      href="/"
                      className="text-white text-buttonText  hover:text-green2"
                      onClick={() => {
                        handleSetActiveLink("/");
                        toggleMobileMenu();
                      }}
                    >
                      {language === "english" ? "Home" : "Hem"}
                    </Link>
                  </NavbarItem>
                  <NavbarItem className="transition-colors duration-400">
                    <Link
                      href="/about"
                      className="text-white text-buttonText  hover:text-green2"
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
                      className="text-white text-buttonText  hover:text-green2"
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
                      className="text-white text-buttonText hover:text-green2"
                      onClick={() => {
                        handleSetActiveLink("/faq");
                        toggleMobileMenu();
                      }}
                    >
                      {language === "english" ? "FAQ" : "FAQ"}
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Button className="rounded-lg h-5 bg-white hover:bg-green shadow-xs shadow-white transform transition-transform duration-400 hover:scale-105">
                      <Link
                        href="/contact"
                        className="text-black hover:text-white text-buttonText"
                        onClick={() => {
                          handleSetActiveLink("/contact");
                          toggleMobileMenu();
                        }}
                      >
                        {language === "english" ? "Contact us" : "Kontakta oss"}
                      </Link>
                    </Button>
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
      <div className="hidden md:block w-full bg-primary">
        <div className="w-full md:px-0">
          <Navbar
            isBordered
            className="bg-primary w-full flex justify-center items-center"
          >
            <div className="w-full flex justify-between items-center">
              <NavbarBrand>
                <Link href="/" className="cursor-pointer">
                  <Image
                    src="/images/logo-1.png"
                    alt="logo"
                    width={60}
                    height={60}
                    className="min-w-[60px] min-h-[60px]"
                  />
                </Link>
              </NavbarBrand>
              <div className="flex flex-row items-center justify-end">
                <NavbarContent className="gap-4">
                  <NavbarItem className="transition-colors duration-500">
                    <Link
                      href="/#whyparking"
                      aria-current="page"
                      className={`relative text-white ${activeLink === "/#whyparking" ? "active" : ""}`}
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
                          className={`absolute left-0 top-3 w-full h-[2px] bg-white transform origin-left transition-transform duration-500 ${
                            activeLink === "/#whyparking" ||
                            hoveredLink === "/#whyparking"
                              ? "scale-x-100"
                              : "scale-x-0"
                          }`}
                        ></span>
                      </span>
                    </Link>
                  </NavbarItem>
                  <NavbarItem className="transition-colors duration-500">
                    <Link
                      style={{
                        transition: "color 0.5s ease-out",
                      }}
                      className={`relative text-white ${activeLink === "/" ? "active" : ""}`}
                      href="/"
                      onClick={() => handleSetActiveLink("/")}
                      onMouseEnter={() => setHoveredLink("/")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="group">
                        {language === "english" ? "Home" : "Hem"}
                        <span
                          className={`absolute left-0 top-3 w-full h-[2px] bg-white transform origin-left transition-transform duration-500 ${
                            activeLink === "/" || hoveredLink === "/"
                              ? "scale-x-100"
                              : "scale-x-0"
                          }`}
                        ></span>
                      </span>
                    </Link>
                  </NavbarItem>
                  <NavbarItem className="transition-colors duration-500">
                    <Link
                      style={{
                        transition: "color 0.5s ease-out",
                      }}
                      className={`relative text-white ${activeLink === "/about" ? "active" : ""}`}
                      href="/about"
                      onClick={() => handleSetActiveLink("/about")}
                      onMouseEnter={() => setHoveredLink("/about")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="group">
                        {language === "english" ? "About us" : "Om oss"}
                        <span
                          className={`absolute left-0 top-3 w-full h-[2px] bg-white transform origin-left transition-transform duration-500 ${
                            activeLink === "/about" || hoveredLink === "/about"
                              ? "scale-x-100"
                              : "scale-x-0"
                          }`}
                        ></span>
                      </span>
                    </Link>
                  </NavbarItem>
                  <NavbarItem className="transition-colors duration-500">
                    <Link
                      style={{
                        transition: "color 0.5s ease-out",
                      }}
                      className={`relative text-white ${activeLink === "/newsPost" ? "active" : ""}`}
                      href="/newsPost"
                      onClick={() => handleSetActiveLink("/newsPost")}
                      onMouseEnter={() => setHoveredLink("/newsPost")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="group">
                        {language === "english" ? "News" : "Nyheter"}
                        <span
                          className={`absolute left-0 top-3 w-full h-[2px] bg-white transform origin-left transition-transform duration-500 ${
                            activeLink === "/newsPost" ||
                            hoveredLink === "/newsPost"
                              ? "scale-x-100"
                              : "scale-x-0"
                          }`}
                        ></span>
                      </span>
                    </Link>
                  </NavbarItem>
                  <NavbarItem className="transition-colors duration-500">
                    <Link
                      style={{
                        transition: "color 0.5s ease-out",
                      }}
                      className={`relative text-white ${activeLink === "/faq" ? "active" : ""}`}
                      href="/faq"
                      onClick={() => handleSetActiveLink("/faq")}
                      onMouseEnter={() => setHoveredLink("/faq")}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="group">
                        {language === "english" ? "FAQ" : "Vanliga frågor"}
                        <span
                          className={`absolute left-0 top-3 w-full h-[2px] bg-white transform origin-left transition-transform duration-500 ${
                            activeLink === "/faq" || hoveredLink === "/faq"
                              ? "scale-x-100"
                              : "scale-x-0"
                          }`}
                        ></span>
                      </span>
                    </Link>
                  </NavbarItem>
                  <NavbarItem className=" transform transition-transform duration-500 hover:scale-105">
                    <Button
                      as={Link}
                      href="/contact"
                      className="bg-white text-black h-5 w-[120px]  hover:bg-black hover:text-white"
                      onClick={() => handleSetActiveLink("/contact")}
                    >
                      {language === "english" ? "Contact us" : "Kontakta oss"}
                    </Button>
                  </NavbarItem>
                  <NavbarItem>
                    <Languages />
                  </NavbarItem>
                </NavbarContent>
              </div>
            </div>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
