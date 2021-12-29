import './reports.component.scss';
import { CategoryItems } from '../categoryItems/categoryItems.component';
import { ContentLabel } from '../../modules/content/content.state';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import { useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import React from 'react';

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
                        specifiedLength={500}
                    />
                </div>
            )
        );
    }
    return <div></div>;
}
