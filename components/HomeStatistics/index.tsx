"use client";
import React from "react";
import { FaDownload, FaParking, FaMap } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const HomeStatistics = () => {
  const { language } = useLanguage();

  return (
    <section className="flex flex-col sm:flex-row justify-around items-center w-[90%] mx-auto px-1 py-14 bg-white rounded-lg my-8">
      <div className="flex justify-between items-center max-h-10 mb-8 sm:mb-0">
        <span className="text-4xl me-3 text-[#F85252]">
          <FaDownload />
        </span>
        <div className="w-[180px]">
          <p className="text-3xl mb-2 font-bold">5345+</p>
          <p className="text-xl">{language === "english" ? "Downloads" : "Nedladdningar"} </p>
        </div>
      </div>
      <div className="flex justify-between items-center max-h-10 mb-8 sm:mb-0">
        <span className="text-4xl me-3 text-[#F85252]">
          <FaParking />
        </span>
        <div className="w-[180px]">
          <p className="text-3xl mb-2 font-bold">4345+</p>
          <p className="text-xl">
            {language === "english" ? "Parking sessions" : "Parkeringstillfällen"}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center max-h-10 ">
        <span className="text-4xl me-3 text-[#F85252]">
          <FaMap />
        </span>
        <div className="w-[180px]">
          <p className="text-3xl mb-2 font-bold">30+</p>
          <p className="text-xl">{language === "english" ? "Parking zones" : "Parkeringszoner"}</p>
        </div>
      </div>
    </section>
  );
};

export default HomeStatistics;
