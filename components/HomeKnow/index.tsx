"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import matilda from "../../public/images/matilda.png";
import ContactButton from "../ContactButton";

const HomeKnow: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className="bg-primary flex flex-col items-center justify-center text text-white md:flex-row">
            <div className="mt-12 w-full max-w-80 m-2.5 flex flex-col justify-center items-center p-2 text-center md:flex-1 md:max-w-none md:pt-6 md:pb-12">
                <div className="max-w-full h-auto mb-2">
                    <Image src={matilda} alt="A image of Matilda CEO" />
                </div>
                {language === "english" ? (
                    <span className="text-2xl font-semibold">
                        Matilda Öhman, CEO <br/>
                    </span>
                ) : (
                    <span className="text-2xl font-semibold">
                        Matilda Öhman, VD <br/>
                    </span>
                )}
                    <span className="text-base"><a href="mailto:Matilda@parkingtime.se">Matilda@parkingtime.se</a></span>
            </div>
            <div className="w-full max-w-80 m-2.5 flex flex-col justify-center items-center p-1 text-center mb-12 md:items-start md:text-left md:pt-5 md:flex-1 md:max-w-none md:pb-12">
                {language === "english" ? (
                    <span className="text-4xl font-semibold pb-3 md:text-[44px] md:pt-4 md:pb-5 md:pr-3">
                        Want to know more? <br/>
                    </span>
                ) : (
                    <span  className="text-4xl font-semibold pb-3 md:text-[44px]">
                        Vill du veta mer? <br/>
                    </span>
                )}

                {language === "english" ? (
                    <span className="text-base pb-1 md:max-w-[400px]">
                        Contact us to find out more about our solution and how we can implement it in your municipality. <br/>
                    </span>
                ) : (
                    <span className="text-base pb-1">
                        Kontakta oss för att få veta mer om vår lösning och hur vi kan implementera det i din kommun.
                    </span>
                )}
                    <span className="w-full sm:max-w-[460px] text-center pt-3 md:text-left">
                        <ContactButton 
                        linkHref="/contact" 
                        SWtext="Kontakta oss" 
                        ENtext="Contact us"
                        />
                    </span>
            </div>
        </div>
    );
}

export default HomeKnow