'use client';
import React, { useState, useEffect } from 'react';
import DownloadButton from '../DownloadButton';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import visionImg from '../../public/images/vision.webp';
import ButtonEditable from '../ButtonEditable';

interface Data {
    title1: string;
    title2: string;
    text1: string;
    text1_2: string;
    text2: string;
}

const englishData: Data = {
    title1:"Our Vision",
    title2:"Our story",
    text1:"Parking Time Sweden is a tech startup aiming to revolutionize the parking experience for all parties involved – the parker, the parking attendant, the municipality, and the property owner.",
    text1_2:"We currently offer a free digital parking disc within an app to complement the existing range of parking apps.",
    text2:"Parking Time Sweden was founded in 2021 in Luleå. Today, we operate throughout Sweden with the ambition to expand globally in the coming years, and we hope to have you with us on our journey!",
}

const swedishData: Data = {
    title1:"Vår Vision",
    title2:"Vår berättelse",
    text1:"Parking Time Sweden är ett teknik-startup som syftar till att revolutionera parkeringsupplevelsen för samtliga parter - parkören, parkeringsvakten, kommunen och (eller) fastighetsägaren.",
    text1_2:"Vi erbjuder för närvarande en gratis digital parkeringsskiva i en app som kompletterar det befintliga utbudet av parkeringsappar.",
    text2:"Parking Time Sweden grundades år 2021 i Luleå. Idag bedriver vi verksamhet över hela Sverige med ambitionen att expandera globalt de kommande åren, och vi hoppas att ha dig med oss på vår resa!",
};

const AboutVision: React.FC = () => {
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
        <div className="bg-white flex flex-col lg:flex-row items-center justify-center w-full px-5 lg:px-7 md:p-1">
            <div className="w-full md:max-w-2xl mt-12 flex flex-col md:px-3 md:pl-4 md:pr-1">
                <h2 className="text-4xl font-semibold">{usedData?.title1}</h2>
                <p className="text-base pt-2 font-mono">{usedData?.text1}</p>
                <p className="text-base pt-3 lg:pt-4 font-mono">{usedData?.text1_2}</p>
                

                <h2 className="text-4xl font-semibold pt-4">{usedData?.title2}</h2>
                <p className="text-base pt-2 font-mono">{usedData?.text2}</p>

                <span className="text-center p-3 py-6 md:p-0 md:py-4 md:text-left">
          <ButtonEditable linkHref="/contact" SWtext="Boka ett möte" ENtext="Book a meeting" textColor="text-white" bgColor="bg-black" hoverEffect="hover:bg-gray" />

                </span>
            </div>
            <div className="w-full md:max-w-2xl flex justify-center">
                <Image src={visionImg} alt="A picture of a parking" className="hidden lg:inline-block"/>
            </div>
        </div>
    );
}

export default AboutVision