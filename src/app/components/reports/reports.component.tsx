import React, { useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import { CategoryItems } from '../categoryItems/categoryItems.component';
import { ContentLabel } from '../../modules/content/content.state';
import { ErrorInfo } from '../errorInfo/errorInfo.component';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import './reports.component.scss';

export function Reports(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }

    if (content.error) {
        return <ErrorInfo />;
    }

    return (
        <div className="reports-items">
            <h2>Reports</h2>
            <CategoryItems
                categoryItems={content.reports}
                label={ContentLabel.Report}
                length={500}
            />
        </div>
    );
}
