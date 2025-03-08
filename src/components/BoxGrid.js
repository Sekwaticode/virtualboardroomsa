"use client";

import React, { useEffect, useRef } from "react";
import styles from "./BoxGrid.module.css";

const BoxGrid = () => {
  const boxRefs = useRef([]);

  const boxes = [
    {
      title: "Virtual Assistance",
      content: [
        "Calendar Management",
        "Scheduling Appointments",
        "Filing",
        "Research & Assignments",
        "Email Marketing",
        "Speech and Presentation Prep",
        "Project Management",
        "Research",
        "Administrative Tasks",
        "Market Research and Product Research",
        "Presentations",
      ],
    },
    {
      title: "Personal & Business Finance",
      content: [
        "Budgeting",
        "Variance Analysis",
        "Personal Finance Pack",
        "Managing Payments",
        "Invoicing",
        "Ordering Supplies",
      ],
    },
    {
      title: "Recruitment Pack",
      content: [
        "Resume Writing",
        "Cover Letter",
        "Profile/BIO",
        "LinkedIn Setup & Management",
        "Interview Preps",
        "Job Applications",
      ],
    },
    {
      title: "Branding & IT",
      content: [
        "Web Development",
        "Branding - Corporate Stationery & Uniform",
        "Company Logo",
        "Business Cards",
        "Email Signature and Letterhead",
        "Email Management",
        "Company Profile",
        "Business Proposals",
      ],
    },
    {
      title: "Travel Management",
      content: ["Travel Arrangements", "Guest Communication", "Bookings Management"],
    },
    {
      title: "Social Media Management",
      content: ["Content Creation", "Sponsored Ads", "Blog Writing & Editing"],
    },
    { title: "Mentorship", content: ["Career Workshops"] },
    {
      title: "Events Management",
      content: ["Corporate Events", "Product Launches", "Fundraising"],
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e, box) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const span = box.querySelector("span");
      if (span) {
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
      }
    };

    boxRefs.current.forEach((box) => {
      if (box) {
        const moveHandler = (e) => handleMouseMove(e, box);
        box.addEventListener("mousemove", moveHandler);
      }
    });

    return () => {
      boxRefs.current.forEach((box) => {
        if (box) {
          box.removeEventListener("mousemove", handleMouseMove);
        }
      });
    };
  }, []);

  return (
    <div className={styles.container} id="services">
      {boxes.map((box, index) => (
        <div
          key={index}
          ref={(el) => (boxRefs.current[index] = el)}
          className={`${styles.box} box`}
        >
          <div className={styles.content}>
            <h2 className="text-2xl font-bold mb-2">{box.title}</h2>
            <ul className="list-disc pl-5">
              {box.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <span></span>
        </div>
      ))}
    </div>
  );
};

export default BoxGrid;
