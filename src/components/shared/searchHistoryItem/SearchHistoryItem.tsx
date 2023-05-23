import React, { FC } from "react";

import styles from "./styles/SearchHistoryItem.module.css";
import { SearchHistorySvgConfig } from "./SearchHistorySvgConfig";
import Mail from "../images/img/Mail-template.svg";
import Aimilogic from "../images/img/aimylogic-online-service-logo-2-1200x900 1.svg";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import Title from "../text/Title";

interface ISearchHistoryItem {
     title: string;
     description: string;
     profile: boolean
}

interface IFavoritesItem extends ISearchHistoryItem {
     favorite?: boolean;
}

const SearchHistoryItem: FC<ISearchHistoryItem & IFavoritesItem> = ({ title, description, favorite, profile}) => {
     return (
          <div className={styles.cardBlock}>
               {/*{SearchHistorySvgConfig[title]}*/}
               <Image alt={"platform"} src={title === "Aimilogic" ? Aimilogic : Mail} />
               {profile === true ? <Text type={"med20"} color={"black"}>{title}</Text> : <Title type={"h5"} color={"black"}>
                    {title}
               </Title>}
               
               <Text type={"reg18"} color={"black"}>
                    {description}
               </Text>
               {favorite && <div className={styles.mark}>{SearchHistorySvgConfig.Mark}</div>}
          </div>
     );
};

export default SearchHistoryItem;