import React from "react";
import Link from "next/link";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./styles/BlockPlatform.module.css";
import LinkShowAllCards from "@/src/components/shared/links/LinkShowAllCards";
import { Button } from "@/src/components/shared/buttons/Button";
import Slider from "@/src/components/shared/slider/Slider";
import ListCardsPlatforms from "@/src/components/entities/lists/listCardsPlatforms/ListCardsPlatforms";
import { useModal } from "@/src/hooks/useModal";
import Modal from "@/src/components/shared/modal/Modal";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";
import { useRouter } from "next/router";
import { useAppSelector } from "@/src/hooks/types";
import { useGetListPlatformsQuery } from "@/src/store/services/platforms";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";

const BlockPlatform = () => {
    // const { isShown, toggle } = useModal();

    const { combinedData } = useInfiniteScroll(useGetListPlatformsQuery, {});

    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"black"}>
                    На каких платформах могут быть реализованы решения
                </Title>
                <Text type={"reg16"} color={"grey"}>
                    Подберите конструктор чат-ботов и воспользуйтесь одним из наших шаблонов, разработанных под
                    конкретную бизнес-задачу
                </Text>
                <div className={styles.buttons}>
                    <Button type="button" active={true} width={250}>
                        <Link className={styles.link} href="/platforms-filter">
                            Подобрать платформу
                        </Link>
                    </Button>
                    <LinkShowAllCards href="/platforms" />
                </div>
            </div>
            <Slider type="homeSlider">
                <ListCardsPlatforms results={combinedData} />
            </Slider>
            {/* <Modal isShown={isShown} hide={toggle}>
                <SelectionRequest close={toggle} />
            </Modal> */}
        </div>
    );
};

export default BlockPlatform;
