import React, { FC } from "react";
import Image from "next/image";
import styles from "./styles/styles.module.css";
import Link from "next/link";

interface Icon {
     src: React.ReactNode;
     id: number;
     onClick?: () => any;
}

interface IconsAuthBarProps {
     className: string;
     svgConfig: Array<Icon>;
}

const IconsAuthBar: FC<IconsAuthBarProps> = ({ svgConfig, className }) => {
     return (
          <div className={styles[className]}>
               {svgConfig.map(({ src, id }) => (
                    <button className={styles.socialsButton} key={id}>
                         {src}
                    </button>
               ))}
          </div>
     );
};

export default IconsAuthBar;
