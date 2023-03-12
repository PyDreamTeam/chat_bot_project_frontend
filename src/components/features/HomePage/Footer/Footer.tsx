import styles from "./Footer.module.css";
import FooterLeftBlock from "./components/FooterLeftBlock/FooterLeftBlock";
import FooterRightBlock from "./components/FooterRightBlock/FooterRightBlock";

const Footer = () => {
     return (
          <footer className={styles.footerWrapper}>
               <div className={styles.footer}>
                    <FooterLeftBlock />
                    <FooterRightBlock />
               </div>
          </footer>
     );
};

export default Footer;
