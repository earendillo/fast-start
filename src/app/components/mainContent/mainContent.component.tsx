import { useStoreon } from 'storeon/react';
import { ContentItem, Report } from '../../modules/content/content.state';
import './mainContent.component.scss';
import { ContentTile } from '../contentItem/contentTile.component';

export function MainContent(): JSX.Element | null {
    const { content } = useStoreon('content');

    if (!content) return null;
    return (
        content && <div className="main-content-container">
            <div className="articles-and-blogs-container">
                <div className="articles-container">
                    {content?.articles[0] && <ContentTile contentItem={content.articles[0]} />}
                </div>
                <div className="blogs-container">
                    {content?.blogs?.length >= 2 &&
                        content.blogs
                            ?.slice(0, 2)
                            .map((blog: ContentItem) => <ContentTile contentItem={blog} />)}
                </div>
            </div>
            <div className="reports-container">
                {content &&
                    content.reports
                        ?.slice(0, 4)
                        .map((report: Report, index: number) => (
                            <div
                                className="report-item"
                                key={`${index}_${report.newsSite}_${report.id}`}
                            >
                                <div className="report-item-898+65">
                                    <p>{report.newsSite}</p>
                                </div>
                                <div className="report-item-summary">
                                    <p>{report.summary}</p>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
}
