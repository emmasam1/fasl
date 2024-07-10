import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdConstruction, MdOutlineCleaningServices } from "react-icons/md";
import { FcAdvertising } from "react-icons/fc";
import { GiGardeningShears } from "react-icons/gi";
import { VscSymbolProperty } from "react-icons/vsc";

const Services = () => {
  return (
    <div className="w-full bg-[url('assets/image/bg_services.jpg')] bg-cover bg-no-repeat bg-center bg-fixed lg:p-28 sm:p-10 p-5">
      <h1 className="text-center font-bold text-3xl mb-8">SERVICES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {[
          { icon: <MdConstruction size={35} className="text-white" />, title: "Construction", description: "With our team of experts, we professionally transform our client's construction thoughts into realities" },
          { icon: <VscSymbolProperty size={35} className="text-white" />, title: "Property", description: "A desired home brings fulfillment hence we help our clients develop, sell, or acquire the homes of their dreams." },
          { icon: <MdOutlineCleaningServices size={35} className="text-white" />, title: "Cleaning", description: "A desired home brings fulfillment hence we help our clients develop, sell, or acquire the homes of their dreams." },
          { icon: <GiGardeningShears size={35} className="text-white" />, title: "Land clearing", description: "We provide preparation, planting, and maintenance of parks and gardens for our clients that ensure a healthy environment" },
          { icon: <FcAdvertising size={35} className="text-white" />, title: "Auctioning", description: "Auction sales are transparent, and fast, and help people get better value for their assets." },
        ].map((service, index) => (
          <div key={index} className="lg:text-center cursor-pointer">
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
                  {service.icon}
                </motion.div>
              </div>
              <h2 className="font-mono text-gray-500 text-2xl mb-3">
                {service.title}
              </h2>
              <p className="font-sans text-gray-500 font-thin overflow-hidden line-clamp-2">
                {service.description}
              </p>
              <motion.button
                className="relative px-4 py-2 border-2 border-red-500 mt-3 overflow-hidden hover:text-white"
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
                <span className="relative">More</span>
              </motion.button>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 sm:mb-10">
        <motion.div
          className="relative inline-block border-2 border-red-500 overflow-hidden"
          whileHover="hover"
        >
          <Link
            to="/services"
            className="relative px-7 py-3 text-sm" // Adjusted padding for better responsiveness
          >
            FULL LIST OF SERVICES
          </Link>
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-red-500"
            initial={{ height: 0 }}
            animate="rest"
            whileHover={{ height: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;