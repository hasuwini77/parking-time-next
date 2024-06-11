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
      <p className="pb-3 text-center">
        {language === "english"
          ? "Each member brings a unique blend of expertise, passion and forward-thinking mindset."
          : "Varje medlem tar med sig en unik blandning av expertis, passion och framåtanda."}
      </p>
      <div className="card-container flex flex-col gap-4 md:flex-row md:flex-wrap justify-center">
        <Card isFooterBlurred radius="md" className="border-none max-w-xs">
          <Image
            alt="Matilda Öhman"
            className="object-cover"
            height={350}
            src="/images/mathildaohman.jpeg"
            width={350}
          />
          <CardFooter className="flex flex-col items-start h-20 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-0 w-[calc(100% - 12px)] shadow-small ml-[-2px] z-10">
            <p className="text-md lg:text-sm text-white/80 md:text-xs p-[2px]">
              Matilda Öhman
            </p>
            <Link href="/contact">
              <Button
                className="text-xs md:text-sm lg:text-sm text-white bg-black/20 py-0 mb-[6px] mt-[0px] h-4"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                <span>CEO</span>
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card isFooterBlurred radius="md" className="border-none max-w-xs">
          <Image
            alt="Johan E. Bengtsson"
            className="object-cover"
            height={350}
            src="https://nextui.org/images/hero-card.jpeg"
            width={350}
          />
          <CardFooter className="flex flex-col items-start h-20 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-0 w-[calc(100% - 12px)] shadow-small ml-[-2px] z-10">
            <p className="text-md lg:text-sm text-white/80 md:text-xs p-[2px]">
              Johan E. Bengtsson
            </p>
            <Link href="/contact">
              <Button
                className="text-xs md:text-sm lg:text-sm text-white bg-black/20 py-0 mb-[6px] mt-[0px] h-4"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                <span>Chief Technical Officer</span>
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card isFooterBlurred radius="md" className="border-none max-w-xs">
          <Image
            alt="Ingemar Öhman"
            className="object-cover"
            height={350}
            src="https://nextui.org/images/hero-card.jpeg"
            width={350}
          />
          <CardFooter className="flex flex-col items-start h-20 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-0 w-[calc(100% - 12px)] shadow-small ml-[-2px] z-10">
            <p className="text-md lg:text-sm text-white/80 md:text-xs p-[2px]">
              Ingemar Öhman
            </p>
            <Link href="/contact">
              <Button
                className="text-xs md:text-sm lg:text-sm text-white bg-black/20 py-0 mb-[6px] mt-[0px] h-4"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                <span>Accountant</span>
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card isFooterBlurred radius="md" className="border-none max-w-xs">
          <Image
            alt="Fredrik Jodstam"
            className="object-cover"
            height={350}
            src="https://nextui.org/images/hero-card.jpeg"
            width={350}
          />
          <CardFooter className="flex flex-col items-start h-20 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-0 w-[calc(100% - 12px)] shadow-small ml-[-2px] z-10">
            <p className="text-md lg:text-sm text-white/80 md:text-xs p-[2px]">
              Fredrik Jodstam
            </p>
            <Link href="/contact">
              <Button
                className="text-xs md:text-sm lg:text-sm text-white bg-black/20 py-0 mb-[6px] mt-[0px] h-4"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                <span>Business Strategist</span>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AboutTeam;
