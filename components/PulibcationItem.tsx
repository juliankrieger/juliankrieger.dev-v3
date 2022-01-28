import React from 'react';
import styles from './PublicationItem.module.scss';

interface PublicationItemProps {
    title: string;
    date: string;
    description: string;
    url: string;
}

export const PublicationItem: React.FC<PublicationItemProps> = ({
    title, date,  description, url
}) => {
    return (
        <div className={styles.PublicationItem}>
            <h5 className={styles.Date}>{date}</h5>
            <a href={url} className={styles.Title}>
                <h3 className={styles.Title}>
                    {title}
                </h3>
            </a>
            <p>{description}</p>
        </div>
    )
}