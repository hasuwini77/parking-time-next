import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

interface DownloadProps {
  linkHref: string;
  SWtext: string;
  ENtext: string;
}

const DownloadButton: React.FC<DownloadProps> = ({ linkHref, SWtext, ENtext }) => {
  const { language } = useLanguage();

  return (
    <motion.button
      className="rounded-3xl md:w-48 w-full px-5 py-2 md:py-2 bg-secondary text-white custom-hover-home-hero-download-button"
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

export default DownloadButton;












