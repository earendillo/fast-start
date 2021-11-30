import { BLOGS_STORE_KEY } from './blogs.module';

export interface BlogsState {
    blogs?: Array<Blog> | null;
    error?: Error | null;
}

export interface Blog {
    id: number;
    imageUrl: string;
    newsSite: string;
    publishedAt: string;
    summary: string;
    title: string;
    updatedAt: string;
    url: string;
    featured: boolean;
    launches: Array<any>;
    events: Array<any>;
}

export interface WithBlogsState {
    readonly [BLOGS_STORE_KEY]: BlogsState;
}