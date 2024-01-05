import React from "react";
import "../styles/CreateForm.css";

interface TabData {
    id: string;
    title: string;
    content: React.ReactNode;
}

interface Props {
    activeTab: string;
    tabData: TabData[];
    onBack: () => void;
    onContinue: () => void;
    onExit: () => void;
}

const TabComponent: React.FC<Props> = ({
    activeTab,
    tabData,
    onBack,
    onContinue,
    onExit,
}) => {
    // Find the index of the current active tab
    const currentIndex = tabData.findIndex((tab) => tab.id === activeTab);

    // Check if the current tab is the last one
    const isLastTab = currentIndex === tabData.length - 1;

    return (
        <>
            <div className="tab_container">
                {tabData.map((tab) => {
                    // Check if tab id matches activeTab
                    if (tab.id === activeTab) {
                        return (
                            // Display matching tab content
                            <div className="content_container" key={tab.id}>
                                <h3 className="tab_title">{tab.title}</h3>
                                {tab.content}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="buttons">
                <button className="back" onClick={onBack}>
                    Back
                </button>
                <button className="go" onClick={isLastTab ? onExit : onContinue}>
                    {isLastTab ? "Finish" : "Continue"}
                </button>
            </div>
        </>
    );
};

export default TabComponent;
