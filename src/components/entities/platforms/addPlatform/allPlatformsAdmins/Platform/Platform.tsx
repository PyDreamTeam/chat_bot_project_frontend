import { FC, useState, useEffect } from "react";
import css from "./platform.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import Cookies from "js-cookie";
import {
    useDeletePlatformMutation,
    useGetPlatformForArchiveMutation,
    usePlatformArchiveMutation,
    useSendToCreatedMutation,
} from "@/src/store/services/platforms";
import { useRouter } from "next/router";
import Title from "@/src/components/shared/text/Title";
import Link from "next/link";

interface PropsPlatform {
    id?: number;
    sort?: string;
    title?: string;
    link?: string;
    tags?: {
        tag?: string;
    }[];
    refetch?: () => void;
}

const functionPlatformSave = [
    { title: "Быстрый просмотр", value: "read" },
    { title: "Опубликовать", value: "public" },
    { title: "Редактировать", value: "edit" },
    { title: "Архив", value: "archive" },
];

const functionPlatformPublic = [
    { title: "Быстрый просмотр", value: "read" },
    { title: "Снять с публикации", value: "deletePublic" },
    { title: "Редактировать", value: "edit" },
    { title: "Архив", value: "archive" },
];
const functionPlatformArchive = [
    { title: "Быстрый просмотр", value: "read" },
    { title: "Опубликовать", value: "public" },
    { title: "Отправить в созданные", value: "sendToCreated" },
    // {title: "Удалить", value: "delete"},
];

