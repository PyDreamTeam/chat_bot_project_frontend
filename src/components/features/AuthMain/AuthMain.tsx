import React from "react";

import styles from "./AuthMain.module.css";
import AuthHeader from "@/src/components/features/AuthHeader/AuthHeader";
import InputSearchField from "@/src/components/shared/inputs/InputSearchField";


const AuthMain = () => {
     return (
          <main className={styles.mainContentBlock}>
               <AuthHeader />
               <InputSearchField/>
          </main>
     );
};

export default AuthMain;
