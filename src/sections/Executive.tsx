"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import executiveImage from "@/assets/images/executive_vbsa.png";
import { LogoTicker } from "@/sections/LogoTicker";

const ExecutiveSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      id="about"
      className="bg-stone-200 min-h-screen flex flex-col items-center py-10 px-4"
    >
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black relative pb-2">
          Meet Our Executive
          <span className="block w-20 h-1 bg-stone-500 mx-auto mt-2"></span>
        </h1>
        <LogoTicker />
      </div>

      {/* Content Container */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-10 max-w-5xl mt-10">
        {/* Text Section (Always Left) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 text-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Introducing Mmalethabo Mahlangu
          </h2>
          <p className="text-lg leading-relaxed">
            Mmalethabo has gained valuable leadership experience by
            participating in renowned programs, including the IWFSA Middle
            Management Programme from Duke Corporate Education, the Executive
            Development Programme from Wits Business School, and Management
            Consulting from Rhodes Business School.
          </p>
          <p className="text-gray-700 text-lg mb-3">
            She holds a BCom Accounting degree from the University of
            Johannesburg and a Postgraduate Diploma in Management Accounting
            from the University of South Africa, further strengthening her
            expertise in finance and management.
          </p>

          <button
            className="mt-4 bg-black text-white px-5 py-2 rounded-full text-lg transition hover:bg-gray-900"
            onClick={() => setIsModalOpen(true)}
          >
            Read More
          </button>
        </motion.div>

        {/* Image Section (Always Right) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex justify-end"
        >
          <Image
            src={executiveImage}
            alt="Executive Image"
            className="rounded-lg shadow-lg relative transition-transform sm:-translate-x-10 w-full h-aut"
          />
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg max-w-3xl text-center relative"
          >
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              More About Our Executive
            </h2>

            <p className="text-gray-700 text-lg">
              As the Executive Officer of The Virtual Boardroom SA, Mmalethabo
              has built a diverse career, holding key roles such as Production
              Accountant, Production Analyst, Financial Manager, and Provincial
              Financial Officer. She also contributes her expertise as a
              Non-Executive Director and Chairperson on two boards.
            </p>
            <p className="text-gray-700 text-lg">
              Her leadership journey has been enriched by international
              exposure, including time spent at the African Immersion in
              Mauritius, where she explored economic landscapes and the role of
              women in the labor market. In 2025, she will join 200 young
              leaders at the Best Diplomats USA conference in New Jersey and New
              York. She is also a FortyUnder40 South Africa 2024 finalist,
              recognized for her impact.
            </p>
            <p className="text-gray-700 text-lg">
              Driven by a passion for education and career development,
              Mmalethabo co-founded the Annual Career and Mentorship Programme
              in 2012, supporting high school learners and tertiary students
              from Mpumalanga. Now in its 12th
              year, the program—funded by the Paul Mthimunye Bursary Fund—has
              benefited over 2,500 learners, offering mentorship, career
              guidance, life skills, and work-readiness training from industry
              professionals.
            </p>
            <p className="text-gray-700 text-lg">
              With aspirations to advance in corporate strategy, she plans to
              pursue a Master’s degree in the field.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ExecutiveSection;
