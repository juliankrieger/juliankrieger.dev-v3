import Link from "next/link";
import React, { useEffect, useState } from "react";

interface OpenLibraryResponse {
    reading_log_entries: [
        {
            work: {
                title: string;
                author_names: string[];
                first_publish_year: number;
                cover_edition_key: string;
            }
        }
    ]
}

const OPEN_LIBRARY_URL = "https://openlibrary.org/people/juliankrieger/books/want-to-read.json";

export const Gifts: React.FC= () => {

    const [data, setData] = useState<OpenLibraryResponse | null>(null)

    useEffect(() => {
        fetch(OPEN_LIBRARY_URL)
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
    }, [])

    return (
        <div>
            <h2>Gifts</h2>
            <p>
                If you are looking to gift me something (for whatever reason), you can find <Link href={"https://www.amazon.de/hz/wishlist/ls/DI5WT15AHPLM?ref_=wl_share"}>my Amazon wish list here</Link>
            </p>
            <br/>
            <p>
                Note: I am currently building a small webservice to display my wanted items here. Amazon has sadly shut down its wishlist API.
            </p>
            <h3>Books</h3>
            <p>Thanks to <b>Open Library</b>, you can find a list of books I want to read below</p>
            <ul>
            {
                data?.reading_log_entries.map(entry => (
                    <li key={entry.work.title + "---" + entry.work.author_names[0]}>- {entry.work.title} by {entry.work.author_names[0]} ({entry.work.first_publish_year})</li>
                ))
            }
            </ul>
        </div>
    )
}

export default Gifts;