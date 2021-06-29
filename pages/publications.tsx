import styles from './index.module.scss';
import React from 'react';
import Image from 'next/image';
import DigiPIL from '../assets/images/DigiPIL.jpg';
import style from './publications.module.scss';
import { PublicationItem } from '../components/PulibcationItem';
import { useRouter } from 'next/router';

export const Publications: React.FC = () => {

    const router = useRouter();
    const isGerman = router.locale === "de";
    console.log(router);

    return (
        <div>
            <h2>Publications</h2>
            <div className={style.GalleryGrid}>
                <PublicationItem
                title={isGerman ? "Über den Zusammenhang von Ladezeiten und Absprungraten": "About the correlation between website loading speeds and user bounce rates"} 
                description="Language: German - Paper exploring the correlation between website loading speeds and user bounce rates " 
                date="15 July, 2019"
                url={"/zusammenhang_ladenzeiten_absprungraten.pdf"}
                /> 
                <PublicationItem
                title={isGerman ? "Implementierung eines sicheren Heimnetzwerkes für IoT-Devices": "Implementing secure home networks for IoT Devices"} 
                description="Language: German - Paper about state of the art techniques used to build and harden secure IoT home networks via StrongSwan"
                date="30 August, 2019"
                url={"/secure_homenetwork.pdf"}
                /> 
            </div>
        </div>
    )
}

export default Publications;