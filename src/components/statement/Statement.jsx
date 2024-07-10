import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Statement = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const textItems = [
    {
      title: "Vision Statement",
      text: "To raise the quality and standards of products and services in Africa and beyond through multidisciplinary professional engagement and practices",
    },
    {
      title: "Our Commitment",
      text: "In line with the organization’s vision and mission, Frank Africa Synergy Limited (FASL) is committed to building a world-class multidisciplinary business that fosters commitment and dedication with employees, and demonstrates honesty in its interactions",
    },
  ];

  const sliderItems = [
    { id: 1, title: 'Industrial Cleaning and Janitorial Services', content: "A healthy work site, office, factory, hospital, and home is that which is clean. Hence we provide high-quality industrial cleaning and janitorial services that increase the comfort of our clients at all times.", image: 'https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg' },
    { id: 2, title: 'Crop farm development and management', content: "Cropping has been the cradle of human sustenance from the time of Adam and Eve till date.The growing population of the world calls for more attention and innovations in improving food production.", image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, title: 'Poultry farm development & Management', content: "We have a very formidable team of poultry experts who make our construction, training, and management very unique which gives our client more confidence in the business.", image: 'https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, title: 'Waste Control & Management', content: "A healthy environment is that which is free of waste therefore we help our clients control and manage waste to ensure a home and office healthy environment.", image: 'https://images.pexels.com/photos/10058479/pexels-photo-10058479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
  };

  return (
    <div>
      <div className="bg-[#34373C] relative p-10 sm:p-20 lg:px-64 h-80 flex items-center justify-center">
        <AnimatePresence>
          {textItems.map((item, index) =>
            index === activeIndex ? (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1 }}
                className="absolute text-center max-w-2xl p-4"
              >
                <h1 className="text-gray-400 text-3xl font-mono mb-5 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-red-500 after:mt-2 after:mx-auto italic">
                  {item.title}
                </h1>
                <p className="italic font-mono text-[1.2rem] text-white">
                  {item.text}
                </p>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
      <h1 className="text-center ext-gray-400 text-3xl font-mono mb-5 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-red-500 after:mt-2 after:mx-auto italic mt-10">Project Gallery</h1>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button onClick={handlePrev} className="bg-gray-800 text-white p-2 rounded-full">
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button onClick={handleNext} className="bg-gray-800 text-white p-2 rounded-full">
            <FaArrowRight />
          </button>
        </div>
        <div ref={sliderRef} className="flex w-full">
          
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * 100 + '%' }}
            transition={{ duration: 0.5 }}
            drag="x"
            onDragEnd={handleDragEnd}
          >
            {sliderItems.map((item) => (
              <div key={item.id} className="w-full min-w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center p-4">
                <div className="bg-gray-300 rounded-lg overflow-hidden shadow-lg col-span-1">
                  <img
                    src={item.image}
                    alt={`Slide ${item.id}`}
                    className="w-full h-auto md:h-72 object-cover"
                  />
                </div>
                <div className="h-auto md:h-72 flex flex-col justify-center bg-gray-100 px-4 md:px-10 col-span-2">
                  <h1 className="text-left font-semibold text-2xl">{item.title}</h1>
                  <p className="text-left italic">{item.content}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Statement;
