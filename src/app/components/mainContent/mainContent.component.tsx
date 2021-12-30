import './mainContent.component.scss';
import { CategoryItems } from '../categoryItems/categoryItems.component';
import { ContentLabel } from '../../modules/content/content.state';
import { Fragment } from 'react';
import { LandingPage } from '../landingPage/landingPage.component';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import { useEffect } from 'react';
import { useStoreon } from 'storeon/react';

export function MainContent(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }

    if (content.error) {
        return <div>Content error occured.</div>;
    }

    return (
        <Fragment>
            <LandingPage />
            <div className="main-content-container">
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
