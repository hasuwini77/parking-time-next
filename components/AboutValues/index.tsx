"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Box from "@/public/images/aboutbox.png";
import Check from "@/public/images/abouthuman.png";
import Light from "@/public/images/aboutlight.png";

const Values: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="flex flex-col items-center w-full pt-4 pb-4">
      {language === "english" ? (
        <div className="text-center flex flex-col mt-6">
          <h3 className="text-heading2 font-bold m-2.5">Our Values</h3>
          <p className="text-heading4 m-2.5">What we believe in.</p>
        </div>
      ) : (
        <div className="text-center flex flex-col mt-6">
          <h3 className="text-heading2 font-bold m-2.5">Våra Värderingar</h3>
          <p className="text-heading4 m-2.5">De saker vi tror på</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row w-full md:w-4/5 justify-center items-stretch">
        <div className="flex flex-col justify-center items-center m-2.5 w-full md:w-1/3">
          <Image className="w-4/5 md:w-[80%]" src={Box} alt="Box" />
          {language === "english" ? (
            <div className="text-center flex flex-col justify-center items-center mt-2">
              <p className="text-bold text-xl">Simplicity</p>
              <p className="md:max-w-[200px] mt-2">
                We are striving to create simple and smooth experiences.
              </p>
            </div>
          ) : (
            <div className="text-center flex flex-col justify-center items-center mt-2">
              <p className="text-bold text-xl">Enkelhet</p>
              <p className="md:max-w-[200px] mt-2">
                Vi strävar efter att skapa enkla och smidiga upplevelser.
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center items-center m-2.5 w-full md:w-1/3">
          <Image className="w-4/5 md:w-[80%]" src={Light} alt="Light" />
          {language === "english" ? (
            <div className="text-center flex flex-col justify-center items-center mt-2">
              <p className="text-bold text-xl">Innovation</p>
              <p className="md:max-w-[200px] mt-2">
                Always trying to improve and making our app a leader in its
                field.
              </p>
            </div>
          ) : (
            <div className="text-center flex flex-col justify-center items-center mt-2">
              <p className="text-bold text-xl">Innovation</p>
              <p className="md:max-w-[200px] mt-2">
                Alltid sträva efter att förbättra och göra vår app ledande inom
                sitt område.
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center items-center m-2.5 w-full md:w-1/3">
          <Image className="w-4/5 md:w-[80%]" src={Check} alt="Check" />
          {language === "english" ? (
            <div className="text-center flex flex-col justify-center items-center mt-2">
              <p className="text-bold text-xl">User friendly</p>
              <p className="md:max-w-[200px] mt-2">
                It&#39;s crucial that our service meets users&#39; needs and
                enhances their parking experience.
              </p>
            </div>
          ) : (
            <div className="text-center flex flex-col justify-center items-center mt-2">
              <p className="text-bold text-xl">Användarvänlig</p>
              <p className="md:max-w-[200px] mt-2">
                Det är avgörande att vår tjänst möter användarnas behov och
                förbättrar deras parkeringsupplevelse.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Values;
