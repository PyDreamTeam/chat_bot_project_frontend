import React, { FC, useEffect, useState } from "react";
import ListAdminDashboard from "@/src/components/entities/lists/listAdminDashboard/ListAdminDashboard";
import { ADMIN_DASHBOARD_CONFIG } from "@/src/components/entities/adminDashboard/AdminDashboardConfig";

const AdminDashboard: FC = () => {
    const [activeTabItem, setActiveTabItem] = useState<number>(1);

    return (
        <div>
            <ListAdminDashboard config={ADMIN_DASHBOARD_CONFIG} activeTabItem={activeTabItem} />
        </div>
    );
};

export default AdminDashboard;
