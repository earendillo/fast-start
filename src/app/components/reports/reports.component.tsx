import React from 'react';
import { useStoreon } from 'storeon/react';
import { Report } from '../../modules/content/content.state';
import './reports.component.scss';
import {
    ContentLabel,
    ContentTile,
} from '../contentTile/contentTile.component';

export function Reports(): JSX.Element {
    const { content } = useStoreon('content');

    function renderReports(): JSX.Element {
        if (!content || !content.reports.length) {
            return <div>No data</div>;
        }

        return content.reports.map((report: Report, index: number) => (
            <ContentTile
                key={index + report.title}
                contentItem={report}
                contentLabel={ContentLabel.Report}
            />
        ));
    }

    return (
        <div className="reports-component">
            <h2>Reports</h2>
            {renderReports()}
        </div>
    );
}
