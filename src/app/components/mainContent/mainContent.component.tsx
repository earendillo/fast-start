import { useStoreon } from 'storeon/react';
import { useEffect } from 'react';
import { ContentLabel } from '../../modules/content/content.state';
import './mainContent.component.scss';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import { CategoryItems } from '../categoryItems.component.tsx/categoryItems.component';

export function MainContent(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }
    if (content.articles.length) {
        return (
            content && (
                <div className="main-content-container">
                    <div className="category-items">
                        <CategoryItems
                            categoryItems={content.articles?.slice(0, 3)}
                            label={ContentLabel.Article}
                            summaryLength={120}
                        />
                    </div>
                    <div className="category-items">
                        <CategoryItems
                            categoryItems={content.reports?.slice(0, 3)}
                            label={ContentLabel.Report}
                            summaryLength={120}
                        />
                    </div>
                    <div className="category-items">
                        <CategoryItems
                            categoryItems={content.blogs?.slice(0, 3)}
                            label={ContentLabel.Blog}
                            summaryLength={120}
                        />
                    </div>
                </div>
            )
        );
    }
    return <div></div>;
}
