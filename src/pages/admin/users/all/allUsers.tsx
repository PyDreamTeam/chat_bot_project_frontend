
import css from "../styles/allStyles.module.css";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import { useState } from "react";
import AdminsHeader from "../components/AdminsHeader";
import { Loader } from "@/src/components/shared/Loader/Loader";
import NoUsers from "../components/NoUsers";
import { Route } from "react-router-dom";
import { useRouter } from "next/router";
import { Roles } from "@/src/components/shared/createAdmin/RadioButtonGroup/RadioButtonGroup";
import ChangeUserRole from "../components/changeUserRole";

export const userData = [
    { first_name: "Кирилл", last_name: "a", email: "wneoifnwe@gmail.com", password: "Aa12345678@", role: "AD", status: true, id: 12 },
    { first_name: "Артем", last_name: "b", email: "wyntbdsre@gmail.com", password: "Aa12345678@", role: "MN", status: false, id: 13 },
    { first_name: "Матвей", last_name: "c", email: "ntrtbfvswrwe@gmail.com", password: "Aa12345678@", role: "MN", status: true, id: 14 },
    { first_name: "Алена", last_name: "d", email: "weytmnrgwe@gmail.com", password: "Aa12345678@", role: "AD", status: false, id: 15 },
];
const AllUsers = () => {

    const [key, setKey] = useState(0);
    // const route = useRouter();

    return (
        <div className={css.users}>
            <AdminsHeader />
            <div className={css.users} >
                {userData.length !== 0 ? userData.map((person) => (
                    <div className={`${css.user} ${!person.status && css.locked}`} key={person.id}>
                        <div className={css.userName}>{person.first_name} {person.last_name}</div>
                        <div className={css.userEmail}>{person.email}</div>
                        <div className={css.switch}>
                            <label >{person.status ? "Активен" : "Заблокирован"}
                                <input key={key} type="checkbox" checked={person.status}
                                    onClick={() => {
                                        setKey((k) => k + 1);
                                        person.status = !person.status;
                                    }} />
                                <span className={css.slider}></span>

                            </label>
                        </div>
                        {/* <div className={css.userRole}>{person.role === "AD" ? Roles.AD : Roles.MN}</div> */}
                        <ChangeUserRole
                            role={person.role === "AD" ? Roles.AD : Roles.MN}
                            id={person.id}
                            disabled={!person.status}
                        />
                        {/* <div className={css.edit} onClick={() => { route.push(`/admin/users/edit?id=${person.id}`); }}>

                            <Image
                                src="/admin/icon_edit.svg"
                                alt="edit"
                                width={18}
                                height={18}
                            />

                        </div> */}
                    </div>
                )) :
                    <NoUsers />
                }
            </div>
        </div >
    );
};

export default AllUsers;
