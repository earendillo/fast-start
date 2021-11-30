import { useStoreon } from 'storeon/react';
import { Article } from '../../modules/articles/articles.state';
import { Report } from '../../modules/reports/reports.state';
import './main.component.scss';

export function MainContent(): JSX.Element {
    const { reports, articles } = useStoreon('reports', 'articles');

    return (
        <div className='main-content-container'>
            <div className="articles-and-blogs-container">
                <div className="articles-container">
                    {articles &&
                        articles.articles
                            ?.slice(0, 1)
                            .map((article: Article, index: number) => (
                                <div
                                    className="article-item"
                                    key={`${index}_${article.newsSite}_${article.id}`}
                                >
                                    <div className="article-item-id">
                                        <p>{article.id}</p>
                                    </div>
                                    <div className="article-item-title">
                                        <p>{article.newsSite}</p>
                                    </div>
                                    <div className="article-item-summary">
                                        <p>{article.summary}</p>
                                    </div>
                                </div>
                            ))}
                </div>
                <div className="blogs-container">
                    <div className="blog-item">{'blog item 1'}</div>
                    <div className="blog-item">{'blog item 2'}</div>
                </div>
            </div>
            <div className="reports-container">
                {reports &&
                    reports.reports
                        ?.slice(0, 4)
                        .map((report: Report, index: number) => (
                            <div
                                className="report-item"
                                key={`${index}_${report.newsSite}_${report.id}`}
                            >
                                <div className="report-item-id">
                                    <p>{report.id}</p>
                                </div>
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
