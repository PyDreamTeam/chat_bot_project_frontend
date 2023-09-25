import React from "react";
import { userData } from "../all/allUsers";
import css from "../styles/allStyles.module.css";
import Image from "next/image";
import AdminsHeader from "../components";

const Moders = () => {

    return (
        <div className={css.users}>
            <AdminsHeader />
            {userData.map((person) => (
                person.role === "Модератор" &&
                <div className={css.user} key={person.id}>
                    <div className={css.userName}>{person.name}</div>
                    <div className={css.userEmail}>{person.email}</div>
                    <div className={css.userRole}>{person.role}</div>
                    <div className={css.userStatus}>
                        <input type="checkbox" checked={person.status} onClick={() => { person.status = !person.status; }} />
                        <label>{person.status ? "Активен" : "Заблокирован"}</label>
                    </div>
                    <div className={css.edit}>
                        <a href={"/admin/users/edit"}>
                            <Image
                                src="/admin/icon_edit.svg"
                                alt="search"
                                width={24}
                                height={24}
                            />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Moders;
