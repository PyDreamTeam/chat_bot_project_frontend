import { useState } from "react";
import Title from "@/src/components/shared/text/Title";
import style from "./platformFilters.module.css";
import { Filters } from "./filters/Filters";
import { Platforms } from "./platforms/Platforms";
import { AlphabeticalSorting } from "./AlphabeticalSorting/AlphabeticalSorting";
import { InputSearch } from "./InputSearch/InputSearch";
import Header from "@/src/components/features/HomePage/Header/Header";


const PlatformFilters = () => {

     const [search, setSearch] = useState("");

     return (
          <div>
               <Header type="other"/>
               <div className={style.lineTop}>
                    <div className={style.wraperPage}>
                         <div className={style.wrapperTitle}>
                              <Title color="black" type="h4">Платформы</Title>
                         </div>

                         <div className={style.container}>
                              <Filters />
                              <div>
                                   <div style={{ marginTop: 64 }}>
                                        <div style={{ position: "relative" }}>
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