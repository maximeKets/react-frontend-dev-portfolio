import React, {useState, useEffect, useCallback} from "react";
import Typical from "react-typical";
import Switch from "react-switch";

function Header({sharedData}) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        // Charger le thème depuis localStorage
        const theme = window.localStorage.getItem("theme") || "light";
        setIsDarkTheme(theme === "dark");
        document.body.setAttribute("data-theme", theme);
    }, []);

    useEffect(() => {
        // Construire les steps pour Typical
        if (sharedData && sharedData.titles) {
            const newTitles = sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
            setTitles(newTitles);
        }
    }, [sharedData]);

    const onThemeSwitchChange = checked => {
        setIsDarkTheme(checked);
        applyTheme(checked);
    };

    const applyTheme = useCallback((checked) => {
        const newTheme = checked ? "dark" : "light";
        document.body.setAttribute("data-theme", newTheme);
        window.localStorage.setItem("theme", newTheme);
    }, []);

    const name = sharedData?.name || "";

    return (
        <header id="home" className="full-height">
            {/* Switch de thème */}
            <div className="theme-switch-container">
                <Switch
                    checked={isDarkTheme}
                    onChange={onThemeSwitchChange}
                    offColor="#baaa80"
                    onColor="#353535"
                    className="react-switch"
                    width={90}
                    height={40}
                    uncheckedIcon={
                        <span
                            className="iconify"
                            data-icon="twemoji:owl"
                            data-inline="false"
                            style={{
                                display: "block",
                                height: "100%",
                                fontSize: 25,
                                textAlign: "end",
                                marginLeft: "20px",
                                color: "#353239"
                            }}
                        />
                    }
                    checkedIcon={
                        <span
                            className="iconify"
                            data-icon="noto-v1:sun-with-face"
                            data-inline="false"
                            style={{
                                display: "block",
                                height: "100%",
                                fontSize: 25,
                                textAlign: "end",
                                marginLeft: "10px",
                                color: "#353239"
                            }}
                        />
                    }
                    id="icon-switch"
                />
            </div>

            <div className="row aligner" style={{height: '100%'}}>
                <div className="col-md-12">
                    <div>

                        <br/>

                        <h1 className="mb-0">
                            <Typical steps={[name]} wrapper="p"/>
                        </h1>

                        <div className="title-container">
                            <Typical className="title-styles" steps={titles} loop={50}/>
                        </div>

                        <div style={{marginTop: '1rem'}}>
                            <a
                                href={`${process.env.PUBLIC_URL}/resume_laura.pdf`}
                                download="resume_laura.pdf"
                                // Tu peux cumuler les classes Bootstrap (btn, btn-primary, btn-lg, etc.)
                                // et ta propre classe si besoin
                                className="btn btn-success btn-lg d-inline-flex align-items-center gap-2 cv-download-button"
                            >
                                <span
                                    role="img"
                                    aria-label="Paper icon"
                                    style={{fontSize: '1.25rem'}}
                                    className ="mr-2"
                                >
                                  📄
                                </span>
                                Télécharger mon CV
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
