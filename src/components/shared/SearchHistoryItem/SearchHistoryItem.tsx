import React, { FC } from "react";

import styles from "./SearchHistoryItem.module.css";
import {SearchHistorySvgConfig} from "./SearchHistorySvgConfig";
import Mail from "../images/pictures/png/Mail-template.png";
import Aimilogic from "../images/pictures/png/aimylogic-online-service-logo-2-1200x900 1.png";
import Image from "next/image";
import { SearchHistoryConfig } from "@/src/components/entities/SearchHistory/SearchHistoryConfig";

interface ISearchHistoryItem {
     title: string;
     description: string;
}

interface IFavoritesItem extends ISearchHistoryItem {
     favorite?: boolean
}

const SearchHistoryItem:FC <ISearchHistoryItem & IFavoritesItem> = ({title,description, favorite}) => {
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
