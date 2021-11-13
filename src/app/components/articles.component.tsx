import React from 'react';
import { useStoreon } from 'storeon/react';
import { Article } from '../modules/articles/articles.state';

export function Articles() {
    const { articles } = useStoreon('articles');

    return (
        <div>
            <h2>Articles</h2>
            {articles &&
                articles.articles?.map((article: Article, index: number) => (
                    <div key={`${index}_${article.newsSite}_${article.id}`}>
                        <p>{article.id}</p>
                        <p>{article.newsSite}</p>
                        <p>{article.summary}</p>
                    </div>
                ))}
        </div>
    );
}
