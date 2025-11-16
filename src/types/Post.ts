// Post Interface
export type Post = {
    id: string;
    title: string;
    slug: string;
    date_created: string;
    category: Category[];
    page_description: string;
    author: Author;
    cover: {
        id: string;
        filename_download: string;
    }
    cover_alt_text: string;
    post_content: string;
}
export type Category = {
    id: string;
    title: string;
    description: string;
}
export type Author = {
    name: string;
    thumbnail: {
        id: string;
        filename_download: string;
    }
}