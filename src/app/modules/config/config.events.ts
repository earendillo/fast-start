export const ConfigInitEvent = Symbol('Config Init');

export type ConfigInitPayload = {
    aboutPage: any;
}

export interface ConfigEvents {
    [ConfigInitEvent]: ConfigInitPayload;
}
