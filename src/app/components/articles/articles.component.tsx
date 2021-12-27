import React from 'react';
import { useStoreon } from 'storeon/react';
import { useEffect } from 'react';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import { ContentLabel } from '../../modules/content/content.state';
import { CategoryItems } from '../categoryItems.component.tsx/categoryItems.component';
import './articles.component.scss';

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
                    <CategoryItems
                        categoryItems={content.articles}
                        label={ContentLabel.Article}
                        summaryLength={500}
                        //zamienić 500 na maksymalną długość summary
                    />
                </div>
            )
        );
    }
    return <div></div>;
}
