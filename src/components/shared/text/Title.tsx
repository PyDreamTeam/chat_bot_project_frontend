import React, {FC} from "react";
import styles from "./styles/Title.module.css";

type CommonProps = React.PropsWithChildren<Record<string, unknown>>;
type TitleColor = "black" | "grey" | "telegray" | "red" | "green" | "blue" | "white";
type TitleType = "h1" | "h2" | "h3" | "h4" | "h5"
type TitleProps = CommonProps & {
     type: TitleType;
     color: TitleColor
     className?: string;
};
type TagProps = CommonProps & {
     color: TitleColor
};

const SubtitleH1:FC <TagProps> = ({ children, color}) => (
     <h1 className={`${styles.h1} ${styles[color]}`}>{children}</h1>
);

const SubtitleH2:FC <TagProps> = ({ children,color }) => (
     <h2 className={`${styles.h2} ${styles[color]}`}>{children}</h2>
);

const SubtitleH3:FC <TagProps> = ({ children, color }) => (
     <h3 className={`${styles.h3} ${styles[color]}`}>{children}</h3>
);

const SubtitleH4:FC <TagProps> = ({ children, color }) => (
     <h4 className={`${styles.h4} ${styles[color]}`}>{children}</h4>
);
const SubtitleH5:FC <TagProps> = ({ children, color }) => (
     <h5 className={`${styles.h5} ${styles[color]}`}>{children}</h5>
);

const componentsDisplay = {
     h1: SubtitleH1,
     h2: SubtitleH2,
     h3: SubtitleH3,
     h4: SubtitleH4,
     h5: SubtitleH5,
} as const;

const Title:FC <TitleProps> = ({ children, type, color }) => {
     const Tag = componentsDisplay[type];

     return (
          <Tag color={color}>
               {children}
          </Tag>
     );
};
export default Title;