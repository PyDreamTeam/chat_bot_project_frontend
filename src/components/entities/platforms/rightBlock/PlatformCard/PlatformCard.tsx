import { FC, useState } from "react";
import css from "./platformCard.module.css";
import { PropsPlatformCard } from "../../types";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";

export const PlatformCard: FC<PropsPlatformCard> = ({id, title, short_description, image, tags = [], type, price}) => {

     const [isFavorite, setIsFavorite] = useState(false);

     const handleIsFavorite = () => {
          setIsFavorite(!isFavorite);
     };

     return(
          <div className={type === "filter" ? `${css.platform}` : `${css.onePlatform}`}>
               <div>
                    <Title type="h4" color="dark">{title}</Title>
                    {type === "platform" && <div className={css.price}><Title type="h3" color="dark">{price} ₽</Title></div>}
                    <div className={css.infoCard}>
                         <Text type="reg18" color="grey">{short_description}</Text>
                    </div>
                    
                    <ul className={css.listTags}>
                         {tags
                              .filter((item) => item.is_message === false)
                              .map((item) => (
                                   <li key={item.id} className={css.tag}>
                                        <Text type="reg18" color="grey">
                                             {item.tag}
                                        </Text>
                                        
                                   </li>
                              ))}
                    </ul>
                    <ul className={css.listMessages}>
                         {tags
                              .filter((item) => item.is_message === true)
                              .map((item) => (
                                   <li key={item.id}>
                                        <Image src={`/platforms/${item.image_tag}.svg`} width={40} height={40} alt="message"/>
                                   </li>
                              ))}
                    </ul>
               </div>


               <div className={css.logo}>
                    <Image src={image} width={250} height={250} alt="logo"className={css.img}/>
                    <div className={css.heart}>
                         {isFavorite ? 
                         <Image src={"/platforms/like.svg"} width={24} height={24} alt="heart" onClick={handleIsFavorite}/> : 
                         <Image src={"/platforms/dislike.svg"} width={24} height={24} alt="heart" onClick={handleIsFavorite}/>
                         }
                    </div>
               </div>
          </div>
     );
};