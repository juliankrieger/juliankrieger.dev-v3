import styles from './index.module.scss';
import React from 'react';
import style from './publications.module.scss';
import { PublicationItem } from '../components/PulibcationItem';

export const Publications: React.FC = () => {

    return (
        <div>
            <h2>Publications</h2>
            <div className={style.GalleryGrid}>
                <PublicationItem
                title={"Programming Languages and Target Platforms in Malware - A Trend Analysis"}
                description={"Language: English - Paper exploring how increasingly popular programming languages affects the malware industry."}
                date="15 Feb, 2023"
                url={"/programming_language_malware_trends.pdf"}
                />
                <PublicationItem
                title={"About the correlation between website loading speeds and user bounce rates"} 
                description="Language: German - Paper exploring the correlation between how long it takes a website to load its content and the eagerness of users to cancel loading and subsequently leaving the site early." 
                date="15 July, 2019"
                url={"/zusammenhang_ladenzeiten_absprungraten.pdf"}
                /> 
                <PublicationItem
                title={"Implementing secure home networks for IoT Devices"} 
                description="Language: German - Paper about state of the art techniques used to build and harden secure IoT home networks via StrongSwan"
                date="30 August, 2019"
                url={"/secure_homenetwork.pdf"}
                /> 
                <PublicationItem
                title={"Development of an internationalization solution for the content management system Scrivito including evaluation of the system and application on an international website."} 
                description="Language: German - Bachelor Thesis - Evaluation and comparison of a content management system regarding different popular industry solutions that was of interest for my employer at the time. The thesis' second part focused on a proof-of-concept of an internationalisation plugin since Scrivito itself was not equipped with a sufficient translation API at the time of writing."
                date="30 August, 2019"
                url={"/bachelor_thesis.pdf"}
                /> 
            </div>
        </div>
    )
}

export default Publications;