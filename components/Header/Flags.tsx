"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { useLanguage } from "@/context/LanguageContext";
import ukflag from "@/public/images/flags-uk.png";
import sweflag from "@/public/images/flags-swe.png";
import Image from "next/image";

const MyFlags: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Image
            className="transition-transform rounded-full h-[40px] w-[40px] bg-green border"
            src={abc}
            alt="flag"
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Language Selection"
          variant="flat"
          className="w-max-[100px] p-2"
        >
          <DropdownItem
            key="swedish"
            className="h-[32px] md:h-[40px] gap-2"
            onClick={() => handleLanguageChange("swedish")}
            textValue="Swedish"
          >
            <p className="font-semibold">Swedish</p>
          </DropdownItem>
          <DropdownItem
            key="english"
            className="h-[32px] md:h-[40px] gap-2"
            onClick={() => handleLanguageChange("english")}
            textValue="English"
          >
            <p className="font-semibold">English</p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default MyFlags;
