import React from 'react';

import styles from './styles.module.css';

export default function AppStoreCard({ title, image, paragraph, link }) {
    return (
        <div className={styles.appStoreCardView}>
            <div className={styles.appStoreCardImage}>
                <img src={image} />
            </div>
            <div className={styles.appStoreCardContentBox}>
                <h2>{title}</h2>
                <div className={styles.appStoreCardContentBoxParagraph}>
                <h3>{paragraph}</h3>
                </div>
                <a href={link}>İnceleyin</a>
            </div>
        </div>
    );
}