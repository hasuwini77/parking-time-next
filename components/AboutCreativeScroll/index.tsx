"use client";
import { useLanguage } from "@/context/LanguageContext";
import ContactButton from "../ContactButton";

const AboutCreativeScroll: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className="aboutScroll py-4 h-[40vh] flex flex-col items-center justify-center w-full">
      <h3 className="text-bold text-3xl">
        {language === "english" ? "Wanna join us?" : "Vill du vara med?"}
      </h3>
      <p className="max-w-[40%] text-center p-2 text-xl">
        {" "}
        {language === "english"
          ? "We are always eager to welcome new members to our team at Parking Time. If you are interested in joining us, please fill out our open application form. We look forward to hearing from you!"
          : "Vi är alltid ivriga att välkomna nya medlemmar till vårt team på Parking Time. Om du är intresserad av att gå med oss, vänligen fyll i vårt öppna ansökningsformulär. Vi ser fram emot att höra från dig!"}
      </p>
      <p className="py-4 text-lg">
        {language === "english"
          ? "Fill in the form below"
          : "Fyll i formuläret nedan"}
      </p>
      <ContactButton
        linkHref="/contact"
        SWtext="Kontakta oss"
        ENtext="Contact us"
      />
    </div>
  );
};

export default AboutCreativeScroll;
