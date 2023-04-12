import React, {ElementType, FC, ReactNode} from "react";

export enum TextProps {
     title = "title",
     subtitleH2 = "subtitleH2",
     subtitleH3 = "subtitleH3",
     subtitleH4 = "subtitleH4",
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
     children: JSX.Element | string;
     className?: string;
     color: string;
     type: keyof typeof TextProps
}

const Text: FC<ITextProps> = ({children, tag: CustomTag, ...props}) => {
     return (
          <CustomTag {...props}>{children}</CustomTag>
     );
};
export default Text;