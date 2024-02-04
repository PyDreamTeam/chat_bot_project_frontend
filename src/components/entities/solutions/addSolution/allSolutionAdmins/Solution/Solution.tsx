import { FC, useState, useEffect } from "react";
import css from "./solution.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import Cookies from "js-cookie";
import {
    useDeleteSolutionMutation,
    useSolutionArchiveMutation,
    useGetSolutionForArchiveMutation,
    useSendToCreatedMutation,
} from "@/src/store/services/solutions";
import { useRouter } from "next/router";
import Title from "@/src/components/shared/text/Title";
import Link from "next/link";

interface PropsSolution {
    id?: number;
    sort?: string;
    title?: string;
    link?: string;
    tags?: {
        tag?: string;
    }[];
}

const functionSolutionSave = [
    { title: "Быстрый просмотр", value: "read" },
    { title: "Опубликовать", value: "public" },
    { title: "Редактировать", value: "edit" },
    { title: "Архив", value: "archive" },
];

const functionSolutionPublic = [
    { title: "Быстрый просмотр", value: "read" },
    { title: "Снять с публикации", value: "deletePublic" },
    { title: "Редактировать", value: "edit" },
    { title: "Архив", value: "archive" },
];
const functionSolutionArchive = [
    { title: "Быстрый просмотр", value: "read" },
    { title: "Опубликовать", value: "public" },
    { title: "Отправить в созданные", value: "sendToCreated" },
    // {title: "Удалить", value: "delete"},
];

