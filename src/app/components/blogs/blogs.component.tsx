import React from 'react';
import { useStoreon } from 'storeon/react';
import { useEffect } from 'react';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import { ContentLabel } from '../../modules/content/content.state';
import { CategoryItems } from '../categoryItems/categoryItems.component';
import './blogs.component.scss';

export function Blogs() {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }

    if (content.error) {
        return <div>Content error occured.</div>;
    }

    return (
        <div className="blogs-content">
            <h2>Blogs</h2>
            <CategoryItems
                categoryItems={content.blogs}
                label={ContentLabel.Blog}
                length={500}
            />
        </div>
    );
}
