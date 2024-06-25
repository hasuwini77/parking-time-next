import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DownloadProps {
  linkHref: string;
  SWtext: string;
  ENtext: string;
}

const DownloadButton: React.FC<DownloadProps> = ({
  linkHref,
  SWtext,
  ENtext,
}) => {
  const { language } = useLanguage();
  const [appLink, setAppLink] = useState<string>("");

  useEffect(() => {
    // Check if the code is running in the browser
    if (typeof navigator !== "undefined") {
      const userAgent =
        navigator.userAgent || navigator.vendor || (window as any).opera;

      if (/windows phone/i.test(userAgent)) {
        setAppLink(
          "https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US"
        );
      } else if (/android/i.test(userAgent)) {
        setAppLink(
          "https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US"
        );
      } else if (
        /iPad|iPhone|iPod/.test(userAgent) &&
        !(window as any).MSStream
      ) {
        setAppLink("https://apps.apple.com/us/app/parking-time/id1611019108");
      } else if (/Macintosh|Mac OS X/i.test(userAgent)) {
        setAppLink("https://apps.apple.com/us/app/parking-time/id1611019108");
      } else if (/Windows/i.test(userAgent)) {
        setAppLink(
          "https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US"
        );
      } else {
        setAppLink(
          "https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US"
        ); // Default link
      }
    }
  }, []);

  return (
    <motion.button
      className={`rounded-3xl md:w-48 w-full px-5 py-2 md:py-2 bg-black text-white custom-hover-home-hero-download-button`}
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
        <Link href={appLink} target="_blank" rel="noopener noreferrer">
          {ENtext}
        </Link>
      ) : (
        <Link href={appLink} target="_blank" rel="noopener noreferrer">
          {SWtext}
        </Link>
      )}
    </motion.button>
  );
};

export default DownloadButton;
