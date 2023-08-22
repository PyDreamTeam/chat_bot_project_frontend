import { FC, useCallback, useEffect, useMemo, useRef, RefObject, PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import styles from "./styles/Modal.module.css";

export interface IModalProps {
    isShown: boolean;
    hide: () => void;
    children: React.ReactNode;
}

export const Modal: FC<IModalProps> = ({ isShown, hide, children }) => {
    const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && isShown) {
            hide();
        }
    };

    useEffect(() => {
        isShown ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset");
        document.addEventListener("keydown", onKeyDown, false);
        return () => {
            document.removeEventListener("keydown", onKeyDown, false);
        };
    }, [isShown]);

    const modal = (
        <div className={styles.backdrop} onClick={hide}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
