"use client";
import { motion } from "framer-motion";

const HomeHero: React.FC = () => {
  return (
    <div className="relative w-screen bg-cover bg-center bg-home-hero custom-height-home-hero ">
      <div className="absolute h-full text-white w-full flex-grow flex flex-col items-start top-20 sm:top-1/4 sm:items-start p-3 sm:p-7">
        <motion.h1
          className="font-bold text-4xl sm:text-7xl mb-4"
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
          What time is it? <br /> Parking time!
        </motion.h1>
        <motion.p
          className="text-lg sm:text-2xl font-mono mt-1"
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
          Digital parking disc - directly on your mobile. <br className="hidden sm:inline-block" />{" "}
          A winning concepts in a new, digitalized format
        </motion.p>
        <div className="mt-14 sm:mt-6 w-full flex flex-col sm:flex-row ">
          <motion.button
            className="rounded-3xl sm:w-48 w-full px-5 py-2 sm:py-2 bg-white text-black mb-2 sm:mb-0 sm:me-3 custom-hover-home-hero-contact-us-button "
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
            Contact us
          </motion.button>
          <motion.button
            className="rounded-3xl sm:w-48 w-full px-5 py-2 sm:py-2 bg-black text-white custom-hover-home-hero-download-button"
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
            Download app
          </motion.button>
        </div>
      </div>
      <div className="absolute p-1 sm:p-3 bottom-0 left-0 w-full bg-green bg-opacity-80">
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
              Easy to use
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
              Convenience
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
              Free to download
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
              Increased Revenue
            </motion.li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HomeHero;
