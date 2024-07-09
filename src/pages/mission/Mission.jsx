import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GoBriefcase } from "react-icons/go";
import { FaHandshake, FaRocket } from "react-icons/fa";

const Mission = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView1 && scrollPosition >= 200) {
      controls1.start("visible");
    }
  }, [controls1, inView1, scrollPosition]);

  useEffect(() => {
    if (inView2 && scrollPosition >= 200) {
      controls2.start("visible");
    }
  }, [controls2, inView2, scrollPosition]);

  useEffect(() => {
    if (inView3 && scrollPosition >= 200) {
      controls3.start("visible");
    }
  }, [controls3, inView3, scrollPosition]);

  const fadeInTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="m-auto w-11/12 md:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-8 pb-8 lg:pt-0 lg:pb-0 lg:relative lg:-top-28">
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={fadeInTop}
        transition={{ duration: 1 }}
        className="p-4 md:p-8 bg-white drop-shadow flex flex-col items-center text-center"
      >
        <FaRocket className="mb-2" size={50} />
        <h1 className="font-semibold text-sm md:text-base lg:text-lg">
          To continuously improve our products and services
        </h1>
      </motion.div>
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={fadeInBottom}
        transition={{ duration: 1 }}
        className="p-4 md:p-8 bg-white relative lg:-top-10 drop-shadow flex flex-col items-center text-center"
      >
        <GoBriefcase className="mb-2" size={50} />
        <h1 className="font-semibold text-sm md:text-base lg:text-lg">
          To become the number-one reference for Agricultural, Construction,
          Logistics, Real Estate, Manufacturing, Marketing, Janitorial, etc.
          products and services.
        </h1>
      </motion.div>
      <motion.div
        ref={ref3}
        initial="hidden"
        animate={controls3}
        variants={fadeInTop}
        transition={{ duration: 1 }}
        className="p-4 md:p-8 bg-white drop-shadow flex flex-col items-center text-center"
      >
        <FaHandshake className="mb-2" size={50} />
        <h1 className="font-semibold text-sm md:text-base lg:text-lg">
          To continuously impact our employees, suppliers, customers, the
          environment, and the communities we work positively while enhancing
          shareholders' value.
        </h1>
      </motion.div>
    </div>
  );
};

export default Mission;
