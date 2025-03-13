"use client";
import { useInView, useAnimate, stagger } from "motion/react";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./History.module.css";
import logo from "@/assets/images/logo.png";

const History = () => {
    const [scope, animate] = useAnimate();
    const inView = useInView(scope, {
        once: true, // Ensures animation only runs once
    });

    useEffect(() => {
        if (inView && scope.current) {
            animate(
                scope.current.querySelectorAll(`.${styles.textBox}`), // Fix selector for CSS Modules
                { transform: "translateY(0%)", opacity: 1 },
                { duration: 0.5, delay: stagger(0.2) }
            );
        }
    }, [inView, animate, scope]);

    return (
        <div ref={scope} className={styles.historyContainer}>
            <div className={styles.timeline}>
                {[
                    {
                        year: "2018",
                        title: "Founder’s Vision",
                        text: "The Corporate Strategy enthusiast, Mmalethabo Mahlangu, started The Virtual Boardroom SA in the quest to solve organisational and professional individuals’ problems.",
                        position: "left",
                    },
                    {
                        year: "2019",
                        title: "Expertise in Finance",
                        text: "With her extensive experience in budgeting and costing, she designed a Personal Finance Budget Pack that has helped individuals restructure their finances and provide a roadmap to reach financial stability.",
                        position: "right",
                    },
                    {
                        year: "2020",
                        title: "Core Focus",
                        text: "That became the core function of The Virtual Boardroom SA.",
                        position: "left",
                    },
                    {
                        year: "2021",
                        title: "Business Expansion",
                        text: "She has since expanded the portfolio to virtual assistant services, business solutions, management consultancy, and youth development.",
                        position: "right",
                    },
                    {
                        year: "2021",
                        title: "Service Availability",
                        text: "The services of The Virtual Boardroom SA are available nationwide virtually and semi in-contact.",
                        position: "left",
                    },
                    {
                        year: "2022",
                        title: "Cost-Effective Solutions",
                        text: "This allows companies to take advantage of limiting the cost of human capital.",
                        position: "right",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.container} ${
                            item.position === "left" ? styles.leftContainer : styles.rightContainer
                        }`}
                    >
                        <Image src={logo} alt="Company Logo" />
                        <div className={styles.textBox}>
                            <h2>{item.title}</h2>
                            <small>{item.year}</small>
                            <p>{item.text}</p>
                            <span
                                className={item.position === "left" ? styles.leftArrow : styles.rightArrow}
                            ></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;
