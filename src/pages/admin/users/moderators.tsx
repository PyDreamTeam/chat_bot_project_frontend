import React from "react";
import AdminUsers from "./adminUsers/AdminUsers";
import UsersAdmin from ".";
import { usersOutput } from "./all";

const ModeratorsPage = () => {
    return (
        <UsersAdmin>
            <AdminUsers type={usersOutput.MN} />
        </UsersAdmin>
    );
};

export default ModeratorsPage;
