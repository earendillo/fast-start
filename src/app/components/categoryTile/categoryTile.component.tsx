import React from 'react';
import { useStoreon } from 'storeon/react';
import { useEffect } from 'react';
import { ContentItem } from '../../modules/content/content.state';
import './categoryTile.component.scss';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator.component';

export interface CategoryTileProps {
    categoryHeader: CategoryHeader;
    categoryItem: ContentItem;
    categoryRoute: CategoryRoute;
    contentLabel: ContentLabel;
}

export enum CategoryRoute {
    'articles',
    'blogs',
    'reports',
}

export enum ContentLabel {
    'Article',
    'Blog',
    'Report',
}

export enum CategoryHeader {
    'Articles',
    'Blogs',
    'Reports',
}

export function CategoryContent(): JSX.Element {
    const { content } = useStoreon('content');

    useEffect(() => {}, [content.pending]);

    // if (content.pending) {
    //     return <LoadingIndicator />;
    // }

    if (!content || !content.articles.length) {
        return <LoadingIndicator />;
    }

    function renderCategoryHeader({
        categoryHeader: CategoryHeader,
        index: number,
    }) {
        return <h2>{CategoryHeader[categoryHeader]}</h2>;
    }

    function renderCategoryTile({
        categoryItem,
        categoryRoute,
        contentLabel,
    }): CategoryTileProps {
        return content.categoryRoute.map(
            (categoryRoute: CategoryRoute, index: number) => (
                <CategoryTile
                    key={index + CategoryRoute[categoryRoute].title}
                    contentItem={CategoryRoute[categoryRoute]}
                    contentLabel={ContentLabel[contentLabel]}
                />
            )
        );
    }

    return (
        <div className="category-component">
            <div className="category-header">{renderCategoryHeader(categoryHeader)}</div>
            <div className="category-content-container">
                {renderCategoryTile(categoryRoute, categoryLabel)}
            </div>
        </div>
    );
}
