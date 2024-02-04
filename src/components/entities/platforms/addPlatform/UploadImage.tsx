import React, { FC, useRef } from "react";
import css from "./style.module.css";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";

interface PropsUploadImage {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    image: string;
    isImage?: boolean;
}

export const UploadImage: FC<PropsUploadImage> = ({ onChange, isImage, image }) => {
    const filePicker = useRef(null);

    const handleClick = () => {
        //@ts-ignore
        filePicker.current.click();
    };

    return (
        <div>
            <Text type="reg18" color="dark" className={css.logoText}>
                Логотип
            </Text>
            {isImage ? (
                <Image
                    src={image}
                    alt="uploadFile"
                    width={250}
                    height={250}
                    className={css.image}
                    onClick={handleClick}
                />
            ) : (
                <Image
                    src="/platforms/uploadFile.svg"
                    alt="uploadFile"
                    width={250}
                    height={250}
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
