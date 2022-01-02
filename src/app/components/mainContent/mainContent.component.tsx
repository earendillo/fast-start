import React, { Fragment, useEffect } from 'react';

import { useStoreon } from 'storeon/react';

import './mainContent.component.scss';
import { CategoryItems } from '../categoryItems/categoryItems.component';
import { ContentLabel } from '../../modules/content/content.state';
import { ErrorInfo } from '../errorInfo/errorInfo.component';
import { LandingPage } from '../landingPage/landingPage.component';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';

export function MainContent(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }

    if (content.error) {
        return <ErrorInfo />;
    }

    return (
        <Fragment>
            <LandingPage />
            <div id="main-content" className="main-content-container">
                <h2>Latest news</h2>
                <div className="category-items">
                    <CategoryItems
                        categoryItems={content.articles?.slice(0, 2)}
                        label={ContentLabel.Article}
                        length={120}
                    />
                </div>
                <div className="category-items">
                    <CategoryItems
                        categoryItems={content.reports?.slice(0, 2)}
                        label={ContentLabel.Report}
                        length={120}
                    />
                </div>
                <div className="category-items">
                    <CategoryItems
                        categoryItems={content.blogs?.slice(0, 2)}
                        label={ContentLabel.Blog}
                        length={120}
                    />
                </div>
            </div>
        </Fragment>
    );
}
