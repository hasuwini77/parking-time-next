import { useEffect, useState, useRef } from 'react';
import englishAvatar from "@/public/images/ukFlag.webp";
import swedishAvatar from "@/public/images/swFlag.png";
import Image, { StaticImageData } from 'next/image';
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { motion, Variants } from "framer-motion";

const languages = [
  {
    id: 1,
    shortName: "EN",
    longName: "english",
    avatar: englishAvatar,
  },
  {
    id: 2,
    shortName: "SV",
    longName: "swedish",
    avatar: swedishAvatar
  }
];

const Languages = () => {
  const { language, setLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [selectedLanguageId, setSelectedLanguageId] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(englishAvatar);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (pLanguage: string, pAvatar: StaticImageData, pId: number) => {
    setSelectedLanguage(pLanguage);
    setSelectedAvatar(pAvatar);
    setSelectedLanguageId(pId);
    setIsOpen(false);
    const usedLanguage = languages.find((item) => item.id === pId)?.longName || "";
    setLanguage(usedLanguage);
  };

  /* This is for close menu item when clicked any where that not in this component */
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  const menuVariants: Variants = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
  };

  return (
    <div ref={dropdownRef} className="relative text-darkblue flex justify-between items-center">
      <button onClick={toggleDropdown} className="flex items-center">
        <span className="w-[30px] h-[20px] text-[14px] font-bold ms-1">{selectedLanguage}</span>
        {isOpen ? <FaCaretUp className="ms-[3px]" /> : <FaCaretDown className="ms-[3px]" />}
      </button>
      <motion.div animate={isOpen ? "open" : "closed"} variants={menuVariants} className="absolute top-[24px] left-25 left-[-18px] bg-primary w-[100px] rounded-lg px-1 py-1 border-1">
        <motion.ul>
          {languages.map((item) => (
            <motion.li
              key={item.id}
              onClick={() => changeLanguage(item.shortName, item.avatar, item.id)}
              variants={itemVariants}
              className="px-1 py-[4px] flex items-center gap-1 hover:bg-white hover:text-darkblue rounded-lg cursor-pointer"
            >
              <Image src={item.avatar} alt={item.shortName} className="w-[17px] h-[17px]" />
              <span className="text-[14px] font-bold">{item.shortName}</span>
              <FaCheck className={selectedLanguageId === item.id ? "inline-block text-[10px] mb-[-3px]" : "hidden"} />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Languages;
