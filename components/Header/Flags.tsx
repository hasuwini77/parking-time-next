"use client";

import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const MyFlags: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (selectedKey: string) => {
    setLanguage(selectedKey);
  };

  return (
    <div className="max-w-xs bg-primary">
      <div className="h-[60px] flex items-center justify-center w-full">
        <Select
          label=""
          aria-label="Select Language"
          placeholder=""
          selectedKeys={new Set([language])}
          onSelectionChange={(selectedKeys) => {
            const selectedKey = Array.from(selectedKeys).join("");
            handleLanguageChange(selectedKey);
          }}
          className="w-32 h-full"
          size="sm"
          style={{
            backgroundColor: "var(--bg-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <SelectItem
            key="swedish"
            textValue="SE"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              height: "100%",
            }}
          >
            <div className="flex items-center">
              <Image
                src="https://flagcdn.com/se.svg"
                alt="Swedish Flag"
                width={20}
                height={20}
                style={{ width: "auto", height: "auto" }}
              />
              <span className="ml-2">SE</span>
            </div>
          </SelectItem>
          <SelectItem
            key="english"
            textValue="EN"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              height: "100%",
            }}
          >
            <div className="flex items-center">
              <Image
                src="https://flagcdn.com/gb.svg"
                alt="UK Flag"
                width={20}
                height={20}
                style={{ width: "auto", height: "auto" }}
              />
              <span className="ml-2">EN</span>
            </div>
          </SelectItem>
        </Select>
      </div>
    </div>
  );
};

export default MyFlags;
