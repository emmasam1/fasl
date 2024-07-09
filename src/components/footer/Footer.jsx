import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[550px] bg-[#34373C] flex flex-col justify-center items-center">
      <div className="w-4/5 border-t border-gray-600">
        <div className="h-52 m-auto bg-[url('assets/image/footer-bg.jpg')] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5">
                <h2 className="text-gray-400 font-thin">ABOUT</h2>
                <p></p>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
