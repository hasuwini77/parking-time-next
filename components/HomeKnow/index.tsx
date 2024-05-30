"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import matilda from "../../public/images/matilda.png"
import Link from "next/link";
import styles from './HomeKnow.module.css'

const HomeKnow: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.leftContent}>
                    <Image src={matilda} alt="A image of Matilda CEO"/>
                    
                    {language === "english" ? (
                        <span>
                            Matilda Öhman, CEO <br/>
                        </span>
                    ) : (
                        <span>
                            Matilda Öhman, VD <br/>
                        </span>
                    )}
                        <span>Matilda@parkingtime.se</span>
                </div>
                <div>
                    {language === "english" ? (
                            <span>
                                Want to know more? <br/>
                            </span>
                        ) : (
                            <span>
                                Vill du veta mer? <br/>
                            </span>
                        )}

                    {language === "english" ? (
                            <span>
                                Contact us to find out more about our solution and how we can implement it in your municipality. <br/>
                            </span>
                        ) : (
                            <span>
                                Kontakta oss för att få veta mer om vår lösning och hur vi kan implementera det i din kommun.<br/>
                            </span>
                        )}

                </div>
            </div>
        </div>
    );
}

export default HomeKnow