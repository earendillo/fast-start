import './blogs.component.scss';
import { CategoryItems } from '../categoryItems/categoryItems.component';
import { ContentLabel } from '../../modules/content/content.state';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import { useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import React from 'react';

export function Blogs() {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }
    if (content.blogs.length) {
        return (
            content && (
                <div className="blogs-content">
                    <h2>Blogs</h2>
                    <CategoryItems
                        categoryItems={content.blogs}
                        label={ContentLabel.Blog}
                        specifiedLength={500}
                    />
                </div>
            )
        );
    }
    return <div></div>;
}
