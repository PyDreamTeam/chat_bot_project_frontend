import { FC, PropsWithChildren } from "react";
import css from "./styles/button.module.css";

type TypeButton = "submit" | "button" | "reset";

interface PropsButton {
     type: TypeButton;
     disabled?: boolean;
     active: boolean;
     onClick?: () => void;
}

export const Button: FC<PropsWithChildren<PropsButton>> = ({ disabled, children, active, type, onClick }) => (
     <button disabled={disabled} className={active ? `${css.buttonActive}` : `${css.buttonDisabled}`} type={type} onClick={onClick}>
          {children}
     </button>
);
