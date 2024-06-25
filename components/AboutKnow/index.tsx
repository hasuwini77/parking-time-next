"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ButtonEditable from "../ButtonEditable";

const AboutKnow: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-white text-center flex flex-col items-center">
      <div className="px-6 pt-6 md:max-w-[575px]">
        <h2 className="text-heading2 font-semibold pb-2">
          {language === "english" ? "Want to know more?" : "Vill du veta mer?"}
        </h2>
        <p className="text-base font-mono">
          {language === "english"
            ? "Contact us to find out more about our solution and how we can implement it in your municipality."
            : "Kontakta oss för att få veta mer om vår lösning och hur vi kan implementera det i din kommun."}
        </p>
      </div>
      <div className="p-3 pb-8 w-full sm:max-w-[460px]">
        <ButtonEditable
          linkHref="/contact"
          SWtext="Kontakta oss"
          ENtext="Contact us"
          textColor="text-white"
          bgColor="bg-black"
          hoverEffect="hover:bg-gray"
        />
      </div>
    </div>
  );
};

export default AboutKnow;
