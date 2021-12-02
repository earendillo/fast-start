import { CONTENT_STORE_KEY } from './content.module';

export interface ContentItem {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    updatedAt: string;
}

export type Report = ContentItem

export type Blog = ContentItem & {
    launches: Array<any>;
    events: Array<any>;
}

export type Article = ContentItem & {
    featured: boolean;
    launches: Array<any>;
    events: Array<any>;
}

export interface ContentState {
    articles?: Array<Article> | null;
    reports?: Array<Report> | null;
    blogs?: Array<Blog> | null;
    error?: Error | null;
}

export interface WithContentState {
    readonly [CONTENT_STORE_KEY]: ContentState;
}



