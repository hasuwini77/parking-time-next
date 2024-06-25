import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ButtonDownload {
  SWtext: string;
  ENtext: string;
  textColor: string;
  bgColor: string;
  hoverEffect: string;
}

const ButtonDownload: React.FC<ButtonDownload> = ({ SWtext, ENtext, textColor, bgColor, hoverEffect }) => {
  const { language } = useLanguage();
  const [appLink, setAppLink] = useState<string>('');

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

      if (/windows phone/i.test(userAgent)) {
        setAppLink('https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US');
      } else if (/android/i.test(userAgent)) {
        setAppLink('https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US');
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        setAppLink('https://apps.apple.com/us/app/parking-time/id1611019108');
      } else if (/Macintosh|Mac OS X/i.test(userAgent)) {
        setAppLink('https://apps.apple.com/us/app/parking-time/id1611019108');
      } else if (/Windows/i.test(userAgent)) {
        setAppLink('https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US');
      } else {
        // Default link
        setAppLink('https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US'); 
      }
    }
  }, []);

  return (
    <motion.button
      className={`rounded-[2rem] md:w-48 w-full px-5 py-2 md:py-2 ${textColor} ${bgColor} ${hoverEffect} mb-2 md:mb-0 md:me-3 shadow-hoverWhite ease-in-out box-hover-shadow`}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { type: "spring", delay: 0.3, duration: 1.3 },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {language === "english" ? (
        <Link href={appLink} target="_blank" rel="noopener noreferrer">{ENtext}</Link>
      ) : (
        <Link href={appLink} target="_blank" rel="noopener noreferrer">{SWtext}</Link>
      )}
    </motion.button>
  );
};

export default ButtonDownload;
