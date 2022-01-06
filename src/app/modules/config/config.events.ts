import { AboutPage } from '../config/config.state';

export const ConfigInitEvent = Symbol('Config Init');

export type ConfigInitPayload = {
    aboutPage: AboutPage;
}

export interface ConfigEvents {
    [ConfigInitEvent]: ConfigInitPayload;
}
