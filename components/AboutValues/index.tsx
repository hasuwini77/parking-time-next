'use client';
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";
import Box from '@public/images/aboutBox.png'
import Check from '@public/images/aboutHuman.png'
import Light from '@public/images/aboutLight.png'

const Values: React.FC = () => {
    const { language } = useLanguage();

    return (
        <>
        <section>
            <div>
            {language === "english" ? (                    
                <span>
                    <h1>Our Values</h1>
                    <p>The things we believe in.</p>
                </span>
                ) : (
                <span> 
                    <h1>Våra Värderinga</h1>
                    <p>De saker vi tror på</p>
                </span>
                )}
    
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    {language === "english" ? (                    
                    <span>
                        <p></p>
                        <p></p>
                    </span>
                ) : (
                    <span> 
                        <p></p>
                        <p></p>
                    </span>
                )}
                </div>

                <div>
                    <img src="" alt="" />
                    {language === "english" ? (                    
                    <span>
                        <p></p>
                        <p></p>
                    </span>
                ) : (
                    <span> 
                        <p></p>
                        <p></p>
                    </span>
                )}    
                </div>

                <div>
                    <img src="" alt="" />
                    {language === "english" ? (                    
                    <span>
                        <p></p>
                        <p></p>
                    </span>
                ) : (
                    <span> 
                        <p></p>
                        <p></p>
                    </span>
                )}
                </div>

            </div>
        </section>
        </>
    )
}

export default Values