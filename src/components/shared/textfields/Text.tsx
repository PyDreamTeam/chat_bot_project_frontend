import React, {FC} from "react";

type CommonProps = React.PropsWithChildren<Record<string, unknown>>;
type TextProps = CommonProps & {
     type: "title" | "subtitleH2" | "subtitleH3" | "subtitleH4" | "subtitleH5" | "paragraph" | "inline";
     color?: "black" | "grey" | "telegray" | "red" | "green" | "blue";
};

const Title:FC <CommonProps> = ({ children, style }) => (
     <h1 style={style}>{children}</h1>
);

const SubtitleH2:FC <CommonProps> = ({ children, style }) => (
     <h2 style={style}>{children}</h2>
);

const SubtitleH3:FC <CommonProps> = ({ children, style }) => (
     <h3 style={style}>{children}</h3>
);

const SubtitleH4:FC <CommonProps> = ({ children, style }) => (
     <h4 style={style}>{children}</h4>
);

const SubtitleH5:FC <CommonProps> = ({ children, style }) => (
     <h5 style={style}>{children}</h5>
);

const Paragraph:FC <CommonProps> = ({ children, style }) => (
     <p style={style}>{children}</p>
);

const Inline:FC <CommonProps> = ({ children, style }) => (
     <span style={style}>{children}</span>
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
     const Component = componentsDisplay[type];

     return (
          <Component style={{color}}>
               {children}
          </Component>
     );
};

export default Text;