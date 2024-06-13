import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface SendEmailButtonProps {
  SWtext: string;
  ENtext: string;
} 

const SendEmailButton: React.FC<SendEmailButtonProps> = ({ SWtext, ENtext }) => {
  const { language } = useLanguage();

  return (
    <motion.button
      type="submit"
      className="rounded-3xl md:w-48 w-full px-3 py-2 md:py-2 bg-black text-white custom-hover-home-hero-download-button"
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
      {language === "english" ? ENtext : SWtext}
    </motion.button>
  );
};

export default SendEmailButton;
