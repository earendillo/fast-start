import './articles.component.scss';
import { CategoryItems } from '../categoryItems/categoryItems.component'
import { ContentLabel } from '../../modules/content/content.state';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import { useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import React from 'react';

export function Articles(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }
    if (content.articles.length) {
        return (
            content && (
                <div className="articles-content">
                    <h2>Articles</h2>
                    <div className="articles-items">
                        <CategoryItems
                            categoryItems={content.articles}
                            label={ContentLabel.Article}
                            specifiedLength={500}
                        />
                    </div>
                </div>
            )
        );
    }
    return <div></div>;
}
