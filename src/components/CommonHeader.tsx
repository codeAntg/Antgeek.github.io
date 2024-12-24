import React,{ useEffect, useState } from 'react';
import '../styles/Header.css'
import { Layout } from 'antd';
import {URL} from '../common/GlobleConfig'

const { Header, Content} = Layout;

const headerContentStyle: React.CSSProperties = {
    height: 95,
    padding : '0 10%',
    display: "flex",
    flexDirection: 'row',
}

const CommonHeader: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const headerStyle: React.CSSProperties = {
            position: 'fixed',
            textAlign: 'center',
            color: '#000',
            height: 95,
            width: '100%',
            backgroundColor: isScrolled? 'white' : 'transparent',
        };
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Header style={headerStyle}>
            <Content style={headerContentStyle}>
                {/*头像位置*/}
                <Content className={"h-left"}><a href={URL.blog}></a></Content>
                {/*导航栏*/}
                <Content className={"h-middle"}>
                    <ul>
                        <li>博客</li>
                        <li>成就</li>
                        <li>关于我</li>
                    </ul>
                </Content>
                {/*联系方式*/}
                <Content className={"h-right"}>
                    <a href={URL.github} target="_blank">github</a>
                    <p>en/ch</p>
                </Content>
            </Content>
        </Header>
    );
};

export default CommonHeader;