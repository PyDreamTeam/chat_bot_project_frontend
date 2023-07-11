import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./styles/BlockSolution.module.css";
import LinkShowAllCards from "@/src/components/shared/links/LinkShowAllCards";
import { Button } from "@/src/components/shared/buttons/Button";

const BlockFSolution = () => {
     return (
          <div className={styles.wrapper}>
               <div className={styles.blockText}>
                    <Title type={"h3"} color={"black"}>
                         Решения
                    </Title>
                    <Text type={"reg16"} color={"grey"}>
                      Подберите конструктор чат-ботов и воспользуйтесь одним из наших шаблонов, разработанных под конкретную бизнес-задачу
                    </Text>
                    <div className={styles.buttons}>
                         <div className={styles.btn}>
                              <Button type="submit" style="button">Подобрать решение</Button>
                         </div>
                         <LinkShowAllCards href="/" />
                    </div>
               </div>
               <div>
                  Здесь будет слайдер)
               </div>
          </div>
     );
};

export default BlockFSolution;