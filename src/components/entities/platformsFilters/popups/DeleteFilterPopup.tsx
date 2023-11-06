import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import styles from "./DeleteFilterPopup.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ButtonNegative } from "@/src/components/shared/buttons/ButtonNegative";
import { ButtonCancel } from "@/src/components/shared/buttons/ButtonCancel";
import { usePlatformFilterArchiveMutation } from "@/src/store/services/platforms";

interface IPropsPopup {
    open?: () => void;
    close: () => void;
    filterId?: number | undefined;
    filterTitle?: string;
}

const DeleteFilterPopup: FC<IPropsPopup> = ({ close, open, filterId, filterTitle }) => {
    const [
        archiveFilter,
        { isSuccess: isSuccessArchiveFilter, error: errorArchiveFilter, isLoading: isLoadingArchiveFilter },
    ] = usePlatformFilterArchiveMutation();
    const id = filterId;
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
            <Image src="/img/Delete.svg" alt="imgSuccess" width={56} height={56} />
            <div className={styles.textBlock}>
                <Title type="h5" color="black">
                    Удалить фильтр
                </Title>
                <Text type="reg16" color="grey">
                    {`Вы действительно хотите удалить фильтр "${filterTitle}"? После удаления фильтр перейдёт в архив`}
                </Text>
            </div>
            <div className={styles.buttonsContainer}>
                <ButtonCancel type={"button"} active={true} onClick={close} width={240}>
                    Отмена
                </ButtonCancel>
                <ButtonNegative
                    type={"button"}
                    active={true}
                    onClick={() => archiveFilter({ id, token }).then(close).then(router.reload)}
                    width={240}
                >
                    Удалить
                </ButtonNegative>
            </div>
        </div>
    );
};

export default DeleteFilterPopup;
