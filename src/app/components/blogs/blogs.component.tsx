import React from 'react';
import { useStoreon } from 'storeon/react';
import { Blog } from '../../modules/content/content.state';
import './blogs.component.scss';
import {
    ContentLabel,
    ContentTile,
} from '../contentTile/contentTile.component';

export function Blogs() {
    const { content } = useStoreon('content');

    function renderBlogs(): JSX.Element {
        if (!content || !content.blogs.length) {
            return <div>No data</div>;
        }

        return content.blogs.map((blog: Blog, index: number) => (
            <ContentTile
                key={index + blog.title}
                contentItem={blog}
                contentLabel={ContentLabel.Blog}
            />
        ));
    }

    return (
        <div className="blogs-component">
            <h2>Blogs</h2>
            {renderBlogs()}
        </div>
    );
}
