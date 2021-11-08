import { Article } from './articles.state';

export const ArticlesInitEvent = Symbol('Articles Init');
export const FetchArticlesEvent = Symbol('Fetch Articles');
export const FetchArticlesEndedEvent = Symbol('Fetch Articles Ended');

export type ArticlesInitEvent = void;
export type FetchArticlesEvent = void;
export type FetchArticlesEndedEvent = {
    articles?: Array<Article> | null;
    error?: Error | null;
};

export interface ArticlesEvents {
    [ArticlesInitEvent]: ArticlesInitEvent;
    [FetchArticlesEvent]: FetchArticlesEvent;
    [FetchArticlesEndedEvent]: FetchArticlesEndedEvent;
}
