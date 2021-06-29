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
                description="Language: German - Paper exploring the correlation between how long it takes a website to load its content and the eagerness of users to cancel loading and subsequently leaving the site early." 
                date="15 July, 2019"
                url={"/zusammenhang_ladenzeiten_absprungraten.pdf"}
                /> 
                <PublicationItem
                title={isGerman ? "Implementierung eines sicheren Heimnetzwerkes für IoT-Devices": "Implementing secure home networks for IoT Devices"} 
                description="Language: German - Paper about state of the art techniques used to build and harden secure IoT home networks via StrongSwan"
                date="30 August, 2019"
                url={"/secure_homenetwork.pdf"}
                /> 
                <PublicationItem
                title={isGerman ? "Entwicklung einer Internationalisierungslösung für das Content-Management-System Scrivito inklusive Evaluierung des Systems und Anwendung an einer internationalen Webseite.": "Development of an internationalization solution for the content management system Scrivito including evaluation of the system and application on an international website."} 
                description="Language: German - Bachelor Thesis - Evaluation and comparison of a content management system regarding different popular industry solutions that was of interest for my employer at the time. The thesis' second part focused on a proof-of-concept of an internationalisation plugin since Scrivito itself was not equipped with a sufficient translation API at the time of writing."
                date="30 August, 2019"
                url={"/bachelor_thesis.pdf"}
                /> 
            </div>
        </div>
    )
}

export default Publications;