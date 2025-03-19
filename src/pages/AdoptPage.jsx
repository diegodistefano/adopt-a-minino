import React, { useContext } from "react";
import Form from "../components/Form/Form";
import { ThemeContext } from "../components/ThemeContext/ThemeContext";

const AdoptPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme === 'light' ? '' : 'dark-mode'}`}>
            <Form />
        </div>
    );
};

export default AdoptPage;