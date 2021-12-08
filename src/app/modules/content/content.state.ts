import { CONTENT_STORE_KEY } from './content.module';

export interface ContentItem {
    id: number;
    imageUrl: string;
    newsSite: string;
    publishedAt: string;
    summary: string;
    title: string;
    updatedAt: string;
    url: string;
}

export interface ContentState {
    articles?: Array<Article> | null;
    blogs?: Array<Blog> | null;
    error?: Error | null;
    pending?: boolean;
    reports?: Array<Report> | null;
}


export interface WithContentState {
    readonly [CONTENT_STORE_KEY]: ContentState;
}

export type Article = ContentItem & {
    events: Array<any>;
    featured: boolean;
    launches: Array<any>;
}

export type Blog = ContentItem & {
    events: Array<any>;
    launches: Array<any>;
}

export type Report = ContentItem;
