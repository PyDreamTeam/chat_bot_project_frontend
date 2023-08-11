import React, { useState } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./BlockShotDescription.module.css";
import { Labels } from "@/src/types";
import CheckLabel from "@/src/components/shared/labels/CheckLabel";
import CardSales from "@/src/components/entities/cards/cardSales/CardSales";
import ReadMore from "@/src/components/features/SolutionDescriptionPade/blockShotDescription/ReadMore";


const labels: Labels[] = [
     {
          name: <Text type={"reg14"} color={"telegray"}>Бизнес модель: </Text>,
          label: <Text type={"reg14"} color={"dark"}>B2C </Text>,
     },
     {
          name: <Text type={"reg14"} color={"telegray"}>Сфера бизнеса: </Text>,
          label: <Text type={"reg14"} color={"dark"}>Онлайн-образование</Text>,
     },
     {
          name: <Text type={"reg14"} color={"telegray"}>Тип решения: </Text>,
          label: <Text type={"reg14"} color={"dark"}>Комплексная воронка</Text>,
     },
     {
          name: <Text type={"reg14"} color={"telegray"}>Цели: </Text>,
          label: <Text type={"reg14"} color={"dark"}> Автоматизированный курс</Text>,
     },
     {
          name: <Text type={"reg14"} color={"telegray"}>Ниша бизнеса: </Text>,
          label: <Text type={"reg14"} color={"dark"}>Иностранные языки</Text>,
     }
];



const BlockShotDescription = () => {


     return (
          <div className={styles.wrapper}>
               <CardSales/>
               <div className={styles.blockText}>
                    <Title type={"h3"} color={"black"}>
                         Коротко о воронке продажи онлайн-курса
                    </Title>
                    <div className={styles.blockLabel}>
                         {labels.map((item, index) => (
                              <CheckLabel
                                   key={index}
                                   name={item.name}
                                   label={item.label}
                              />
                         ))}
                    </div>
                    <ReadMore text="Подходит для инфобизнеса, онлайн-школы по обучению иностранных языков, где компания заинтересована в привлечении первых и последующих клиентов, чтобы они записывались на онлайн-уроки.
                    На начальном этапе работы над проектом составляется бриф, оценивается текущая ситуация и анализируется воронка на предмет ее улучшения. Затем разрабатывается стратегия автоматизации воронки с учетом основных задач клиента.
                    Для оптимизации воронки была выбрана стратегия на основе мессенджера с воронками вебинаров, которые приносили положительные результаты клиентам." maxLength={182} />
               </div>
          </div>
     );
};

export default BlockShotDescription;