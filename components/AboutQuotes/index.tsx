'use client';
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";

const Quotes: React.FC = () => {
    const { language } = useLanguage();
    return(
        <>
        <section>
        {language === "english" ? (                    
                    <span>
                        “Of all the things you need to think about during the day, parking should be one of the least. Parking should be so seamless that you hardly need to think about it; it should just work. We call this Smart Parking." 
                        - Matilda, CEO and Founder.
                    </span>
                ) : (
                    <span> 
                        "Av alla saker du behöver tänka på under dagen, borde parkering vara en av de minsta. Parkering borde vara så smidig att du knappt behöver tänka på det; det borde bara fungera. Vi kallar detta Smart Parkering."
                        - Matilda, VD och grundare.
                    </span>
                )}
        </section>
        </>
    )
}

export default Quotes