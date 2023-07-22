import { FC, PropsWithChildren } from "react";
import css from "./styles/button.module.css";

type TypeButton = "submit" | "button" | "reset";

interface PropsButton {
     type: TypeButton;
     disabled?: boolean;
     width?: number | `${number}px` | undefined;
     onClick?: () => void;
}

export const Button: FC<PropsWithChildren<PropsButton>> = ({ disabled, children, style, type, width, onClick }) => (
     <button disabled={disabled} className={css[style]} type={type} onClick={onClick} style={width ? { width: `${width}px` } : undefined}>
          {children}
     </button>
);
