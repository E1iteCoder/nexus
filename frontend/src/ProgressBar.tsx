import React from "react";

interface Tab {
    id: string;
    title: string;
}

interface ProgressBarProps {
    tabs: Tab[];
    activeTab: string;
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    tabs,
    activeTab,
    progress,
}) => {
    const progressSteps = tabs.map((tab, index) => {
        const isActive = tab.id === activeTab;

        const stepClass = isActive ? "step activeStep" : "step";

        return <div className={stepClass} key={tab.id} />;
    });

    return <div className="progress">{progressSteps}</div>;
};

export default ProgressBar;
