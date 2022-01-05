import { CONFIG_STORE_KEY } from './config.module';

export interface ConfigState {
    aboutPage: AboutPage;
}

export interface StaticContentItem {
    icon: string;
    iconClassName: string;
    alt: string;
    href: string | null;
    iconSource: string;
    content: string;
};

export interface WithConfigState {
    readonly [CONFIG_STORE_KEY]: ConfigState;
}

export type AboutPage = {
    facts: Array<StaticContentItem>,
    contentTypes: Array<StaticContentItem>,
    missionAndValues: Array<StaticContentItem>,
    team: Array<StaticContentItem>,
    }
