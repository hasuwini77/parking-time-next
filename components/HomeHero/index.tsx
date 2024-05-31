"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import DownloadButton from "../DownloadButton";
import ContactButton from "../ContactButton";

const HomeHero: React.FC = () => {
  const { language } = useLanguage();

  console.log(language);

  return (
    <div className="relative w-screen bg-cover bg-center bg-home-hero custom-height-home-hero ">
      <div className="absolute h-full text-white w-full flex-grow flex flex-col items-start short:top-[0] short:pt-2 top-[14%] sm:items-start p-3 sm:p-7">
        <motion.h1
          className="font-bold text-4xl sm:text-7xl mb-4 short:text-5xl"
          variants={{
            hidden: { opacity: 0, x: "-80px" },
            visible: {
              opacity: 1,
              x: 0,
              transition: { type: "spring", delay: 0.2, duration: 1 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {language === "english" ? (
            <span>
              What time is it? <br /> Parking time!
            </span>
          ) : (
            <span>
              Vad är klockan? <br /> Parkeringstid!
            </span>
          )}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-2xl font-mono mt-1 short:hidden"
          variants={{
            hidden: { opacity: 0, x: "-80px" },
            visible: {
              opacity: 1,
              x: 0,
              transition: { type: "spring", delay: 0.4, duration: 1.3 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {language === "english" ? (
            <span>
              Digital parking disc - directly on your mobile.{" "}
              <br className="hidden sm:inline-block" /> A winning concepts in a new, digitalized
              format
            </span>
          ) : (
            <span>
              Digital parkeringsskiva - direkt på din mobil.{" "}
              <br className="hidden sm:inline-block" />
              Ett vinnande koncept i ett nytt, digitaliserat format
            </span>
          )}
        </motion.p>
        <div className="mt-14 short:mt-2 sm:mt-6 w-full flex flex-col sm:flex-row ">
          <ContactButton linkHref="/contact" SWtext="Kontakta oss" ENtext="Contact us" />
          <DownloadButton
            linkHref="https://play.google.com/store/games"
            SWtext="Ladda ner app"
            ENtext="Download app"
          />
        </div>
      </div>
      <div className="absolute short:p-1 p-1 sm:p-3 bottom-0 left-0 w-full bg-green bg-opacity-80">
        <ul className="flex flex-col sm:flex-row gap-2 list-disc">
          <div className="flex justify-around basis-1/2">
            <motion.li
              className="text-white text-start"
              variants={{
                hidden: { opacity: 0, y: "35px" },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", delay: 0.3, duration: 1.3 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {language === "english" ? "Easy to use" : "Lätt att använda"}
            </motion.li>
            <motion.li
              className="text-white text-start"
              variants={{
                hidden: { opacity: 0, y: "35px" },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", delay: 0.3, duration: 1.3 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {language === "english" ? "Convenience" : "Bekvämlighet"}
            </motion.li>
          </div>
          <div className="flex justify-around basis-1/2">
            <motion.li
              className="text-white text-start"
              variants={{
                hidden: { opacity: 0, y: "35px" },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", delay: 0.3, duration: 1.3 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {language === "english" ? "Free to download" : "Gratis att ladda ner"}
            </motion.li>
            <motion.li
              className="text-white text-start"
              variants={{
                hidden: { opacity: 0, y: "35px" },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", delay: 0.3, duration: 1.3 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {language === "english" ? "Increased Revenue" : "Ökad intäkt"}
            </motion.li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HomeHero;
