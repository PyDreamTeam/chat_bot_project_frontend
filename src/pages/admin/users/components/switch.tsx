import React, { ChangeEventHandler } from "react";
import css from "../styles/allStyles.module.css";


const Switch = ({ isOn, handleToggle }: {
    isOn: boolean, handleToggle: ChangeEventHandler<HTMLInputElement> | undefined
}) => {
    return (
        <>
            <label>
                <input type="checkbox" checked={isOn} onChange={handleToggle} />
                <span className={css.slider}></span>
                {isOn ? "Активен" : "Заблокирован"}
            </label>
        </>
    );
};

export default Switch;