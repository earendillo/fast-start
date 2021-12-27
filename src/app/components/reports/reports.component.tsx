import React from 'react';
import { useStoreon } from 'storeon/react';
import { useEffect } from 'react';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import { ContentLabel } from '../../modules/content/content.state';
import { CategoryItems } from '../categoryItems.component.tsx/categoryItems.component';
import './reports.component.scss';

export function Reports(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }
    if (content.reports.length) {
        return (
            content && (
                <div className="reports-content">
                    <h2>Reports</h2>
                    <CategoryItems
                        categoryItems={content.reports}
                        label={ContentLabel.Report}
                        summaryLength={500}
                    />
                </div>
            )
        );
    }
    return <div></div>;
}
