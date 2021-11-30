import { Blog } from './blogs.state';

export const BlogsInitEvent = Symbol('Blogs Init');
export const FetchBlogsEvent = Symbol('Fetch Blogs');
export const FetchBlogsEndedEvent = Symbol('Fetch Blogs Ended');

export type BlogsInitEvent = void;
export type FetchBlogsEvent = void;
export type FetchBlogsEndedEvent = {
    blogs?: Array<Blog> | null;
    error?: Error | null;
};

export interface BlogsEvents {
    [BlogsInitEvent]: BlogsInitEvent;
    [FetchBlogsEvent]: FetchBlogsEvent;
    [FetchBlogsEndedEvent]: FetchBlogsEndedEvent;
}
