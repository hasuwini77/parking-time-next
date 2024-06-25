"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonEditable from "../ButtonEditable";

const AboutCreativeScroll: React.FC = () => {
  const { language } = useLanguage();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const aboutScrollDiv = document.querySelector(
        ".aboutScroll"
      ) as HTMLElement;
      if (aboutScrollDiv) {
        aboutScrollDiv.style.backgroundPositionY = `${scrollTop * 0.03}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="aboutScroll-container relative w-full h-[60vh] md:h-[40vh] flex flex-col items-center justify-center"
    >
      <div
        className="aboutScroll absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-no-repeat bg-custom-center-70"
        style={{ backgroundImage: "url('/images/background1.jpg')" }}
      />
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="content relative z-10 text-center text-white">
        <motion.h3
          className="text-bold text-3xl wideShort:text-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          {language === "english" ? "Wanna join us?" : "Vill du vara med?"}
        </motion.h3>
        <motion.p
          className="hidden lg:block tall:leading-2 max-w-[40%] p-2 text-xl mx-auto lg:leading-8 wideShort:text-sm wideShort:max-w-[60%]"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {language === "english"
            ? "We are always eager to welcome new members to our team at Parking Time. If you are interested in joining us, please fill out our open application form. We look forward to hearing from you!"
            : "Vi är alltid ivriga att välkomna nya medlemmar till vårt team på Parking Time. Om du är intresserad av att gå med oss, vänligen fyll i vårt öppna ansökningsformulär. Vi ser fram emot att höra från dig!"}
        </motion.p>
        <motion.p
          className="py-4 text-lg text-mono wideShort:text-base"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {language === "english"
            ? "Fill in the form below"
            : "Fyll i formuläret nedan"}
        </motion.p>
        <ButtonEditable
          linkHref="/contact"
          SWtext="Kontakta oss"
          ENtext="Contact us"
          textColor="text-black"
          bgColor="bg-white"
          hoverEffect="hover:bg-black hover:text-white"
        />
      </div>
    </div>
  );
};

export default AboutCreativeScroll;
