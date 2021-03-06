import { StoreonModule, StoreonStore } from 'storeon';
import { createSubstore } from 'storeon-substore';
import {
    ContentEvents,
    ContentInitEvent,
    FetchArticlesEndedEvent,
    FetchArticlesEvent,
    FetchBlogsEndedEvent,
    FetchBlogsEvent,
    FetchDashboardDataEndedEvent,
    FetchDashboardDataEvent,
    FetchReportsEndedEvent,
    FetchReportsEvent,
    SetPendingEvent,
} from './content.events';
import {
    Article,
    Blog,
    ContentState,
    Report,
    WithContentState,
} from './content.state';
import {
    ARTICLES_ROUTE,
    BLOGS_ROUTE,
    DASHBOARD_ROUTE,
    REPORTS_ROUTE,
} from '../../config/consts';

export type ContentStore = StoreonStore<ContentState, ContentEvents>;
export type ContentModule = StoreonModule<WithContentState, ContentEvents>;

export const CONTENT_STORE_KEY = 'content';
export const contentInitState = {
    articles: [],
    blogs: [],
    error: null,
    pending: false,
    reports: []
}

export function getContentModule(): StoreonModule<any> {
    return (store: StoreonStore<WithContentState, ContentEvents>): void => {
        const contentStore = createSubstore(
            store,
            CONTENT_STORE_KEY
        ) as ContentStore;

        contentStore.on('@init', () => {
            contentStore.dispatch(ContentInitEvent, contentInitState);
        });

        const pendingHandler = () => {
            return {
                pending: true
            };
        };

        contentStore.on(ContentInitEvent, (state) => {
            store.dispatch(FetchDashboardDataEvent);
            return state || contentInitState;
        });

        contentStore.on(ContentInitEvent, pendingHandler);

        contentStore.on(FetchDashboardDataEvent, async (state) => {
            try {
                const rawContent = await fetch(DASHBOARD_ROUTE);
                const content: ContentState = await rawContent.json();
                store.dispatch(FetchDashboardDataEndedEvent, {
                    articles: content.articles,
                    blogs: content.blogs,
                    reports: content.reports,
                    error: null,
                });
            } catch (error) {
                store.dispatch(FetchDashboardDataEndedEvent, {
                    articles: null,
                    error: error as Error,
                });
            }
        });

        contentStore.on(
            FetchDashboardDataEndedEvent,
            (state, content): ContentState => {
                
                return {
                    ...state,
                    pending: false,
                    articles: content.articles,
                    blogs: content.blogs,
                    reports: content.reports,
                    error: content.error,
                };
            }
        );

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

        contentStore.on(SetPendingEvent, (state, content) => {
            return {
                ...state,
                pending: content.pending,
            };
        });
    };
}
