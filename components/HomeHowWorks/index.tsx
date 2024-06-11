"use client";
import React from "react";
import CardHowWorks from "../CardHowWorks";
import { FaAngleRight } from "react-icons/fa6";
import DownloadButton from "../DownloadButton";
import { useLanguage } from "@/context/LanguageContext";

const HomeHowWorks = () => {
  const { language } = useLanguage();

  const textContent = {
    english: {
      heading: "How it works?",
      card1: {
        title: "Enter your registration number",
        text: "Open the app, register with your car's registration number.",
        icon: "FaEdit" as const,
      },
      card2: {
        title: "Find your desired parking location",
        text: "Use the map, search function, or zone list to find your desired parking location.",
        icon: "FaParking" as const,
      },
      card3: {
        title: "Start your digital parking disc",
        text: "Once you select your parking zone, you can review any applicable rules, start parking, and then simply close the app.",
        icon: "FaClock" as const,
      },
      downloadButton: "Download app",
    },
    swedish: {
      heading: "Hur fungerar det?",
      card1: {
        title: "Ange ditt registreringsnummer",
        text: "Öppna appen, registrera dig med ditt registreringsnummer.",
        icon: "FaEdit" as const,
      },
      card2: {
        title: "Hitta din önskade parkeringsplats",
        text: "Använd kartan, sökfunktionen eller zonlistan för att hitta din önskade parkeringsplats.",
        icon: "FaParking" as const,
      },
      card3: {
        title: "Starta din digitala parkeringsskiva",
        text: "När du valt din parkeringszon kan du granska gällande regler, starta parkeringen och sedan stänga appen.",
        icon: "FaClock" as const,
      },
      downloadButton: "Ladda ner app",
    },
  };

  const content =
    language === "english" ? textContent.english : textContent.swedish;

  return (
    <div className="w-full py-32 md:py-44 px-4 md:px-20 flex flex-col justify-between items-center">
      <h2 className="mb-8 text-4xl">{content.heading}</h2>
      <div className="flex flex-col flex-wrap justify-center md:justify-between items-center middleWidth:flex-row">
        <CardHowWorks
          title={content.card1.title}
          text={content.card1.text}
          number="01"
          icon={content.card1.icon}
        />
        <FaAngleRight
          className="rotate-90 middleWidth:rotate-0 my-4 md:mx-3 text-red"
          size={30}
        />
        <CardHowWorks
          title={content.card2.title}
          text={content.card2.text}
          number="02"
          icon={content.card2.icon}
        />
        <FaAngleRight
          className="rotate-90 middleWidth:rotate-0 my-4 md:mx-3 text-red"
          size={30}
        />
        <CardHowWorks
          title={content.card3.title}
          text={content.card3.text}
          number="03"
          icon={content.card3.icon}
        />
      </div>
      <span className="mt-8 w-full text-center">
        <DownloadButton
          linkHref="https://play.google.com/store/games"
          SWtext={textContent.swedish.downloadButton}
          ENtext={textContent.english.downloadButton}
        />
      </span>
    </div>
  );
};

export default HomeHowWorks;