export const Platform: FC<PropsPlatform> = ({ title, link, tags = [], id, sort, refetch }) => {
    const [deletePlatform, { isSuccess: isSuccessDelete }] = useDeletePlatformMutation();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();
    const [getPlatformForArchive, { data, isSuccess: isSuccessGetPlatform }] = useGetPlatformForArchiveMutation();
    const [platformArchive, { isSuccess: isSuccessPlatformArchive }] = usePlatformArchiveMutation();
    const [sendToCreated, { isSuccess: isSuccessSendToCreated }] = useSendToCreatedMutation();

    const [stateIcon, setStateIcon] = useState<string>("workPlatform");
    const [isModalDelete, setIsModalDelete] = useState(false);
    const [isSuccessModal, setIsSuccessModal] = useState(false);
    const [isDeletePlatformFromPublic, setIsDeletePlatformFromPublic] = useState(false);
    const [isArchivePlatform, setIsArchivePlatform] = useState(false);
    const [isSuccessDeletePlatformFromPublic, setIsSuccessDeletePlatformFromPublic] = useState(false);

    useEffect(() => {
        if (isSuccessDelete) {
            setIsSuccessModal(true);
            setIsModalDelete(false);
            setTimeout(() => {
                setIsSuccessModal(false);
                if (refetch) {
                    refetch();
                }
                // router.reload();
            }, 3000);
        }
    }, [isSuccessDelete]);

    useEffect(() => {
        if (stateIcon === "workPlatformActive") {
            getPlatformForArchive(Number(id));
        }
    }, [stateIcon]);

    useEffect(() => {
        if (isSuccessPlatformArchive) {
            setIsDeletePlatformFromPublic(false);
            setIsArchivePlatform(false);
            setIsSuccessDeletePlatformFromPublic(true);
            setTimeout(() => {
                setIsSuccessDeletePlatformFromPublic(false);
                if (refetch) refetch();
                // router.reload();
            }, 3000);
        }
    }, [isSuccessPlatformArchive]);

    const handleMouseEnter = () => {
        if (stateIcon === "workPlatform") {
            setStateIcon("workPlatformHover");
        }
    };

    const handleMouseLeave = () => {
        if (stateIcon === "workPlatformHover") {
            setStateIcon("workPlatform");
        }
    };

    const handleClickIcon = () => {
        if (stateIcon === "workPlatformHover" || stateIcon === "workPlatform") {
            setStateIcon("workPlatformActive");
        }
        if (stateIcon === "workPlatformActive") {
            setStateIcon("workPlatform");
        }
    };

    const handleFunctionsPlatforms = (value: string, id?: number) => {
        if (value === "archive") {
            setIsArchivePlatform(true);
        }
        if (value === "sendToCreated") {
            sendToCreated({ id, token, data }).then(refetch);
        }
        if (value === "delete") {
            setIsModalDelete(true);
        }
        if (value === "edit") {
            router.push(`/admin/platforms/change-platform/${id}`);
        }
        if (value === "read") {
            router.push(`/platforms/platform/${id}`);
        }
        if (value === "deletePublic") {
            setIsDeletePlatformFromPublic(true);
            getPlatformForArchive(Number(id)).then(refetch);
        }
        if (value === "public") {
            router.push(`/admin/platforms/public-platform/${id}`);
        }
    };

    return (
        <div className={css.container}>
            <div className={css.platformTitle}>
                <Text type="reg16" color="grey">
                    {title}
                </Text>
            </div>
            <div className={css.platformStatus}>
                {link && (
                    <Link href={link}>
                        <Text type="reg16" color="grey">
                            {link}
                        </Text>
                    </Link>
                )}
            </div>
            <div className={css.platformKeyWords}>
                <Text type="reg16" color="grey">
                    {tags.map((item) => item.tag + ", ")}
                </Text>
            </div>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClickIcon}
                className={css.workPlatform}
            >
                <Image src={`/platforms/${stateIcon}.svg`} alt="icon" width={24} height={24} />
                {stateIcon === "workPlatformActive" && (
                    <ul className={css.listFunctions}>
                        {(sort === "save"
                            ? functionPlatformSave
                            : sort === "archive"
                            ? functionPlatformArchive
                            : functionPlatformPublic
                        ).map(({ title, value }) => (
                            <li
                                key={title}
                                className={css.function}
                                onClick={() => handleFunctionsPlatforms(value, id)}
                            >
                                <Text
                                    type="reg14"
                                    color="dark"
                                    className={`${css.titleText} ${value === "delete" && css.titleTextDelete}`}
                                >
                                    {title}
                                </Text>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {isModalDelete && (
                <div className={css.modal}>
                    <div className={css.modalContent}>
                        <Image
                            src="/img/close.svg"
                            alt="icon"
                            width={24}
                            height={24}
                            className={css.imgCloseModal}
                            onClick={() => setIsModalDelete(false)}
                        />
                        <Image src={"/platforms/deletePlatformIcon.svg"} alt="icon" width={56} height={56} />
                        <Title type="h5" color="dark" className={css.titleModalClose}>
                            Удалить платформу
                        </Title>
                        <Text type="reg18" color="telegray" className={css.subTitleModalClose}>
                            Вы действительно хотите удалить платформу {title}?
                        </Text>
                        <div className={css.groupBtnModalClose}>
                            <button className={css.btnCloseModal} onClick={() => setIsModalDelete(false)}>
                                <Text type="reg18" color="blue">
                                    Отмена
                                </Text>
                            </button>
                            <button className={css.btnSaveModal} onClick={() => deletePlatform({ id, token })}>
                                <Text type="reg18" color="white">
                                    Удалить
                                </Text>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isArchivePlatform && (
                <div className={css.modal}>
                    <div className={css.modalContent}>
                        <Image
                            src="/img/close.svg"
                            alt="icon"
                            width={24}
                            height={24}
                            className={css.imgCloseModal}
                            onClick={() => setIsArchivePlatform(false)}
                        />
                        <Image src={"/platforms/deletePlatformIcon.svg"} alt="icon" width={56} height={56} />
                        <Title type="h5" color="dark" className={css.titleModalClose}>
                            Архив
                        </Title>
                        <Text type="reg18" color="telegray" className={css.subTitleModalClose}>
                            Вы действительно хотите переместить платформу {title} в архив?
                        </Text>
                        <div className={css.groupBtnModalClose}>
                            <button className={css.btnCloseModal} onClick={() => setIsArchivePlatform(false)}>
                                <Text type="reg18" color="blue">
                                    Отмена
                                </Text>
                            </button>
                            <button className={css.btnSaveModal} onClick={() => platformArchive({ id, token, data })}>
                                <Text type="reg18" color="white">
                                    Архив
                                </Text>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isDeletePlatformFromPublic && (
                <div className={css.modal}>
                    <div className={css.modalContent}>
                        <Image
                            src="/img/close.svg"
                            alt="icon"
                            width={24}
                            height={24}
                            className={css.imgCloseModal}
                            onClick={() => setIsDeletePlatformFromPublic(false)}
                        />
                        <Image src={"/platforms/platformArchive.svg"} alt="icon" width={56} height={56} />
                        <Title type="h5" color="dark" className={css.titleModalClose}>
                            Снять с публикации платформу?{" "}
                        </Title>
                        <Text type="reg18" color="telegray" className={css.subTitleModalClose}>
                            Вы действительно хотите снять с публикации платформу? После снятия с публикации, платформа
                            перейдет в архив.
                        </Text>
                        <div className={css.groupBtnModalClose}>
                            <button className={css.btnCloseModal} onClick={() => setIsDeletePlatformFromPublic(false)}>
                                <Text type="reg18" color="blue">
                                    Отмена
                                </Text>
                            </button>
                            <button
                                className={css.btnDeleteForPublic}
                                onClick={() => platformArchive({ id, token, data })}
                            >
                                <Text type="reg18" color="white">
                                    Снять с публикации
                                </Text>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isSuccessDeletePlatformFromPublic && (
                <div className={css.modal}>
                    <div className={css.modalContent}>
                        <Image
                            src="/img/close.svg"
                            alt="icon"
                            width={24}
                            height={24}
                            className={css.imgCloseModal}
                            // onClick={() => router.reload()}
                            onClick={() => setIsSuccessDeletePlatformFromPublic(false)}
                        />
                        <Image src={"/platforms/successModal.svg"} alt="icon" width={120} height={120} />
                        <Title type="h5" color="dark" className={css.titleModalClose}>
                            Платформа перемещена в архив!
                        </Title>
                    </div>
                </div>
            )}
            {isSuccessModal && (
                <div className={css.modal}>
                    <div className={css.modalContent}>
                        <Image
                            src="/img/close.svg"
                            alt="icon"
                            width={24}
                            height={24}
                            className={css.imgCloseModal}
                            onClick={() => {
                                setIsSuccessModal(false);
                                if (refetch) refetch();
                                // router.reload();
                            }}
                        />
                        <Image src={"/platforms/successModal.svg"} alt="icon" width={120} height={120} />
                        <Title type="h5" color="dark" className={css.titleModalClose}>
                            Платформа успешно удалена!
                        </Title>
                    </div>
                </div>
            )}
        </div>
    );
};
