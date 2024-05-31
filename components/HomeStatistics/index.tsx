"use client";
import { FaDownload, FaParking, FaMap } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import CountUp from "react-countup";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";

const HomeStatistics: React.FC = () => {
  const { language } = useLanguage();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInWiew1 = useInView(ref1, { once: true });
  const isInWiew2 = useInView(ref2, { once: true });
  const isInWiew3 = useInView(ref3, { once: true });

  return (
    <section
      ref={ref1}
      className="flex flex-col sm:flex-row justify-around items-center min-h[193px] w-[90%] mx-auto px-1 py-14 bg-white rounded-lg my-8"
    >
      <motion.div
        className="flex justify-between sm:ms-4 items-center max-h-10 mb-8 sm:mb-0"
        style={{
          transform: isInWiew1 ? "none" : "translateY(-300px)",
          opacity: isInWiew1 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className="text-4xl me-3 text-[#F85252]">
          <FaDownload />
        </span>
        <div className="w-[160px] text-start">
          <p className="text-3xl mb-2 font-bold">
            <CountUp end={5340} separator="" duration={4} />+
          </p>
          <p className="text-xl">{language === "english" ? "Downloads" : "Nedladdningar"} </p>
        </div>
      </motion.div>
      <motion.div
        className="flex justify-between items-center max-h-10 mb-8 sm:mb-0"
        style={{
          transform: isInWiew1 ? "none" : "translateY(-300px)",
          opacity: isInWiew1 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className="text-4xl me-3 text-[#F85252]">
          <FaParking />
        </span>
        <div className="w-[160px] text-start">
          <p className="text-3xl mb-2 font-bold">
            <CountUp end={4321} separator="" duration={4} />+
          </p>
          <p className="text-xl">
            {language === "english" ? "Parking sessions" : "Parkeringstillfällen"}
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex justify-between items-center max-h-10 "
        style={{
          transform: isInWiew1 ? "none" : "translateY(-300px)",
          opacity: isInWiew1 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className="text-4xl me-3 text-[#F85252]">
          <FaMap />
        </span>
        <div className="w-[160px] text-start">
          <p className="text-3xl mb-2 font-bold">
            <CountUp end={30} separator="" duration={7} />+
          </p>
          <p className="text-xl">{language === "english" ? "Parking zones" : "Parkeringszoner"}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeStatistics;
