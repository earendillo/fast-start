import { useStoreon } from 'storeon/react';
import { ContentItem } from '../../modules/content/content.state';
import { ContentTile } from '../contentItem/contentTile.component';
import './mainContent.component.scss';

export function MainContent(): JSX.Element | null {
    const { content } = useStoreon('content');

    if (!content) return null;
    return (
        content && (
            <div className="main-content-container">
                <div className="articles-container">
                    {content?.articles.length >= 3 &&
                        content.articles
                            ?.slice(0, 3)
                            .map((article: ContentItem) => (
                                <ContentTile contentItem={article} />
                            ))}
                </div>

                <div className="blogs-container">
                    {content?.blogs?.length >= 3 &&
                        content.blogs
                            ?.slice(0, 3)
                            .map((blog: ContentItem) => (
                                <ContentTile contentItem={blog} />
                            ))}
                </div>

                <div className="reports-container">
                    {content?.reports?.length >= 3 &&
                        content.reports
                            ?.slice(0, 3)
                            .map((report: ContentItem) => (
                                <ContentTile contentItem={report} />
                            ))}
                </div>
            </div>
        )
    );
}
