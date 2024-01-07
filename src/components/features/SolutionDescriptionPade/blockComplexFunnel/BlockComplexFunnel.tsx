import React, { useState, FC } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./BlockComplexFunnel.module.css";
import Image from "next/image";
import { Button } from "@/src/components/shared/buttons/Button";
import Link from "next/link";
import { useModal } from "@/src/hooks/useModal";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";
import Modal from "@/src/components/shared/modal/Modal";
import { PropsSolutionCard } from "@/src/components/entities/solutions/types";
import { useGetSolutionAdvantagesQuery } from "@/src/store/services/solutions";
import { ListAdvantages } from "@/src/components/entities/lists/listAdvantages";

const BlockComplexFunnel: FC<PropsSolutionCard> = ({ title }) => {
    const { isShown, toggle } = useModal();
    const { data } = useGetSolutionAdvantagesQuery({});

    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"black"}>
                    {title}
                </Title>
                <ListAdvantages results={data?.results} />
                <div className={styles.blockBtn}>
                    <div className={styles.button}>
                        <Button type="button" active={true} onClick={toggle}>
                            Оформить заявку
                        </Button>
                    </div>
                    <Link href={"#video"} className={styles.btnPlay}>
                        <Image src={"/page/Play.svg"} alt={"Play"} width={48} height={48} />
                        <Text type={"reg16"} color={"grey"}>
                            Посмотреть как это работает
                        </Text>
                    </Link>
                </div>
            </div>
            <div className={styles.img}>
                <Image src={"/page/ComplexFunnel.svg"} alt={"ComplexFunnel"} width={493} height={431} />
            </div>
            <Modal isShown={isShown} hide={toggle}>
                <SelectionRequest close={toggle} dataComment={`Выбранное решение: ${title}`} />
            </Modal>
        </div>
    );
};

export default BlockComplexFunnel;
