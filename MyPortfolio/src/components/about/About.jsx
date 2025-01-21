import React from "react"

import styles from "./About.module.css"
import {getImageUrl} from "../../utils.js";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt={"Cursor icon"}/>
                        <div className={styles.aboutItemText}>
                            <h3>
                                Frontend Developer
                            </h3>
                            <p>
                                I am a frontend developer with experience in building responsive and optimized websites.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt={"Server Icon"}/>
                        <div className={styles.aboutItemText}>
                            <h3>
                                Backend Developer
                            </h3>
                            <p>
                                I have experience developing fast and robust backend systems and APIs.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt={"UI Icon"}/>
                        <div className={styles.aboutItemText}>
                            <h3>
                                Multi System Architect
                            </h3>
                            <p>
                                I have developed multi-piece apps with effective interactions spanning different
                                languages and locations
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/3dprinterIcon.png")} alt={"UI Icon"}/>
                        <div className={styles.aboutItemText}>
                            <h3>
                                3D Printer Enthusiast
                            </h3>
                            <p>
                                In my spare time I model and print 3D objects for friends and family.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}