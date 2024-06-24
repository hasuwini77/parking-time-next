'use client';
import { useLanguage } from "@/context/LanguageContext";
import Image from 'next/image';
import faqHeroGirl from "@/public/images/faqHeroGirl.png"


const FaqHero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full h-[50vh] short:h-[60vh] relative bg-cover bg-[50%_50%] bg-[url('/images/faqHero.webp')] flex justify-start items-start overflow-hidden mb-[-40px]" >
        <div className="w-full sm:w-[45%] md:w-[40%] lg:w-[32%] h-full bg-[rgba(0,0,0,0.2)] backdrop-blur-[4px] md:backdrop-blur-[10px] p-5 flex flex-col justify-center items-start text-white z-20" >
            <p className="text-white text-base w-[200px] flex items-center mb-2">{language === "english" ? "FAQ" : "Vanliga frågor"}</p>
            <h2 className="text-white text-4xl w-[300px]">{language === "english" ? "No questions left unanswered" : "Inga frågor lämnas obesvarade"} </h2>
        </div>
        <Image src={faqHeroGirl} alt="faq hero girl" width={400} height={400} style={{ width: "auto", height: "auto" }} className="absolute bottom-0 right-2"/>
    </section>
  )
}

export default FaqHero