import React from 'react';
import { useStoreon } from 'storeon/react';
import { Report } from '../../modules/reports/reports.state';
import './reports.component.scss';

export function Reports() {
    const { reports } = useStoreon('reports');

    return (
        <div>
            <h2>Reports</h2>
            {reports &&
                reports.reports?.map((report: Report, index: number) => (
                    <div key={`${index}_${report.newsSite}_${report.id}`}>
                        <p>{report.id}</p>
                        <p>{report.newsSite}</p>
                        <p>{report.summary}</p>
                    </div>
                ))}
        </div>
    );
}
