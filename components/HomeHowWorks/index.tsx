"use client";
import React from "react";
import CardHowWorks from "../CardHowWorks";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import DownloadButton from "../DownloadButton";
import { useLanguage } from "@/context/LanguageContext";

const HomeHowWorks = () => {
  const { language } = useLanguage();

  return (
    <div className=" w-full py-32 sm:py-44 px-4 sm:px-20 flex flex-col justify-between items-center ">
      <h2 className=" mb-8 text-4xl">How it works?</h2>
      <div className="flex flex-wrap justify-center sm:justify-between items-center sm:flex-row ">
        <CardHowWorks
          title="Enter your registration number"
          text="Open the app, register with your cars registration number."
          number="01"
          icon="FaEdit"
        />
        <FaArrowRight className=" rotate-90 sm:rotate-0 my-4 sm:mx-3 text-red" size={30} />
        <CardHowWorks
          title="Find your desired parking location"
          text="Use the map, search function, or zone list to find your desired parking location."
          number="02"
          icon="FaParking"
        />
        <FaArrowRight className=" rotate-90 sm:rotate-0 my-4 sm:mx-3 text-red" size={30} />
        <CardHowWorks
          title="Start your digital parking disc"
          text="Once you select your parking zone, you can review any applicable rules, start parking, and then simply close the app."
          number="03"
          icon="FaClock"
        />
      </div>
      <span className="mt-8">
        <DownloadButton
          linkHref="https://play.google.com/store/games"
          SWtext="Ladda ner app"
          ENtext="Download app"
        />
      </span>
    </div>
  );
};

export default HomeHowWorks;
