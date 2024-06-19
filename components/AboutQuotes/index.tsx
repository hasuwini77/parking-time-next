'use client';
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";

const Quotes: React.FC = () => {
    const { language } = useLanguage();
    return(
        <>
        <section className="w-full flex justify-center items-center bg-white p-2.5 md:w-full md:flex md:justify-center">
                    {language === "english" ? (                    
                <span className="w-4/5 flex justify-center items-center m-5 text-center md:flex md:justify-center md:w-2/4">
                        <i className="text-xl md:text-xl md:my-5">&ldquo;Of all the things you need to think about during the day, parking should be one of the least. Parking should be so seamless that you hardly need to think about it; it should just work. We call this Smart Parking.&rdquo;<br/>- Matilda, CEO and Founder.</i>
                </span>
                ) : (
                <span className="w-4/5 flex justify-center items-center m-5 text-center md:flex md:justify-center md:w-2/4"> 
                        <i className="text-xl md:text-xl md:my-5">&ldquo;Av alla saker du behöver tänka på under dagen, borde parkering vara en av de minsta. Parkering borde vara så smidig att du knappt behöver tänka på det; det borde bara fungera. Vi kallar detta Smart Parkering.&rdquo;<br/>- Matilda, VD och grundare.</i>
                </span>
                )}
        </section>
        </>
    )
}

export default Quotes