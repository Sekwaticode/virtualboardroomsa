"use client";

import { FC, useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Button from "@/components/Button";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contacts" },
  { label: "Footer", href: "#footer" },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      navAnimate(
        navScope.current,
        { scaleY: 1 },
        { duration: 0.7, ease: "easeInOut" }
      );
    } else {
      navAnimate(
        navScope.current,
        { scaleY: 0 },
        { duration: 0.5, ease: "easeInOut" }
      );
    }
  }, [isOpen, navAnimate, navScope]);

  const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Fullscreen Menu */}
      <motion.div
        ref={navScope}
        className="fixed top-0 left-0 w-full h-screen bg-black origin-top scale-y-0"
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-stone-200 border-t last:border-b border-stone-800 py-5 group/nav-item relative isolate"
              onClick={handleClickMobileNavItem}
            >
              <div className="container flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
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
              </div>
              <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-items:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Top Navigation */}
      <div className="fixed top-0 left-0 w-full bg-black mix-blend-difference ">
        <div className="flex justify-between items-center h-20 px-6">
          {/* Logo */}
          <a href="/">
            <span className="text-xl font-bold uppercase text-white">
              Virtual&nbsp;Boardroom&nbsp;SA
            </span>
          </a>

          {/* Menu Button */}
          <div className="flex items-center gap-4">
            <div
              className="size-11 border border-stone-400 rounded-full flex items-center justify-center bg-stone-200 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <motion.rect
                  x="3"
                  y="7"
                  width="18"
                  height="2"
                  fill="currentColor"
                  animate={{
                    translateY: isOpen ? 4 : 0,
                    rotate: isOpen ? 45 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ transformOrigin: "12px 8px" }}
                />
                <motion.rect
                  x="3"
                  y="15"
                  width="18"
                  height="2"
                  fill="currentColor"
                  animate={{
                    translateY: isOpen ? -4 : 0,
                    rotate: isOpen ? -45 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ transformOrigin: "12px 16px" }}
                />
              </svg>
            </div>
            <Button
              variant="primary"
              className="hidden md:inline-flex items-center"
              onClick={() =>
                document
                  .getElementById("contacts")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
