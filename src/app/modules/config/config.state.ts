import { CONFIG_STORE_KEY } from './config.module';
//!!!
export type ConfigItem = ConfigSection;

export enum ConfigLabel {
    'Facts',
    'ContentTypes',
    'MissionAndValues',
    'Team'
}
//!!!
export interface ConfigSection {
    headerContent: string;
    data: Array<ConfigSectionData>;
}

export interface ConfigSectionData {
    iconName: string;
    iconClassName: string;
    alt: string;
    iconSource: string;
    href: string;
    content: string;
}

export interface ConfigState {
    // aboutPage?: Object<any> | null;
    aboutPage?: any | null;
    error?: Error | null;
    pending?: boolean;
}

export interface WithConfigState {
    readonly [CONFIG_STORE_KEY]: ConfigState;
}

export type Facts = ConfigItem & {
    href: string;
};

export type ContentTypes = ConfigItem;

export type MissionAndValues = ConfigItem;

export type Team = ConfigItem & {
    href: string;
};;
