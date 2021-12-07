import { StoreonModule, StoreonStore } from 'storeon';
import { createSubstore } from 'storeon-substore';
import {
    ContentInitEvent,
    FetchArticlesEvent,
    FetchArticlesEndedEvent,
    FetchBlogsEvent,
    FetchBlogsEndedEvent,
    FetchReportsEndedEvent,
    FetchReportsEvent,
    ContentEvents,
} from './content.events';
import {
    WithContentState,
    ContentState,
    Article,
    Blog,
    Report,
} from './content.state';
import {
    ARTICLES_ROUTE,
    BLOGS_ROUTE,
    REPORTS_ROUTE,
} from '../../config/consts';

export type ArticlesStore = StoreonStore<ContentState, ContentEvents>;
export type ArticlesModule = StoreonModule<WithContentState, ContentEvents>;
export type BlogsStore = StoreonStore<ContentState, ContentEvents>;
export type BlogsModule = StoreonModule<WithContentState, ContentEvents>;
export type ReportsStore = StoreonStore<ContentState, ContentEvents>;
export type ReportsModule = StoreonModule<WithContentState, ContentEvents>;

export const CONTENT_STORE_KEY = 'content';

export function getContentModule(): StoreonModule<any> {
    return (store: StoreonStore<WithContentState, ContentEvents>): void => {
        const contentStore = createSubstore(
            store,
            CONTENT_STORE_KEY
        ) as ArticlesStore;

        contentStore.on('@init', () => {
            contentStore.dispatch(ContentInitEvent);
        });

        contentStore.on(ContentInitEvent, () => {
            store.dispatch(FetchArticlesEvent);
            store.dispatch(FetchReportsEvent);
            store.dispatch(FetchBlogsEvent);
        });

        contentStore.on(FetchArticlesEvent, async () => {
            try {
                const rawArticles = await fetch(ARTICLES_ROUTE);
                const result: Array<Article> = await rawArticles.json();
                store.dispatch(FetchArticlesEndedEvent, {
                    articles: result,
                    error: null,
                });
            } catch (error) {
                store.dispatch(FetchArticlesEndedEvent, {
                    articles: null,
                    error: error as Error,
                });
            }
        });

        contentStore.on(
            FetchArticlesEndedEvent,
            (state, content): ContentState => {
                return {
                    ...state,
                    articles: content.articles,
                    error: content.error,
                };
            }
        );

        contentStore.on(FetchReportsEvent, async () => {
            try {
                const rawReports = await fetch(REPORTS_ROUTE);
                const result: Array<Report> = await rawReports.json();
                store.dispatch(FetchReportsEndedEvent, {
                    reports: result,
                    error: null,
                });
            } catch (error) {
                store.dispatch(FetchReportsEndedEvent, {
                    reports: null,
                    error: error as Error,
                });
            }
        });

        contentStore.on(
            FetchReportsEndedEvent,
            (state, content): ContentState => {
                return {
                    ...state,
                    reports: content.reports,
                    error: content.error,
                };
            }
        );

        contentStore.on(FetchBlogsEvent, async () => {
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

        contentStore.on(
            FetchBlogsEndedEvent,
            (state, content): ContentState => {
                return {
                    ...state,
                    blogs: content.blogs,
                    error: content.error,
                };
            }
        );
    };
}
