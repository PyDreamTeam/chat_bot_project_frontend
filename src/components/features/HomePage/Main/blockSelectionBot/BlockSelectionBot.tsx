import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import css from "./BlockSelectionBot.module.css";
import { Button } from "@/src/components/shared/buttons/Button";
import { Modal } from "@/src/components/shared/modal/Modal";
import { useModal } from "@/src/hooks/useModal";
import Image from "next/image";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";
import ElemChooseChatBot, { ElemVariantProps } from "@/src/components/shared/elemChooseChatBot/ElemChooseChatBot";

interface IUserRequest {
     htmlFor: string;
     label: string;
     type: string;
     name: "first_name" | "email" | "tel" | "comment";
     placeholder: string;
}

export const BlockSelectionBot = () => {
     const { isShown, toggle } = useModal();

     const selectionRequest: Array<IUserRequest> = [
          {
               htmlFor: "first_name",
               label: "Имя",
               type: "text",
               name: "first_name",
               placeholder: "Имя",
          },
          {
               htmlFor: "email",
               label: "E-mail",
               type: "email",
               name: "email",
               placeholder: "example@mail.com",
          },
          {
               htmlFor: "telephone",
               label: "Телефон",
               type: "tel",
               name: "tel",
               placeholder: "+7",
          },
          {
               htmlFor: "comment",
               label: "Комментарий",
               type: "text",
               name: "comment",
               placeholder: "Текст (200 символов)",
          },
     ];

     return (
          <div className={css.wrapper}>
               <div className={css.container}>
                    <div className={css.blockLeft}>
                         <div className={css.textInfo}>
                              <Title type="h1" color="black">
                                   Подбери{" "}
                                   <ElemChooseChatBot variant={ElemVariantProps.home}/>
                                   и автоматизируй свои продажи
                              </Title>

                              <Text type="reg24" color="grey">
                                   Более 100 разнообразных шаблонов под любые задачи вашего бизнеса
                              </Text>
                         </div>

                         <div className={css.button}>
                              <Button type="button" style="button" onClick={toggle}>
                                   Подобрать решение
                              </Button>
                         </div>
                    </div>

                    <div className={css.blockRight}>
                         <Image src="/img/blockSelectionBot.png" alt="selectionBot" width={517} height={516} />
                         <div className={`${css.message} ${css.one}`}>
                              <Text type="reg14" color="dark">
                                   Здравствуйте, хочу купить новые кроссовки
                              </Text>
                         </div>
                         <div className={`${css.message} ${css.two}`}>
                              <Text type="reg14" color="dark">
                                   У вас есть 37 размер?
                              </Text>
                         </div>
                         <div className={`${css.message} ${css.three}`}>
                              <Text type="reg14" color="dark">
                                   Секунду, сейчас проверю. У нас было поступление товара сегодня
                              </Text>
                         </div>
                    </div>
               </div>
               <Modal isShown={isShown} hide={toggle}>
                    <SelectionRequest schema={selectionRequest} close={toggle} />
               </Modal>
          </div>
     );
};