import React from 'react';
import { Layout } from 'antd';
import {URL} from "../common/GlobleConfig"
const { Footer: Footer} = Layout;
const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#f3f3f3',
};
const BlogFooter: React.FC = () => {
    return (
        <Footer style={footerStyle}>
            Copyright by <a href={URL.github} target="_blank">Antgeek</a>
        </Footer>
    );
};

export default BlogFooter;