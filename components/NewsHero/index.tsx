'use client'
import { useLanguage } from "@/context/LanguageContext"

const NewsHero: React.FC = () => {
    const { language } = useLanguage();
    return (
        <div className="w-full h-[50vh] relative bg-cover bg-[50%_50%] bg-[url('/images/newsHero.png')] flex justify-start items-start overflow-hidden">
            <div className="w-full md:w-2/5 h-full bg-[rgba(0,0,0,0.2)] backdrop-blur-[2px] md:backdrop-blur-[10px] p-5 flex flex-col justify-center items-start text-white">
                <span className="list-disc text-xl list-inside pl-0 ml-0">
                    <span className="text-red text-[27px]">&bull;&nbsp;</span>
                    {language === "english" ? (
                        "News"
                    ) : (
                        "Nyheter"
                    )} 
                </span>
                <span className="text-5xl font-[530] leading-tight pt-3">
                {language === "english" ? (
                        <span>
                            We are Tranforming <br/>
                            Parking Experiences
                        </span>
                    ) : (
                        <span>
                            Vi förändrar <br/>
                            parkerings<wbr/>&shy;upplevelser
                        </span>
                    )} 
                </span>
            </div>
        </div>
    )
}

export default NewsHero