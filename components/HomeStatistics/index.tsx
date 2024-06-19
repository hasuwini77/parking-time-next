"use client";
import { FaDownload, FaParking, FaMap } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import CountUp from "react-countup";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const HomeStatistics: React.FC = () => {
  const { language } = useLanguage();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const [startCount1, setStartCount1] = useState(false);
  const [startCount2, setStartCount2] = useState(false);
  const [startCount3, setStartCount3] = useState(false);

  useEffect(() => {
    if (isInView1) setStartCount1(true);
  }, [isInView1]);

  useEffect(() => {
    if (isInView2) setStartCount2(true);
  }, [isInView2]);

  useEffect(() => {
    if (isInView3) setStartCount3(true);
  }, [isInView3]);

  return (
    <section
      ref={ref1}
      className="flex flex-col md:flex-row justify-around items-center min-h[193px] w-[90%] mx-auto px-1 py-14 bg-white rounded-lg my-8"
    >
      <motion.div
        className="flex justify-between md:ms-4 items-center max-h-10 mb-8 md:mb-0"
        style={{
          transform: isInView1 ? "none" : "translateY(-300px)",
          opacity: isInView1 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className="text-4xl me-3 text-[#F85252]">
          <FaDownload />
        </span>
        <div className="w-[160px] text-start">
          <p className="text-3xl mb-2 font-bold">
            <CountUp start={startCount1 ? 0 : undefined} end={5340} separator="" duration={4} delay={0.3} />+
          </p>
          <p className="text-xl">{language === "english" ? "Downloads" : "Nedladdningar"} </p>
        </div>
      </motion.div>
      <motion.div
        ref={ref2}
        className="flex justify-between items-center max-h-10 mb-8 md:mb-0"
        style={{
          transform: isInView2 ? "none" : "translateY(-300px)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className="text-4xl me-3 text-[#F85252]">
          <FaParking />
        </span>
        <div className="w-[160px] text-start">
          <p className="text-3xl mb-2 font-bold">
            <CountUp start={startCount2 ? 0 : undefined} end={4321} separator="" duration={4} delay={0.3} />+
          </p>
          <p className="text-xl">
            {language === "english" ? "Parking sessions" : "Parkeringstillfällen"}
          </p>
        </div>
      </motion.div>
      <motion.div
        ref={ref3}
        className="flex justify-between items-center max-h-10"
        style={{
          transform: isInView3 ? "none" : "translateY(-300px)",
          opacity: isInView3 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className="text-4xl me-3 text-[#F85252]">
          <FaMap />
        </span>
        <div className="w-[160px] text-start">
          <p className="text-3xl mb-2 font-bold">
            <CountUp start={startCount3 ? 0 : undefined} end={30} separator="" duration={7} delay={0.3} />+
          </p>
          <p className="text-xl">{language === "english" ? "Parking zones" : "Parkeringszoner"}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeStatistics;