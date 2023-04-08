import React, { FC } from "react";

import styles from "./styles/SearchHistoryItem.module.css";
import { SearchHistorySvgConfig } from "./SearchHistorySvgConfig";
import Mail from "../images/img/Mail-template.svg";
import Aimilogic from "../images/img/aimylogic-online-service-logo-2-1200x900 1.svg";
import Image from "next/image";

interface ISearchHistoryItem {
     title: string;
     description: string;
}

interface IFavoritesItem extends ISearchHistoryItem {
     favorite?: boolean;
}

const SearchHistoryItem: FC<ISearchHistoryItem & IFavoritesItem> = ({ title, description, favorite }) => {
     return (
          <div className={styles.cardBlock}>
               {/*{SearchHistorySvgConfig[title]}*/}
               <Image alt={"platform"} src={title === "Aimilogic" ? Aimilogic : Mail} />
               <p className={styles.itemTitle}>{title}</p>
               <p className={styles.itemDescription}>{description}</p>
               {favorite && <div className={styles.mark}>{SearchHistorySvgConfig.Mark}</div>}
          </div>
     );
};

export default SearchHistoryItem;
