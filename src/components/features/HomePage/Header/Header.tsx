import styles from "./Header.module.css";
import HeaderLeftBlock from "./components/HeaderLeftBlock/HeaderLeftBlock";
import HeaderRightBlock from "./components/HeaderRightBlock/HeaderRightBlock";

const Header = () => {
     return (
          <header className={styles.headerWrapper}>
               <div className={styles.header}>
                    <HeaderLeftBlock />
                    <HeaderRightBlock />
               </div>
          </header>
     );
};

export default Header;