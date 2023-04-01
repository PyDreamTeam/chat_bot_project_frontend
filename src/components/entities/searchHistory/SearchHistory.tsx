import React, { FC } from "react";

import styles from "./styles/SearchHistory.module.css";
import { SearchHistoryConfig } from "@/src/components/entities/searchHistory/SearchHistoryConfig";
import SearchHistoryItem from "@/src/components/shared/searchHistoryItem/SearchHistoryItem";
import uuid from "uuid-random";

interface ISearchHistory {
     title: string;
}

const SearchHistory: FC<ISearchHistory> = ({ title }) => {
     return (
          <div className={styles.searchHistoryWrapper}>
               <h4>{title}</h4>
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