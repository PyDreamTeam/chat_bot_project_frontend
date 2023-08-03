import {useState} from "react";
import Header from "@/src/components/features/HomePage/Header/Header";
import css from "./platforms.module.css";
import Link from "next/link";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { useGetPlatformsFiltersQuery } from "@/src/store/services/platforms";
import { GroupFilters } from "@/src/components/entities/platforms/leftBlock/GroupFilters/GroupFilters";
import results from "../../json/results.json";
import platforms from "../../json/platforms.json";
import InputSearch from "@/src/components/entities/platforms/rightBlock/InputSearch/InputSearch";
import Image from "next/image";
import { FieldOptions } from "@/src/components/entities/platforms/rightBlock/FieldOptions/FieldOptions";
import AlphabeticalSorting from "@/src/components/entities/platforms/rightBlock/AlphabeticalSorting/AlphabeticalSorting";
import { PlatformCard } from "@/src/components/entities/platforms/rightBlock/PlatformCard/PlatformCard";

const PlatformsFilters = () => {

     const [search, setSearch] = useState<string>("");

     // const { data } = useGetPlatformsFiltersQuery({});
     
     // console.log("data", data);

     return(
          <div className={css.container}>
               <div className={css.border}>
                    <Header type={"other"}/>
               </div>
               <div className={css.blockInfo}>
                    <div className={css.groupLink}>
                         <Text type="reg14" color="telegray"><Link href={"/home"} className={css.link}>Главная</Link>/ <Link href={"/home"} className={css.link}>Подобрать платформу</Link></Text>
                    </div>
                    <div className={css.title}>
                         <Title type="h4" color="dark">Платформы</Title>
                    </div>
               </div>

               <div className={css.main}>
                    <div className={css.leftBlock}>
                         {/* <GroupFilters results={data?.results}/> */}
                         <GroupFilters results={results.results}/>
                    </div>

                    <div className={css.rightBlock}>
                         <div className={css.groupSearch}>
                              <Image src="/img/Icon_найти_платформу.svg" alt="search" width={24} height={24} className={css.search} />
                              <InputSearch value={search} onChange={(e) => setSearch(e.target.value)}/>
                         </div>
                         <div>
                              <FieldOptions/>
                         </div>
                         <AlphabeticalSorting/>
                         <ul className={css.listPlatforms}>
                              {platforms.results.map((item) => (
                                   <li key={item.id}>
                                        <PlatformCard id={item.id} title={item.title} short_description={item.short_description} tags={item.tags} image={item.image}/>
                                   </li>
                              ))}
                         </ul>
                    </div>
               </div>
               
          </div>
     );
};

export default PlatformsFilters;