"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import DownloadButton from "../DownloadButton";
import { useTheme } from "@/context/ThemeContext";

const AboutKnow: React.FC = () => {
  const { language } = useLanguage();
  const theme = useTheme();

  return (
    <div
      className={
        theme === "dark"
          ? "bg-secondary text-center py-5 flex flex-col items-center"
          : "bg-white text-center py-5 flex flex-col items-center"
      }
    >
      <div className="px-6 text-textColor pt-6 md:max-w-[550px]">
        <h2 className="text-4xl font-semibold md:text-[44px] pb-2">
          {language === "english" ? "Want to know more?" : "Vill du veta mer?"}
        </h2>
        <p className="text-base font-mono">
          {language === "english"
            ? "Contact us to find out more about our solution and how we can implement it in your municipality."
            : "Kontakta oss för att få veta mer om vår lösning och hur vi kan implementera det i din kommun."}
        </p>
      </div>
      <div className="p-3 pb-8 w-full sm:max-w-[460px]">
        <DownloadButton
          linkHref="/contact"
          SWtext="Kontakta oss"
          ENtext="Contact us"
        />
      </div>
    </div>
  );
};

export default AboutKnow;
