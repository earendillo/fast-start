import React from 'react';
import { useStoreon } from 'storeon/react';
import { useEffect } from 'react';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import { ContentLabel } from '../../modules/content/content.state';
import { CategoryItems } from '../categoryItems/categoryItems.component';
import './reports.component.scss';

export function Reports(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }

    if (content.error) {
        return <div>Content error occured.</div>;
    }

    return (
        <div className="reports-content">
            <h2>Reports</h2>
            <CategoryItems
                categoryItems={content.reports}
                label={ContentLabel.Report}
                length={500}
            />
        </div>
    );
}
