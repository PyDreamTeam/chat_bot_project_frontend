import React, { useState } from "react";
import { userData } from "../all/allUsers";
import css from "../styles/allStyles.module.css";
import Image from "next/image";
import AdminsHeader from "../components/AdminsHeader";
import NoUsers from "../components/NoUsers";

const Admins = () => {
    const [key, setKey] = useState(0);

    console.log(userData);
    return (
        <div className={css.users}>
            <AdminsHeader />
            {userData.length !== 0 ? userData.map((person) => (
                person.role === "AD" &&
                <div className={css.user} key={person.id}>
                    <div className={css.userName}>{person.first_name} {person.last_name}</div>
                    <div className={css.userEmail}>{person.email}</div>
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
                    <div className={css.userRole}>{person.role}</div>
                </div>
            )) :
                <NoUsers />}
        </div>
    );
};

export default Admins;
