import React, { useState } from 'react';
import { FavoriteList } from '../Favorite/FavoriteList/FavoriteList';
import { Search } from '../search/Search';
import { WatchLaterList } from '../WatchLater/WatchLaterList/WatchLaterList';

import './Tabs.scss';

const Tabs = () => {

    const [activeTab, setActiveTab] = useState("tab1");  

    const renderContentTab = () => {
        switch(activeTab){
            case "tab1":
                return <Search />;
            case "tab2":
                return <FavoriteList />;
            case "tab3":
                return <WatchLaterList />;
        }
    }

    return (
        <div className="Tabs">
        {/* Tab nav */}
        <ul className="nav">
            <li className={activeTab === "tab1" ? "active" : ""} onClick={() =>setActiveTab("tab1")}>Search</li>
            <li className={activeTab === "tab2" ? "active" : ""} onClick={() =>setActiveTab("tab2")}>Favorites</li>
            <li className={activeTab === "tab3" ? "active" : ""} onClick={() =>setActiveTab("tab3")}>Watch Later</li>
        </ul>
        <div className="outlet">
            {/* content will be shown here */}
            {renderContentTab()}
        </div>
        </div>
    );
}

export default Tabs;
