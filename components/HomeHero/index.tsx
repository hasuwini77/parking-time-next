"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import DownloadButton from "../DownloadButton";
import ContactButton from "../ContactButton";

const HomeHero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="relative w-full bg-cover bg-home-hero custom-height-home-hero">
      <div className="w-full md:w-[43%] min-h-[20vh] bg-[rgba(0,0,0,0.63)] justify-center absolute h-full text-[white] flex-grow flex flex-col items-start short:top-[0] short:pt-2  md:items-start p-3 md:p-7">
        <motion.h1
          className="font-bold text-4xl md:text-7xl mb-4 short:text-5xl"
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
              We are <br/> Parking Time<br /> Sweden
            </span>
          ) : (
            <span>
              Vi är <br /> Parking Time<br /> Sverige
            </span>
          )}
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl font-lato mt-1 short:hidden"
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
              <br className="hidden md:inline-block" /> A winning concepts in a new, digitalized
              format
            </span>
          ) : (
            <span>
              Digital parkeringsskiva - direkt på din mobil.{" "}
              <br className="hidden md:inline-block" />
              Ett vinnande koncept i ett nytt, digitaliserat format
            </span>
          )}
        </motion.p>
        <div className="mt-14 short:mt-2 md:mt-6 w-full flex flex-col md:flex-row ">
          <ContactButton linkHref="/contact" SWtext="Kontakta oss" ENtext="Contact us" />
          <DownloadButton
            linkHref="https://play.google.com/store/games"
            SWtext="Ladda ner app"
            ENtext="Download app"
          />
        </div>
      </div>
      <div className="absolute short:p-1 p-1 md:p-3 bottom-0 left-0 w-full bg-gray2">
        <ul className="flex flex-col md:flex-row gap-2">
          <div className="flex justify-around basis-1/2">
            <motion.li
              className="text-#06433E text-start"
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
              className="text-#06433E text-start"
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
          </div>
          <div className="flex justify-around basis-1/2">
            <motion.li
              className="text-#06433E text-start"
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
              {language === "english" ? "Avoid fines" : "Undvik böter"}
            </motion.li>
            <motion.li
              className="text-#06433E text-start"
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
              {language === "english" ? "Reduce stress" : "Minska stress"}
            </motion.li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HomeHero;
