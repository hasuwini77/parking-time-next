"use client";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const ContactHero: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section className="w-full min-h-[50vh] relative hidden xl:flex overflow-hidden">
      <Image
        src="/images/contacthero2.webp"
        alt="Contact Hero"
        fill={true}
        style={{ objectFit: "cover" }}
        quality={75}
        priority
        className="z-0"
      />
      <div className="w-full md:w-2/5 min-h-[50vh] bg-[rgba(0,0,0,0.2)] backdrop-blur-[10px] md:backdrop-blur-[10px] p-5 pl-28 flex flex-col justify-center items-start text-white">
        <span className="list-disc text-xl list-inside pl-0 ml-0">
          {language === "english" ? "Contact" : "Kontakt"}
        </span>
        <span className="text-5xl font-[530] leading-tight pt-3">
          {language === "english" ? (
            <span>
              We would love to <br className="hidden xl:block" />
              hear from you!
            </span>
          ) : (
            <span>
              Vi ser fram emot att <br />
              höra från dig!
            </span>
          )}
        </span>
      </div>
    </section>
  );
};

export default ContactHero;
