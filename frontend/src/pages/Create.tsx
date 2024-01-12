import React, { useState } from "react";
import TabComponent from "../components/TabComponents";
import FormControl from "../components/FormControl";
import FormTextControl from "../components/FormTextControl";
import FormDropdown from "../components/FormDropdown";
import ProgressBar from "../components/ProgressBar";
import {
    languageOptions,
    genreOptions,
    typeOptions,
    targetAudienceOptions,
} from "../components/Options";

import "../styles/Create.css";
interface TabData {
    id: string;
    title: string;
    content: React.ReactNode;
}

const Create: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("tab1");
    const [showTabs, setShowTabs] = useState(false);
    const [usernameChecked, setUsernameChecked] = useState(false);
    const [isPublicationFileUploaded, setIsPublicationFileUploaded] = useState(false);
    const [progress, setProgress] = useState(0); // Added progress state
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState<null | number>(null); // Initialize with null, update with dropdown value
    const [type, setType] = useState<null | number>(null); // Initialize with null, update with dropdown value
    const [targetAudience, setTargetAudience] = useState<null | number>(null); // Initialize with null, update with dropdown value
    const [language, setLanguage] = useState<null | number>(null); // Initialize with null, update with dropdown value
    const [publicationFile, setPublicationFile] = useState<File | null>(null);
    const [sampleFile, setSampleFile] = useState<File | null>(null);
    const [coverFile, setCoverFile] = useState<File | null>(null);

    const handleCreate = async () => {
        const requestBody = {
            author,
            title,
            description,
            genre,
            type,
            targetAudience,
            language,
        };

        try {
            const response = await fetch("mongodb+srv://kozorji:@cces1blere@d1ng@cluster0.pvq5m77.mongodb.net/?retryWrites=true&w=majority/create-publication", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                // Successfully created publication
                console.log("Publication created successfully");
            } else {
                // Handle errors
                console.error("Failed to create publication");
            }
        } catch (error) {
            console.error("Error during publication creation:", error);
        }
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameChecked(e.target.checked);
    };

    const handlePublicationFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const publicationFile = e.target.files[0];
            console.log("Selected publication file:", publicationFile);
            setPublicationFile(publicationFile);
            setIsPublicationFileUploaded(true);
        }
    };

    const handleSampleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSampleFile(e.target.files[0]);
        }
    };

    const handleCoverFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setCoverFile(e.target.files[0]);
        }
    };

    function handleOpen() {
        setShowTabs(true);
    }

    function validateTab() {
        switch (activeTab) {
            case "tab1":
                return author !== ""; // Add validation for other fields if needed
            case "tab2":
                return title !== "" && genre !== null && type !== null && targetAudience !== null && language !== null;
            default:
                return true;
        }
    };

    function isUploadSectionComplete() {
        console.log("Checking upload section completion");
        return isPublicationFileUploaded;
    };


    function handleClose() {
        setShowTabs(false);
    }

    function handleBack() {
        const currentIndex = tabData.findIndex((tab) => tab.id === activeTab);
        const newIndex = Math.max(0, currentIndex - 1);
        setActiveTab(tabData[newIndex].id);
        setProgress(newIndex);
    }

    function handleExit() {
        setShowTabs(false);
        setActiveTab(tabData[0].id);
        handleCreate();
    }

    const handleContinue = () => {
        if (validateTab()) {
            const currentIndex = tabData.findIndex((tab) => tab.id === activeTab);
            if (currentIndex === tabData.length - 1) {
                if (isUploadSectionComplete()) {
                    handleExit();
                }
                else {
                    alert("Please upload the publication file.");
                }
                
            } else {
                const newIndex = Math.min(tabData.length - 1, currentIndex + 1);
                setActiveTab(tabData[newIndex].id);
                setProgress(newIndex);
            }
        } else {
            alert("Please fill in all required fields before continuing.");
        }
    };

    const tabData: TabData[] = [
        {
            id: "tab1",
            title: "Author Info",
            content: (
                <div className="form_section">
                    <FormControl
                        title={"Preferred Name:"}
                        type={"text"}  // Set the type to "text" for text input
                        placeholder={"Name"}
                        checkboxPlaceholder={"Set username as preferred name"}
                        control={"formBasicName"}
                        required={true}
                        onChange={(e) => setAuthor(e.target.value)}
                        onChangeCheck={handleUsernameChange}
                        value={author}
                        showCheckbox={true}  // Show the checkbox
                        checkboxChecked={usernameChecked}
                    />
                </div>
            ),
        },
        {
            id: "tab2",
            title: "Publication Info",
            content: (
                <div className="form_section">
                    <FormControl
                        title={"Title:"}
                        type={""}
                        placeholder={""}
                        control={"formBasicTitle"}
                        required={true}
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        showCheckbox={false}
                    />
                    <FormDropdown
                        title={"Genre:"}
                        control={"genreControl"}
                        options={genreOptions}
                        value={genre}
                        title2={"Type:"}
                        control2={"typeControl"}
                        options2={typeOptions}
                        value2={type}
                        onChange={(value) => setGenre(value)}
                        onChange2={(value) => setType(value)}
                    />
                    <FormDropdown
                        title={"Language:"}
                        control={"languageControl"}
                        options={languageOptions}
                        value={language}
                        title2={"Target Audinence:"}
                        control2={"TargetAudienceControl"}
                        options2={targetAudienceOptions}
                        value2={targetAudience}
                        onChange={(value) => setTargetAudience(value)}
                        onChange2={(value) => setLanguage(value)}
                    />
                    <FormTextControl
                        title={"Description:"}
                        control={"formBasicDescription"}
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
            ),
        },
        {
            id: "tab3",
            title: "Upload",
            content: (
                <div className="form_section">
                    <FormControl
                        title={"Upload your publication:"}
                        type={"file"}
                        placeholder={"+"}
                        control={"formBasicBookUpload"}
                        required={true}
                        onChange={handlePublicationFileChange}
                    />
                    <FormControl
                        title={"Upload your sample:"}
                        type={"file"}
                        placeholder={"+"}
                        control={"formBasicCoverUpload"}
                        onChange={handleSampleFileChange}
                    />
                    <FormControl
                        title={"Upload a cover:"}
                        type={"file"}
                        placeholder={"+"}
                        control={"formBasicCoverUpload"}
                        onChange={handleCoverFileChange}
                    />
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="outer_container">
                <h1 className="heading" id="h1">
                    Welcome To
                </h1>
                <h2 className="heading" id="h2">
                    NexusStudios
                </h2>
                <p className="para">
                    This is the creative space page where you can share your imagination
                    and thoughts to everyone by a press of one button.
                </p>
                <button className="createBtn" onClick={handleOpen}>
                    Let's Create
                </button>
            </div>

            {showTabs && (
                <div className="overlay">
                    <div className="main_container">
                        <p className="close" onClick={handleClose}>
                            &times;
                        </p>
                        <h2 className="heading" id="tab_heading">
                            NexusStudios
                        </h2>
                        <ProgressBar
                            tabs={tabData}
                            activeTab={activeTab}
                            progress={progress}
                        />
                        <TabComponent
                            activeTab={activeTab}
                            tabData={tabData}
                            onBack={handleBack}
                            onContinue={handleContinue}
                            onExit={handleExit}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Create;
