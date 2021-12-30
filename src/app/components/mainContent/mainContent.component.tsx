import { useStoreon } from 'storeon/react';
import { useEffect } from 'react';
import { ContentLabel } from '../../modules/content/content.state';
import './mainContent.component.scss';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import { CategoryItems } from '../categoryItems/categoryItems.component';

export function MainContent(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }

    if (content.error) {
        return <div>Content error occured.</div>;
    }

    return (
        <div className="main-content-container">
            <div className="category-items">
                <CategoryItems
                    categoryItems={content.articles?.slice(0, 2)}
                    label={ContentLabel.Article}
                    length={120}
                />
            </div>
            <div className="category-items">
                <CategoryItems
                    categoryItems={content.reports?.slice(0, 2)}
                    label={ContentLabel.Report}
                    length={120}
                />
            </div>
            <div className="category-items">
                <CategoryItems
                    categoryItems={content.blogs?.slice(0, 2)}
                    label={ContentLabel.Blog}
                    length={120}
                />
            </div>
        </div>
    );
}
