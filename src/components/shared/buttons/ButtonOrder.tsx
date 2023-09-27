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

    return (
        <>
            <button className={css.buttonOrder} onClick={toggle}>
                <div className={css.circle}>
                    <div className={css.orderImg}>
                        <Image src="/img/letter.png" alt="platforms" width={32} height={32}></Image>
                        <div className={css.text}>
                            <p>Оформить заявку</p>
                        </div>
                    </div>
                </div>
                <svg id={css.rotatingText} viewBox="0 0 200 200" width="250" height="250">
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
    );
};
