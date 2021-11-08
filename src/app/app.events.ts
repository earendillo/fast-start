export const AppInitEvent = Symbol('App Init');

export type AppInitEvent = void;

export interface AppGlobalEvents {
    [AppInitEvent]: AppInitEvent;
}

export interface AppEvents extends AppGlobalEvents {}
