"use client"

import { FC, useEffect } from "react";
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import splitType from "split-type";
import { useAnimate, motion, stagger } from "motion/react";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();

  useEffect(() => {
    new splitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });
    titleAnimate(titleScope.current.querySelectorAll('.word'), {transform: 'translateY(0)'},
    {
      duration: .5,
      delay: stagger(.2)
    })
  }, []);

  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0"
              ref={titleScope}
            >
              Crafting digital experiences through code and creative design
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center items-start mt-10 gap-6">
              <Button
                variant="secondary"
                iconAfter={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                    />
                  </svg>
                }
              >
                <span>View My Work</span>
              </Button>
              <Button variant="text">Let&apos;s Talk</Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="mt-20 md:mt-0 md:h-full">
            <Image
              src={heroImage}
              alt="my portrait"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
