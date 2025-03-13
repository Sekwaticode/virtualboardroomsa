"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import executiveImage from "@/assets/images/executive_vbsa.png";

const ExecutiveSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-stone-200 min-h-screen flex flex-col items-center py-10 px-4">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black relative pb-2">
          Meet Our Executive
          <span className="block w-20 h-1 bg-stone-500 mx-auto mt-2"></span>
        </h1>
      </div>

      {/* Content Container */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-10 max-w-5xl mt-10">
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
            Mmalethabo studied BCom Accounting at the University of Johannesburg
            and holds a Post Graduate Diploma in Management Accounting from the
            University of South Africa. She has participated in prestigious
            leadership programs, enhancing her expertise.
          </p>
          <p className="text-gray-700 text-lg mb-3">
              Mmalethabo studied BCom Accounting at the University of
              Johannesburg and holds a Post Graduate Diploma in Management
              Accounting from the University of South Africa. To enhance her
              leadership development, she has participated in prestigious
              programmes such as the IWFSA Middle Management Programme from Duke
              Corporate Education, Executive Development Programme from Wits
              Business School as well as Management Consulting from the Rhodes
              Business School.
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
            className="rounded-lg shadow-lg"
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
              She is not only the Executive Officer for The Virtual Boardroom SA
              but she has occupied various positions such as, Production
              Accountant, Production Analyst, Financial Manager and Provincial
              Financial Officer. She is also serving in two boards as a
              Non-Executive Director and Chairperson respectively. 
            </p>
            <p className="text-gray-700 text-lg">
              Mmalethabo gained critical insights when she spent time at the
              African Immersion in Mauritius, exploring economic landscapes and
              the role of women in the labour market in Mauritius. She will be
              joining 200 other young leaders in the 2025 Best Diplomats USA to
              be held in New Jersey and New York and she is a FortyUnder 40
              South Africa 2024 finalist
            </p>
            <p className="text-gray-700 text-lg">With her passion and advocacy for education and career development, in 2012,
she co-founded and hosted the first Annual Career and Mentorship Programme
for high school learners and tertiary students from Middelburg, Hendrina and
surrounding areas. This programme has been running successfully for over 12
years, impacting about 200 learners annually funded by the Paul Mthimunye
Bursary Fund. To date more than 2 500 learners have benefited from the
programme which offers mentorship, life skills, career guidance and work
readiness from various industry experts and educational simulation activities.
</p>
<p className="text-gray-700 text-lg">
Her goal is to grow in corporate strategy and will pursue her Masters in Corporate
Strategy.

</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ExecutiveSection;
