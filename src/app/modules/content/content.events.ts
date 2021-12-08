import { Article, Report, Blog } from './content.state';

export const ContentInitEvent = Symbol('Content Init')
export const ReportsInitEvent = Symbol('Reports Init');
export const FetchReportsEvent = Symbol('Fetch Reports');
export const FetchReportsEndedEvent = Symbol('Fetch Reports Ended');
export const ArticlesInitEvent = Symbol('Articles Init');
export const FetchArticlesEvent = Symbol('Fetch Articles');
export const FetchArticlesEndedEvent = Symbol('Fetch Articles Ended');
export const BlogsInitEvent = Symbol('Blogs Init');
export const FetchBlogsEvent = Symbol('Fetch Blogs');
export const FetchBlogsEndedEvent = Symbol('Fetch Blogs Ended');
export const FetchDashboardDataEvent = Symbol('Fetch Dashboard Data');
export const FetchDashboardDataEndedEvent = Symbol('Fetch Dashboard Data Ended');
export const SetPendingEvent = Symbol('Set Pending');

export type ContentInitEvent = void;

export type ReportsInitEvent = void;
export type FetchReportsEvent = void;
export type FetchReportsEndedEvent = {
    reports?: Array<Report> | null;
    error?: Error | null;
};
export type ArticlesInitEvent = void;
export type FetchArticlesEvent = void;
export type FetchArticlesEndedEvent = {
    articles?: Array<Article> | null;
    error?: Error | null;
};
export type BlogsInitEvent = void;
export type FetchBlogsEvent = void;
export type FetchBlogsEndedEvent = {
    blogs?: Array<Blog> | null;
    error?: Error | null;
};

export type FetchDashboardDataEvent = void;
export type FetchDashboardDataEndedEvent = {
    articles?: Array<Article> | null;
    blogs?: Array<Blog> | null;
    reports?: Array<Report> | null;
    error?: Error | null;
}

export type SetPendingEvent = {
    pending: boolean;
}

export interface ContentEvents {
    [ContentInitEvent]: ContentInitEvent;
    [ReportsInitEvent]: ReportsInitEvent;
    [FetchReportsEvent]: FetchReportsEvent;
    [FetchReportsEndedEvent]: FetchReportsEndedEvent;
    [ArticlesInitEvent]: ArticlesInitEvent;
    [FetchArticlesEvent]: FetchArticlesEvent;
    [FetchArticlesEndedEvent]: FetchArticlesEndedEvent;
    [BlogsInitEvent]: BlogsInitEvent;
    [FetchBlogsEvent]: FetchBlogsEvent;
    [FetchBlogsEndedEvent]: FetchBlogsEndedEvent;
    [FetchDashboardDataEvent]: FetchDashboardDataEvent;
    [FetchDashboardDataEndedEvent]: FetchDashboardDataEndedEvent;
    [SetPendingEvent]: SetPendingEvent;
}









