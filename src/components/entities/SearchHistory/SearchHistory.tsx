import React from "react";

import styles from "./SearchHistory.module.css";
import { SearchHistoryConfig } from "@/src/components/entities/SearchHistory/SearchHistoryConfig";
import SearchHistoryItem from "@/src/components/shared/SearchHistoryItem/SearchHistoryItem";
import uuid from "uuid-random";

const SearchHistory = () => {
     return (
          <div className={styles.searchHistoryWrapper}>
               <h4>История поиска</h4>
               <div className={styles.searchHistoryCards}>
                    {SearchHistoryConfig.map((card) =>
                         <SearchHistoryItem
                              key={uuid()}
                              title={card.title}
                              description={card.description}
                              favorite={card.favorite}/>)}
               </div>
            
          </div>
     );
};

export default SearchHistory;
