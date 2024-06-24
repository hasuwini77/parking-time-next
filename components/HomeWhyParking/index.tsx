"use client";
import React, { useState, useEffect } from "react";
import { FaMoneyBillTrendUp, FaDesktop } from "react-icons/fa6";
import { BsPhoneFill } from "react-icons/bs";
import { useLanguage } from "@/context/LanguageContext";
import { PiBuildingApartmentFill } from "react-icons/pi";
import ButtonEditable from "../ButtonEditable";

// Data types
interface Data {
  mainTitle: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
  subtitle4: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}
// Sample data
const englishData: Data = {
  mainTitle: "Why Parking Time?",
  subtitle1: "Increased revenue & reduced stress",
  subtitle2: "Simplified parking for users",
  subtitle3: "Integration with existing systems",
  subtitle4: "Data-driven urban planning",
  text1:
    "Our digital solution attracts more visitors by eliminating physical discs and reducing fines. This simplifies parking, boosts foot traffic, economic activity and city vibrancy  while reducing stress.",
  text2:
    "Our app lets you effortlessly set, adjust, and monitor parking time. With a user-friendly interface, you can quickly find spots and manage parking. We continuously update based on customer feedback to ensure an efficient and hassle-free experience.",
  text3:
    "Our system for parking attendants integrates seamlessly with your existing setup. A unified system benefits you by streamlining operations and enhancing the experience for personnel by eliminating the need for two different systems and devices. We make this integration efficient, intuitive, and simple!",
  text4:
    "The digital parking disc can eventually optimize parking resources and urban planning through valuable usage data and behavior patterns, leading to a safer society with better control and access to parking spaces.",
};
const swedishData: Data = {
  mainTitle: "Varför Parking Time?",
  subtitle1: "Ökad intäkt och minskad stress",
  subtitle2: "Förenklad parkering för användare",
  subtitle3: "Integration med befintliga system",
  subtitle4: "Datadriven stadsplanering",
  text1:
    "Vår digitala lösning lockar fler besökare genom att eliminera fysiska skivor och minska böter. Detta förenklar parkeringen, ökar fottrafik, ekonomisk aktivitet och stadens livlighet samtidigt som stressen minskar.",
  text2:
    "Vår app låter dig enkelt ställa in, justera och övervaka parkeringstid. Med ett användarvänligt gränssnitt kan du snabbt hitta platser och hantera parkeringen. Vi uppdaterar kontinuerligt baserat på kundfeedback för att säkerställa en effektiv och problemfri upplevelse.",
  text3:
    "Vårt system för parkeringsvakter integreras sömlöst med din befintliga setup. Ett enhetligt system gynnar dig genom att effektivisera verksamheten och förbättra upplevelsen för personalen genom att eliminera behovet av två olika system och enheter. Vi gör denna integration effektiv, intuitiv och enkel!",
  text4:
    "Den digitala parkeringsskivan kan så småningom optimera parkeringsresurser och stadsplanering genom värdefull användningsdata och beteendemönster, vilket leder till ett säkrare samhälle med bättre kontroll och tillgång till parkeringsplatser.",
};

// Component
const HomeWhyParking: React.FC = () => {
  const { language } = useLanguage();
  const [usedData, setUsedData] = useState<Data | null>(null);

  useEffect(() => {
    if (language === "english") {
      setUsedData(englishData);
    } else {
      setUsedData(swedishData);
    }
  }, [language]);

  return (
    <section
      className="bg-white px-3 py-8 text-darkblack flex flex-col items-center "
      id="whyparking"
    >
      <h1 className="text-3xl mb-6">{usedData?.mainTitle}</h1>
      <div className="flex md:flex-row flex-col items-center justify-center mb-4">
        <div className="mb-4 sm:mb-0 min-h-[580px] md:min-h-[640px]">
          <div className="mb-4 betweenS:min-h-[300px] betweenS:mb-3 sm:min-w-64 min-h-68 sm:min-h-[260px] max-w-[530px] sm:mb-2 w-full px-3 flex flex-col items-start ">
            <div className="text-3xl min-h-[36px] text-[#F85252] mb-2">
              <FaMoneyBillTrendUp />
            </div>
            <h3 className="text-2xl min-h-[36px]  betweenS:min-h-[64px] mb-2">
              {usedData?.subtitle1}
            </h3>
            <p className="text-base min-h-[150px] ">{usedData?.text1}</p>
          </div>
          <div className="betweenS:min-h-[300px] mb-4 sm:min-w-64 min-h-68 sm:min-h-[260px] max-w-[530px] sm:mb-2 w-full px-3 flex flex-col items-start ">
            <div className="text-3xl min-h-[36px] text-[#F85252]  mb-2">
              <FaDesktop />
            </div>
            <h3 className="text-2xl min-h-[36px]  betweenS:min-h-[64px] mb-2">
              {usedData?.subtitle3}{" "}
            </h3>
            <p className="text-base min-h-[150px] ">{usedData?.text3}</p>
          </div>
        </div>
        <div className="min-h-[580px] md:min-h-[640px]">
          <div className="mb-6 betweenS:min-h-[300px] betweenS:mb-3  sm:min-w-64 min-h-68 sm:min-h-[260px] max-w-[530px] sm:mb-2 w-full px-3 flex flex-col items-start ">
            <div className="text-3xl min-h-[36px] text-[#F85252]  mb-2">
              <BsPhoneFill />
            </div>
            <h3 className="text-2xl min-h-[36px] betweenS:min-h-[64px] mb-2">
              {usedData?.subtitle2}
            </h3>
            <p className="text-base min-h-[150px] ">{usedData?.text2}</p>
          </div>{" "}
          <div className="mb-4 betweenS:min-h-[300px] sm:min-w-64 min-h-68 sm:min-h-[260px] max-w-[530px] sm:mb-2 w-full px-3 flex flex-col items-start">
            <div className="text-3xl min-h-[36px] text-[#F85252]  mb-2">
              <PiBuildingApartmentFill />
            </div>
            <h3 className="text-2xl min-h-[36px]  betweenS:min-h-[64px] mb-2">
              {usedData?.subtitle4}
            </h3>
            <p className="text-base min-h-[150px] ">{usedData?.text4}</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:max-w-[460px] text-center">
        <ButtonEditable linkHref="/about" SWtext="Läs mer" ENtext="Learn more" textColor="text-white" bgColor="bg-darkblack" hoverEffect="hover:bg-grey1 hover:text-white" />

      </div>
    </section>
  );
};

export default HomeWhyParking;
