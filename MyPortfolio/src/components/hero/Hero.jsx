import React from "react"

import styles from "./Hero.module.css"
import {getImageUrl} from "../../utils.js";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Nicolas</h1>
                <p className={styles.description}>A Full-Stack Developer with 2 years of professional experience using React, NodeJS, and Python! Reach out if you would like to learn more!</p>
                <a className={styles.contactBtn} href="mailto:dunningnicolas@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt={"Hero image of me"}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}