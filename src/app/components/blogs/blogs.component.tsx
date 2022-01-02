import React, { useEffect } from 'react';

import { useStoreon } from 'storeon/react';

import './blogs.component.scss';
import { CategoryItems } from '../categoryItems/categoryItems.component';
import { ContentLabel } from '../../modules/content/content.state';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';

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
        <div className="blogs-items">
            <h2>Blogs</h2>
            <CategoryItems
                categoryItems={content.blogs}
                label={ContentLabel.Blog}
                length={500}
            />
        </div>
    );
}
