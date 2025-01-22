import {React, useState, useCallback} from "react"
import ImageViewer from 'react-simple-image-viewer';
import PropTypes from "prop-types";

import {getImageUrl} from "../../../utils.js";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({project : {title, description, imageSrc, skills, demo, demoEnabled, source, sourceEnabled}}) => {

    const [activeImage, setActiveImage] = useState(0)
    const [isViewerOpen, setIsViewerOpen] = useState(false)

    const openImageViewer = useCallback((index) => {
        setActiveImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setActiveImage(0);
        setIsViewerOpen(false);
    };

    const imageSrcs = imageSrc.map((img) => getImageUrl(img))

    return (
        <div className={styles.container} title={description}>
            <div className={styles.slideshowContainer}>

                <img className={styles.image}
                     onClick={openImageViewer}
                     src={imageSrcs[0]} alt={`Image of ${title}`}/>

                {isViewerOpen && (
                    <ImageViewer
                      src={imageSrcs}
                      currentIndex={ 0 }
                      disableScroll={ false }
                      closeOnClickOutside={ true }
                      onClose={ closeImageViewer }
                    />
                )}
                {/*<a className={styles.prev} onClick={() => {*/}
                {/*    setActiveImage(Math.max(0, activeImage - 1))*/}
                {/*}}>&#10094;</a>*/}
                {/*<a className={styles.next} onClick={() => {*/}
                {/*    setActiveImage(Math.min(imageSrc.length - 1, activeImage + 1))*/}
                {/*}}>&#10095;</a>*/}
            </div>
            <h3 className={styles.title}>{title}</h3>
            {/*<p className={styles.description}>{description}</p>*/}
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
                <a className={demoEnabled ? styles.link : `${styles.disabled}`}
                   href={demoEnabled ? demo : "javascript:void(0)"}>Demo</a>
                <a className={sourceEnabled ? styles.link : `${styles.disabled}`}
                   href={sourceEnabled ? source : "javascript:void(0)"}>Source</a>
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
        demoEnabled: PropTypes.bool,
        source: PropTypes.string,
        sourceEnabled: PropTypes.bool,
    }
}