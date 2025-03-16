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
    href: "#contacts",
    label: "Contact",
  },
];

const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth" });
    }, 0);


  };
  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);
  return (
    <footer className="bg-black text-white" id="footer">
      <div className="container">
        <div className="section"> </div>
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-stone-400 animate-pulse"></div>
          <span className="uppercase">
            Book Now! Available spots are limited
          </span>
        </div>
        <div className="grid md:grid-cols-3 ">
          <div className="md:col-span-2">
            <h2
              className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight"
              ref={scope}
            >
              Enough talk. Let&apos;s collaborate and turn visionary ideas into
              impactful solutions
            </h2>
            <a href="https://api.whatsapp.com/send/?phone=27730965866&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">

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
            </a>
          </div>
          <div>
            <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
              {navItems.map(({ href, label }) => (
                <a href={href} key={label}               onClick={handleClickMobileNavItem}
>
                  <Button variant="text" className="text-lg">
                    {label}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-6">
            <a href="https://www.instagram.com/thevirtualboardroom_sa/" target="_blank" rel="noopener noreferrer">

            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2.25H8C6.60807 2.25149 5.27358 2.80509 4.28933 3.78933C3.30509 4.77358 2.75149 6.10807 2.75 7.5V16.5C2.75149 17.8919 3.30509 19.2264 4.28933 20.2107C5.27358 21.1949 6.60807 21.7485 8 21.75H17C18.3919 21.7485 19.7264 21.1949 20.7107 20.2107C21.6949 19.2264 22.2485 17.8919 22.25 16.5V7.5C22.2485 6.10807 21.6949 4.77358 20.7107 3.78933C19.7264 2.80509 18.3919 2.25149 17 2.25ZM12.5 16.5C11.61 16.5 10.74 16.2361 9.99993 15.7416C9.25991 15.2471 8.68314 14.5443 8.34254 13.7221C8.00195 12.8998 7.91283 11.995 8.08647 11.1221C8.2601 10.2492 8.68868 9.44736 9.31802 8.81802C9.94736 8.18868 10.7492 7.7601 11.6221 7.58647C12.495 7.41283 13.3998 7.50195 14.2221 7.84254C15.0443 8.18314 15.7471 8.75991 16.2416 9.49993C16.7361 10.24 17 11.11 17 12C16.9988 13.1931 16.5243 14.337 15.6806 15.1806C14.837 16.0243 13.6931 16.4988 12.5 16.5ZM18.125 7.5C17.9025 7.5 17.685 7.43402 17.5 7.3104C17.315 7.18679 17.1708 7.01109 17.0856 6.80552C17.0005 6.59995 16.9782 6.37375 17.0216 6.15552C17.065 5.93729 17.1722 5.73684 17.3295 5.5795C17.4868 5.42217 17.6873 5.31502 17.9055 5.27162C18.1238 5.22821 18.35 5.25049 18.5555 5.33564C18.7611 5.42078 18.9368 5.56498 19.0604 5.74998C19.184 5.93499 19.25 6.1525 19.25 6.375C19.25 6.67337 19.1315 6.95952 18.9205 7.1705C18.7095 7.38147 18.4234 7.5 18.125 7.5ZM15.5 12C15.5 12.5933 15.3241 13.1734 14.9944 13.6667C14.6648 14.1601 14.1962 14.5446 13.6481 14.7716C13.0999 14.9987 12.4967 15.0581 11.9147 14.9424C11.3328 14.8266 10.7982 14.5409 10.3787 14.1213C9.95912 13.7018 9.6734 13.1672 9.55764 12.5853C9.44189 12.0033 9.5013 11.4001 9.72836 10.8519C9.95542 10.3038 10.3399 9.83524 10.8333 9.50559C11.3266 9.17595 11.9067 9 12.5 9C13.2956 9 14.0587 9.31607 14.6213 9.87868C15.1839 10.4413 15.5 11.2044 15.5 12Z"
                fill="currentColor"
              />
            </svg>
          </a>
            <a href="https://www.linkedin.com/company/the-virtual-boardroom-sa/" target="_blank" rel="noopener noreferrer">

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 7C4.5 5.343 5.843 4 7.5 4H17.5C19.157 4 20.5 5.343 20.5 7V17C20.5 18.657 19.157 20 17.5 20H7.5C5.843 20 4.5 18.657 4.5 17V7ZM9.35 17.393V10.169H6.934V17.393H9.35ZM8.142 9.182C8.984 9.182 9.509 8.628 9.509 7.934C9.493 7.225 8.984 6.686 8.158 6.686C7.331 6.686 6.791 7.225 6.791 7.934C6.791 8.628 7.315 9.182 8.126 9.182H8.142ZM13.104 17.393V13.359C13.104 13.143 13.12 12.928 13.183 12.773C13.358 12.342 13.756 11.895 14.423 11.895C15.298 11.895 15.648 12.557 15.648 13.529V17.393H18.064V13.251C18.064 11.032 16.872 9.999 15.282 9.999C14 9.999 13.425 10.699 13.104 11.192V10.169H10.687C10.719 10.844 10.688 17.352 10.687 17.394L13.104 17.393Z"
                fill="currentColor"
              />
            </svg>
          </a>
            <a href="https://api.whatsapp.com/send/?phone=27730965866&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">

            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"
                fill="currentColor"
              />
            </svg>
          </a>
            <a href="tel:+27730965866" target="_blank" rel="noopener\ noreferrer">

            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                fill="currentColor"
              />
            </svg>
          </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">

            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <p className="py-16 text-white-30 text-sm">
          Copyright &copy; Virtual Boardroom SA &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
