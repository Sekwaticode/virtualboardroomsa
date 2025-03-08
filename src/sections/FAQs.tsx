"use client";

import { FC, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "Can you customize services based on my needs?",
    answer:
      "Yes! Our services are tailored to fit your unique business and personal requirements. Let us know what you need, and we’ll create a solution that works for you",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "Simply reach out to us via our contact form, email, or phone. We'll discuss your needs and create a plan that aligns with your goals.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across multiple industries, including corporate, hospitality, retail, technology, and startups, providing customized solutions for each sector.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQS</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 last:border-b relative isolate group/faq"
              onClick={() =>
                setSelectedIndex(faqIndex === selectedIndex ? null : faqIndex)
              }
            >
              <div
                className={twMerge(
                  "absolute h-0 w-full bottom-0 left-0 bg-stone-300 -z-10 transition-all duration-700 group-hover/faq:h-full",
                  faqIndex === selectedIndex ? "h-full" : ""
                )}
              ></div>

              <div
                className={twMerge(
                  "flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8",
                  faqIndex === selectedIndex && "lg:px-8 "
                )}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-700",
                    faqIndex === selectedIndex ? "rotate-45" : ""
                  )}
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {faqIndex === selectedIndex && (
                  <motion.div
                    className="overflow-hidden lg:px-8"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <p className="text-xl mt-4">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
