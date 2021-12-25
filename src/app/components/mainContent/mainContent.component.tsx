import { useStoreon } from 'storeon/react';
import { useEffect } from 'react';
import { ContentItem } from '../../modules/content/content.state';
import {
    ContentTile,
    ContentLabel,
} from '../contentItem/contentTile.component';
import './mainContent.component.scss';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';

export function MainContent(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }
    if (content?.articles?.length) {
        return (
            content && (
                <div className="main-content-container">
                    <div className="articles-container">
                        {content?.articles.length >= 3 &&
                            content.articles
                                ?.slice(0, 3)
                                .map((article: ContentItem) => (
                                    <ContentTile
                                        contentItem={article}
                                        contentLabel={ContentLabel.Article}
                                    />
                                ))}
                    </div>

                    <div className="reports-container">
                        {content?.reports?.length >= 3 &&
                            content.reports
                                ?.slice(0, 3)
                                .map((report: ContentItem) => (
                                    <ContentTile
                                        contentItem={report}
                                        contentLabel={ContentLabel.Report}
                                    />
                                ))}
                    </div>

                    <div className="blogs-container">
                        {content?.blogs?.length >= 3 &&
                            content.blogs
                                ?.slice(0, 3)
                                .map((blog: ContentItem) => (
                                    <ContentTile
                                        contentItem={blog}
                                        contentLabel={ContentLabel.Blog}
                                    />
                                ))}
                    </div>
                </div>
            )
        );
    }
    return <div>test</div>;
}
