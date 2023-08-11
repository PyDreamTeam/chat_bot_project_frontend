import React, { FC } from "react";
import styles from "./styles/styles.module.css";
import Text from "@/src/components/shared/text/Text";
import ArrowRight from "@/src/components/shared/arrowRight/ArrowRight";


interface IButtonShowMore {
    text: string;
    onClick?: () => void;
}

const ButtonShowMore: FC<IButtonShowMore> = ({ text,onClick }) => {
     return (
          <div className={styles.showMore} onClick={onClick}>
               <Text type={"reg16"} color={"blue"}>
                    {text}
               </Text>
               <ArrowRight className={styles.arrow}></ArrowRight>            
          </div>
     );
};

export default ButtonShowMore;