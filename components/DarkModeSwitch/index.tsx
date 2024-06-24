"use client";
import React, { useContext } from "react";
import {
  Switch,
  useSwitch,
  VisuallyHidden,
  SwitchProps,
} from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeSwitch = (props: SwitchProps) => {
  const { Component, slots, getBaseProps, getInputProps, getWrapperProps } =
    useSwitch(props);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-col gap-2 betweenS:hidden">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} onChange={toggleDarkMode} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-5 h-5",
              "flex items-center justify-center",
              "bg-transparent",
            ],
          })}
        >
          {theme === "dark" ? (
            <SunIcon className="text-white" />
          ) : (
            <MoonIcon className="text-black" />
          )}
        </div>
      </Component>
    </div>
  );
};

export default DarkModeSwitch;
