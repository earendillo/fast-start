import { StoreonModule, StoreonStore } from 'storeon';
import { createSubstore } from 'storeon-substore';
import {
    FetchArticlesEvent,
    FetchArticlesEndedEvent,
    ArticlesInitEvent,
    ArticlesEvents,
} from './articles.events';
import { WithArticlesState, ArticlesState, Article } from './articles.state';
import { ARTICLES_ROUTE } from '../../config/consts';

export type ArticlesStore = StoreonStore<ArticlesState, ArticlesEvents>;
export type ArticlesModule = StoreonModule<WithArticlesState, ArticlesEvents>;

export const ARTICLES_STORE_KEY = 'articles';

export function getArticlesModule(): StoreonModule<any> {
    return (store: StoreonStore<WithArticlesState, ArticlesEvents>): void => {
        const articlesStore = createSubstore(
            store,
            ARTICLES_STORE_KEY
        ) as ArticlesStore;

        articlesStore.on('@init', () => {
            articlesStore.dispatch(ArticlesInitEvent);
        });

        articlesStore.on(ArticlesInitEvent, () =>
            store.dispatch(FetchArticlesEvent)
        );
        articlesStore.on(FetchArticlesEvent, async () => {
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

        articlesStore.on(FetchArticlesEndedEvent, (state, data): ArticlesState => {
            return {
                ...state,
                articles: data.articles,
                error: data.error,
            };
        });
    };
}
