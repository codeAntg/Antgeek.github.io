import React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Drawer, Button } from 'antd';
import { MenuOutlined,GithubOutlined,GlobalOutlined } from '@ant-design/icons';
import '../styles/Header.css'
import {URL} from '../common/GlobleConfig'

const { Header, Content} = Layout;


const CommonHeader: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [language, setLanguage] = useState('en');
    const navigate = useNavigate();
    // 头部样
    const headerStyle: React.CSSProperties = {
            position: 'fixed',
            textAlign: 'center',
            color: '#f000',
            height: 95,
            width: '100vw',
            backgroundColor: scrollPosition>10 ? 'white' : 'transparent',
            boxShadow: scrollPosition>10 ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
            transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
        };
    // 导航栏字体颜色
    const navFontStyle: React.CSSProperties = {
        color: scrollPosition>0? 'black' : 'white',
    }
    // logo图片
    const logoImage = (scrollPosition > 0 ? 'logo.png' : 'logo-white.png');
    // 监听滚动事件
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // logo点击事件
    const handleLogoClick = () => {
        navigate('/');
    };

    const handleGithubClick = () => {
        window.open(URL.github, '_blank');
    };

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'zh' : 'en'));
    };

    return (
        <Header style={headerStyle}>
            <Content className={"header-content"}>
                {/*头像位置*/}
                <Content
                    className={"h-left"}
                    onClick={handleLogoClick}
                >
                    <div
                        className={"h-left-logo"}
                        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${logoImage})`}}
                        >
                    </div>
                    <div
                        className={"h-left-text"}
                        style={{ marginLeft: '10px', fontSize: '24px', color: scrollPosition > 0 ? 'black' : 'white' }}>
                        Antgeek
                    </div>
                </Content>
                {/*导航栏*/}
                <Content className={"h-middle"}>
                    <ul>
                        <li style={navFontStyle}>博客</li>
                        <li style={navFontStyle}>关于我</li>
                    </ul>
                </Content>
                <Content className={"h-mobile-menu"}>
                    <Button size={"large"} className={"mobile-menu-button"} style={{color: `${scrollPosition > 0 ? 'black' : 'white'}`}} type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
                    <Drawer
                        title="导航"
                        placement="right"
                        onClose={closeDrawer}
                        open={drawerVisible}
                    >
                        <div className={"h-mobile-menu-nav"}>
                            <p>博客</p>
                            <p>关于我</p>
                        </div>
                        <br/><br/><br/><br/>
                        <Button
                            icon={<GithubOutlined style={{ fontSize: '24px', margin: 0, padding: 0 }} />}
                            onClick={handleGithubClick}
                            style={{ marginLeft: '10px', border: 'none', background: 'none',margin: 0,padding: 0 }}
                        />
                        <Button
                            icon={<GlobalOutlined style={{ fontSize: '24px', margin: 0, padding: 0 }} />}
                            onClick={toggleLanguage}
                            style={{ marginLeft: '10px', border: 'none', background: 'none',margin: 0,padding: 0 }}
                        />
                    </Drawer>
                </Content>
                {/*联系方式*/}
                <Content className={"h-right"}>
                    <Button
                        icon={<GithubOutlined style={{ fontSize: '24px', margin: 0, padding: 0 }} />}
                        onClick={handleGithubClick}
                        style={{ marginLeft: '10px', border: 'none', background: 'none',margin: 0,padding: 0 }}
                    />
                    <Button
                        icon={<GlobalOutlined style={{ fontSize: '24px', margin: 0, padding: 0 }} />}
                        onClick={toggleLanguage}
                        style={{ marginLeft: '10px', border: 'none', background: 'none',margin: 0,padding: 0 }}
                    />
                </Content>
            </Content>
        </Header>
    );
};

export default CommonHeader;