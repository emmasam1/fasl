import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-10">
      <div className="w-full bg-[#34373C] flex flex-col justify-center items-center">
        <div className="w-4/5 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-20">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="w-4/5 border-t border-gray-600">
          <div className="m-auto bg-[url('assets/image/footer-bg.jpg')] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5">
              <h2 className="text-gray-400 font-thin mb-4">ABOUT</h2>
              <p className="text-gray-300 text-sm">
                Mauris accumsan eros eget libero posuere vulputate. Etiam elit
                elit, elementum sed varius at, vitae est. Sed nec felis
                pellentesque, lacinia dui sed, ultricies sapien. Pellentesque
                orci lectus, consectetur vel, rutrum eu ipsum.
              </p>
              <motion.button
                className="relative px-10 py-2 border-2 border-red-500 mt-4 overflow-hidden hover:text-white text-white text-sm"
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
                <span className="relative">READ MORE</span>
              </motion.button>
            </div>
            <div className="p-5">
              <h2 className="text-gray-400 font-thin mb-4">SERVICES</h2>
              <div>
                <Link to="" className="text-sm text-red-500 hover:text-white">
                  GENERAL BUILDER →
                </Link>
              </div>
              <div className="mt-2">
                <Link to="" className="text-sm text-red-500 hover:text-white">
                  HOUSE EXTENSIONS →
                </Link>
              </div>
              <div className="mt-2">
                <Link to="" className="text-sm text-red-500 hover:text-white">
                  REFURBISHMENT →
                </Link>
              </div>
              <div className="mt-2">
                <Link to="" className="text-sm text-red-500 hover:text-white">
                  ELECTRICITY →
                </Link>
              </div>
              <div className="mt-2">
                <Link to="" className="text-sm text-red-500 hover:text-white">
                  GENERAL BUILDER →
                </Link>
              </div>
              <div className="mt-2">
                <Link to="" className="text-sm text-red-500 hover:text-white">
                  KITCHENS →
                </Link>
              </div>
            </div>
            <div className="p-5">
              <h2 className="text-gray-400 font-thin mb-4">ADDRESS</h2>
              <p className="text-gray-300 text-sm">
                No D22 Abdulwajahuni Plaza by Ado U turn, Karu LGA Nasarawa
                State Nigeria,
              </p>
              <p className="text-gray-300 text-sm mt-3">
                Tel: 08082100835
                <br />
                Tel: 08092100835
              </p>
              <p className="text-gray-300 text-sm mt-3">
                Email: frankafrica9@gmail.com
                <br />
                Email: francisesale31@yahoo.co.uk
              </p>
            </div>
            <div className="p-5">
              <h2 className="text-gray-400 font-thin mb-4">CONTACT</h2>
              <form action="">
                <input
                  type="text"
                  name="text"
                  class="mb-4 px-3 py-2 border shadow-sm border-gray-500 placeholder-slate-400 focus:outline-none focus:border-red-700 block w-full sm:text-sm  bg-transparent text-gray-300"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="text"
                  class="mb-4 px-3 py-2 border shadow-sm border-gray-500 placeholder-slate-400 focus:outline-none focus:border-red-500 block w-full sm:text-sm  bg-transparent text-gray-300"
                  placeholder="Subject"
                />
                <textarea
                  class="mb-4 px-3 py-2 border shadow-sm border-gray-500 placeholder-slate-400 focus:outline-none focus:border-red-500 block w-full sm:text-sm  bg-transparent text-gray-300 resize-none"
                  placeholder="Message"
                />
                <motion.button
                  className="relative px-10 py-2 border-2 border-red-500 overflow-hidden hover:text-white text-white text-sm"
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
                  <span className="relative">SEND</span>
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="w-4/5 m-auto">
          <p className="text-center text-gray-500">
            {" "}
            &copy; {currentYear} Frank Africa Synergy Limited By - The Unit{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
