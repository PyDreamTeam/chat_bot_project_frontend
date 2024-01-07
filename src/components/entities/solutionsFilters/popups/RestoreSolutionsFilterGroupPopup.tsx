import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import styles from "./styles.module.css";
import Cookies from "js-cookie";
import { ButtonCancel } from "@/src/components/shared/buttons/ButtonCancel";
import { Button } from "@/src/components/shared/buttons/Button";
import { useSaveSolutionFilterGroupMutation, useSaveSolutionFilterMutation } from "@/src/store/services/solutions";

interface IPropsPopup {
    open?: () => void;
    close: () => void;
    refresh?: () => void;
    filterGroupId?: number | undefined;
    filterGroupTitle?: string;
    filters?: {
        filter: string;
        id: number;
        image: string;
        count: number;
        status: string;
        functionality: string;
        integration: string;
        multiple: boolean;
        tags: {
            id: number;
            tag: string;
        }[];
    }[];
}

const RestoreSolutionsFilterGroupPopup: FC<IPropsPopup> = ({
    close,
    refresh,
    filterGroupId,
    filterGroupTitle,
    filters,
}) => {
    const [
        moveToSaveGroup,
        { isSuccess: restoreGroupIsSuccess, error: restoreGroupError, isLoading: restoreGroupIsLoading },
    ] = useSaveSolutionFilterGroupMutation();
    const [
        moveToSaveFilter,
        { isSuccess: restoreFilterIsSuccess, error: restoreFilterError, isLoading: restoreFilterIsLoading },
    ] = useSaveSolutionFilterMutation();

    const id = filterGroupId;
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => clearTimeout(timerRef.current as NodeJS.Timeout);
    }, []);

    return (
        <div className={styles.container}>
            <Image
                src="/sign/close.svg"
                alt="close"
                width={34}
                height={34}
                onClick={close}
                className={styles.imgClose}
            />
            <Image src="/img/Restore.svg" alt="imgRestore" width={56} height={56} />
            <div className={styles.textBlock}>
                <Title type="h5" color="black">
                    Восстановить группу фильтров?
                </Title>
                <Text type="reg16" color="grey">
                    {`При восстановлении, группа фильтров "${filterGroupTitle}" будет добавлена в группу "Созданные"`}
                </Text>
            </div>
            <div className={styles.buttonsContainer}>
                <ButtonCancel type={"button"} active={true} onClick={close} width={240}>
                    Отмена
                </ButtonCancel>
                <Button
                    type={"button"}
                    active={true}
                    onClick={() => {
                        if (filters?.length) {
                            filters.forEach((item) => {
                                if (item.status === "archive") {
                                    moveToSaveFilter({ id: item.id, token });
                                }
                            });
                        }
                        moveToSaveGroup({ id, token }).then(close).then(refresh);
                    }}
                    width={240}
                >
                    Восстановить
                </Button>
            </div>
        </div>
    );
};

export default RestoreSolutionsFilterGroupPopup;
