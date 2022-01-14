import React, { useState } from 'react';

let arrayofTabs = [{ label: "Tab 1", content: "Tab 1 Content Here" },
{ label: "Tab 2", content: "hi sweetheart i lovey u" },
{ label: "Tab 3", content: "Tab 3 Content Here" },]

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(0)
    const [currentTabContent, setCurrentTabContent] = useState(currentTab.content)
    const handleClickTab = (e) => {
        e.preventDefault();
        let newTabValue = parseInt(e.target.value)
        console.log(typeof(newTabValue))
        setCurrentTab(newTabValue)
        // console.log(currentTab)
        // console.log(arrayofTabs[currentTab].content)

    }
    return (
        <div className="container">
            <div className = "d-flex justify-content-center gap-1">
                {arrayofTabs.map((tab, i) =>
                    <button onClick ={handleClickTab} className = {currentTab === i ? "active container" : "container"}  key={i} value = {i}>{tab.label}</button>)}
            </div>
            <div className = "d-flex justify-content-center gap-1 border">
                <p>{arrayofTabs[currentTab].content}</p>
            </div>
        </div>
    );
};

export default Tabs;