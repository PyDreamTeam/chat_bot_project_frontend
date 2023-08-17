import React, { FC } from "react";
import SuperadminDashboardMain from "./superadminDashboardMain";
import AccountPageHeader from "../../features/AccountPage/AccountPageHeader/AccountPageHeader";

const SuperadminDashboard: FC = () => {
     return (
          <>
               <AccountPageHeader page={"superadminPage"} />
               <SuperadminDashboardMain />
          </>
     );
};

export default SuperadminDashboard;
