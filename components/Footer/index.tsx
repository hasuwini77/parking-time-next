"use client";
import Image from "next/image";
import logo from "@/public/images/logo-1.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="flex flex-col justify-between items-center py-6 px-3 bg-primary text-white">
      <div className="flex flex-col forFooter:flex-row justify-between items-start ps-3 sm:ps-0 w-full border-b-4	pb-3 mb-3">
        <div className="left mb-3 sm:mb-3 flex flex-col sm:flex-row justify-between items-start ">
          <Image width={60} height={60} src={logo} alt="logo" className="mb-2 sm:mb-0" />
          <div className="flex flex-col items-start justify-between sm:px-3">
            <p className="mb-1 font-bold"> {language == "english" ? "Address:" : "Adress:"}</p>
            <p className="w-[210px] mb-3 sm:mb-0 text-sm">Nyköpingsvägen 52 | 611 50 NYKÖPING</p>
          </div>
          <div className="flex flex-col items-start justify-between">
            <p className="mb-1 font-bold">{language == "english" ? "Contact:" : "Kontakt:"}</p>
            <p className="mb-[4px] text-sm">+46 72 399 15 15</p>
            <p className="mb-[12px] text-sm">info@parkingtime.se</p>
            <p className="flex gap-3 text-xl">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="hover:text-red hover:scale-125 ease-in-out duration-300"
              >
                <RiInstagramFill />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="hover:text-red hover:scale-125 ease-in-out duration-300"
              >
                <FaLinkedin />
              </Link>
            </p>
          </div>
        </div>
        <div className="right flex flex-col item-start justify-start">
          <p className="mb-1 font-bold">{language == "english" ? "Links:" : "Länkar:"}</p>
          <ul className="flex flex-col sm:flex-row justify-between sm:items-center">
            <li className="sm:pe-2 mb-1 sm:mb-0 text-sm underline underline-offset-4 hover:text-red hover:scale-125 ease-in-out duration-300">
              <Link href="/contact">{language == "english" ? "Support" : "Support"}</Link>
            </li>
            <li className="sm:px-2 mb-1 sm:mb-0 text-sm underline underline-offset-4 hover:text-red hover:scale-125 ease-in-out duration-300">
              <Link href="/contact">{language == "english" ? "Contact" : "Kontakt"}</Link>
            </li>
            <li className="sm:px-2 mb-1 sm:mb-0 text-sm underline underline-offset-4 hover:text-red hover:scale-125 ease-in-out duration-300">
              <Link href="/about">{language == "english" ? "About us" : "Om oss"}</Link>
            </li>
            <li className="sm:ps-2 mb-1 sm:mb-0 text-sm underline underline-offset-4 hover:text-red hover:scale-125 ease-in-out duration-300">
              <Link href="/news">{language == "english" ? "News" : "Nyheter"}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse sm:flex-row items-start sm:items-start text-sm w-full ps-3 sm:ps-0">
        <p className="mt-4 sm:mt-0">&copy; 2024 Parking Time AB</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Link
            className="underline underline-offset-4 hover:text-red hover:scale-125 ease-in-out duration-300"
            href="/policy"
          >
            {language == "english" ? "Privacy Policy" : "Integritetspolicy"}
          </Link>
          {/* <Link
            className="underline underline-offset-4 hover:text-red hover:scale-125 ease-in-out duration-300"
            href="/contact"
          >
            {language == "english" ? "Terms of Service" : "Användarvillkor"}
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
