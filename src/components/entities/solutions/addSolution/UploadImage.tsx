import React, { FC, useRef } from "react";
import css from "./style.module.css";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";

interface PropsUploadImage {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    image: string;
    isImage?: boolean;
    text?: string;
    height?: number;
    width?: number;
    type?: "logo" | "icon";
}

export const UploadImage: FC<PropsUploadImage> = ({ onChange, isImage, image, text, width, height, type }) => {
    const filePicker = useRef(null);

    const handleClick = () => {
        //@ts-ignore
        filePicker.current.click();
    };

    return (
        <div>
            <Text type="reg18" color="dark" className={css.logoText}>
                {text}
            </Text>
            {isImage ? (
                <Image
                    src={image}
                    alt="uploadFile"
                    width={width}
                    height={height}
                    className={css.image}
                    onClick={handleClick}
                />
            ) : (
                <Image
                    src={type === "logo" ? "/platforms/uploadFile.svg" : "/platforms/addPlus.svg"}
                    alt="uploadFile"
                    width={width}
                    height={height}
                    className={css.logoImage}
                    onClick={handleClick}
                />
            )}
            <input
                type="file"
                name="file"
                ref={filePicker}
                onChange={onChange}
                accept="image/*,.png,.jpg,.svg,.gif,.web"
                className={css.hidden}
            />
        </div>
    );
};
