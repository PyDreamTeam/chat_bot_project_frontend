import styles from "./Footer.module.css"
import FooterLeftBlock from "./FooterLeftBlock/FooterLeftBlock"
import FooterRightBlock from "./FooterRightBlock/FooterRightBlock"

const Footer = () => {

    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerBox}>
                <FooterLeftBlock/>
                <FooterRightBlock/>
            </div>
        </footer>
    );
};

export default Footer;
