import Link from "next/link";
import React from "react";

export interface GiftProps {
    data: string;
}

export const Gifts: React.FC<GiftProps> = ({data}) => {

    return (
        <div>
            <h2>Gifts</h2>
            <p>
                If you are looking to gift me something (for whatever reason), you can find my Amazon wish list <Link href={data}>here</Link>
            </p>
            <br/>
            <p>
                Note: I am currently building a small webservice to display my wanted items here. Amazon has sadly shut down its wishlist API.
            </p>
        </div>
    )
}

export default Gifts;

// This gets called on every request
export async function getStaticProps() {

    const data = "https://www.amazon.de/hz/wishlist/ls/DI5WT15AHPLM?ref_=wl_share";
  
    // Pass data to the page via props
    return { props: { data }};
}