export const Solution: FC<PropsSolution> = ({ title, link, tags = [], id, sort }) => {
    const [deleteSolution, { isSuccess }] = useDeleteSolutionMutation();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();
    const [getSolutionForArchive, { data, isSuccess: isSuccessGetSolution }] = useGetSolutionForArchiveMutation();
    const [solutionArchive, { isSuccess: isSuccessSolutionArchive }] = useSolutionArchiveMutation();
    const [sendToCreated, { isSuccess: isSuccessSendToCreated }] = useSendToCreatedMutation();

    const [stateIcon, setStateIcon] = useState<string>("workPlatform");
    const [isModalDelete, setIsModalDelete] = useState(false);
    const [isSuccessModal, setIsSuccessModal] = useState(false);
    const [isDeleteSolutionFromPublic, setIsDeleteSolutionFromPublic] = useState(false);
    const [isArchiveSolution, setIsArchiveSolution] = useState(false);
    const [isSuccessDeleteSolutionFromPublic, setIsSuccessDeleteSolutionFromPublic] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            setIsSuccessModal(true);
            setIsModalDelete(false);
            setTimeout(() => {
                setIsSuccessModal(false);
                router.reload();
            }, 3000);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isSuccessSendToCreated) {
            router.reload();
        }
    }, [isSuccessSendToCreated]);

    useEffect(() => {
        if (stateIcon === "workPlatformActive") {
            getSolutionForArchive(Number(id));
        }
    }, [stateIcon]);

    useEffect(() => {
        if (isSuccessSolutionArchive) {
            setIsDeleteSolutionFromPublic(false);
            setIsArchiveSolution(false);
            setIsSuccessDeleteSolutionFromPublic(true);
            setTimeout(() => {
                setIsSuccessDeleteSolutionFromPublic(false);
                router.reload();
            }, 3000);
        }
    }, [isSuccessSolutionArchive]);

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

    const handleFunctionsSolutions = (value: string, id?: number) => {
        if (value === "archive") {
            setIsArchiveSolution(true);
        }
        if (value === "sendToCreated") {
            sendToCreated({ id, token, data });
        }
        if (value === "delete") {
            setIsModalDelete(true);
        }
        if (value === "edit") {
            router.push(`/admin/solutions/change-solution/${id}`);
        }
        if (value === "read") {
            router.push(`/solutions/solution/${id}`);
        }
        if (value === "deletePublic") {
            setIsDeleteSolutionFromPublic(true);
            getSolutionForArchive(Number(id));
        }
        if (value === "public") {
            router.push(`/admin/solutions/public-solution/${id}`);
        }
    };

    return (
        <div className={css.container}>
            <div className={css.solutionTitle}>
                <Text type="reg16" color="grey">
                    {title}
                </Text>
            </div>
            <div className={css.solutionStatus}>
                {link && (
                    <Link href={link}>
                        <Text type="reg16" color="grey">
                            {link}
                        </Text>
                    </Link>
                )}
            </div>
            <div className={css.solutionKeyWords}>
                <Text type="reg16" color="grey">
                    {tags.map((item) => item.tag + ", ")}
                </Text>
            </div>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClickIcon}
                className={css.workSolution}
            >
                <Image src={`/platforms/${stateIcon}.svg`} alt="icon" width={24} height={24} />
                {stateIcon === "workPlatformActive" && (
                    <ul className={css.listFunctions}>
                        {(sort === "save"
                            ? functionSolutionSave
                            : sort === "archive"
                            ? functionSolutionArchive
                            : functionSolutionPublic
                        ).map(({ title, value }) => (
                            <li
                                key={title}
                                className={css.function}
                                onClick={() => handleFunctionsSolutions(value, id)}
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
                            Удалить решение
                        </Title>
                        <Text type="reg18" color="telegray" className={css.subTitleModalClose}>
                            Вы действительно хотите удалить решение {title}?
                        </Text>
                        <div className={css.groupBtnModalClose}>
                            <button className={css.btnCloseModal} onClick={() => setIsModalDelete(false)}>
                                <Text type="reg18" color="blue">
                                    Отмена
                                </Text>
                            </button>
                            <button className={css.btnSaveModal} onClick={() => deleteSolution({ id, token })}>
                                <Text type="reg18" color="white">
                                    Удалить
                                </Text>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isArchiveSolution && (
                <div className={css.modal}>
                    <div className={css.modalContent}>
                        <Image
                            src="/img/close.svg"
                            alt="icon"
                            width={24}
                            height={24}
                            className={css.imgCloseModal}
                            onClick={() => setIsArchiveSolution(false)}
                        />
                        <Image src={"/platforms/deletePlatformIcon.svg"} alt="icon" width={56} height={56} />
                        <Title type="h5" color="dark" className={css.titleModalClose}>
                            Архив
                        </Title>
                        <Text type="reg18" color="telegray" className={css.subTitleModalClose}>
                            Вы действительно хотите переместить решение {title} в архив?
                        </Text>
                        <div className={css.groupBtnModalClose}>
                            <button className={css.btnCloseModal} onClick={() => setIsArchiveSolution(false)}>
                                <Text type="reg18" color="blue">
                                    Отмена
                                </Text>
                            </button>
                            <button className={css.btnSaveModal} onClick={() => solutionArchive({ id, token, data })}>
                                <Text type="reg18" color="white">
                                    Архив
                                </Text>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isDeleteSolutionFromPublic && (
                <div className={css.modal}>
                    <div className={css.modalContent}>
                        <Image
                            src="/img/close.svg"
                            alt="icon"
                            width={24}
                            height={24}
                            className={css.imgCloseModal}
                            onClick={() => setIsDeleteSolutionFromPublic(false)}
                        />
                        <Image src={"/platforms/platformArchive.svg"} alt="icon" width={56} height={56} />
                        <Title type="h5" color="dark" className={css.titleModalClose}>
                            Снять с публикации решение?{" "}
                        </Title>
                        <Text type="reg18" color="telegray" className={css.subTitleModalClose}>
                            Вы действительно хотите снять с публикации решение? После снятия с публикации, решение
                            перейдет в архив.
                        </Text>
                        <div className={css.groupBtnModalClose}>
                            <button className={css.btnCloseModal} onClick={() => setIsDeleteSolutionFromPublic(false)}>
                                <Text type="reg18" color="blue">
                                    Отмена
                                </Text>
                            </button>
                            <button
                                className={css.btnDeleteForPublic}
                                onClick={() => solutionArchive({ id, token, data })}
                            >
                                <Text type="reg18" color="white">
                                    Снять с публикации
                                </Text>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isSuccessDeleteSolutionFromPublic && (
                <div className={css.modal}>
                    <div className={css.modalContent}>
                        <Image
                            src="/img/close.svg"
                            alt="icon"
                            width={24}
                            height={24}
                            className={css.imgCloseModal}
                            onClick={() => router.reload()}
                        />
                        <Image src={"/platforms/successModal.svg"} alt="icon" width={120} height={120} />
                        <Title type="h5" color="dark" className={css.titleModalClose}>
                            Решение перемещено в архив!
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
                            onClick={() => router.reload()}
                        />
                        <Image src={"/platforms/successModal.svg"} alt="icon" width={120} height={120} />
                        <Title type="h5" color="dark" className={css.titleModalClose}>
                            Решение успешно удалено!
                        </Title>
                    </div>
                </div>
            )}
        </div>
    );
};
