import React, { useEffect } from 'react';

import { useStoreon } from 'storeon/react';

import './aboutPage.component.scss';
import { List } from '../list/list.component';
import rocket from '../../images/rocket.svg';

export function AboutPage(): JSX.Element {
    const { config } = useStoreon('config');
    useEffect(() => {}, [config]);

    return (
        <div className="about-page-items">
            <h2>About page</h2>
            <section className="about-page-item-title">
                <img alt="White rocket that moves on hover" src={rocket} />
                <h3>Some reasons to keep on track with spaceflights</h3>
            </section>
            <List listItems={config.staticContent.aboutPage.facts} />
            <section className="about-page-item-title">
                <img alt="White rocket that moves on hover" src={rocket} />
                <h3>We provide fresh content</h3>
            </section>
            <List listItems={config.staticContent.aboutPage.contentTypes} />
            <section className="about-page-item-title">
                <img alt="White rocket that moves on hover" src={rocket} />
                <h3>Our mission and core values</h3>
            </section>
            <List listItems={config.staticContent.aboutPage.missionAndValues} />
            <section className="about-page-item-title">
                <img alt="White rocket that moves on hover" src={rocket} />
                <h3>Our team</h3>
            </section>
            <List listItems={config.staticContent.aboutPage.team} />
        </div>
    );
}
