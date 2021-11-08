import { ARTICLES_STORE_KEY } from './articles.module';

export interface ArticlesState {
    articles?: Array<Article> | null;
    error?: Error | null;
}

export interface Article {
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

export interface WithArticlesState {
    readonly [ARTICLES_STORE_KEY]: ArticlesState;
}
