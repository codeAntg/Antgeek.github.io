import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BlogList.css';
import { Tag } from 'antd';
import { getTagColor } from '../utils/common';

const BlogList: React.FC = () => {
    const navigate = useNavigate();

    const blogs = [
        {
            id: 1,
            title: 'Blog Title 1BlogBlog Title 1BlogBlog Title 1BlogBlog Title 1Blog',
            description: 'This is a short description of blog 1.This is a short description of blog 1.This is a short description of blog 1.This is a short description of blog 1.',
            date: '2023-10-01',
            tags: ['React', 'JavaScript', 'Java', 'Node', 'Python'],
            image: '/images/blog/logo.png'
        },
        {
            id: 2,
            title: 'Blog Title 2',
            description: 'This is a short description of blog 2.',
            date: '2023-10-02',
            tags: ['TypeScript', 'CSS']
        },
        {
            id: 3,
            title: 'Blog Title 2',
            description: 'This is a short description of blog 2.',
            date: '2023-10-02',
            tags: ['TypeScript', 'CSS'],
            image: '/images/blog/logo-white.png'
        },
        {
            id: 4,
            title: 'Blog Title 2',
            description: 'This is a short description of blog 2.',
            date: '2023-10-02',
            tags: ['TypeScript', 'CSS'],
            image: 'path/to/image2.jpg'
        },
        {
            id: 5,
            title: 'Blog Title 2',
            description: 'This is a short description of blog 2.',
            date: '2023-10-02',
            tags: ['TypeScript', 'CSS'],
            image: 'path/to/image2.jpg'
        },
        {
            id: 6,
            title: 'Blog Title 2',
            description: 'This is a short description of blog 2.',
            date: '2023-10-02',
            tags: ['TypeScript', 'CSS'],
            image: 'path/to/image2.jpg'
        },
        {
            id: 7,
            title: 'Blog Title 2',
            description: 'This is a short description of blog 2.',
            date: '2023-10-02',
            tags: ['TypeScript', 'CSS'],
            image: 'path/to/image2.jpg'
        },
        {
            id: 8,
            title: 'Blog Title 2',
            description: 'This is a short description of blog 2.',
            date: '2023-10-02',
            tags: ['TypeScript', 'CSS'],
            image: 'path/to/image2.jpg'
        },
        {
            id: 9,
            title: 'Blog Title 2',
            description: 'This is a short description of blog 2.',
            date: '2023-10-02',
            tags: ['TypeScript', 'CSS'],
            image: 'path/to/image2.jpg'
        },
        {
            id: 10,
            title: 'Blog Title 2',
            description: 'This is a short description of blog 2.',
            date: '2023-10-02',
            tags: ['TypeScript', 'CSS'],
            image: 'path/to/image2.jpg'
        },
        {
            id: 11,
            title: 'Blog Title 2',
            description: 'This is a short description of blog 2.',
            date: '2023-10-02',
            tags: ['TypeScript', 'CSS'],
            image: 'path/to/image2.jpg'
        },
        {
            id: 12,
            title: 'Blog Title 2',
            description: 'This is a short description of blog 2.',
            date: '2023-10-02',
            tags: ['TypeScript', 'CSS'],
            image: 'path/to/image2.jpg'
        },
        {
            id: 13,
            title: 'Blog Title 2',
            description: 'This is a short description of blog 2.',
            date: '2023-10-02',
            tags: ['TypeScript', 'CSS'],
            image: 'path/to/image2.jpg'
        },
    ];



    const handleBlogClick = (id: number) => {
        navigate(`/blog/${id}`);
    };



    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div key={blog.id} className="blog-item" onClick={() => handleBlogClick(blog.id)}>
                    {blog.image && (
                        <div className="blog-image" style={{backgroundImage: `url(${blog.image})`,minWidth: '30%'}}></div>
                    )}
                    <div className="blog-content">
                        <h2>{blog.title}</h2>
                        <div className="blog-meta">
                            <p className="blog-date">发表于 : {blog.date}</p>
                            <div className="blog-tags">
                                <span>标签 : </span>
                                {blog.tags.map((tag) => (
                                    <Tag key={tag} color={getTagColor(tag)}>
                                        {tag}
                                    </Tag>
                                ))}
                            </div>
                        </div>
                        <p>{blog.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;