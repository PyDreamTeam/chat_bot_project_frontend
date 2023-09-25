import React from "react";
import css from "../styles/allStyles.module.css";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import { useState } from "react";
import AdminsHeader from "../components";

export const userData = [
    { name: "Кирилл", email: "wneoifnwe@gmail.com", role: "Администратор", status: true, id: 12 },
    { name: "Артем", email: "wyntbdsre@gmail.com", role: "Модератор", status: false, id: 13 },
    { name: "Матвей", email: "ntrtbfvswrwe@gmail.com", role: "Модератор", status: true, id: 14 },
    { name: "Алена", email: "weytmnrgwe@gmail.com", role: "Администратор", status: false, id: 15 },
];
const AllUsers = () => {

    return (
        <div className={css.usersBlock}>
            <AdminsHeader />
            <div className={css.users}>
                {userData.map((person) => (
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
        </div>
    );
};

export default AllUsers;
