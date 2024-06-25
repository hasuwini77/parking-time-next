"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ButtonEditable from "../ButtonEditable";
import ButtonDownload from "../ButtonDownload";

const HomeHero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="relative w-full bg-cover bg-center bg-home-hero custom-height-home-hero ">
      <div className="absolute h-full text-white w-full sm:w-[42%] md:w-[38%] short:w-[61%] flex-grow flex flex-col items-start short:top-[0]  top-[0] bg-[#0000007d] md:items-start pt-[16vh] short:-[5vh] ps-1 md:ps-4 ">
        <motion.h1
          className="font-bold text-5xl md:text-5xl mb-1 short:text-4xl"
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
              Parking Time <br/> Sweden
            </span>
          ) : (
            <span>
              Parking Time <br/> Sweden
            </span>
          )}

        </motion.h1>
        <p className="text-4xl mb-2 short:text-3xl">
        {language === "english" ? (
            <span>
              We do parking simple
            </span>
          ) : (
            <span>
              Vi gör parkering enkelt
            </span>
          )}
        </p>
        <motion.p
          className="text-lg md:text-[22px] font-mono mt-1 short:hidden leading-6"
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
            <span >
              Digital parking disc - directly on your mobile.{" "}
              <br className=" md:inline-block" /> A winning concepts in a
              new, digitalized format
            </span>
          ) : (
            <span>
              Digital parkeringsskiva - direkt på din mobil.{" "}
              <br className=" md:inline-block" />
              Ett vinnande koncept i ett nytt, digitaliserat format
            </span>
          )}
        </motion.p>
        <div className="mt-[24px] short:mt-1 md:mt-6 px-2 w-full flex flex-col md:flex-row ">
          <ButtonDownload
            SWtext="Ladda ner app"
            ENtext="Download app"
            textColor="text-white"
            bgColor="bg-black"
            hoverEffect="hover:bg-gray hover:text-white"
          />
          <ButtonEditable
            linkHref="/contact"
            SWtext="Kontakta oss"
            ENtext="Contact us"
            textColor="text-black"
            bgColor="bg-white"
            hoverEffect="hover:bg-gray hover:text-white"
          />
        </div>
      </div>
      {/* <div className="absoluute w-full short:w-[60%] longW:w-[38%] lg:w-[60%] bigScreen:w-[38%] l:w-[43%] h-full bg-[#0000007d]"> */}
      <div className="absolute short:p-1 p-1 md:p-3 bottom-0 left-0 w-full bg-primary">
        <ul className="flex flex-col md:flex-row gap-2 list-none">
          <div className="flex justify-around basis-1/2">
            <motion.li
              className="text-darkblack text-start"
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
              className="text-darkblack text-start"
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
              {language === "english" ? "Free to download" : "Gratis nedladdning"}
            </motion.li>
          </div>
          <div className="flex justify-around basis-1/2">
            <motion.li
              className="text-darkblack text-start"
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
              {language === "english"
                ? "Avoid fines"
                : "Undvik böter"}
            </motion.li>
            <motion.li
              className="text-darkblack text-start"
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
              {language === "english" ? "Reduce stress" : "Minska stressen"}
            </motion.li>
          </div>
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default HomeHero;
