"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

const AboutTeam = () => {
  const { language } = useLanguage();

  return (
    <div className="w-full py-3 flex flex-col px-4 md:px-20 md:py-2 justify-between items-center">
      <h1 className="font-mono text-4xl md:text-5xl mb-4 short:text-5xl">
        {language === "english" ? "Meet our team" : "Möt vårt team"}
      </h1>
      <p className="pb-3">
        {language === "english"
          ? "Each member brings a unique blend of expertise, passion and forward-thinking mindset."
          : "Varje medlem tar med sig en unik blandning av expertis, passion och framåtanda."}
      </p>
      <div className="card-container flex flex-col gap-4 md:flex-row">
        <Card isFooterBlurred radius="md" className="border-none">
          <Image
            alt="Woman listening to music"
            className="object-cover"
            height={350}
            src="https://nextui.org/images/hero-card.jpeg"
            width={350}
          />
          <CardFooter className="h-12 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-sm md:text-base lg:text-lg text-white/80">
              Matilda Ohman
            </p>
            <Link href="/contact">
              <Button
                className="text-xs md:text-sm lg:text-base text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                CEO
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card isFooterBlurred radius="md" className="border-none">
          <Image
            alt="Woman listening to music"
            className="object-cover"
            height={350}
            src="https://nextui.org/images/hero-card.jpeg"
            width={350}
          />
          <CardFooter className="h-12 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-sm md:text-base lg:text-lg text-white/80">
              Matilda Ohman
            </p>
            <Link href="/contact">
              <Button
                className="text-xs md:text-sm lg:text-base text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                CEO
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card isFooterBlurred radius="md" className="border-none">
          <Image
            alt="Woman listening to music"
            className="object-cover"
            height={350}
            src="https://nextui.org/images/hero-card.jpeg"
            width={350}
          />
          <CardFooter className="h-12 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-sm md:text-base lg:text-lg text-white/80">
              Matilda Ohman
            </p>
            <Link href="/contact">
              <Button
                className="text-xs md:text-sm lg:text-base text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                CEO
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card isFooterBlurred radius="md" className="border-none">
          <Image
            alt="Woman listening to music"
            className="object-cover"
            height={350}
            src="https://nextui.org/images/hero-card.jpeg"
            width={350}
          />
          <CardFooter className="h-12 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-sm md:text-base lg:text-lg text-white/80">
              Matilda Ohman
            </p>
            <Link href="/contact">
              <Button
                className="text-xs md:text-sm lg:text-base text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                CEO
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AboutTeam;
