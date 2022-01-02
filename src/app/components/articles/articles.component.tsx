import React, { useEffect } from 'react';

import { useStoreon } from 'storeon/react';

import './articles.component.scss';
import { CategoryItems } from '../categoryItems/categoryItems.component';
import { ContentLabel } from '../../modules/content/content.state';
import { ErrorInfo } from '../errorInfo/errorInfo.component';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';

export function Articles(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }

    if (content.error) {
        return <ErrorInfo />;
    }

    return (
        <div className="articles-items">
            <h2>Articles</h2>
                <CategoryItems
                    categoryItems={content.articles}
                    label={ContentLabel.Article}
                    length={500}
                />
        </div>
    );
}
