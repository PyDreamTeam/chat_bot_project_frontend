import React from "react";

import styles from "./AuthMain.module.css";
import AuthHeader from "@/src/components/features/AuthHeader/AuthHeader";
import InputSearchField from "@/src/components/shared/inputs/InputSearchField";
import Solutions from "@/src/components/entities/solutions/Solutions";

const AuthMain = () => {
     return (
          <main className={styles.mainContentBlock}>
               <AuthHeader />
               <InputSearchField />
               <Solutions />
          </main>
     );
};

export default AuthMain;
