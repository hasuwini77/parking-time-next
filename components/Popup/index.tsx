'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from "@/context/LanguageContext";
import Image from 'next/image';
import free from '@/public/images/free.png';

const Popup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { language } = useLanguage();

     const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
       const openTimer = setTimeout(() => {
        setShowPopup(true);
      }, 500);
  
      
      const closeTimer = setTimeout(() => {
        setShowPopup(false);
      }, 6000);
  
      return () => {
        clearTimeout(openTimer);
        clearTimeout(closeTimer);
      };
    }, []);

  return (
    <AnimatePresence>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 short:pt-[36px]">
          <motion.div
            className="p-2 py-4 sm:p-8 rounded-xl shadow-md text-center text-primary relative max-w-[90%] short:max-h-[70%] short:py-1 short:px-6 bg-radial-gradient"
            variants={{
              hidden: { opacity: 0, scale: 0.2 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { type: "spring", delay: 0.4, duration: 1.3 },
              },
              exit: { opacity: 0, scale: 0.2, transition: { duration: 0.5 } }, 
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="text-4xl mb-4 short:text-2xl">
              {language === "english" ? "Here is some good news!" : "Här är en god nyhet!"}
            </h2>
            <div className="mb-4 text-xl short:text-base short:mb-0">
              {language === "english" ? (
                <div>
                  <p className="">Using the Parking Time App is</p>
                  <p className="text-white text-4xl sm:text-5xl short:text-2xl py-2 font-black scale-animation">Completely Free</p>
                </div>
              ) : (
                <div>
                  <p>Att använda Parking Time-Appen</p>
                  <p className="text-white text-4xl sm:text-5xl short:text-xl py-2 font-black scale-animation">Helt Gratis</p>
                </div>
              )}
            </div>
            <button onClick={closePopup} className="px-6 py-[12px] bg-black text-white rounded-[20px] hover:bg-white hover:text-black">
              {language === "english" ? "Close" : "stänga"}
            </button>
            <Image
              src={free}
              alt="faq hero girl"
              width={150}
              height={80}
              style={{ width: "auto", height: "auto" }}
              className="absolute top-[-46px] left-[75px] sm:top-[-10px] sm:left-[-68px] rotate-[12deg] sm:rotate-[-25deg] short:hidden"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
