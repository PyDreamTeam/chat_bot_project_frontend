import React, { useState } from "react";
import { userData } from "../all/allUsers";
import css from "../styles/allStyles.module.css";
import Image from "next/image";
import AdminsHeader from "../components/AdminsHeader";
import NoUsers from "../components/NoUsers";

const Moders = () => {
    const [key, setKey] = useState(0);

    return (
        <div className={css.users}>
            <AdminsHeader />
            {userData.length !== 0 ? userData.map((person) => (
                person.role === "Модератор" &&
                <div className={css.user} key={person.id}>
                    <div className={css.userName}>{person.first_name} {person.last_name}</div>
                    <div className={css.userEmail}>{person.email}</div>
                    <div className={css.userRole}>{person.role}</div>
                    <div className={css.switch}>
                        <label>
                            <input type="checkbox" checked={person.status} key={key}
                                onClick={() => {
                                    setKey((k) => k + 1);
                                    person.status = !person.status;
                                }} />
                            <span className={css.slider}></span>
                            {person.status ? "Активен" : "Заблокирован"}
                        </label>
                    </div>
                    <div className={css.edit}>
                        <a href={"/admin/users/edit"}>
                            <Image
                                src="/admin/icon_edit.svg"
                                alt="edit"
                                width={24}
                                height={24}
                            />
                        </a>
                    </div>
                </div>
            )) :
                <NoUsers />}
        </div>
    );
};

export default Moders;
