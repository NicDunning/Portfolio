import React from "react"
import PropTypes from "prop-types";

import {getImageUrl} from "../../../utils.js";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({project : {title, description, imageSrc, skills, demo, source}}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    skills.map((skill, skillId) => {
                        return (
                            <li className={styles.skill} key={skillId}>{skill}</li>
                        )
                    })
                }
            </ul>
            <div className={styles.links}>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    project: {
        title: PropTypes.string,
        description: PropTypes.string,
        imageSrc: PropTypes.string,
        skills: PropTypes.array,
        demo: PropTypes.string,
        source: PropTypes.string
    }
}