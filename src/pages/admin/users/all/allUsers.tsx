import css from "../styles/allStyles.module.css";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import { useEffect, useState } from "react";
import AdminsHeader from "../components/AdminsHeader";
import { Loader } from "@/src/components/shared/Loader/Loader";
import NoUsers from "../components/NoUsers";
import { Route } from "react-router-dom";
import Router, { useRouter } from "next/router";
import { Roles } from "@/src/components/shared/createAdmin/RadioButtonGroup/RadioButtonGroup";
import ChangeUserRole from "../components/changeUserRole";
import { useChangeRoleMutation, useChangeStatusMutation, useGetUsersQuery } from "@/src/store/services/changeRole";
import Cookies from "js-cookie";
import { Alert } from "../components/Notification";

interface IPerson {
    first_name: string;
    last_name: string;
    email: string;
    user_role: "AD" | "MN" | "US";
    is_active: boolean;
    id: number;
}
export const userData: Array<IPerson> = [
    { first_name: "Кирилл", last_name: "a", email: "wneoifnwe@gmail.com", user_role: "AD", is_active: true, id: 3 },
    { first_name: "Артем", last_name: "b", email: "wyntbdsre@gmail.com", user_role: "MN", is_active: false, id: 1 },
    { first_name: "Матвей", last_name: "c", email: "ntrtbfvswrwe@gmail.com", user_role: "MN", is_active: true, id: 4 },
    { first_name: "Алена", last_name: "d", email: "weytmnrgwe@gmail.com", user_role: "AD", is_active: false, id: 5 },
];
const AllUsers = () => {
    const tk = JSON.parse(Cookies.get("loginUser") || "[]");
    const token = tk.access;
    const [key, setKey] = useState(0);
    const [userKey, setUserKey] = useState(1);
    const [classname, setClassname] = useState("invisible");
    // const route = useRouter();
    const { refetch, data: dataUsers, isLoading: isLoadingUsers } = useGetUsersQuery(token);

    const [changeRole, { isSuccess: isSuccessChangeRole }] = useChangeRoleMutation();
    const [changeStatus, { isSuccess: isSuccessChangeStatus }] = useChangeStatusMutation();

    useEffect(() => {
        if (isSuccessChangeRole) {
            setClassname("");
            refetch();
            setUserKey((k) => k + 1);
            setTimeout(() => setClassname("invisible"), 3000);
        }
    }, [isSuccessChangeRole]);

    useEffect(() => {
        if (isSuccessChangeStatus) {
            refetch();
            setUserKey((k) => k + 1);
        }
    }, [isSuccessChangeStatus]);

    return (
        <div className={css.users}>
            <AdminsHeader />
            <div className={css.users}>
                {dataUsers?.results.length !== (0 || undefined) ? (
                    dataUsers?.results.map((person: IPerson) => (
                        <div className={`${css.user} ${!person.is_active && css.locked}`} key={userKey}>
                            <div className={css.userName}>
                                {person.first_name} {person.last_name}
                            </div>
                            <div className={css.userEmail}>{person.email}</div>
                            <div className={css.switch}>
                                <label>
                                    {person.is_active ? "Активен" : "Заблокирован"}
                                    <input
                                        key={key}
                                        type="checkbox"
                                        checked={person.is_active}
                                        onClick={() => {
                                            setKey((k) => k - 1);

                                            /* person.is_active = !person.is_active; */
                                            const id = person.id;
                                            const requestValues = { is_active: !person.is_active };
                                            changeStatus({ requestValues, token, id });
                                        }}
                                    />
                                    <span className={css.slider}></span>
                                </label>
                            </div>
                            <ChangeUserRole
                                role={Roles[person.user_role]}
                                id={person.id}
                                disabled={!person.is_active}
                                onClick={changeRole}
                                isSuccessChange={isSuccessChangeRole}
                            />
                            {/* <div className={css.edit} onClick={() => { route.push(`/admin/users/edit?id=${person.id}`); }}>

                            <Image
                                src="/admin/icon_edit.svg"
                                alt="edit"
                                width={18}
                                height={18}
                            />

                        </div> */}
                            <Alert
                                classname={classname}
                                message={"Изменения сохранены"}
                                onClick={() => setClassname("invisible")}
                            />
                        </div>
                    ))
                ) : (
                    <NoUsers />
                )}
            </div>
        </div>
    );
};

export default AllUsers;
