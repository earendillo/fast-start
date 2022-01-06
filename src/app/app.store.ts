import { createStoreon, StoreonStore } from 'storeon';
import { AppState } from './app.state';
import { AppEvents } from './app.events';
import { getAppModule } from './app.module';
import { getContentModule } from './modules/content/content.module';
import { getConfigModule } from './modules/config/config.module';

export type AppStore = StoreonStore<AppState, AppEvents>;

export function createStore(): AppStore {
    return createStoreon<AppState, AppEvents>([
        getAppModule(),
        getContentModule(),
        getConfigModule()
    ]);
}
