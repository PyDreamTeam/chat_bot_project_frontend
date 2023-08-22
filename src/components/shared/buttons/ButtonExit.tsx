import React, { FC } from "react";
import styles from "./styles/styles.module.css";

interface ButtonExitProps {
    onClick: () => void;
}

const ButtonExit: FC<ButtonExitProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.buttonExit}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.22222 4.22222H11.8889C12.5 4.22222 13 3.72222 13 3.11111C13 2.5 12.5 2 11.8889 2H5.22222C4 2 3 3 3 4.22222V19.7778C3 21 4 22 5.22222 22H11.8889C12.5 22 13 21.5 13 20.8889C13 20.2778 12.5 19.7778 11.8889 19.7778H5.22222V4.22222Z"
                    fill="#4466F5"
                />
                <path
                    d="M20.65 11.6505L17.86 8.86053C17.7905 8.78908 17.7012 8.74001 17.6036 8.7196C17.506 8.69918 17.4045 8.70836 17.3121 8.74594C17.2198 8.78353 17.1408 8.84782 17.0851 8.93058C17.0295 9.01334 16.9999 9.11082 17 9.21053V11.0005H10C9.45 11.0005 9 11.4505 9 12.0005C9 12.5505 9.45 13.0005 10 13.0005H17V14.7905C17 15.2405 17.54 15.4605 17.85 15.1405L20.64 12.3505C20.84 12.1605 20.84 11.8405 20.65 11.6505Z"
                    fill="#4466F5"
                />
            </svg>
            Выйти
        </button>
    );
};
export default ButtonExit;
