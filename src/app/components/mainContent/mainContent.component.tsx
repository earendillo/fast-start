import { useStoreon } from 'storeon/react';
import { Article, Blog, Report } from '../../modules/content/content.state';
import './mainContent.component.scss';

export function MainContent(): JSX.Element {
    const { content } = useStoreon('content');

    return (
        <div className="main-content-container">
            <div className="articles-and-blogs-container">
                <div className="articles-container">
                    {content &&
                        content.articles
                            ?.slice(0, 1)
                            .map((article: Article, index: number) => (
                                <div
                                    className="article-item"
                                    key={`${index}_${article.newsSite}_${article.id}`}
                                >
                                    <div className="article-item-img-and-title">
                                        <div className="article-item-img">
                                            <img
                                                alt="article pic"
                                                src={`${article.imageUrl}`}
                                            />
                                        </div>
                                        <div className="article-item-title">
                                            <p>{article.newsSite}</p>
                                        </div>
                                    </div>
                                    <div className="article-item-summary">
                                        <p>{article.summary}</p>
                                    </div>
                                </div>
                            ))}
                </div>
                <div className="blogs-container">
                    {content &&
                        content.blogs
                            ?.slice(0, 2)
                            .map((blog: Blog, index: number) => (
                                <div
                                    className="blog-item"
                                    key={`${index}_${blog.newsSite}_${blog.id}`}
                                >
                                    <div className="blog-item-img-and-title">
                                        <div className="blog-item-img">
                                            <img
                                                alt="blog pic"
                                                src={`${blog.imageUrl}`}
                                            />
                                        </div>
                                        <div className="blog-item-title">
                                            <p>{blog.newsSite}</p>
                                        </div>
                                    </div>
                                    <div className="blog-item-summary">
                                        <p>{blog.summary}</p>
                                    </div>
                                </div>
                            ))}
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
