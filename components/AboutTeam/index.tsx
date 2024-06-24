"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);
interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
}

const AboutTeam: React.FC = () => {
  const { language } = useLanguage();

  const teamMembers: TeamMember[] = [
    {
      name: "Matilda Öhman",
      role: "CEO",
      imgSrc: "/images/mathildaohman.webp",
    },
    {
      name: "Johan E. Bengtsson",
      role: "Chief Technical Officer",
      imgSrc: "/images/placeholderavatar1.png",
    },
    {
      name: "Ingemar Öhman",
      role: "Accountant",
      imgSrc: "/images/placeholderavatar1.png",
    },
    {
      name: "Fredrik Jodstam",
      role: "Business Strategist",
      imgSrc: "/images/placeholderavatar1.png",
    },
  ];

  const renderCard = (member: TeamMember) => (
    <Card
      key={member.name}
      isFooterBlurred
      radius="md"
      className="border-none max-w-xs mx-auto"
    >
      <Image
        alt={member.name}
        className="object-cover"
        height={350}
        src={member.imgSrc}
        width={350}
      />
      <CardFooter className="flex flex-col items-start h-20 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute bottom-0 right-0 w-[calc(100% - 12px)] shadow-small ml-[-2px] z-10">
        <p className="text-md lg:text-sm text-white/80 md:text-xs p-[2px]">
          {member.name}
        </p>
        <Link href="/contact">
          <Button
            className="text-xs md:text-sm lg:text-sm text-white bg-black/20 py-0 mb-[6px] mt-[0px] h-4"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            <span>{member.role}</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );

  return (
    <div className="w-full py-8 flex flex-col px-4 md:px-20 justify-between items-center">
      <h1 className="font-mono text-heading2 mb-4">
        {language === "english" ? "Meet our team" : "Möt vårt team"}
      </h1>
      <p className="pb-3 text-center">
        {language === "english"
          ? "Each member brings a unique blend of expertise, passion and forward-thinking mindset."
          : "Varje medlem tar med sig en unik blandning av expertis, passion och framåtanda."}
      </p>

      {/* Swiper for mobile view */}
      <div className="block md:hidden w-full py-3 relative">
        <Swiper
          pagination={{ clickable: true }}
          className="mySwiper"
          style={{ paddingBottom: "50px" }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>{renderCard(member)}</SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination absolute bottom-[10px] left-0 right-0 flex justify-center"></div>
      </div>

      {/* Original layout for larger screens */}
      <div className="hidden md:flex card-container flex-col gap-4 md:flex-row md:flex-wrap justify-center">
        {teamMembers.map((member, index) => renderCard(member))}
      </div>
    </div>
  );
};

export default AboutTeam;
