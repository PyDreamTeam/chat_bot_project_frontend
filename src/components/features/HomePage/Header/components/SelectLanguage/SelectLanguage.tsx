import React, { useState } from 'react';
import Image from "next/image";
import styles from "@/src/components/features/HomePage/Header/components/HeaderRightBlock/HeaderRightBlock.module.css";
export const SelectLanguage = () => {
    const arOptions = ["RU","EN"];
    const [value, setValue] = useState('');

    const options = arOptions.map((text, index) => {
        return <option key={index} value={index}>{text}</option>;
    });
    return(
        <div className={styles.selectLang}>
            <Image src={"img/globe-alt.svg"} alt={"globe"} width={24} height={24}></Image>
            <select className={styles.selectLanguage} value={value} onChange={(event) => setValue(event.target.value)}>
                {options}
            </select>
        </div>
    )
}







