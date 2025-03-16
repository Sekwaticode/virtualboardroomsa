"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import logo from "@/assets/images/vbsalogo.jpg";

const timelineData = [
  {
    title: "Founder’s Vision",
    text: "The Corporate Strategy enthusiast, Mmalethabo Mahlangu, started The Virtual Boardroom SA to solve organizational and professional challenges. With expertise in budgeting and costing, she designed a Personal Finance Budget Pack that has helped individuals restructure their finances and achieve financial stability.",
    position: "left",
  },
  {
    title: "Core Focus & Business Expansion",
    text: "The Virtual Boardroom SA established its core function, focusing on strategic solutions. Over time, its portfolio expanded to include virtual assistant services, business solutions, management consultancy, and youth development.",
    position: "right",
  },
  {
    title: "Service Availability",
    text: "The Virtual Boardroom SA offers its services nationwide, both virtually and semi in-contact, ensuring accessibility to businesses and professionals.",
    position: "left",
  },
  {
    title: "Cost-Effective Solutions",
    text: "By leveraging virtual services, businesses can optimize operations while reducing human capital costs, making professional solutions more affordable and efficient.",
    position: "right",
  },
];


const History = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0 text-center">
        Company History Overview
      </h1>
  
      <div ref={containerRef} className="relative max-w-4xl w-full px-4 mx-auto">
        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-black -translate-x-1/2"></div>
  
        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: item.position === "left" ? -200 : 200 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: index * 0.3, ease: "easeOut" }}
            className={`relative flex ${item.position === "left" ? "justify-start" : "justify-end"} my-6`}
          >
            {/* Timeline Box */}
            <div className="relative w-1/2 bg-black p-6 rounded-lg shadow-lg">
              <h2 className="text-xl text-white font-semibold">{item.title}</h2>
              <small className="block text-stone-200 mb-2">{item.year}</small>
              <p className="text-stone-200">{item.text}</p>
  
              {/* Arrow */}
              <div
                className={`absolute top-6 ${item.position === "left"
                  ? "right-[-15px] border-l-black"
                  : "left-[-15px] border-r-black"
                } border-t-transparent border-b-transparent border-solid border-[15px]`}
              ></div>
            </div>
  
            {/* Timeline Dot */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black w-10 h-10 rounded-full flex items-center justify-center shadow-md">
              <Image src={logo} alt="Company Logo" className="w-8 h-8 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
  
};

export default History;
