import React, { Fragment, useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import { StaticContentList } from '../staticContentList/staticContentList.component';
import rocket from '../../images/rocket.svg';
import './aboutPage.component.scss';
import { StaticContentItem } from '../../modules/config/config.state';

export function AboutPage(): JSX.Element {
    const { config } = useStoreon('config');
    useEffect(() => {}, [config]);

    function renderStaticContent(
        title: string,
        staticContentListToRender: Array<StaticContentItem>
    ): JSX.Element {
        return (
            <Fragment>
                <section className="about-page-item-title">
                    <img alt="White rocket that moves on hover" src={rocket} />
                    <h3>{title}</h3>
                </section>

                <StaticContentList
                    staticContentListItems={staticContentListToRender}
                />
            </Fragment>
        );
    }

    return (
        <div className="about-page-items">
            <h2>About page</h2>

            {renderStaticContent(
                'Some reasons to keep on track with spaceflights',
                config.staticContent.aboutPage.facts
            )}

            {renderStaticContent(
                'We provide fresh content',
                config.staticContent.aboutPage.contentTypes
            )}

            {renderStaticContent(
                'Our mission and core values',
                config.staticContent.aboutPage.missionAndValues
            )}

            {renderStaticContent(
                'Our team',
                config.staticContent.aboutPage.team
            )}
        </div>
    );
}
