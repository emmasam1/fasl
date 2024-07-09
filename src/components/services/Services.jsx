import React from "react";
import { motion } from "framer-motion";
import { MdConstruction, MdOutlineCleaningServices } from "react-icons/md";
import { VscSymbolProperty } from "react-icons/vsc";

const Services = () => {
  return (
    <div className="w-full h-[550px] bg-[url('assets/image/bg_services.jpg')] bg-cover bg-no-repeat bg-center bg-fixed lg:p-28">
      <h1 className="text-center font-bold text-3xl mb-8">SERVICES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <div className="lg:text-center cursor-pointer">
          <motion.div
            className="lg:text-center"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <div className="bg-red-500 h-20 w-20 rounded-full mb-3 m-auto flex justify-center items-center">
              <motion.div
                className="flex justify-center items-center"
                variants={{
                  rest: { rotate: 0 },
                  hover: { rotate: 360 },
                }}
                transition={{ duration: 2, ease: "linear" }}
              >
                <MdConstruction size={35} className="text-white" />
              </motion.div>
            </div>
            <h2 className="font-mono text-gray-500 text-2xl mb-3">
              Construction
            </h2>
            <p className="font-sans text-gray-500 font-thin">
              With our team of experts, we professionally transform our client's
              construction thoughts into realities
            </p>
            <motion.button
              className="relative px-5 border-2 border-red-500 mt-3 overflow-hidden hover:text-white"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className="absolute inset-0 bg-red-500"
                variants={{
                  rest: { x: "100%" },
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 font-bold">More</span>
            </motion.button>
          </motion.div>
        </div>
        <div className="lg:text-center cursor-pointer">
          <motion.div
            className="lg:text-center"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <div className="bg-red-500 h-20 w-20 rounded-full mb-3 m-auto flex justify-center items-center">
              <motion.div
                className="flex justify-center items-center"
                variants={{
                  rest: { rotate: 0 },
                  hover: { rotate: 360 },
                }}
                transition={{ duration: 2, ease: "linear" }}
              >
                <VscSymbolProperty size={35} className="text-white" />
              </motion.div>
            </div>
            <h2 className="font-mono text-gray-500 text-2xl mb-3">
            Property
            </h2>
            <p className="font-sans text-gray-500 font-thin">
            A desired home brings fulfillment hence we help our clients develop, sell, or acquire the homes of their dreams.
            </p>
            <motion.button
              className="relative px-5 border-2 border-red-500 mt-3 overflow-hidden hover:text-white"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className="absolute inset-0 bg-red-500"
                variants={{
                  rest: { x: "100%" },
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 font-bold">More</span>
            </motion.button>
          </motion.div>
        </div>
        <div className="lg:text-center cursor-pointer">
          <motion.div
            className="lg:text-center"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <div className="bg-red-500 h-20 w-20 rounded-full mb-3 m-auto flex justify-center items-center">
              <motion.div
                className="flex justify-center items-center"
                variants={{
                  rest: { rotate: 0 },
                  hover: { rotate: 360 },
                }}
                transition={{ duration: 2, ease: "linear" }}
              >
                <MdOutlineCleaningServices size={35} className="text-white" />
              </motion.div>
            </div>
            <h2 className="font-mono text-gray-500 text-2xl mb-3">
            Cleaning
            </h2>
            <p className="font-sans text-gray-500 font-thin">
            A desired home brings fulfillment hence we help our clients develop, sell, or acquire the homes of their dreams.
            </p>
            <motion.button
              className="relative px-5 border-2 border-red-500 mt-3 overflow-hidden hover:text-white"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className="absolute inset-0 bg-red-500"
                variants={{
                  rest: { x: "100%" },
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 font-bold">More</span>
            </motion.button>
          </motion.div>
        </div>
      
      </div>
    </div>
  );
};

export default Services;
