import { StoreonModule, StoreonStore } from 'storeon';
import { createSubstore } from 'storeon-substore';
import { ConfigState, WithConfigState } from '../config/config.state';
import { ConfigEvents } from './config.events'

export type ConfigStore = StoreonStore<ConfigState, ConfigEvents>;
export type ConfigModule = StoreonModule<WithConfigState, ConfigEvents>;

export const CONFIG_STORE_KEY = 'config';
export const configInitState = {
    aboutPage: {},
    error: null,
    pending: false,
};

export function getConfigModule(): StoreonModule<any> {
    return (store: StoreonStore<WithConfigState, ConfigEvents>): void => {
        const configStore = createSubstore(
            store,
            CONFIG_STORE_KEY
        ) as ConfigStore;

        configStore.on('@init', () => {
            return {
                pending: true,
            };
        });
    };
}
