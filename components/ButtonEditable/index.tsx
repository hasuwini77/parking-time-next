import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

interface ButtonEditable {
  linkHref: string;
  SWtext: string;
  ENtext: string;
  textColor: string;
  bgColor: string;
  hoverEffect: string;
}

const ButtonEditable: React.FC<ButtonEditable> = ({
  linkHref,
  SWtext,
  ENtext,
  textColor,
  bgColor,
  hoverEffect,
}) => {
  const { language } = useLanguage();

  return (
    <motion.button
      className={`rounded-[2rem] md:w-48 w-full px-5 py-2 md:py-2 ${textColor} ${bgColor} ${hoverEffect} mb-2 md:mb-0 md:me-3 ease-in-out box-hover-shadow`}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { type: "spring", delay: 0.3, duration: 1.3 },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {language === "english" ? (
        <Link href={linkHref}>{ENtext}</Link>
      ) : (
        <Link href={linkHref}>{SWtext}</Link>
      )}
    </motion.button>
  );
};

export default ButtonEditable;
