import React, { FC } from "react";
import styles from "./styles/Text.module.css";

type CommonProps = React.PropsWithChildren<Record<string, unknown>>;
type TextColor = "black" | "grey" | "telegray" | "red" | "green" | "blue" | "white" | "dark";
type TextType = "reg24" | "reg20" | "med20" | "reg18" | "reg16" | "sem16" | "reg14" | "sem24Link" | "med24btn" | "med18btn" | "inline"
type TextProps = CommonProps & {
     type: TextType;
     color: TextColor
     className?: string;
};
type TagProps = CommonProps & {
     color: TextColor
};

const Regular24: FC<TagProps> = ({ children, color }) => (
     <p className={`${styles.reg24} ${styles[color]}`}>{children}</p>
);

const Regular20: FC<TagProps> = ({ children, color }) => (
     <p className={`${styles.reg20} ${styles[color]}`}>{children}</p>
);

const Medium20: FC<TagProps> = ({ children, color }) => (
     <p className={`${styles.med20} ${styles[color]}`}>{children}</p>
);

const Regular18: FC<TagProps> = ({ children, color }) => (
     <p className={`${styles.reg18} ${styles[color]}`}>{children}</p>
);

const Regular16: FC<TagProps> = ({ children, color }) => (
     <p className={`${styles.reg16} ${styles[color]}`}>{children}</p>
);

const Semibold16: FC<TagProps> = ({ children, color }) => (
     <p className={`${styles.sem16} ${styles[color]}`}>{children}</p>
);
const Regular14: FC<TagProps> = ({ children, color }) => (
     <p className={`${styles.reg14} ${styles[color]}`}>{children}</p>
);
const Sem24Link: FC<TagProps> = ({ children, color }) => (
     <p className={`${styles.sem24Link} ${styles[color]}`}>{children}</p>
);
const Med24Btn: FC<TagProps> = ({ children, color }) => (
     <p className={`${styles.med24btn} ${styles[color]}`}>{children}</p>
);
const Med18Btn: FC<TagProps> = ({ children, color }) => (
     <p className={`${styles.med18btn} ${styles[color]}`}>{children}</p>
);

const Inline: FC<TagProps> = ({ children, color }) => (
     <span className={`${styles.inline} ${styles[color]}`}>{children}</span>
);

const componentsDisplay = {
     reg24: Regular24,
     reg20: Regular20,
     med20: Medium20,
     reg18: Regular18,
     reg16: Regular16,
     sem16: Semibold16,
     reg14: Regular14,
     sem24Link: Sem24Link,
     med24btn: Med24Btn,
     med18btn: Med18Btn,
     inline: Inline,
} as const;

const Text: FC<TextProps> = ({ children, type, color}) => {
     const Tag = componentsDisplay[type];

     return (
          <Tag color={color}>
               {children}
          </Tag>
     );
};
export default Text;