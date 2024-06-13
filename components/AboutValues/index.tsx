'use client';
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";
import Box from '@public/images/aboutbox.png'

const Values: React.FC = () => {
    const { language } = useLanguage();

    return (
        <>
        {language === "english" ? (                    
                    <span>
                        
                    </span>
                ) : (
                    <span> 
                        
                    </span>
                )}
        </>
    )
}

export default Values