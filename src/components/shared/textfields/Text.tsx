import React, {FC} from "react";
import styles from "./styles/Text.module.css";

type CommonProps = React.PropsWithChildren<Record<string, unknown>>;
type TextProps = CommonProps & {
     type: "title" | "subtitleH2" | "subtitleH3" | "subtitleH4" | "subtitleH5" | "paragraph" | "inline";
     color?: "black" | "grey" | "telegray" | "red" | "green" | "blue";
     className?: string;
};

const Title:FC <CommonProps> = ({ children }) => (
     <h1 className={styles}>{children}</h1>
);

const SubtitleH2:FC <CommonProps> = ({ children }) => (
     <h2 className={styles}>{children}</h2>
);

const SubtitleH3:FC <CommonProps> = ({ children }) => (
     <h3 className={styles}>{children}</h3>
);

const SubtitleH4:FC <CommonProps> = ({ children }) => (
     <h4 className={styles}>{children}</h4>
);

const SubtitleH5:FC <CommonProps> = ({ children }) => (
     <h5 className={styles}>{children}</h5>
);

const Paragraph:FC <CommonProps> = ({ children}) => (
     <p className={styles}>{children}</p>
);

const Inline:FC <CommonProps> = ({ children}) => (
     <span className={styles}>{children}</span>
);

const componentsDisplay = {
     title: Title,
     subtitleH2: SubtitleH2,
     subtitleH3: SubtitleH3,
     subtitleH4: SubtitleH4,
     subtitleH5: SubtitleH5,
     paragraph: Paragraph,
     inline: Inline,
} as const;

const Text:FC <TextProps> = ({ children, type, color }) => {
     const Tag = componentsDisplay[type];

     return (
          <Tag style={{color}}>
               {children}
          </Tag>
     );
};
export default Text;