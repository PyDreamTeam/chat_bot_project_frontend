import styles from "./Header.module.css";
import HeaderLeftBlock from "./components/HeaderLeftBlock/HeaderLeftBlock";
import HeaderRightBlock from "./components/HeaderRightBlock/HeaderRightBlock";
import { FC } from "react";

interface PropsHeader {
     type?: "start" | "other"
}

const Header: FC<PropsHeader> = ({type}) => {
     return (
          <header className={type === "start" ? `${styles.headerWrapper}` : `${styles.headerWrapperOther}`}>
               <div className={styles.header}>
                    <HeaderLeftBlock />
                    <HeaderRightBlock />
               </div>
          </header>
     );
};

export default Header;