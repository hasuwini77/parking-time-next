"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const AboutTeam = () => {
  const { language } = useLanguage();

  return (
    <div className="w-full py-32 md:py-1 px-4 md:px-20 flex flex-col justify-between items-center">
      <h1 className="font-mono text-4xl md:text-5xl mb-4 short:text-5xl">
        {" "}
        {language === "english" ? "Meet our team" : "Möt vårt team"}{" "}
      </h1>
      <p className="pb-3">
        {language === "english"
          ? "Each member brings a unique blend of expertise, passion and forward-thinking mindset."
          : "Varje medlem tar med sig en unik blandning av expertis, passion och framåtanda."}
      </p>
      <div className="flex flex-row">
        <Card isFooterBlurred radius="md" className="border-none">
          <Image
            alt="Woman listing to music"
            className="object-cover"
            height={350}
            src="https://nextui.org/images/hero-card.jpeg"
            width={350}
          />
          <CardFooter className="h-12 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Matilda Ohman</p>
            <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              CEO
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AboutTeam;
