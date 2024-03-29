import { FC, useState, useEffect } from "react";
import css from "./styles/button.module.css";
import Text from "../text/Text";
import Image from "next/image";
import { useModal } from "@/src/hooks/useModal";
import Modal from "../modal/Modal";
import SelectionRequest from "../../entities/selectionRequest/SelectionRequest";

interface IPropsButtonOrder {
    dataComment?: string;
}

export const ButtonOrder: FC<IPropsButtonOrder> = ({ dataComment }) => {
    const { isShown, toggle } = useModal();
    const [appearance, setAppearance] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setAppearance(true);
            } else {
                setAppearance(false);
            }
        });
    }, []);

    return (
        <>
            {appearance && (
                <>
                    <button className={css.buttonOrder} onClick={toggle}>
                        <div className={css.circle}>
                            <div className={css.orderImg}>
                                <Image src="/img/letter.png" alt="platforms" width={21} height={21}></Image>
                                <div>
                                    <Text className={css.text} type="reg14" color="white">
                                        Оформить заявку
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <svg id={css.rotatingText} viewBox="0 0 200 200" width="170" height="170">
                            <defs>
                                <path
                                    id="circle"
                                    d="M 100, 100
            m -75, 0
            a 75, 75 0 1, 0 150, 0
            a 75, 75 0 1, 0 -150, 0
            "
                                ></path>
                            </defs>
                            <text width="400">
                                <textPath xlinkHref="#circle" className={css.circleText}>
                                    . заказать бесплатно . заказать бесплатно
                                </textPath>
                            </text>
                        </svg>
                    </button>

                    <Modal isShown={isShown} hide={toggle}>
                        <SelectionRequest close={toggle} dataComment={dataComment} />
                    </Modal>
                </>
            )}
        </>
    );
};
