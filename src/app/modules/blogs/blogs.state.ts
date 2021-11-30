import { BLOGS_STORE_KEY } from './blogs.module';

export interface BlogsState {
    blogs?: Array<Blog> | null;
    error?: Error | null;
}

export interface Blog {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    updatedAt: string;
    launches: Array<any>;
    events: Array<any>;
}

export interface WithBlogsState {
    readonly [BLOGS_STORE_KEY]: BlogsState;
}