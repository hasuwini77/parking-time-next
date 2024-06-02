"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import matilda from "../../public/images/matilda.png";
import ContactButton from "../ContactButton";
import styles from './HomeKnow.module.css'

const HomeKnow: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
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
            <div className={styles.moreinfo}>
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