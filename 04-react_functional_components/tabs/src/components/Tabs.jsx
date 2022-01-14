import React, { useState } from 'react';

let arrayofTabs = [{ label: "Tab 1", content: "Tab 1 Content Here" },
{ label: "Tab 2", content: "Tab 2 Content Here" },
{ label: "Tab 3", content: "Tab 3 Content Here" },]

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(0)
    const [currentTabContent, setCurrentTabContent] = useState(currentTab.content)
    const handleClickTab = (e) => {
        e.preventDefault();
        // console.log(e.target.value)
        setCurrentTab(e.target.value)
        console.log(currentTab)
        // console.log(arrayofTabs[currentTab].content)

    }
    return (
        <div className="container">
            <div className = "d-flex justify-content-center gap-1">
                {arrayofTabs.map((tab, i) =>
                    <button onClick ={handleClickTab} className = {currentTab === {i} ? "active" : ""} key={i} value = {i}>{tab.label}</button>)}
            </div>
            <div className = "d-flex justify-content-center gap-1 border">
                <p>{arrayofTabs[currentTab].content}</p>
            </div>
        </div>
    );
};

export default Tabs;