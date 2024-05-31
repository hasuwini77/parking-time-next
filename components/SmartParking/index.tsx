'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext'; 
import styles from './SmartParking.module.css'

const SmartParking: React.FC = () => {
    const { language } = useLanguage();

    return (
        <section className="min-h-[80vh] flex flex-col sm:flex-row items-center text-left pt-5 bg-white">
            <div className="mb-5 px-1 sm:w-1/2">
                <img src="/images/smartparking.png" alt="Smart Parking" className="max-w-full" />
            </div>
            <div className='px-3 sm:w-1/2'>
                <div className="max-w-xl">
                    <h1 className="font-bold text-4xl sm:text-heading2 mb-3">Smart Parking Solution</h1>
                    <p className="text-base mb-4 font-sans">
                    {language === "english"
                        ? "The parking disc has long been a tool to promote circulation and activity in city centers. It's a fantastic invention that benefits residents, visitors, and local businesses alike. We want to be part of this evolution by creating a free digital parking disc."
                        : "P-skivan har länge varit ett verktyg för att främja cirkulation och aktivitet i stadskärnor. Det är en fantastisk uppfinning som gynnar invånare, besökare och lokala företag. Vi vill vara en del av denna utveckling genom att skapa en gratis digital p-skiva."
                    }
                    </p>
                </div>
                <div>
                    <ul className="list-none mb-4">
                    <li className="font-bold text-lg mb-2 flex items-center">
                        <img src="/images/Vector.png" alt="vector arrow" className="max-w-full mr-2" />
                        {language === "english"
                            ? "We aim to support the growth and efficiency of urban areas."
                            : "Vi strävar efter att stödja tillväxt och effektivitet i stadsområden."
                        }
                    </li>
                    <li className="font-bold text-lg mb-2 flex items-center">
                        <img src="/images/Vector.png" alt="vector arrow" className="max-w-full mr-2" />
                        {language === "english"
                            ? "Our digital parking disc simplifies the parking process."
                            : "Vår digitala p-skiva förenklar parkeringsprocessen."
                        }
                    </li>
                    <li className="font-bold text-lg mb-2 flex items-center">
                        <img src="/images/Vector.png" alt="vector arrow" className="max-w-full mr-2" />
                        {language === "english"
                            ? "Any parking attendant systems can easily be integrated with our system."
                            : "Alla parkeringsvaktsystem kan enkelt integreras med vårt system."
                        }
                    </li>
                    </ul>
                    <p className="mb-4">
                        {language === "english"
                            ? "We're excited to share more about our solution in a meeting."
                            : "Vi ser fram emot att dela mer om vår lösning på ett möte."
                        }
                    </p>
                </div>
                <button className="bg-black text-white py-2 px-4 text-base">Contact us</button>
            </div>
        </section>
    );
};

export default SmartParking;


