'use client'

import React, { useEffect } from "react";
import styles from "./BoxGrid.module.css";

const BoxGrid = () => {
  const boxes = [
    { title: "Title One", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quae?" },
    { title: "Title Two", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quae?" },
    { title: "Title Three", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quae?" },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll(".box").forEach((box) => {
        let x = e.pageX - box.offsetLeft;
        let y = e.pageY - box.offsetTop;

        box.querySelector("span").style.left = x + "px";
        box.querySelector("span").style.top = y + "px";
      });
    };

    document.querySelectorAll(".box").forEach((box) => {
      box.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      document.querySelectorAll(".box").forEach((box) => {
        box.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      {boxes.map((box, index) => (
        <div key={index} className={`${styles.box} box`}>
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
