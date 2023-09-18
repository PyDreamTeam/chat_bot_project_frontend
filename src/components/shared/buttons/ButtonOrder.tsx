import { FC, useState, useEffect } from "react";
import css from "./styles/button.module.css";
import Text from "../text/Text";
import Image from "next/image";
import { useModal } from "@/src/hooks/useModal";
import Modal from "../modal/Modal";
import SelectionRequest from "../../entities/selectionRequest/SelectionRequest";

export const ButtonOrder: FC = () => {
    // const [textCircle, setTextCircle] = useState([заказать бесплатно заказать бесплатно]);
    const { isShown, toggle } = useModal();

    // const text = document.querySelector(".textCircle");
    // text.innerHTML = text.innerContent.split("")

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
                    {/* <div className={css.circleText}>заказать</div> */}
                </div>
            </button>
            <Modal isShown={isShown} hide={toggle}>
                <SelectionRequest close={toggle} />
            </Modal>
        </>
    );
};
