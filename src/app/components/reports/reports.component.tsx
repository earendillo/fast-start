import React from 'react';
import { useStoreon } from 'storeon/react';
import { Report } from '../../modules/content/content.state';
import './reports.component.scss';

export function Reports() {
    const { content } = useStoreon('content');

    return (
        <div>
            <h2>Reports</h2>
            {content &&
                content.reports?.map((report: Report, index: number) => (
                    <div key={`${index}_${report.newsSite}_${report.id}`}>
                        <p>{report.id}</p>
                        <p>{report.newsSite}</p>
                        <p>{report.summary}</p>
                    </div>
                ))}
        </div>
    );
}
