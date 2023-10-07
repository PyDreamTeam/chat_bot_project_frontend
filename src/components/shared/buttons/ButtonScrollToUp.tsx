import { FC, useState, useEffect } from "react";
import css from "./styles/button.module.css";
import Text from "../text/Text";
import Image from "next/image";

export const ButtonScrollToUp: FC = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1300) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {backToTop && (
                <button onClick={scrollUp} className={css.buttonToUp}>
                    <Image src="/img/upward arrow.svg" alt="platforms" width={7} height={26}></Image>
                    <Text type="reg14" color="black">
                        Наверх
                    </Text>
                </button>
            )}
        </>
    );
};
// className={fixed ? `${css.buttonToUp}` : `${css.Relative}`}
