'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ContactButton from '../ContactButton';
import Image from 'next/image';
import visionImg from '../../public/images/vision.png';

const AboutVision = () => {
    return (
        <div className="">
            <div>
                <h2>Our Vision</h2>
                <p>Parking Time Sweden is a tech startup aiming to revolutionize the parking experience for all parties involved – the parker, the parking attendant, the municipality, and the property owner. 
                    We currently offer a free digital parking disc within an app to complement the existing range of parking apps.</p>

                <h2>Our Story</h2>
                <p>Parking Time Sweden was founded in 2021 in Luleå. Today, we operate throughout Sweden with the ambition to expand globally in the coming years.</p>
            </div>
            <span className="w-full sm:max-w-[460px] text-center pt-3 md:text-left">
                        <ContactButton 
                        linkHref="/contact" 
                        SWtext="Kontakta oss" 
                        ENtext="Contact us"
                        />
                    </span>
            <div>
                <Image src={visionImg} alt="A picture of a parking" className="hidden"/>
            </div>
        </div>
    );
}

export default AboutVision