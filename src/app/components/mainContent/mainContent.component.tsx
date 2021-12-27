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
                    <CategoryItems
                        categoryItems={content.articles?.slice(0, 3)}
                        label={ContentLabel.Article} />
                    <CategoryItems
                        categoryItems={content.reports?.slice(0, 3)}
                        label={ContentLabel.Report} />
                    <CategoryItems
                        categoryItems={content.blogs?.slice(0, 3)}
                        label={ContentLabel.Blog} />
                </div>
            )
        );
    }
    return <div></div>;
}
