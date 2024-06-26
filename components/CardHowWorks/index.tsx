"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import * as Icons from "react-icons/fa";

interface HowCardsProps {
  title: string;
  text: string;
  number: string;
  icon: keyof typeof Icons;
}

const getIconComponent = (iconName: keyof typeof Icons): JSX.Element | null => {
  const IconComponent = Icons[iconName];
  return IconComponent ? (
    <IconComponent size={30} className="text-red" />
  ) : null;
};

const CardHowWorks: React.FC<HowCardsProps> = ({
  title,
  text,
  number,
  icon,
}) => {
  return (
    <Card className="max-w-[340px] h-64 mb-3 flex justify-between items-start pb-1">
      <CardHeader className="flex justify-start relative pb-1">
        <h4 className="text-3xl font-semibold text-default-200">
          {getIconComponent(icon)}
        </h4>
        <span className="text-7xl font-black absolute -top-1 -right-1 text-default-200">
          {number}
        </span>
      </CardHeader>
      <CardBody className="pb-1 pt-3">
        <h3 className="text-2xl min-h-[57px]">{title}</h3>
      </CardBody>
      <CardFooter className="text-small text-default-400 pb-2">
        <p className="min-h-fit">{text}</p>
      </CardFooter>
    </Card>
  );
};

export default CardHowWorks;
