import React from "react";

import styles from "./Contact.module.css"
import {getImageUrl} from "../../utils.js";

export const Contact = () => {
    return (
        <footer id={"contact"} className={styles.container}>
            <div className={styles.text}>
                <p>Feel free to reach out and contact me!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt={"Email Icon"}/>
                    <a href={"mailto:dunningnicolas@gmail.com"}>dunningnicolas@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt={"Linkedin Icon"}/>
                    <a href={"https://www.linkedin.com/in/nicolas-dunning-09075a103/"} target={"_blank"}>Linkedin/NicolasDunning</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt={"Github Icon"}/>
                    <a href={"https://github.com/NicDunning"} target={"_blank"}>Github/NicDunning</a>
                </li>
            </ul>
        </footer>
    )
}