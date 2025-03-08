"use client";

import { FC, useEffect } from "react";
import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
const navItems = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#faqs",
    label: "FAQS",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);
  return (
    <footer className="bg-stone-900 text-white" id="footer">
      <div className="container">
        <div className="section"> </div>
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-stone-400 animate-pulse"></div>
          <span className="uppercase">Book Now! Available spots are limited</span>
        </div>
        <div className="grid md:grid-cols-3 ">
          <div className="md:col-span-2">
            <h2
              className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight"
              ref={scope}
            >
              Enough talk. Let&apos;s make something great together
            </h2>
            <Button
              variant="secondary"
              className="mt-8"
              iconAfter={
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
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              }
            >
              073 096 5866

            </Button>
          </div>
          <div>
            <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
              {navItems.map(({ href, label }) => (
                <a href={href} key={label}>
                  <Button variant="text" className="text-lg">
                    {label}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
        <p className="py-16 text-white-30 text-sm">
          Copyright &copy; Virtual Boardroom SA &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
