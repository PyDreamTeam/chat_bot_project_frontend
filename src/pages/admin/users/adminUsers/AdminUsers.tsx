import css from "../styles/allStyles.module.css";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import { FC, useEffect, useState } from "react";
import AdminsHeader from "../components/AdminsHeader";
import { Loader } from "@/src/components/shared/Loader/Loader";
import NoUsers from "../components/NoUsers";
import { Route } from "react-router-dom";
import Router, { useRouter } from "next/router";
import { Roles } from "@/src/components/shared/createAdmin/RadioButtonGroup/RadioButtonGroup";
import ChangeUserRole from "../components/changeUserRole";
import { useChangeRoleMutation, useChangeStatusMutation, useGetUsersQuery } from "@/src/store/services/changeRole";
import Cookies from "js-cookie";
import Alert from "../components/Notification";


export interface IPerson {
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

export interface IAccountPageCredential {
    type: string[];
}
const AdminUsers: FC<IAccountPageCredential> = ({ type }) => {
    const tk = JSON.parse(Cookies.get("loginUser") || "[]");
    const token = tk.access;
    const [key, setKey] = useState(0);
    const [userKey, setUserKey] = useState(1);
    const [classname, setClassname] = useState("invisible");
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
            {isLoadingUsers ? <div className={css.loader}>
                <Loader isLoading={isLoadingUsers} />
            </div> :
                dataUsers?.results.length !== (0 || undefined) ? (
                    dataUsers?.results.map((person: IPerson) => (
                        type.includes(person.user_role) &&
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
                            <Alert
                                classname={classname}
                                message={"Изменения сохранены"}
                                onClick={() => setClassname("invisible")}
                            />
                        </div>

                    ))
                ) : (
                    <NoUsers
                        text={"Пользователей пока нет"}
                    />
                )
            }
        </div>
    );
};

export default AdminUsers;
