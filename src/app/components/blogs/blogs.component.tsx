import React from 'react';
import { useStoreon } from 'storeon/react';
import { Blog } from '../../modules/content/content.state';
import './blogs.component.scss';

export function Blogs() {
    const { content } = useStoreon('content');

    return (
        <div>
            <h2>Blogs</h2>
            {content &&
                content.blogs?.map((blog: Blog, index: number) => (
                    <div key={`${index}_${blog.newsSite}_${blog.id}`}>
                        <p>{blog.id}</p>
                        <p>{blog.newsSite}</p>
                        <p>{blog.summary}</p>
                    </div>
                ))}
        </div>
    );
}
