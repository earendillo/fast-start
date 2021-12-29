import React from 'react';
import { useStoreon } from 'storeon/react';
import { useEffect } from 'react';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import { ContentLabel } from '../../modules/content/content.state';
import { CategoryItems } from '../categoryItems/categoryItems.component';
import './articles.component.scss';

export function Articles(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }

    if (content.error) {
        return <div>Content error occured.</div>;
    }

    return (
        <div className="articles-content">
            <h2>Articles</h2>
            <div className="articles-items">
                <CategoryItems
                    categoryItems={content.articles}
                    label={ContentLabel.Article}
                    length={500}
                />
            </div>
        </div>
    );
}
