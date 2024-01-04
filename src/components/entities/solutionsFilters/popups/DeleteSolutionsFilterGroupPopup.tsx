import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import styles from "./styles.module.css";
import Cookies from "js-cookie";
import { ButtonNegative } from "@/src/components/shared/buttons/ButtonNegative";
import { ButtonCancel } from "@/src/components/shared/buttons/ButtonCancel";
import {
    useArchiveSolutionFilterGroupMutation,
    useArchiveSolutionFilterMutation,
} from "@/src/store/services/solutions";

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

const DeleteSolutionsFilterGroupPopup: FC<IPropsPopup> = ({
    close,
    open,
    refresh,
    filterGroupId,
    filterGroupTitle,
    filters,
}) => {
    const [archiveGroup, { isSuccess: isSuccessArchive, error: errorArchive, isLoading: isLoadingArchive }] =
        useArchiveSolutionFilterGroupMutation();
    const [
        archiveFilter,
        { isSuccess: isSuccessArchiveFilter, error: errorArchiveFilter, isLoading: isLoadingArchiveFilter },
    ] = useArchiveSolutionFilterMutation();

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
            <Image src="/img/Delete.svg" alt="imgSuccess" width={56} height={56} />
            <div className={styles.textBlock}>
                <Title type="h5" color="black">
                    Удалить группу фильтров
                </Title>
                <Text type="reg16" color="grey">
                    {`Вы действительно хотите удалить группу фильтров "${filterGroupTitle}"? После удаления группа фильтров перейдёт в архив`}
                </Text>
            </div>
            <div className={styles.buttonsContainer}>
                <ButtonCancel type={"button"} active={true} onClick={close} width={240}>
                    Отмена
                </ButtonCancel>
                <ButtonNegative
                    type={"button"}
                    active={true}
                    onClick={() => {
                        if (filters?.length) {
                            filters.forEach((item) => {
                                if (item.status === "public" || item.status === "save") {
                                    archiveFilter({ id: item.id, token });
                                }
                            });
                        }
                        archiveGroup({ id, token }).then(close).then(refresh);
                    }}
                    width={240}
                >
                    Удалить
                </ButtonNegative>
            </div>
        </div>
    );
};

export default DeleteSolutionsFilterGroupPopup;
