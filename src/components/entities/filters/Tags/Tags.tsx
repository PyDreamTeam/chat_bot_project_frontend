import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { FC } from "react";
import { TagFilter } from "../Tag/Tag";
import css from "./tags.module.css";
import { useRouter } from "next/router";
import { useGetPlatformQuery } from "@/src/store/services/platforms";

interface PropsTagsFilter {
    id: number
    filter: string
    image: string
    tags: {
        id: number
        tag: string
        is?: boolean
    }[]
}

export const TagsFilter: FC<PropsTagsFilter> = ({id, filter, image, tags = []}) => {

     const router = useRouter();
     const { idp } = router.query;

     const { data } = useGetPlatformQuery(Number(idp));

     console.log("data", data);

     return (
          <div className={css.container}>
               {filter !== "" ? <div className={css.groupFilter}>
                    <Image src={`/platforms/${image}.svg`} alt="icon" width={24} height={24}/>
                    <Text type="reg20" color="dark">{filter}</Text>
                    <Image src={"/platforms/clarity_help-line.svg"} alt="icon" width={24} height={24}/>
               </div> : null}
               <ul className={css.listTags}>
                    {tags.map((item) => (
                         <li key={item.id} className={css.tag}>
                              <TagFilter id={item.id} tag={item.tag} is={Boolean(data?.tags?.find(tag => tag.id === item.id))}/>
                         </li>
                    ))}
               </ul>
          </div>
     );
}; 