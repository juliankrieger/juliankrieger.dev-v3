import React from 'react';
import style from './freelancing.module.scss';
import { GalleryItem } from '../components/GalleryItem';
import DigiPil from '../images/DigiPIL.jpeg';


export const Freelancing: React.FC = () => {
    return (
        <div>
            <h2>Freelancing</h2>
            <p>I do freelancing on the side when I get the chance. When I have the choice, this happens mostly
                on the <a href={"https://www.mongodb.com/mern-stack"}>MERN</a> Stack, although I like switching up
                Express with alternative server solutions. If a customer wishes for static rendering and small bundles,
                I reach for <a href={"https://nextjs.org/"}>Next.js</a>. To make deployment and delivery easy, I bundle all my apps inside <a href={"https://www.docker.com/"}>Docker</a>, but deploying on serverless platforms is also possible.
            </p>

            <h4>Gallery</h4>
            <p>A gallery of some of my recent and/or noteworthy freelancing projects</p>
            <div className={style.GalleryGrid}>
                <GalleryItem 
                title={"DigiPIL"} 
                image={{ src: DigiPil, alt: "DigiPIL Platform", placeholder: "blur" }} 
                description="Online Platform for seraching and managing Patient Information Leaflets (PIL). Customers can register or login and save a list of their current medications along with a list of conditions. Shows possible interactions and side effects." 
                tags={["Proof of Concept", "Persistent Database", "Database Admin Interface", "Session Cookie Authentification", "Docker Deployment", "IBM Carbon"]} />    
            </div>
        </div>
    )
}

export default Freelancing;