"use client";  

import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import { useLanguage } from "@/context/LanguageContext";

const MyFlags: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform rounded-full h-[40px] w-[40px] bg-green"
            size="sm"
            src="/images/flags.png"
            alt="flag"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Language Selection" variant="flat">
          <DropdownItem key="swedish" className="h-14 gap-2" onClick={() => handleLanguageChange("swedish")}>
            <p className="font-semibold">Swedish</p>
          </DropdownItem>
          <DropdownItem key="english" className="h-14 gap-2" onClick={() => handleLanguageChange("english")}>
            <p className="font-semibold">English</p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default MyFlags;
