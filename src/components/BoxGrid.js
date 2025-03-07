"use client";

import React, { useEffect, useRef } from "react";
import styles from "./BoxGrid.module.css";

const BoxGrid = () => {
  const boxRefs = useRef([]);

  const boxes = [
    { title: "Title One", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quae?" },
    { title: "Title Two", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quae?" },
    { title: "Title Three", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quae?" },
    { title: "Title Four", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quae?" },
    { title: "Title Five", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quae?" },
    { title: "Title Six", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quae?" },
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

        // Cleanup function
        return () => box.removeEventListener("mousemove", moveHandler);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      {boxes.map((box, index) => (
        <div
          key={index}
          ref={(el) => (boxRefs.current[index] = el)}
          className={`${styles.box} box`}
        >
          <div className={styles.content}>
            <h2>{box.title}</h2>
            <p>{box.content}</p>
          </div>
          <span></span>
        </div>
      ))}
    </div>
  );
};

export default BoxGrid;
