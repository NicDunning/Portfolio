import React from "react"

import styles from "./About.module.css"
import {getImageUrl} from "../../utils.js";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt={"Me sitting with a laptop"}/>
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
                                I have experience developing fast and optimized backend systems and APIs.
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
                                I have created apps with effective communication spanning different languages and locations
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}