"use client";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const NewsHero: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className="w-full short:min-h-[60vh] relative flex justify-start items-start overflow-hidden">
      <Image
        src="/images/newshero3.webp"
        alt="News Hero"
        fill={true}
        style={{ objectFit: "cover" }}
        quality={75}
        priority
        className="z-0"
      />
      <div className="w-full short:min-h-[60vh] md:min-w-[350px] md:w-2/5 min-h-[50vh] bg-[rgba(0,0,0,0.2)] backdrop-blur-[2px] md:backdrop-blur-[10px] p-5 flex flex-col justify-center items-start text-white">
        <span className="list-disc text-xl list-inside pl-0 ml-0">
          {language === "english" ? "News" : "Nyheter"}
        </span>
        <span className="text-5xl font-[530] leading-tight pt-3 short:text-2xl">
          {language === "english" ? (
            <span>
              We are Tranforming <br />
              Parking Experiences
            </span>
          ) : (
            <span>
              Vi förändrar <br />
              parkerings
              <wbr />
              &shy;upplevelser
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default NewsHero;
