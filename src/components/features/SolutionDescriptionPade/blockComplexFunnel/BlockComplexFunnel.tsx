import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./BlockComplexFunnel.module.css";
import Image from "next/image";
import { Button } from "@/src/components/shared/buttons/Button";
import Link from "next/link";
import { useModal } from "@/src/hooks/useModal";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";
import Modal from "@/src/components/shared/modal/Modal";

interface IUserRequest {
     htmlFor: string;
     label: string;
     type: string;
     name: "first_name" | "email" | "tel" | "comment";
     placeholder: string;
}

const BlockComplexFunnel = () => {
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
          <div className={styles.wrapper}>
               <div className={styles.blockText}>
                    <Title type={"h3"} color={"black"}>
                         Комплексная воронка для языковой школы
                    </Title>
                    <ul className={styles.list}>
                         <li><Text type={"reg18"} color={"grey"}>Чат бот в Telegram для языковой школы</Text></li>
                         <li><Text type={"reg18"} color={"grey"}>Заменяет LMS</Text></li>
                         <li><Text type={"reg18"} color={"grey"}>Помогает выстроить бесшовный автоматизированный путь</Text></li>
                    </ul>
                    <div className={styles.blockBtn}>
                         <div className={styles.button}>
                              <Button type="button" active={true}  onClick={toggle}>
                                   Оформить заявку
                              </Button>
                         </div>
                         <Link href={"#video"} className={styles.btnPlay}>
                              <Image src={"page/Play.svg"} alt={"Play"} width={48} height={48}/>
                              <Text type={"reg16"} color={"grey"}>Посмотреть как это работает</Text>
                         </Link>
                    </div>
               </div>
               <div className={styles.img}>
                    <Image src={"page/ComplexFunnel.svg"} alt={"ComplexFunnel"} width={493} height={431}/>
               </div>
               <Modal isShown={isShown} hide={toggle}>
                    <SelectionRequest schema={selectionRequest} close={toggle} />
               </Modal>
          </div>
     );
};

export default BlockComplexFunnel;