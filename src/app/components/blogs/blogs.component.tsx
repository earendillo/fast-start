import React from 'react';
import { useStoreon } from 'storeon/react';
import { Blog } from '../../modules/blogs/blogs.state';
import './blogs.component.scss';

export function Blogs() {
    const { blogs } = useStoreon('blogs');

    return (
        <div>
            <h2>Blogs</h2>
            {blogs &&
                blogs.blogs?.map((blog: Blog, index: number) => (
                    <div key={`${index}_${blog.newsSite}_${blog.id}`}>
                        <p>{blog.id}</p>
                        <p>{blog.newsSite}</p>
                        <p>{blog.summary}</p>
                    </div>
                ))}
        </div>
    );
}
