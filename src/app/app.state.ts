import { WithReportsState } from './modules/reports/reports.state';
import { WithArticlesState } from './modules/articles/articles.state';

export const APP_STORE_KEY = 'app' as const;

export interface AppState
    extends WithAppGlobalState,
        WithReportsState,
        WithArticlesState {}

export interface AppGlobalState {}

export interface WithAppGlobalState {
    [APP_STORE_KEY]: AppGlobalState;
}

declare global {
    interface Window {
        APP_STATE: AppState;
    }
}
