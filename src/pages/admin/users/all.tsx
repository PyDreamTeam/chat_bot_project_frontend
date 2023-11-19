import React from "react";
import UsersAdmin from ".";
import AdminUsers from "./adminUsers/AdminUsers";


export const usersOutput = {
    ALL: ["AD", "MN", "US"],
    AD: ["AD"],
    MN: ["MN"],
};

const AllUsersPage = () => {
    return (
        <UsersAdmin>
            <AdminUsers type={usersOutput.ALL} />
        </UsersAdmin>
    );
};

export default AllUsersPage;
