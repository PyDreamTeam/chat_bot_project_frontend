import React, { FC } from "react";
import styles from "./ErrorMessage.module.css";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";

type CommonProps = React.PropsWithChildren<Record<string, unknown>>;

type ErrorProps = CommonProps & {
    isShown: boolean;
    className?: string;
};

const ErrorMessage: FC<ErrorProps> = ({ children, isShown, className }) => {
    return (
        <div className={`${!isShown ? className : styles.errorBlockHide}`}>
            <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
            <Text type="reg16" color="red">
                {children}
            </Text>
        </div>
    );
};

export default ErrorMessage;
