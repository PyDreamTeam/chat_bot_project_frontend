import { PlatformCard } from "@/src/components/entities/platforms/rightBlock/PlatformCard/PlatformCard";
import Header from "@/src/components/features/HomePage/Header/Header";
import { useGetPlatformQuery, useGetPlatformsFiltersQuery } from "@/src/store/services/platforms";
import { useRouter } from "next/router";
import css from "./platform.module.css";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Title from "@/src/components/shared/text/Title";
import { TagFilter } from "@/src/components/entities/filters/Tag/Tag";

const Platform = () => {

     const router = useRouter();
     const { idp } = router.query;

     const { data } = useGetPlatformQuery(idp);
     const { data: dataFilters } = useGetPlatformsFiltersQuery({});

     console.log("data", dataFilters);

     return (
          <div>
               <Header type="other"/>
               <div className={css.container}>
                    <div>
                         <Text type="reg16" color="telegray"><Link href={"/home"} className={css.link}>Главная</Link>/<Link href={"/platforms-filter"} className={css.link}>Подобрать платформу</Link>/<span className={css.link}>{data?.title}</span></Text>
                    </div>
                    <div className={css.platform}>
                         <PlatformCard id={data?.id} title={data?.title} short_description={data?.short_description} tags={data?.tags} image={data?.image} type="platform" price={data?.price}/>
                    </div>
                    <Title type="h4" color="dark">Характеристики</Title>
                    <TagFilter tag="hello" is={false}/>
               </div>
          </div>
     );
};

export default Platform;