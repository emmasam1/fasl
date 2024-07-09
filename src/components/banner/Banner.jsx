import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div className="w-full h-[550px] relative lg:-top-[4.5rem] sm:top-[20px] bg-cover bg-no-repeat bg-center bg-[url('assets/image/banner_2.jpg')]">
        <div className="absolute inset-0 overlay">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#454545] w-80 text-white relative top-36 left-[137px] p-8"
          >
            <h2 className="text-2xl font-bold">Frank Africa Synergy Limited</h2>
            <p className="text-gray-300">
              is an indigenous company incorporated with the Corporate Affairs
              Commission on the 20th of February 2023
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
