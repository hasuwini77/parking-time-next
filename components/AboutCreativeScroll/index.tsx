"use client";
import { useLanguage } from "@/context/LanguageContext";
import ContactButton from "../ContactButton";
import { useEffect } from "react";

const AboutCreativeScroll: React.FC = () => {
  const { language } = useLanguage();

  // Handle scroll effect
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
    <div className="aboutScroll-container relative w-full h-[60vh] md:h-[40vh] flex flex-col items-center justify-center">
      <div
        className="aboutScroll absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-no-repeat bg-custom-center-70"
        style={{ backgroundImage: "url('/images/background1.jpg')" }}
      />
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="content relative z-10 text-center text-white">
        <h3 className="text-bold text-3xl wideShort:text-2xl">
          {language === "english" ? "Wanna join us?" : "Vill du vara med?"}
        </h3>
        <p className="hidden lg:block tall:leading-2 max-w-[40%] p-2 text-xl mx-auto lg:leading-8 wideShort:text-sm wideShort:max-w-[60%]">
          {language === "english"
            ? "We are always eager to welcome new members to our team at Parking Time. If you are interested in joining us, please fill out our open application form. We look forward to hearing from you!"
            : "Vi är alltid ivriga att välkomna nya medlemmar till vårt team på Parking Time. Om du är intresserad av att gå med oss, vänligen fyll i vårt öppna ansökningsformulär. Vi ser fram emot att höra från dig!"}
        </p>
        <p className="py-4 text-lg text-mono wideShort:text-base">
          {language === "english"
            ? "Fill in the form below"
            : "Fyll i formuläret nedan"}
        </p>
        <ContactButton
          linkHref="/contact"
          SWtext="Kontakta oss"
          ENtext="Contact us"
        />
      </div>
    </div>
  );
};

export default AboutCreativeScroll;
