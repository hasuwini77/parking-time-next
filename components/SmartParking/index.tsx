'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext'; 
import DownloadButton from '../DownloadButton';

const SmartParking: React.FC = () => {
    const { language } = useLanguage();

    return (
        <section className="bg-white">
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center pt-5 pb-4 '>
                <div className="mb-5 px-1 md:w-1/2">
                    <img src="/images/smartparking.png" alt="Smart Parking" className="max-w-full" />
                </div>
                <div className='px-3 md:w-1/2'>
                    <div className="max-w-xl">
                        <h1 className="font-bold text-4xl md:text-heading2 mb-3">{language === "english"
                            ? "Smart Parking Solution"
                            : "Smart Parking lösning"
                        }</h1>
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
                    <DownloadButton linkHref="https://play.google.com/store/games" SWtext="Kontakta oss" ENtext="Contact us" />
                </div>
            </div>
        </section>
    );
};

export default SmartParking;



/*

'use client';

 import React from 'react';
import { useLanguage } from '@/context/LanguageContext'; 
import DownloadButton from '../DownloadButton';

const SmartParking: React.FC = () => {
    const { language } = useLanguage();

    return (
        <section className="w-full flex flex-col items-center pt-5 pb-4 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
                <div className="mb-5 md:mb-0 md:w-1/2">
                    <img src="/images/smartparking.png" alt="Smart Parking" className="max-w-full" />
                </div>
                <div className="md:w-1/2">
                    <div className="max-w-xl mx-auto">
                        <h1 className="font-bold text-4xl md:text-heading2 mb-3">
                            {language === "english"
                                ? "Smart Parking Solution"
                                : "Smart Parking lösning"
                            }
                        </h1>
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
                    <DownloadButton linkHref="https://play.google.com/store/games" SWtext="Kontakta oss" ENtext="Contact us" />
                </div>
            </div>
        </section>
    );
};

export default SmartParking; */
