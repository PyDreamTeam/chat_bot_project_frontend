import css from "../styles/allStyles.module.css";
import { FC, useEffect, useState } from "react";
import AdminsHeader from "../components/AdminsHeader";
import { Loader } from "@/src/components/shared/Loader/Loader";
import NoUsers from "../components/NoUsers";
import { Roles } from "@/src/components/shared/createAdmin/RadioButtonGroup/RadioButtonGroup";
import ChangeUserRole from "../components/changeUserRole";
import { useChangeUserInfoMutation, useGetUsersQuery } from "@/src/store/services/changeRole";
import Cookies from "js-cookie";
import Alert from "../components/Notification";
import { useRouter } from "next/navigation";


export interface IPerson {
    first_name: string;
    last_name: string;
    email: string;
    user_role: "AD" | "MN" | "US";
    is_active: boolean;
    id: number;
}

export interface IAccountPageCredential {
    type: string[];
}
const AdminUsers: FC<IAccountPageCredential> = ({ type }) => {
    const route = useRouter();
    const token = JSON.parse(Cookies.get("loginUser") || "[]").access;

    useEffect(() => {
        if (token === undefined) {
            route.push("/sign-in");
        }
    }, []);

    const [classname, setClassname] = useState("invisible");
    const { refetch, data: dataUsers, isLoading: isLoadingUsers } = useGetUsersQuery(token);

    const [changeUserInfo, { isSuccess: isSuccessChangeUserInfo }] = useChangeUserInfoMutation();

    useEffect(() => {
        if (isSuccessChangeUserInfo) {
            setClassname("");
            refetch();
            setTimeout(() => setClassname("invisible"), 3000);
        }
    }, [isSuccessChangeUserInfo]);

    let isUsers = false;
    dataUsers?.results.map((person: IPerson) => {
        !isUsers && (isUsers = type.includes(person.user_role));
    });

    return (
        <div className={css.users}>
            <AdminsHeader />
            {isLoadingUsers ? <div className={css.loader}>
                <Loader isLoading={isLoadingUsers} />
            </div> :
                isUsers && dataUsers.results.length !== (0 || undefined) ? (
                    dataUsers.results.map((person: IPerson) => (
                        type.includes(person.user_role) &&
                        <div className={`${css.user} ${!person.is_active && css.locked}`} key={person.id}>
                            <div className={css.userName}>
                                {person.first_name} {person.last_name}
                            </div>
                            <div className={css.userEmail}>{person.email}</div>
                            <div className={css.switch}>
                                <label>
                                    {person.is_active ? "Активен" : "Заблокирован"}
                                    <input
                                        type="checkbox"
                                        checked={person.is_active}
                                        onClick={() => {
                                            const id = person.id;
                                            const requestValues = { is_active: !person.is_active };
                                            changeUserInfo({ requestValues, token, id });
                                        }}
                                    />
                                    <span className={css.slider}></span>
                                </label>
                            </div>
                            <ChangeUserRole
                                role={Roles[person.user_role]}
                                id={person.id}
                                disabled={!person.is_active}
                                onClick={changeUserInfo}
                            />
                        </div>

                    ))
                ) : (
                    <NoUsers
                        text={"Пользователей пока нет"}
                    />
                )
            }
            <Alert
                classname={classname}
                message={"Изменения сохранены"}
                onClick={() => setClassname("invisible")}
            />
        </div>
    );
};

export default AdminUsers;
