import React, { useEffect, useState } from "react";
import {
  Switch,
  useSwitch,
  VisuallyHidden,
  SwitchProps,
} from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

const DarkModeSwitch = (props: SwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const bodyClassList = document.body.classList;
    if (isDarkMode) {
      bodyClassList.add("dark");
      bodyClassList.remove("light");
    } else {
      bodyClassList.add("light");
      bodyClassList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex flex-col gap-2">
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
              "rounded-lg bg-transparent text-white hover:bg-default-200 hover:text-black",
            ],
          })}
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  );
};

export default DarkModeSwitch;
