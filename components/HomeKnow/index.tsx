"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import matilda from "../../public/images/matilda.png";
import ContactButton from "../ContactButton";
import styles from './HomeKnow.module.css'

const HomeKnow: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className="bg-primary flex flex-col items-center justify-center text text-white md:flex-row">
            <div className="mt-12 w-full max-w-80 m-2.5 flex flex-col justify-center items-center p-3 text-center md:flex-1 md:max-w-none md:pt-6 md:pb-12">
                <Image src={matilda} alt="A image of Matilda CEO"/>
                
                {language === "english" ? (
                    <span className={styles.profilename}>
                        Matilda Öhman, CEO <br/>
                    </span>
                ) : (
                    <span className={styles.profilename}>
                        Matilda Öhman, VD <br/>
                    </span>
                )}
                    <span>Matilda@parkingtime.se</span>
            </div>
            <div className="w-full max-w-80 m-2.5 flex flex-col justify-center items-center p-3 text-center mb-12 md:items-start md:text-left md:pt-3 md:flex-1 md:max-w-none md:pb-12">
                {language === "english" ? (
                        <span className={styles.title}>
                            Want to know more? <br/>
                        </span>
                    ) : (
                        <span  className={styles.title}>
                            Vill du veta mer? <br/>
                        </span>
                    )}

                {language === "english" ? (
                        <span className={styles.subTitle}>
                            Contact us to find out more about our solution and <br/> how we can implement it in your municipality. <br/>
                        </span>
                    ) : (
                        <span className={styles.subTitle}>
                            Kontakta oss för att få veta mer om vår lösning och <br/> hur vi kan implementera det i din kommun.
                        </span>
                    )}
                        <span className={styles.buttonContainer}>
                            <ContactButton 
                            linkHref="/contact" 
                            SWtext="Kontakta oss" 
                            ENtext="Contact us"
                        />
                        </span>
            </div>
        </div>
    );
}

export default HomeKnow