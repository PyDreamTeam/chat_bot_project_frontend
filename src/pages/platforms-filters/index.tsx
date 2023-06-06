import Header from "@/src/components/features/HomePage/Header/Header";
import Title from "@/src/components/shared/text/Title";
import { useState } from "react";
import { AlphabeticalSorting } from "./AlphabeticalSorting/AlphabeticalSorting";
import InputSearch from "./InputSearch/InputSearch";
import style from "./platformFilters.module.css";
import Filters from "./filters/Filters";
import Platforms from "./platforms/Platforms";


const PlatformFilters = () => {

     const [search, setSearch] = useState("");

     return (
          <div>
               <Header type="other" />
               <div className={style.lineTop}>
                    <div className={style.wraperPage}>
                         <div className={style.wrapperTitle}>
                              <Title color="black" type="h4">Платформы</Title>
                         </div>
                         <div className={style.container}>
                              <Filters />
                              <div>
                                   <div style={{ marginTop: 64 }}>
                                        <div className={style.groupSearch}>
                                             <InputSearch value={search} onChange={(e) => setSearch(e.target.value)} />
                                             <img src="/img/Icon_найти_платформу.svg" alt="search" className={style.search} />
                                        </div>
                                        <AlphabeticalSorting />
                                   </div>
                                   <Platforms />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PlatformFilters;