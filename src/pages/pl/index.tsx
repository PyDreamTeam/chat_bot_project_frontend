import Header from "@/src/components/features/HomePage/Header/Header";
import css from "./platforms.module.css";
import Link from "next/link";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { useGetPlatformsFiltersQuery } from "@/src/store/services/platforms";
import { GroupFilters } from "@/src/components/entities/platforms/leftBlock/GroupFilters/GroupFilters";
import results from "../../json/results.json";

const PlatformsFilters = () => {

     // const { data } = useGetPlatformsFiltersQuery({});

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

               <div>
                    <div className={css.leftBlock}>
                         {/* <GroupFilters results={data?.results}/> */}
                         <GroupFilters results={results.results}/>
                    </div>

                    <div></div>
               </div>
               
          </div>
     );
};

export default PlatformsFilters;