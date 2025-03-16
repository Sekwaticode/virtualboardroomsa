"use client";

import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/testimonial-5.jpg";
import image2 from "@/assets/images/testimonial-6.jpg";
// import image3 from "@/assets/images/testimonial-3.jpg";
import Testimonial from "@/components/Testimonial";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
// import SplitType from "split-type";
// import { useAnimate } from "motion/react";
const testimonials = [
  {
    name: "Gabriel Petrescu",
    company: "OrgXo",
    role: "Founder & Chief Serendipity Officer",
    quote:
      "The Team at Virtual Boardroom SA delivered all their services meticulously, increasing our companies online presence in a positive and favorable light.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Lebogang Sekwati",
    company: "Sekwaticode",
    role: "Web Developer",
    quote:
      "Working alongside Virtual Boardroom SA has been a pleasure. The Team is kind, attentive, patient and the business advice they shared is extremely valuable to me and my company.",
    image: image2,
    imagePositionY: 0.1,
  },
  // {
  //   name: "Emily Watson",
  //   company: "Studio Minimal",
  //   role: "Creative Director",
  //   quote:
  //     "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
  //   image: image3,
  //   imagePositionY: 0.55,
  // },
];

const Testimonials: FC = () => {
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleClickPrev = () => {
    setTestimonialIndex((curr) =>
      curr === 0 ? testimonials.length - 1 : curr - 1
    );
  };

  const handleClickNext = () => {
    setTestimonialIndex((curr) =>
      curr === testimonials.length - 1 ? 0 : curr + 1
    );
  };

  return (
    <section id="testimonials" className="section">
      <h2
        className="text-2xl md:text-4xl lg:text-6xl flex flex-col overflow-hidden tracking-tighter"
        ref={titleRef}
      >
        <motion.span className="whitespace-nowrap" style={{ x: transformTop }}>
         Some Kind Words From Our Valued Clients
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-stone-500"
          style={{ x: transformBottom }}
        >
        Some Kind Words From Our Valued Clients
        </motion.span>
      </h2>

      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Testimonial
                name={testimonials[testimonialIndex].name}
                company={testimonials[testimonialIndex].company}
                role={testimonials[testimonialIndex].role}
                quote={testimonials[testimonialIndex].quote}
                image={testimonials[testimonialIndex].image}
                imagePositionY={testimonials[testimonialIndex].imagePositionY}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-4 mt-6 lg:mt-10">
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-stone-500 hover:text-white hover:border-stone-500 transition-all duration-300"
            onClick={handleClickPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-stone-500 hover:text-white hover:border-stone-500 transition-all duration-300"
            onClick={handleClickNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
