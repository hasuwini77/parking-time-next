'use client'
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image";

const AboutHero: React.FC = () => {
    const { language } = useLanguage();
    return (
        <div className="w-full min-h-[50vh] relative flex justify-start items-start overflow-hidden">
            <Image
                src="/images/aboutHero2.webp"
                alt="News Hero"
                fill={true}
                style={{objectFit: "cover"}}
                quality={75}
                priority
                className="z-0"
            />
            <div className="w-full md:w-2/5 min-h-[50vh] bg-[rgba(0,0,0,0.2)] backdrop-blur-[10px] md:backdrop-blur-[10px] p-5 flex flex-col justify-center items-start text-white">
                <span className="list-disc text-xl list-inside pl-0 ml-0">
                    {language === "english" ? (
                        "About us"
                    ) : (
                        "Om oss"
                    )} 
                </span>
                <span className=" leading-tight pt-3">
                {language === "english" ? (
                        <span className="text-5xl font-[530]">
                            Parking Time Sweden
                        </span>
                    ) : (
                        <span className="text-5xl font-[530]">
                            Parking Time Sverige
                        </span>
                    )}
                {language === "english" ? (
                        <p className="font-mono leading-7 pt-4">
                            We are a tech startup dedicated to transforming the parking experience for all stakeholders - parkers, parking attendants, municipalities, and property owners.
                        </p>
                    ) : (
                        <p className="font-mono leading-7 pt-4">
                            Vi är ett teknik-startup som syftar till att revolutionera parkeringsupplevelsen för samtliga parter - parkören, parkeringsvakten, kommunen och (eller) fastighetsägaren.
                        </p>
                    )} 
                </span>
            </div>
        </div>
    )
}

export default AboutHero