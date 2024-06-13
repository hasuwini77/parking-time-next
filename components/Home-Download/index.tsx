'use client';
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";
import Image from 'next/image';
import AppStore from '@/public/images/AppStore.png'
import GooglePlay from '@/public/images/GooglePlay.png'
import QR from '@/public/images/QR.png'
import Download from '@/public/images/dowload.png'

const HomeDownload: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className="w-full py-6 px-2 bg-white">
        <section className="flex justify-center flex-col items-center m-5 max-h-[600px] max-w-[1000px] mx-auto my-6 md:flex-row">
        <div className="w-full flex justify-center p-2 md:hidden">
                <Image className="flex justify-center items-center w-4/5 h-auto m-2.5" src={Download} alt="download" />
            </div>
            <div className="w-4/5 md:w-3/6">
                {language === "english" ? (                    
                    <span className="text-4xl w-full flex justify-center font-mono text-center md:justify-center">
                        Download now
                    </span>
                ) : (
                    <span className="text-center  md:text-4xl w-4/5 flex justify-center"> 
                        Ladda Ner Nu!
                    </span>
                )}
                    {language === "english" ? (               
                    <span className="w-full m-2.5 flex md:w-full md:text-center md:m-2.5">
                        The app is free to download for you as a user. However, your municipality must be registered as a customer with us for our app to be valid in your area. If our app is not available in your municipality, you are welcome to contact us or suggest us to your municipality!
                    </span>    
                    ) : (
                    <span className="w-full m-2.5 flex md:w-4/5">
                        Appen är gratis att ladda ner för dig som användare. Din kommun måste dock vara registrerad som kund hos oss för att vår app ska vara giltig i ditt område. Om vår app inte är tillgänglig i din kommun är du välkommen att kontakta oss eller föreslå oss till din kommun!
                    </span>           
                    ) }
                    <div className="flex flex-row justify-center w-full">
                        <Image className="w-36 m-2.5 flex justify-center" width={100} height={100} src={AppStore} alt="appstore"/>
                        <Image className="w-36 m-2.5 flex justify-center" width={100} height={100} src={GooglePlay} alt="goggleStore" />
                    </div>                                  
                    <Image className="hidden md:block md:max-w-[100px] md:ml-2" src={QR} alt="qr-code" />
            </div>
            <div className="hidden md:block md:w-3/6 p-2">
                <Image className="flex justify-center items-center w-full h-auto m-2.5" src={Download} alt="download" />
            </div>
         </section>   
        </div>
    )
}

export default HomeDownload

