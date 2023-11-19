import React, {FC} from "react";
import styles from "../FavoriteStub/FavoriteStub.module.css";
import Link from "next/link";


export interface IFavoriteStub {
    text: string;
    link: string;
}


const image = <svg width="110" height="96" viewBox="0 0 110 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Heart">
        <path id="Vector" d="M32.5 5.00001C17.3125 5.00001 5 17.3125 5 32.5C5 60 37.5 85 55 90.815C72.5 85 105 60 105 32.5C105 17.3125 92.6875 5.00001 77.5 5.00001C68.2 5.00001 59.975 9.61751 55 16.685C52.4642 13.073 49.0954 10.1252 45.1788 8.09122C41.2623 6.05722 36.9132 4.99689 32.5 5.00001Z" stroke="url(#paint0_linear_9027_78589)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
        <circle id="Ellipse 1183" cx="85" cy="75" r="20" fill="white"/>
        <path id="Union" fillRule="evenodd" clipRule="evenodd" d="M87.5915 63.75C87.5915 61.6789 85.9125 60 83.8414 60C81.7703 60 80.0914 61.6789 80.0914 63.75V70.4998H73.7501C71.679 70.4998 70 72.1787 70 74.2498C70 76.3209 71.679 77.9998 73.7501 77.9998H80.0914V85C80.0914 87.0711 81.7703 88.75 83.8414 88.75C85.9125 88.75 87.5915 87.0711 87.5915 85V77.9998H94.3425C96.4136 77.9998 98.0926 76.3209 98.0926 74.2498C98.0926 72.1787 96.4136 70.4998 94.3425 70.4998H87.5915V63.75Z" fill="url(#paint1_linear_9027_78589)"/>
    </g>
    <defs>
        <linearGradient id="paint0_linear_9027_78589" x1="111.967" y1="74.0811" x2="-7.27358" y2="59.1492" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0059E9" stopOpacity="0.25"/>
            <stop offset="1" stopColor="#0059E9" stopOpacity="0.1"/>
        </linearGradient>
        <linearGradient id="paint1_linear_9027_78589" x1="100.05" y1="83.1438" x2="66.3978" y2="79.6101" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0059E9" stopOpacity="0.25"/>
            <stop offset="1" stopColor="#0059E9" stopOpacity="0.1"/>
        </linearGradient>
    </defs>
</svg>;


const FavoriteStub: FC< IFavoriteStub> = ({text, link}) => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.img}>{image}</div>
                <p className={styles.text}>{text}</p>
                <button className={styles.button}>
                    <Link className={styles.link} href={link}>+  Добавить в избранное</Link>
                </button>
            </div>
        </div>
    );
};

export default FavoriteStub;