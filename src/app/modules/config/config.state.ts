import { CONFIG_STORE_KEY } from './config.module';

export interface ListItem {
    icon: string;
    iconClassName: string;
    alt: string;
    href: any;
    iconSource: string;
    content: string;
};

export interface ConfigState {
    aboutPage: any;
}

export interface WithConfigState {
    readonly [CONFIG_STORE_KEY]: ConfigState;
}
