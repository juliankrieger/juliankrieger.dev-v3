import React from 'react';
import {Image} from '../components/Image';
import type { ImageProps } from 'next/image';
import styles from './GalleryItem.module.scss';

interface GalleryItemProps {
    title: string;
    image: ImageProps;
    description: string;
    tags: string[]
}

export const GalleryItem: React.FC<GalleryItemProps> = ({
    title, image, description, tags
}) => {
    return (
        <div className={styles.GalleryItem}>
            <h5 className={styles.Title}>
                {title}
            </h5>
            <Image {...image} alt={"DigiPIL Platform"} />
            <p>{description}</p>
            <ul>
                {
                    tags.map((tag, idx) => <li className={styles.Tag} key={idx}>{idx !== 0 && " - "}{tag}</li>)
                }
            </ul>
        </div>
    )
}