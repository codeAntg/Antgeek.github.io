import React, { useEffect,useState } from 'react';
import { Timeline, Card, Row, Col, Layout } from 'antd';
import ReactMarkdown from 'react-markdown';
import BlogHeader from '../components/BlogHeader';
import '../styles/AboutMe.css';
import BackToTopButton from "../components/BackToTopButton";
import BlogFooter from "../components/BlogFooter";
const { Content } = Layout;

type AchievementItem = {
    title: string;
    description: string;
    date: string;
    images?: string[];
};

type Achievement = {
    year: string;
    items: AchievementItem[];
};


const addBaseTag = () => {
    const base = document.createElement('base');
    base.target = '_blank';
    document.head.appendChild(base);
};
const AboutMe: React.FC = () => {
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const [myInfo, setMyInfo] = useState<string>('');
    useEffect(() => {
        addBaseTag();
        // 获取achievement数据
        fetch('/data/achievement/achievement.json')
            .then(response => response.json())
            .then(data => setAchievements(data));
        // 获取我的介绍
        fetch('/data/achievement/myInfo.md')
            .then(response => response.text())
            .then(text => setMyInfo(text));
    }, []);
    return (
        <Layout>
            <BlogHeader colorChaneFlag={false}/>
            <Content className="about-me">
                <div className="self-introduction">
                    <h1>我的介绍</h1>
                    <ReactMarkdown>
                        {myInfo}
                    </ReactMarkdown>
                </div>
                <div className="achievement-wall">
                    <h2>已解锁关卡</h2>
                    <Timeline>
                        {achievements.map((achievement) => (
                            <Timeline.Item key={achievement.year}>
                                <h3>{achievement.year}</h3>
                                <Row gutter={[16, 16]}>
                                    {achievement.items.map((item, index) => (
                                        <Col key={index} span={8}>
                                            <Card className="achievement-card" title={item.title} bordered={false}>
                                                <ReactMarkdown>{item.description}</ReactMarkdown>
                                                <p>{item.date}</p>
                                                {item.images && item.images.length > 0 && (
                                                    <div className="achievement-images">
                                                        {item.images.map((image, idx) => (
                                                            <img key={idx} src={image} alt={`Achievement ${index + 1} Image ${idx + 1}`} />
                                                        ))}
                                                    </div>
                                                )}
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </div>
            </Content>
            <BackToTopButton />
            <BlogFooter/>
        </Layout>
    );
};

export default AboutMe;