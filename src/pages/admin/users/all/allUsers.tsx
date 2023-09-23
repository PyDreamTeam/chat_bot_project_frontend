import React from "react";
import styles from "../styles/allStyles.module.css";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import { useState } from "react";

const users = [];
const AllUsers = () => {

    const [activeUser, setActiveUser] = useState<boolean>(false);

    return (
        <div className={styles.users}>
            Здесь будут все пользователи
            <div className={styles.user}>
                <div>artem</div>
                <div>@gmailcom</div>
                <div>admin</div>
                <div className={styles.userStatus}>
                    <input type="checkbox" onClick={() => { setActiveUser(!activeUser); }} />
                    <label>{activeUser ? "active" : "not active"}</label>
                </div>
                <div className={styles.edit}>
                    <button><Image
                        src="/admin/icon_edit.svg"
                        alt="search"
                        width={24}
                        height={24}
                    /></button></div>
            </div>
        </div>
    );
};

export default AllUsers;
