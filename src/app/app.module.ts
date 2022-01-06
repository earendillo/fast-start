import { StoreonModule, StoreonStore } from 'storeon';
import { createSubstore } from 'storeon-substore';
import { AppStore } from './app.store';
import { AppGlobalEvents, AppInitEvent } from './app.events';
import { APP_STORE_KEY, AppGlobalState, WithAppGlobalState } from './app.state';


export type AppGlobalStore = StoreonStore<AppGlobalState, AppGlobalEvents>;
export type AppGlobalModule = StoreonModule<
    WithAppGlobalState,
    AppGlobalEvents
>;

export function getAppModule(): StoreonModule<any> {
    return (store: AppStore): void => {
        const appStore: AppGlobalStore = createSubstore(
            store,
            APP_STORE_KEY
        ) as AppStore;

        appStore.on('@init', () => {
            appStore.dispatch(AppInitEvent);
        });

        appStore.on(AppInitEvent, (state) => state || {});
    };
}
