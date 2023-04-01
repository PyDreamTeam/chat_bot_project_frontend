import React from "react";
import Image from "next/image";
import ImageError from "./img/ImageErrorForm.svg";
import styles from "./styles/styles.module.css";

const ImageErrorForm = () => {
     return <Image className={styles.imageErrorForm} width={20} height={20} alt="Error-icon" src={ImageError} />;
};

export default ImageErrorForm;