import { Facts, ContentTypes, MissionAndValues, Team } from './config.state';

export const ConfigInitEvent = Symbol('Config Init');

export type ConfigInitEvent = {
    aboutPage: any | null;
    //any do zmiany
    error: Error | null;
    pending: boolean;
}

export interface ConfigEvents {
    [ConfigInitEvent]: ConfigInitEvent;
}