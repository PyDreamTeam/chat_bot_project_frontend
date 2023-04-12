import React, {ElementType, FC, ReactNode} from "react";

export enum TextProps {
     title = "title",
     subtitleH2 = "subtitleH2",
     subtitleH3 = "subtitleH3",
     subtitleH4 = "subtitleH4",
     subtitleH5 = "subtitleH5",
     paragraph = "paragraph",
     inline = "inline",
}

export enum TextColor {
     black = "black",
     grey = "grey",
     telegray = "telegray",
     red = "red",
     green = "green",
     blue = "blue",
}

interface ITextProps {
     tag: ElementType;
     type: keyof typeof TextProps;
     color: string;
     children: JSX.Element | string;
     className?: string;


}

const Text: FC<ITextProps> = ({children, tag: Tag, color, ...props}) => {
     return (
          <Tag style={{color}} {...props}>{children}</Tag>
     );
};
export default Text;