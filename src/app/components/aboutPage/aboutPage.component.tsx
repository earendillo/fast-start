import React, { useEffect } from 'react';

import { useStoreon } from 'storeon/react';

import './aboutPage.component.scss';
import { AboutPageItems } from '../aboutPageItems/aboutPageItems.component';
import { ConfigLabel } from '../../modules/config/config.state';
import { ErrorInfo } from '../errorInfo/errorInfo.component';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';

import blog from '../../images/blog.svg';
import fact from '../../images/fact.svg';
import heart from '../../images/heart.svg';
import interesting from '../../images/interesting.svg';
import news from '../../images/news.svg';
import programmer from '../../images/programmer.svg';
import quality from '../../images/quality.svg';
import reports from '../../images/reports.svg';
import rocket from '../../images/rocket.svg';
import teamMember from '../../images/teamMember.svg';
import tracking from '../../images/tracking.svg';

export function AboutPage(): JSX.Element {
    const { config } = useStoreon('config');

    useEffect(() => {}, [config.pending]);

    if (config.pending) {
        return <LoadingIndicator />;
    }

    if (config.error) {
        return <ErrorInfo />;
    }

    return (
        <div className="about-page-items">
            <h2>About page</h2>
            {/* map */}
            <AboutPageItems
                items={config.aboutPage}
                label={ConfigLabel.Facts}
            />
            <AboutPageItems
                items={config.aboutPage}
                label={ConfigLabel.ContentTypes}
            />
            <AboutPageItems
                items={config.aboutPage}
                label={ConfigLabel.MissionAndValues}
            />
            <AboutPageItems items={config.aboutPage} label={ConfigLabel.Team} />
        </div>
    );
}
