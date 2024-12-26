import React from 'react';
import { SoundOutlined, createFromIconfontCN } from '@ant-design/icons';
import '../../styles/Announcement.css';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4795396_zy1t4aw9fd.js',
});

const Announcement: React.FC = () => {
    return (
        <div className="sidebar-section">
            <div className="title-bar">
                <IconFont type="icon-xinwengonggao" className="title-icon" />
                <span className="title-text">公告</span>
            </div>
            <p>网站建设中.....</p>
        </div>);
};

export default Announcement;