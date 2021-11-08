import { Report } from './reports.state';

export const ReportsInitEvent = Symbol('Reports Init');
export const FetchReportsEvent = Symbol('Fetch Reports');
export const FetchReportsEndedEvent = Symbol('Fetch Reports Ended');

export type ReportsInitEvent = void;
export type FetchReportsEvent = void;
export type FetchReportsEndedEvent = {
    reports?: Array<Report> | null;
    error?: Error | null;
};

export interface ReportsEvents {
    [ReportsInitEvent]: ReportsInitEvent;
    [FetchReportsEvent]: FetchReportsEvent;
    [FetchReportsEndedEvent]: FetchReportsEndedEvent;
}
