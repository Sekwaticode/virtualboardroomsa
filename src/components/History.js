"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import logo from "@/assets/images/vbsalogo.jpg";

const timelineData = [
  {
    year: "2018",
    title: "Founder’s Vision",
    text: "The Corporate Strategy enthusiast, Mmalethabo Mahlangu, started The Virtual Boardroom SA in the quest to solve organisational and professional individuals’ problems.",
    position: "left",
  },
  {
    year: "2019",
    title: "Expertise in Finance",
    text: "With her extensive experience in budgeting and costing, she designed a Personal Finance Budget Pack that has helped individuals restructure their finances and provide a roadmap to reach financial stability.",
    position: "right",
  },
  {
    year: "2020",
    title: "Core Focus",
    text: "That became the core function of The Virtual Boardroom SA.",
    position: "left",
  },
  {
    year: "2021",
    title: "Business Expansion",
    text: "She has since expanded the portfolio to virtual assistant services, business solutions, management consultancy, and youth development.",
    position: "right",
  },
  {
    year: "2021",
    title: "Service Availability",
    text: "The services of The Virtual Boardroom SA are available nationwide virtually and semi in-contact.",
    position: "left",
  },
  {
    year: "2022",
    title: "Cost-Effective Solutions",
    text: "This allows companies to take advantage of limiting the cost of human capital.",
    position: "right",
  },
];

const History = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div className=" py-20 flex justify-center">
      <div ref={containerRef} className="relative max-w-4xl w-full px-4">
        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-black -translate-x-1/2"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.position === "left" ? -200 : 200 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: index * 0.3, ease: "easeOut" }}
              className={`relative flex ${
                item.position === "left" ? "justify-start" : "justify-end"
              } my-6`}
            >
              {/* Timeline Box */}
              <div className="relative w-1/2 bg-black p-6 rounded-lg shadow-lg">
                <h2 className="text-xl text-white font-semibold">{item.title}</h2>
                <small className="block text-stone-200 mb-2">{item.year}</small>
                <p className="text-stone-200">{item.text}</p>

                {/* Arrow */}
                <div
                  className={`absolute top-6 ${
                    item.position === "left"
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
          );
        })}
      </div>
    </div>
  );
};

export default History;
