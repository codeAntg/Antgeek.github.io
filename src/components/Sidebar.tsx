import React from 'react';
import '../styles/Sidebar.css';
import Announcement from './sidebar/Announcement';
import LatestArticles from './sidebar/LatestArticles';
import Categories from './sidebar/Categories';
import Tags from './sidebar/Tags';
import Archives from './sidebar/Archives';
import SiteInfo from './sidebar/SiteInfo';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <Announcement />
            {/*<LatestArticles />*/}
            {/*<Categories />*/}
            {/*<Tags />*/}
            {/*<Archives />*/}
            {/*<SiteInfo />*/}
        </div>
    );
};

export default Sidebar;