import React from "react";
import UsersAdmin from ".";
import { usersOutput } from "./all";
import AdminUsers from "./adminUsers/AdminUsers";


const AdministratorsPage = () => {
    return (
        <UsersAdmin>
            <AdminUsers type={usersOutput.AD} />
        </UsersAdmin>
    );
};

export default AdministratorsPage;
