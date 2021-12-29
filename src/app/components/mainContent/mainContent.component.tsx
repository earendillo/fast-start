import './mainContent.component.scss';
import { CategoryItems } from '../categoryItems/categoryItems.component';
import { ContentLabel } from '../../modules/content/content.state';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';
import { useEffect } from 'react';
import { useStoreon } from 'storeon/react';

export function MainContent(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    if (content.pending) {
        return <LoadingIndicator />;
    }
    if (content.articles.length) {
        //articles in content.articles.length - to change -> content.length?
        return (
            content && (
                <div className="main-content-container" id="main-content">
                    <div className="category-items">
                        <CategoryItems
                            categoryItems={content.articles?.slice(0, 2)}
                            label={ContentLabel.Article}
                            specifiedLength={120}
                        />
                    </div>
                    <div className="category-items">
                        <CategoryItems
                            categoryItems={content.reports?.slice(0, 2)}
                            label={ContentLabel.Report}
                            specifiedLength={120}
                        />
                    </div>
                    <div className="category-items">
                        <CategoryItems
                            categoryItems={content.blogs?.slice(0, 2)}
                            label={ContentLabel.Blog}
                            specifiedLength={120}
                        />
                    </div>
                </div>
            )
        );
    }
    return <div></div>;
}
