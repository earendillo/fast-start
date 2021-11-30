import { StoreonModule, StoreonStore } from 'storeon';
import { createSubstore } from 'storeon-substore';
import {
    FetchBlogsEndedEvent,
    FetchBlogsEvent,
    BlogsEvents,
    BlogsInitEvent,
} from './blogs.events';
import { WithBlogsState, BlogsState, Blog } from './blogs.state';
import { BLOGS_ROUTE } from '../../config/consts';

export type BlogsStore = StoreonStore<BlogsState, BlogsEvents>;
export type BlogsModule = StoreonModule<WithBlogsState, BlogsEvents>;

export const BLOGS_STORE_KEY = 'blogs';

export function getBlogsModule(): StoreonModule<any> {
    return (store: StoreonStore<WithBlogsState, BlogsEvents>): void => {
        const BlogsStore = createSubstore(
            store,
            BLOGS_STORE_KEY
        ) as BlogsStore;

        BlogsStore.on('@init', () => {
            BlogsStore.dispatch(BlogsInitEvent);
        });

        BlogsStore.on(BlogsInitEvent, () =>
            store.dispatch(FetchBlogsEvent)
        );
        BlogsStore.on(FetchBlogsEvent, async () => {
            try {
                const rawBlogs = await fetch(BLOGS_ROUTE);
                const result: Array<Blog> = await rawBlogs.json();
                store.dispatch(FetchBlogsEndedEvent, {
                    blogs: result,
                    error: null,
                });
            } catch (error) {
                store.dispatch(FetchBlogsEndedEvent, {
                    blogs: null,
                    error: error as Error,
                });
            }
        });

        BlogsStore.on(FetchBlogsEndedEvent, (state, data): BlogsState => {
            return {
                ...state,
                blogs: data.blogs,
                error: data.error,
            };
        });
    };
}