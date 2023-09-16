import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./styles/BlockSolution.module.css";
import LinkShowAllCards from "@/src/components/shared/links/LinkShowAllCards";
import { Button } from "@/src/components/shared/buttons/Button";
import Slider from "@/src/components/shared/slider/Slider";
import ListCardsSolutions from "@/src/components/entities/lists/listCardsSolutions/ListCardsSolutions";
import { useModal } from "@/src/hooks/useModal";
import Modal from "@/src/components/shared/modal/Modal";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";
import { useAppSelector } from "@/src/hooks/types";
import { useGetSolutionsQuery } from "@/src/store/services/solutions";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";

const BlockSolution = () => {
    const { isShown, toggle } = useModal();

    const { combinedData } = useInfiniteScroll(useGetSolutionsQuery, {});

    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"black"}>
                    Решения
                </Title>
                <Text type={"reg16"} color={"grey"}>
                    Подберите конструктор чат-ботов и воспользуйтесь одним из наших шаблонов, разработанных под
                    конкретную бизнес-задачу
                </Text>
                <div className={styles.buttons}>
                    <Button type="button" active={true} width={230} onClick={toggle}>
                        Подобрать решение
                    </Button>
                    <LinkShowAllCards href="/solutions" />
                </div>
            </div>
            <Slider type="homeSlider">
                <ListCardsSolutions results={combinedData} />
            </Slider>
            <Modal isShown={isShown} hide={toggle}>
                <SelectionRequest close={toggle} />
            </Modal>
        </div>
    );
};

export default BlockSolution;
