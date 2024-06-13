'use client';
import React from 'react';
import { useLanguage } from "@/context/LanguageContext"
import Image from 'next/image';
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
                <Image src={Box} alt="Box" />  
                    {language === "english" ? (                    
                    <span>
                        <p>Simplicity</p>
                        <p>We are striving to create simple and smooth experiences.</p>
                    </span>
                ) : (
                    <span> 
                        <p>Enkelhet</p>
                        <p>Vi strävar efter att skapa enkla och smidiga upplevelser.</p>
                    </span>
                )}
                </div>

                <div>
                    <Image src={Check} alt="check" />
                    {language === "english" ? (                    
                    <span>
                        <p>Innovation</p>
                        <p>Always trying to improve and making our app a leader in its field.</p>
                    </span>
                ) : (
                    <span> 
                        <p>Innovation</p>
                        <p>Alltid sträva efter att förbättra och göra vår app ledande inom sitt område.</p>
                    </span>
                )}    
                </div>

                <div>
                    <Image src="Light" alt="light" />
                    {language === "english" ? (                    
                    <span>
                        <p>User friendly</p>
                        <p>It's crucial that our service meets users' needs and enhances their parking experience.</p>
                    </span>
                ) : (
                    <span> 
                        <p>Användarvänlig</p>
                        <p>Det är avgörande att vår tjänst möter användarnas behov och förbättrar deras parkeringsupplevelse.</p>
                    </span>
                )}
                </div>

            </div>
        </section>
        </>
    )
}

export default Values