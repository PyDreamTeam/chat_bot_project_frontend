import React from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./publicSolution.module.css";
import Title from "@/src/components/shared/text/Title";
import { InputAddSolution } from "@/src/components/entities/solutions/addSolution/InputAddSolution";
import { TextAreaAddSolution } from "@/src/components/entities/solutions/addSolution/TextAreaAddPSolution";
import { useEffect, useState } from "react";
import { MultipleInput } from "@/src/components/entities/solutions/addSolution/MultipleInput";
import {
    useChangeSolutionMutation,
    useGetSolutionQuery,
    useGetSolutionsFiltersQuery,
    useSolutionPublicMutation,
} from "@/src/store/services/solutions";
import {
    PropsGroupsFilters,
    GroupsFilters,
} from "@/src/components/entities/solutions/addSolution/filtersForAddSolution/GroupsFiltrs/GroupsFilters";
import { PropsSolutionCard } from "@/src/components/entities/solutions/types";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import {
    getFilterFromBack,
    getLinkToSolution,
    getLinkToPlatform,
    linkToSolution,
} from "@/src/store/reducers/addSolution/slice";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { UploadImage } from "@/src/components/entities/platforms/addPlatform/UploadImage";
import { Loader } from "@/src/components/shared/Loader/Loader";

const SolutionsAdmin = () => {
    const { data: dataFilters, isLoading: isLoadingFilters } = useGetSolutionsFiltersQuery({});
    const [changeSolution, { isSuccess: isSuccessChange, isLoading }] = useChangeSolutionMutation();
    const [solutionPublic, { isSuccess: isSuccessPublic }] = useSolutionPublicMutation();
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.reducerAddSolution.filters);
    const link = useAppSelector((state) => state.reducerAddSolution.linkToSolution);
    const links = useAppSelector((state) => state.reducerAddSolution.links_to_platform);
    const router = useRouter();
    const { publicIds } = router.query;
    const { data } = useGetSolutionQuery(Number(publicIds));
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const [id, setId] = useState<number | undefined>(undefined);

    const [solution, setSolution] = useState<PropsSolutionCard>({
        title: "",
        short_description: "",
        full_description: "",
        turnkey_platforms: 0,
        price: "",
        image: "",
        link: "",
        links_to_platform: [],
        filter: [],
    });

    useEffect(() => {
        dispatch(getFilterFromBack(data?.tags));
        dispatch(getLinkToSolution(data?.link));
        dispatch(getLinkToPlatform(data?.links_to_platform));
    }, [data]);

    useEffect(() => {
        setId(data?.id);
    }, [data]);

    useEffect(() => {
        setSolution((prev) => ({
            ...prev,
            title: data?.title,
            short_description: data?.short_description,
            full_description: data?.full_description,
            price: data?.price,
            image: data?.image,
        }));
    }, [data]);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, links_to_platform: links, turnkey_platformss: links?.length }));
    }, [links]);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, link: link }));
    }, [link]);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, filter: filters?.map((item) => item.id) }));
    }, [filters]);

    const [isModalClose, setIsModalClose] = useState<boolean>(false);
    const [isPublicModal, setIsPublicModal] = useState<boolean>(false);
    const handlePublicAddSolution = () => {
        setIsPublicModal(false);
    };
    const handleClickClose = () => {
        setIsModalClose(!isModalClose);
    };

    useEffect(() => {
        if (isSuccessChange) {
            setIsPublicModal(true);
            setIsModalClose(false);
        }
    }, [isSuccessChange]);

    useEffect(() => {
        if (isSuccessPublic) {
            router.push("/admin/solutions");
        }
    }, [isSuccessPublic]);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const pattern = /^[0-9\b]+$/;
        if (!pattern.test(event.key)) {
            event.preventDefault();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSolution((prev) => ({ ...prev, image: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };
    console.log(dataFilters);

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction>
                <div className={css.links}>
                    <Link href={"/admin"}>
                        <Text type="reg16" color="telegray">
                            Главная
                        </Text>
                    </Link>
                    <Link href={"/admin/solutions"}>
                        <span className={css.link}>/Решения</span>
                        <span className={css.link}>/Работа с решениями</span>
                    </Link>
                    <span className={css.link}>/Создание решения</span>
                </div>
                <Title type="h5" color="dark" className={css.title}>
                    Создание решения
                </Title>
                <InputAddSolution
                    label="Название решения"
                    value={solution.title}
                    onChange={(e) => setSolution((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Текст"
                    className={css.titlePlatform}
                    style={css.size640}
                />
                <UploadImage onChange={handleFileChange} image={solution.image} isImage={Boolean(solution.image)} />
                <TextAreaAddSolution
                    value={solution.short_description}
                    onChange={(e) => setSolution((prev) => ({ ...prev, short_description: e.target.value }))}
                    label="Краткое описание решения"
                    placeholder="Текст (200 символов)"
                    className={css.textAreaPlatform}
                />
                <TextAreaAddSolution
                    value={solution.full_description}
                    onChange={(e) => setSolution((prev) => ({ ...prev, full_description: e.target.value }))}
                    label="Полное описание решения"
                    placeholder="Текст до 800 символов"
                    className={css.textAreaPlatform}
                />
                <Title type="h5" color="dark" className={css.subTitle}>
                    Описание фильтров
                </Title>
                <ul className={css.listFilters}>
                    {dataFilters?.results.map((item: PropsGroupsFilters) => (
                        <li key={item.id}>
                            <GroupsFilters id={item.id} group={item.group} filters={item.filters} />
                        </li>
                    ))}
                </ul>

                <Title type="h5" color="dark" className={css.subTitle}>
                    Ссылки на пдатформы
                </Title>
                <MultipleInput />
                <InputAddSolution
                    label="Количество реализованных платформ"
                    value={solution.turnkey_platforms}
                    placeholder="0"
                    className={css.countSolutions}
                    style={css.size203}
                    disabled={true}
                    countPlatforms={true}
                />
                <InputAddSolution
                    value={solution.price}
                    onChange={(e) => setSolution((prev) => ({ ...prev, price: Number(e.target.value) }))}
                    label="Стоимость решения"
                    placeholder="0 RUB"
                    className={css.countSolutions}
                    style={css.size203}
                    onKeyPress={handleKeyPress}
                />
                <InputAddSolution
                    label="Ссылка на страницу решения"
                    value={link}
                    onChange={(e) => {
                        dispatch(linkToSolution(e.target.value));
                    }}
                    placeholder="www.example.com"
                    className={css.linkSolution}
                    style={css.size640}
                    link={true}
                />
                {isModalClose && (
                    <div className={css.modal}>
                        <div className={css.modalContent}>
                            <Image
                                src="/img/close.svg"
                                alt="icon"
                                width={24}
                                height={24}
                                className={css.imgCloseModal}
                                onClick={handleClickClose}
                                style={{ cursor: "pointer" }}
                            />
                            <Image src={"/platforms/saveChanges.svg"} alt="icon" width={56} height={56} />
                            <Title type="h5" color="dark" className={css.titleModalClose}>
                                Сохранить изменения?
                            </Title>
                            <Text type="reg18" color="telegray" className={css.subTitleModalClose}>
                                Все несохраненные данные будут утеряны!
                            </Text>
                            <div className={css.groupBtnModalClose}>
                                <button className={css.btnCloseModal} onClick={() => router.push("/admin/solutions")}>
                                    <Text type="reg18" color="red">
                                        Удалить изменения
                                    </Text>
                                </button>
                                <button
                                    className={css.btnSaveModal}
                                    onClick={() => changeSolution({ id, token, solution })}
                                >
                                    <Text type="reg18" color="white">
                                        Сохранить
                                    </Text>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {isPublicModal && (
                    <div className={css.modal}>
                        <div className={css.modalContent}>
                            <Image
                                src="/img/close.svg"
                                alt="icon"
                                width={24}
                                height={24}
                                className={css.imgCloseModal}
                                onClick={handlePublicAddSolution}
                                style={{ cursor: "pointer" }}
                            />
                            <Image src={"/platforms/publicPlatform.svg"} alt="icon" width={56} height={56} />
                            <Title type="h5" color="dark" className={css.titleModalClose}>
                                Опубликовать решение?
                            </Title>
                            <div className={css.groupBtnModalClose}>
                                <button className={css.btnCloseModal} onClick={handlePublicAddSolution}>
                                    <Text type="reg18" color="red">
                                        Отмена
                                    </Text>
                                </button>
                                <button
                                    className={css.btnSaveModal}
                                    onClick={() => solutionPublic({ id, token, solution })}
                                >
                                    <Text type="reg18" color="white">
                                        Опубликовать
                                    </Text>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {isLoading && (
                    <div className={css.modal}>
                        <Loader isLoading={isLoading} />
                    </div>
                )}
                <div className={css.groupBtn}>
                    <button className={css.btnClose} onClick={handleClickClose}>
                        <Text type="reg18" color="grey">
                            Отмена
                        </Text>
                    </button>
                    <button className={css.btnSave} onClick={() => changeSolution({ id, token, solution })}>
                        <Text type="reg18" color="white">
                            Сохранить
                        </Text>
                    </button>
                </div>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default SolutionsAdmin;
