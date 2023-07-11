import { FC, PropsWithChildren } from "react";
import css from "./styles/button.module.css";

type StyleButton = "button";
type TypeButton = "submit" | "button" | "reset";

interface PropsButton {
     style: StyleButton;
     type: TypeButton;
     disabled?: boolean;
     onClick?: () => void;
}

export const Button: FC<PropsWithChildren<PropsButton>> = ({ disabled, children, style, type, onClick }) => (
     <button disabled={disabled} className={css[style]} type={type} onClick={onClick}>
          {children}
     </button>
);
