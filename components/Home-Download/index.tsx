'use client';
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";


const HomeDownload: React.FC = () => {
    const { language } = useLanguage();

    return (
        <>
        <section className="flex justify-center flex-row m-5">
            <div className="w-2/4">
                {language === "english" ? (
                    <span className="text-4xl w-4/5 flex justify-center font-mono">
                        Download now
                    </span>
                ) : (
                    <span className="text-4xl w-4/5 flex justify-center">
                        Ladda Ner Nu!
                    </span>
                )}
                    {language === "english" ? (               
                    <span className="w-4/5 m-2.5 flex">
                        The app is free to download for you as a user. However, your municipality must be registered as a customer with us for our app to be valid in your area. If our app is not available in your municipality, you are welcome to contact us or suggest us to your municipality!
                    </span>    
                    ) : (
                    <span className="w-4/5 m-2.5 flex">
                        Appen är gratis att ladda ner för dig som användare. Din kommun måste dock vara registrerad som kund hos oss för att vår app ska vara giltig i ditt område. Om vår app inte är tillgänglig i din kommun är du välkommen att kontakta oss eller föreslå oss till din kommun!
                    </span>           
                    ) }
                    <div className="flex flex-row w-2/6">
                        <img className="w-36 m-2.5 flex justify-center" src="/images/AppStore.png" alt="appstore"/>
                        <img className="w-36 m-2.5 flex justify-center" src="/images/GooglePlay.png" alt="goggleStore" />
                    </div>                                  
                    <img className="flex m-2.5 w-1/5" src="/images/QR.png" alt="qr-code" />
            </div>
            <div className="w-2/4">
                <img className="flex justify-center items-center w-4/5 h-auto m-2.5" src="/images/dowload.png" alt="download" />
            </div>
         </section>   
        </>
    )
}

export default HomeDownload

