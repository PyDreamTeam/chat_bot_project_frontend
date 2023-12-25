import styles from "./Tooltip.module.css";
import { useState, FC } from "react";
import Text from "../text/Text";
import Cookies from "js-cookie";
import { useDataUserQuery } from "@/src/store/services/userAuth";

interface ToolTip {
    text: string;
    children: JSX.Element;
    type?: boolean;
}

const ToolTip: FC<ToolTip> = ({ text, children, type }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { isSuccess } = useDataUserQuery(token);
    const [isVisible, setIsVisible] = useState(false);
    return (
        <>
            <div
                className={type ? `${styles.contaoner_for_solution}` : `${styles.toolTip_container}`}
                onMouseEnter={() => {
                    setIsVisible(true);
                }}
                onMouseLeave={() => {
                    setIsVisible(false);
                }}
            >
                {children}
                {!isSuccess && (
                    <>
                        {isVisible && (
                            <div className={type ? `${styles.solution_text}` : `${styles.wrap_text}`}>
                                <div className={styles.tooltip_text}>
                                    <Text type="reg14" color="grey">
                                        {text}
                                    </Text>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
};
export default ToolTip;
