"use client";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-stone-200"
    id="LogoTicker"
    >
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <p>SEASONED FINANCE PROFESSIONAL</p>
            <p>INDEPENDENT NON-EXECUTIVE DIRECTOR</p>
            <p>MOTIVATIONAL & KEY-NOTE SPEAKER</p>
            <p>CO-FOUNDER & HOST OF THE PMBF CAREER PROGRAMME</p>
            <p> PERSONAL FINANCE COACH </p>
            <p>FOUNDER & EO OF THE VIRTUAL BOARDROOM SA</p>
            <p>SEASONED FINANCE PROFESSIONAL</p>
            <p>INDEPENDENT NON-EXECUTIVE DIRECTOR</p>
            <p>MOTIVATIONAL & KEY-NOTE SPEAKER</p>
            <p>CO-FOUNDER & HOST OF THE PMBF CAREER PROGRAMME</p>
            <p> PERSONAL FINANCE COACH </p>
            <p>FOUNDER & EO OF THE VIRTUAL BOARDROOM SA</p>
             
          </motion.div>
        </div>
      </div>
    </div>
  );
};
