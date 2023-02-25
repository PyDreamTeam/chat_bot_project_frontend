import styles from "./Header.module.css";
import HeaderLeftBlock from "./components/HeaderLeftBlock/HeaderLeftBlock";
import HeaderRightBlock from "./components/HeaderRightBlock/HeaderRightBlock";

export default function Header() {
     return (
          <header className={styles.header}>
               <HeaderLeftBlock />
               <HeaderRightBlock />
          </header>
     );
}
