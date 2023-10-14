import PhoneSavedPopup from "@/src/components/shared/popups/PhoneSavedPopup";
import styles from "./Header.module.css";
import HeaderLeftBlock from "./components/HeaderLeftBlock/HeaderLeftBlock";
import HeaderRightBlock from "./components/HeaderRightBlock/HeaderRightBlock";
import { FC, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

interface PropsHeader {
    type?: "start" | "other";
}

const Header: FC<PropsHeader> = ({ type }) => {
    const [openPopup, setOpenPopup] = useState<boolean>(false);
    const [phone, setPhone] = useState<string | undefined>("");
    const handleTogglePopup = () => setOpenPopup((prevState) => !prevState);
    const timerRefEdit = useRef<NodeJS.Timeout | null>(null);
    let orderPhone: string | undefined = "";

    const startClosePopupTimer = () => {
        timerRefEdit.current = setTimeout(() => {
            Cookies.set("Saved_phone", "");
            Cookies.set("Order_phone", "");
            setOpenPopup(false);
        }, 4000);
    };

    useEffect(() => {
        orderPhone = Cookies.get("Saved_phone");
        setPhone(orderPhone);

        if (orderPhone) {
            setOpenPopup(true);
            startClosePopupTimer();
        }

        return () => {
            clearTimeout(timerRefEdit.current as NodeJS.Timeout);
        };
    }, []);

    return (
        <header className={type === "start" ? `${styles.headerWrapper}` : `${styles.headerWrapperOther}`}>
            <div className={styles.header}>
                <HeaderLeftBlock />
                <HeaderRightBlock />
                <PhoneSavedPopup activePopup={openPopup} phone={phone} close={handleTogglePopup} />
            </div>
        </header>
    );
};

export default Header;
