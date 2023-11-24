import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import styles from "./DeleteFilterPopup.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ButtonCancel } from "@/src/components/shared/buttons/ButtonCancel";
import { Button } from "@/src/components/shared/buttons/Button";
import {
    usePlatformFilterGroupArchiveMutation,
    usePlatformFilterGroupSaveMutation,
    usePlatformFilterSaveMutation,
} from "@/src/store/services/platforms";

interface IPropsPopup {
    open?: () => void;
    close: () => void;
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

const RestoreFilterGroupPopup: FC<IPropsPopup> = ({ close, open, filterGroupId, filterGroupTitle, filters }) => {
    const [archiveGroup, { isSuccess: isSuccessArchive, error: errorArchive, isLoading: isLoadingArchive }] =
        usePlatformFilterGroupArchiveMutation();
    const [
        archiveFilter,
        { isSuccess: isSuccessArchiveFilter, error: errorArchiveFilter, isLoading: isLoadingArchiveFilter },
    ] = usePlatformFilterGroupArchiveMutation();
    const [
        moveToSaveGroup,
        { isSuccess: restoreGroupIsSuccess, error: restoreGroupError, isLoading: restoreGroupIsLoading },
    ] = usePlatformFilterGroupSaveMutation();
    const [
        moveToSaveFilter,
        { isSuccess: restoreFilterIsSuccess, error: restoreFilterError, isLoading: restoreFilterIsLoading },
    ] = usePlatformFilterSaveMutation();

    const id = filterGroupId;
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();

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
                        moveToSaveGroup({ id, token }).then(close).then(router.reload);
                    }}
                    width={240}
                >
                    Восстановить
                </Button>
            </div>
        </div>
    );
};

export default RestoreFilterGroupPopup;
