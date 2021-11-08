import { REPORTS_STORE_KEY } from './reports.module';

export interface ReportsState {
    reports?: Array<Report> | null;
    error?: Error | null;
}

export interface Report {
    id: number;
    imageUrl: string;
    newsSite: string;
    publishedAt: string;
    summary: string;
    title: string;
    updatedAt: string;
    url: string;
}

export interface WithReportsState {
    readonly [REPORTS_STORE_KEY]: ReportsState;
}
