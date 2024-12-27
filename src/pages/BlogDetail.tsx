import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Tag, Typography } from 'antd';
import BlogHeader from '../components/BlogHeader';
import '../styles/BlogDetail.css';
import ReactMarkdown from 'react-markdown';
import BackToTopButton from "../components/BackToTopButton";
import BlogFooter from "../components/BlogFooter";
import Sidebar from '../components/Sidebar';

const { Content } = Layout;
const { Title, Text } = Typography;

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Fetch blog details using the id (mock data for now)
    const blog = {
        title: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
        date: '2023-10-01',
        tags: ['React', 'TypeScript', 'CSS'],
        column: 'Tech',
        content: '```This is the content of the blog post...```\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123\n\n123'
    };

    return (
        <Layout className={"blog-detail"}>
            <BlogHeader colorChaneFlag={false}/>
            <Content className="blog-detail-container">
                <div className="blog-detail-content">
                    <Title level={1}>{blog.title}</Title>
                    <div className="blog-meta">
                        <Text>发表于 : {blog.date}</Text>
                        <div>
                            <span>标签 :  </span>
                            {blog.tags.map(tag => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </div>
                        <Text>专栏 :  {blog.column}</Text>
                    </div>
                    <div className="blog-body">
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>
                </div>
                <div className="blog-sidebar">
                    <Sidebar />
                </div>
            </Content>
            <BackToTopButton/>
            <BlogFooter/>
        </Layout>
    );
};

export default BlogDetail;