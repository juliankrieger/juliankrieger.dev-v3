import capitalize from "capitalize";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const OPEN_LIBRARY_URL = "https://openlibrary.org/people/juliankrieger/books/want-to-read.json";

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

interface BookEntryProps {
    entry: OpenLibraryResponse['reading_log_entries'][0];
}

const BookEntry: React.FC<BookEntryProps> = ({entry}) => {
    const title = entry.work.title;
    const author = entry.work.author_names[0];
    const publishedDate = entry.work.first_publish_year;

    const formattedTitle = capitalize.words(title);
    
    const searchString = title + " " + author;
    const normalizedSearchString = searchString.replace(/[^a-zA-Z0-9 ]/g, " "); 
    const searchWords = normalizedSearchString.split(" ").map(w => w.toLowerCase()).join("+");

    return (
        <li key={title + "---" + author}>
            - <a href={`https://www.amazon.de/-/en/s?k=${searchWords}&dm=true&language=en`}>{formattedTitle}</a> by {author} ({publishedDate})
        </li>
    );
}

interface BooksProps {
    data: OpenLibraryResponse['reading_log_entries']
}

export const Books: React.FC<BooksProps> = ({data}) => {

    //console.log(data);

    return (
        <div>
            <h2>Books</h2>
            <p>
                If you are looking to gift me something (for whatever reason), you can find <Link href={"https://www.amazon.de/hz/wishlist/ls/DI5WT15AHPLM?ref_=wl_share"}>my Amazon wish list here</Link>
            </p>
            <br/>
            <p>
                Note: I am currently building a small webservice to display my wanted items here. Amazon has sadly shut down its wishlist API.
            </p>
            <h3>Books</h3>
            <p>Thanks to <b>Open Library</b>, you can find a list of books I want to read below: </p>
            <ul>
            {
                data.map(entry => <BookEntry entry={entry} key={entry.work.title + entry.work.author_names[0]} />)
            }
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(OPEN_LIBRARY_URL);
    const books: OpenLibraryResponse = await res.json();

    const sortedBooks = books.reading_log_entries.sort((a, b) => a.work.title.localeCompare(b.work.title))

    return {
        props: {
            data: sortedBooks
        },

        revalidate: 60 * 60 * 12 // every half day
    }
}

export default Books;