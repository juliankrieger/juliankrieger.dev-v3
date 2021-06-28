export interface Post {
    id: string;
    date: Date;
    slug: string;
    title: string;
    fullPath: string;
    fileContents: string;
    draft: boolean;
}