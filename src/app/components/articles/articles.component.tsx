import React from 'react';
import { useStoreon } from 'storeon/react';
import { Article } from '../../modules/articles/articles.state';
import './articles.component.scss';

export function Articles() {
    const { articles } = useStoreon('articles');

    return (
        <div style={{ backgroundColor: 'pink' }}>
            <h2>Articles</h2>
            {articles &&
                //props && props.children && props.children.value instead props?.children?.value
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
