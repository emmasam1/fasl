import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GoBriefcase } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import Banner from "../../components/banner/Banner";

const Home = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);

  React.useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls3, inView3]);

  const fadeInTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Banner />
      <div className="m-auto w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:relative lg:-top-28">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={fadeInTop}
          transition={{ duration: 1 }}
          className="p-8 bg-white drop-shadow flex flex-col items-center"
        >
          <FaRocket className="mb-2" size={50} />
          <h1 className="font-semibold">
            To continuously improve our products and services
          </h1>
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={controls2}
          variants={fadeInBottom}
          transition={{ duration: 1 }}
          className="p-8 bg-white relative lg:h-60 lg:-top-10 drop-shadow flex flex-col items-center"
        >
          <GoBriefcase className="mb-2" size={50} />
          <h1 className="font-semibold">
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
          className="p-8 bg-white drop-shadow flex flex-col items-center"
        >
          <FaHandshake className="mb-2" size={50} />
          <h1 className="font-semibold">
            To continuously impact our employees, suppliers, customers, the
            environment, and the communities we work positively while enhancing
            shareholders' value.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
