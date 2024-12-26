import React, { useState, useEffect } from 'react';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const BackToTopButton: React.FC = () => {
    return (
        <FloatButton.Group shape="circle">
            <FloatButton.BackTop visibilityHeight={100} />
        </FloatButton.Group>
    );
};

export default BackToTopButton;