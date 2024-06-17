'use client'
import { useLanguage } from "@/context/LanguageContext"

const ContactHero: React.FC = () => {
    const { language } = useLanguage();
    return (
        <section className="hidden w-full min-h-[60vh] relative bg-cover bg-[50%_50%] bg-[url('/images/contactHero.png')] xl:flex overflow-hidden">
            <div className="w-full md:w-[44%] min-h-[60vh] lg:w-2/5 h-full bg-[rgba(0,0,0,0.2)] backdrop-blur-[2px] md:backdrop-blur-[10px] p-5 pl-24 flex flex-col justify-center items-start text-white">
                <span className="list-disc text-xl list-inside pl-0 ml-0">
                    {language === "english" ? (
                        "Contact"
                    ) : (
                        "Kontakt"
                    )} 
                </span>
                <span className="text-5xl font-[530] leading-tight pt-3">
                {language === "english" ? (
                        <span>
                            We would love to <br className="hidden xl:block"/>
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
    )
}

export default ContactHero