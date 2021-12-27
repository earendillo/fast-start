import React from 'react';
import { useStoreon } from 'storeon/react';
import { Article } from '../../modules/content/content.state';
import {
    ContentLabel,
    ContentTile,
} from '../contentTile/contentTile.component';
import './articles.component.scss';

export function Articles(): JSX.Element {
    const { content } = useStoreon('content');

    function renderArticles(): JSX.Element {
        if (!content || !content.articles.length) {
            return <div>No data</div>;
        }

        return content.articles.map((article: Article, index: number) => (
            <ContentTile
                key={index + article.title}
                contentItem={article}
                contentLabel={ContentLabel.Article}
            />
        ));
    }

    return (
        <div className="articles-component">
            <h2>Articles</h2>
            <div className="articles-content-container">{renderArticles()}</div>
        </div>
    );
}
