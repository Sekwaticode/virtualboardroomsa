// import Image from "next/image";
import styles from "./Objectives.module.css";
// import heroImage from "@/assets/images/logo.png";

const Objectives = () => {
    return (
        <div className="">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0 text-center"> Mission, Vision, Values</h1>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={`${styles.face} ${styles.face1}`}>
                        <div className={styles.content}>
                            {/* <h3>Mission</h3> */}
                            <p>Our mission is to support organizations
                                and professionals to leverage their full
                                potential and unlock their growth and
                                development.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.face} ${styles.face2}`}>
                        <div className={styles.content}>
                            <h3>Mission</h3>
                            {/* <p>More info about the design...</p> */}
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={`${styles.face} ${styles.face1}`}>
                        <div className={styles.content}>
                            {/* <h3>Vision</h3> */}
                            <p>To be a leader in consultancy for
                                individuals and organisations who want
                                to bring personal and business interests
                                to life.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.face} ${styles.face2}`}>
                        <div className={styles.content}>
                            <h3>Vision</h3>
                            {/* <p>More info about the code...</p> */}
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={`${styles.face} ${styles.face1}`}>
                        <div className={styles.content}>
                            {/* <h3>Values</h3> */}
                            <p>Integrity, Innovation, Excellence</p>
                        </div>
                    </div>
                    <div className={`${styles.face} ${styles.face2}`}>
                        <div className={styles.content}>
                            <h3>Values</h3>
                            {/* <p>More info about the code...</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0 text-center" > Goals and Objectives</h1>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={`${styles.face} ${styles.face1}`}>
                        <div className={styles.content}>
                            {/* <h3>Mission</h3> */}
                            <p>We are centred in growing long
                                lasting client relationships
                                through research, identifying
                                and launching additional
                                services aligned with our current
                                and potential clients
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.face} ${styles.face2}`}>
                        <div className={styles.content}>
                            <h3>Growth</h3>
                            {/* <p>More info about the design...</p> */}
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={`${styles.face} ${styles.face1}`}>
                        <div className={styles.content}>
                            {/* <h3>Vision</h3> */}
                            <p>We improve loyalty and build
                                social proof by ensuring that
                                clients’ needs, preferences, and
                                expectations are met.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.face} ${styles.face2}`}>
                        <div className={styles.content}>
                            <h3>Client Satisfaction</h3>
                            {/* <p>More info about the code...</p> */}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Objectives;
