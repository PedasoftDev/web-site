import React from 'react';

import styles from './styles.module.css';

export default function AppStoreCard({ title, image, paragraph, link }) {
    return (
        <div className={styles.appStoreCardView}>
            <div style={{
                marginTop: "30px",
                marginLeft: "30px",
                fontSize: "35px",
                fontWeight: "bold",
                fontStyle: "italic",
                
            }}>{title}</div>
            <div className={styles.appStoreCardImage}>
                <img src={image} />
            </div>
            <div className={styles.appStoreCardContentBox}>
                <h4>{paragraph}</h4>
                <a href={link}>İnceleyin</a>
            </div>
        </div>
    );
}