"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useLanguage } from "@/context/LanguageContext";
import ukflag from "@/public/images/flags-uk.png";
import sweflag from "@/public/images/flags-swe.png";
import Image from "next/image";

const MyFlags: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [clicked, setClicked] = useState(false);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <motion.div
            whileTap={{ scale: 1.1 }}
            animate={clicked ? { scale: 1.1 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <Image
              className="transition-transform rounded-full h-[40px] w-[40px] bg-green p-[2px] shadow-md"
              src={language === "english" ? ukflag : sweflag}
              alt="flag"
            />
          </motion.div>
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
