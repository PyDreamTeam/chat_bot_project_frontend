import React, { FC, useState } from "react";

import styles from "./ErrorList.module.css";
import PasswordError, { IPasswordError } from "@/src/components/shared/passwordError/PasswordError";
import uuid from "uuid-random";

type IPasswordErrorList = IPasswordError[];

const initialPasswordErrorList: IPasswordErrorList = [
    {
        errorText: "содержит не менее 8 символов",
        isError: true,
    },
    {
        errorText: "содержит как строчные (a–z), так и прописные буквы (A–Z)",
        isError: true,
    },
    {
        errorText: "содержит по крайней мере одну цифру (0–9)",
        isError: true,
    },
    {
        errorText: "содержит по крайней мере один спецсимвол",
        isError: true,
    },
];

interface IErrorList {
    errors: boolean;
    errorsValue?: string;
}

const ErrorList: FC<IErrorList> = ({ errors, errorsValue }) => {
    const [passwordErrorList, setPasswordErrorList] = useState<IPasswordErrorList>(initialPasswordErrorList);

    return (
        <div className={`${styles.errorBlock} ${!errors && styles.hiddenBlock}`}>
            {passwordErrorList.map((error) => (
                <PasswordError key={uuid()} errorText={error.errorText} isError={error.isError} />
            ))}
        </div>
    );
};

export default ErrorList;
