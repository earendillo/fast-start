import { WithContentState } from './modules/content/content.state';
import { WithConfigState } from './modules/config/config.state';

export const APP_STORE_KEY = 'app' as const;

export interface AppState
    extends WithAppGlobalState,
        WithContentState,
        WithConfigState {}

export interface AppGlobalState {}

export interface WithAppGlobalState {
    [APP_STORE_KEY]: AppGlobalState;
}

declare global {
    interface Window {
        APP_STATE: AppState;
    }
}
