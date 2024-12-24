import React,{ useEffect, useState } from 'react';
import { Flex, Layout } from 'antd';
import CommonHeader from "../components/CommonHeader";
import CommonFooter from "../components/CommonFooter";
import '../styles/HomePage.css'
import {homepage_text} from "../common/GlobleConfig"

const { Content } = Layout;


const layoutStyle = {
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};

interface HomePageProps {
    // 这里暂时没有额外需要传入的属性，可按需添加，比如是否显示搜索框等功能相关属性
}

const HomePage: React.FC<HomePageProps> = ({}) => {

    return (
        <Flex gap="middle" wrap>
            <Layout style={layoutStyle}>
                <CommonHeader />
                <Layout>
                    <Content className={"homepage-banner"} ><div>{homepage_text}</div></Content>
                </Layout>
                <CommonFooter />
            </Layout>
        </Flex>
    );
};

export default HomePage;