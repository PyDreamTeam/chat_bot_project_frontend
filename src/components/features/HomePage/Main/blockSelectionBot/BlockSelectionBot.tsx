import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import css from "./BlockSelectionBot.module.css";
import { Button } from "@/src/components/shared/buttons/Button";
import Image from "next/image";

export const BlockSelectionBot = () => {
     return (
          <div className={css.wrapper}>

               <div className={css.container}>
                    <div className={css.blockLeft}>
                         <div className={css.textInfo}>
                              <Title type="h1" color="black">Подбери <span className={css.bot}>конструктор чат-ботов
                                   <div className={`${css.dot} ${css.left}`}></div>
                                   <div className={`${css.dot} ${css.top}`}></div>
                                   <div className={`${css.dot} ${css.right}`}></div>
                                   <div className={`${css.dot} ${css.bottom}`}></div>
                              </span>
                            и автоматизируй свои продажи
                              </Title>

                              <Text type="reg24" color="grey">Более 100 разнообразных шаблонов под любые задачи вашего бизнеса</Text>
                         </div>

                         <div className={css.button}>
                              <Button type="submit" style="button">Подобрать решение</Button>
                         </div>
                    </div>

                    <div className={css.blockRight}>
                         <Image src="/img/blockSelectionBot.png" alt="selectionBot" width={517} height={516}/>
                         <div className={`${css.message} ${css.one}`}><Text type="reg14" color="dark">Здравствуйте, хочу купить новые кроссовки</Text></div>
                         <div className={`${css.message} ${css.two}`}><Text type="reg14" color="dark">У вас есть 37 размер?</Text></div>
                         <div className={`${css.message} ${css.three}`}><Text type="reg14" color="dark">Секунду, сейчас проверю. У нас было поступление товара сегодня</Text></div>
                    </div>
               </div>

          </div>
     );
};