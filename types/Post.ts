export interface Post {
    id: string;
    date: Date;
    slug: string;
    title: string;
    fullPath: string;
    content: string;
    draft: boolean;
}