import React, { useState } from "react";
import Text from "@/src/components/shared/text/Text";
import ButtonShowMore from "@/src/components/shared/buttons/ButtonShowMore";
import styles from "./BlockShotDescription.module.css";

interface Props {
    text?: string;
    maxLength: number;
}

const ReadMore: React.FC<Props> = ({ text, maxLength }) => {
    const [isTruncated, setIsTruncated] = useState(true);

    const toggleText = () => {
        setIsTruncated(!isTruncated);
    };

    return (
        <div className={styles.showText}>
            {isTruncated ? (
                <>
                    <Text type={"reg18"} color={"grey"}>
                        {text?.slice(0, maxLength)}...
                    </Text>
                    <ButtonShowMore onClick={toggleText} text={"Узнать больше"} />
                </>
            ) : (
                <>
                    <Text type={"reg18"} color={"grey"}>
                        {text}
                    </Text>
                    <ButtonShowMore onClick={toggleText} text={"Скрыть"} />
                </>
            )}
        </div>
    );
};

export default ReadMore;
