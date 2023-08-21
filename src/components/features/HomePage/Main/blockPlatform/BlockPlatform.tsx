import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./styles/BlockPlatform.module.css";
import LinkShowAllCards from "@/src/components/shared/links/LinkShowAllCards";
import { Button } from "@/src/components/shared/buttons/Button";
import Slider from "@/src/components/shared/slider/Slider";
import ListCardsPlatforms from "@/src/components/entities/lists/listCardsPlatforms/ListCardsPlatforms";
import { CARDS_PLATFORMS } from "@/src/components/shared/slider/CardsPlatformsConfig";
import { useModal } from "@/src/hooks/useModal";
import Modal from "@/src/components/shared/modal/Modal";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";

const BlockPlatform = () => {
    const { isShown, toggle } = useModal();
    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"black"}>
                    Платформы
                </Title>
                <Text type={"reg16"} color={"grey"}>
                    Подберите конструктор чат-ботов и воспользуйтесь одним из наших шаблонов, разработанных под
                    конкретную бизнес-задачу
                </Text>
                <div className={styles.buttons}>
                    <Button type="button" active={true} width={250} onClick={toggle}>
                        Подобрать платформу
                    </Button>
                    <LinkShowAllCards href="/" />
                </div>
            </div>
            <Slider>
                <ListCardsPlatforms config={CARDS_PLATFORMS} />
            </Slider>
            <Modal isShown={isShown} hide={toggle}>
                <SelectionRequest close={toggle} />
            </Modal>
        </div>
    );
};

export default BlockPlatform;
