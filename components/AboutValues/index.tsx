'use client';
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";
import Image from 'next/image';
import Box from '@/public/images/aboutbox.png'
import Check from '@/public/images/abouthuman.png'
import Light from '@/public/images/aboutlight.png'

const Values: React.FC = () => {
    const { language } = useLanguage();

    return (
        <>
        <section className="flex justify-center items-center w-full flex-col md:flex-col md:w-full md:items-center py-20"> 
                {language === "english" ? ( 
                <span className="flex justify-center text-center flex-col">
                    <h3 className="text-heading2 text-bold m-2.5">Our Values</h3>
                    <p className="text-heading4 m-2.5">What we believe in.</p>
                </span>
                ) : (
                <span> 
                    <h3 className="text-heading2 text-bold m-2.5">Våra Värderinga</h3>
                    <p className="text-heading4 m-2.5">De saker vi tror på</p>
                </span>
                )}    
            <div className="flex w-2/4 justify-center items-center flex-col md:flex-row md:w-4/5 md:justify-center"> 

                    <div className="justify-between items-center md:justify-between md:items-center md:flex md:flex-col md:m-2.5 min-h-[320px]">
                    <Image className="md:w-4/5" src={Box} alt="Box" rel="noreferrer"/> 
                    {language === "english" ? (                    
                    <span className="text-center flex flex-col items-center justify-start  w-full  flex flex-col md:flex-col md:m-2.5 h-[140px] ">                        
                        <b className="text-xl">Simplicity</b>
                        <p className="md:max-w-[200px]">We are striving to create simple and smooth experiences.</p>
                    </span>
                ) : (
                    <span className="text-center flex flex-col items-center justify-start  w-full  flex flex-col md:flex-col md:m-2.5 h-[140px] "> 
                        <b className="text-xl">Enkelhet</b>
                        <p className="md:max-w-[200px]">Vi strävar efter att skapa enkla och smidiga upplevelser.</p>
                    </span>
                )}                
                    </div> 
                    <div className="md:justify-between md:items-center md:flex md:flex-col md:m-2.5 min-h-[320px]">
                    <Image className="md:w-4/5" src={Light} alt="light" rel="noreferrer"/>
                    {language === "english" ? (                    
                    <span className="text-center flex flex-col items-center justify-start w-full  flex flex-col md:flex-col md:m-2.5 h-[140px] ">                        
                        <b className="text-xl">Innovation</b>
                        <p className="md:max-w-[200px]">Always trying to improve and making our app a leader in its field.</p>
                    </span>
                ) : (
                    <span className="text-center flex flex-col items-center justify-start  w-full  flex flex-col md:flex-col md:m-2.5 h-[140px] "> 
                        <b className="text-xl">Innovation</b>
                        <p className="md:max-w-[200px]">Alltid sträva efter att förbättra och göra vår app ledande inom sitt område.</p>
                    </span>
                )}                    
                    </div>
                    <div className="md:justify-between md:items-center md:flex md:flex-col md:m-2.5 min-h-[320px]">
                    <Image className="md:w-4/5" src={Check} alt="check" rel="noreferrer"/>
                    {language === "english" ? (                    
                    <span className="text-center flex flex-col items-center justify-start  w-full  flex flex-col md:flex-col md:m-2.5 h-[140px] ">                        
                        <b className="text-xl">User friendly</b>
                        <p className="md:max-w-[200px]">It's crucial that our service meets users needs and enhances their parking experience.</p>
                    </span>
                ) : (
                    <span className="text-center flex flex-col items-center justify-start w-full  flex flex-col md:flex-col h-[140px] "> 
                        <b className="text-xl">Användarvänlig</b>
                        <p className="md:max-w-[200px]">Det är avgörande att vår tjänst möter användarnas behov och förbättrar deras parkeringsupplevelse.</p>
                    </span>
                )}
                </div>
                </div>
        </section>
        </>
    )
}

export default Values