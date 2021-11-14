import { StoreonModule, StoreonStore } from 'storeon';
import { createSubstore } from 'storeon-substore';
import {
    FetchReportsEndedEvent,
    FetchReportsEvent,
    ReportsEvents,
    ReportsInitEvent,
} from './reports.events';
import { WithReportsState, ReportsState, Report } from './reports.state';
import { REPORTS_ROUTE } from '../../config/consts';

export type ReportsStore = StoreonStore<ReportsState, ReportsEvents>;
export type ReportsModule = StoreonModule<WithReportsState, ReportsEvents>;

export const REPORTS_STORE_KEY = 'reports';

export function getReportsModule(): StoreonModule<any> {
    return (store: StoreonStore<WithReportsState, ReportsEvents>): void => {
        const reportsStore = createSubstore(
            store,
            REPORTS_STORE_KEY
        ) as ReportsStore;

        reportsStore.on('@init', () => {
            reportsStore.dispatch(ReportsInitEvent);
        });

        reportsStore.on(ReportsInitEvent, () =>
            store.dispatch(FetchReportsEvent)
        );
        reportsStore.on(FetchReportsEvent, async () => {
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

        reportsStore.on(FetchReportsEndedEvent, (state, data) => {
            return {
                ...state,
                reports: data.reports,
                error: data.error,
            };
        });
    };
}
