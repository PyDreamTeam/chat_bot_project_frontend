import React, { FC } from "react";

import styles from "./styles/SearchHistory.module.css";
import { SearchHistoryConfig } from "@/src/components/entities/MyAccountPageComponents/searchHistory/SearchHistoryConfig";
import SearchHistoryItem from "@/src/components/shared/searchHistoryItem/SearchHistoryItem";
import uuid from "uuid-random";
import Title from "@/src/components/shared/textfields/Title";

interface ISearchHistory {
     title: string;
}

const SearchHistory: FC<ISearchHistory> = ({ title }) => {
     return (
          <div className={styles.searchHistoryWrapper}>
               <Title type={"h4"} color={"black"}>{title}</Title>
               <div className={styles.searchHistoryCards}>
                    {(title === "Сохраненные шаблоны" &&
                         SearchHistoryConfig.map(
                              (card) =>
                                   card.favorite && (
                                        <SearchHistoryItem
                                             key={uuid()}
                                             title={card.title}
                                             description={card.description}
                                             favorite={card.favorite}
                                        />
                                   )
                         )) ||
                         SearchHistoryConfig.map(
                              (card) =>
                                   !card.favorite && (
                                        <SearchHistoryItem
                                             key={uuid()}
                                             title={card.title}
                                             description={card.description}
                                             favorite={card.favorite}
                                        />
                                   )
                         )}
               </div>
          </div>
     );
};

export default SearchHistory;