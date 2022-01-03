import React, { useEffect } from 'react';

import { useStoreon } from 'storeon/react';

import './aboutPage.component.scss';
import { AboutPageItems } from '../aboutPageItems/aboutPageItems.component';
import { ConfigLabel } from '../../modules/config/config.state';
import { ErrorInfo } from '../errorInfo/errorInfo.component';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';

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
            <AboutPageItems items={config.aboutPage}
                label={ConfigLabel.Facts} />
            <AboutPageItems items={config.aboutPage}
                label={ConfigLabel.ContentTypes}/>
            <AboutPageItems items={config.aboutPage}
                label={ConfigLabel.MissionAndValues}/>
            <AboutPageItems items={config.aboutPage}
                label={ConfigLabel.Team}/>
        </div>

            
    );
}
