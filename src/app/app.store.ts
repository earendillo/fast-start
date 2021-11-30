import { createStoreon, StoreonStore } from 'storeon';
import { AppState } from './app.state';
import { AppEvents } from './app.events';
import { getAppModule } from './app.module';
import { getReportsModule } from './modules/reports/reports.module';
import { getArticlesModule } from './modules/articles/articles.module';
import { getBlogsModule } from './modules/blogs/blogs.module';

export type AppStore = StoreonStore<AppState, AppEvents>;

export function createStore(): AppStore {
    return createStoreon<AppState, AppEvents>([
        getAppModule(),
        getReportsModule(),
        getArticlesModule(),
        getBlogsModule(),
    ]);
}
