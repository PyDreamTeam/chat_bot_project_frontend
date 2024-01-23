import React from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./changeSolution.module.css";
import Title from "@/src/components/shared/text/Title";
import { InputAddSolution } from "@/src/components/entities/solutions/addSolution/InputAddSolution";
import { TextAreaAddSolution } from "@/src/components/entities/solutions/addSolution/TextAreaAddPSolution";
import { useEffect, useState } from "react";
import { MultipleInput } from "@/src/components/entities/solutions/addSolution/MultipleInput";
import {
    useChangeSolutionMutation,
    useGetSolutionQuery,
    useGetSolutionsFiltersQuery,
    useGetSolutionCardsQuery,
    useGetSolutionStepsQuery,
} from "@/src/store/services/solutions";
import {
    GroupsFilters,
    PropsGroupsFilters,
} from "@/src/components/entities/solutions/addSolution/filtersForAddSolution/GroupsFiltrs/GroupsFilters";
import { PropsSolutionCard } from "@/src/components/entities/solutions/types";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import {
    getFilterFromBack,
    getLinkToPlatform,
    getLinkToSolution,
    linkToSolution,
    getDignities,
    getCardsFromBack,
    getStepsFromBack,
} from "@/src/store/reducers/addSolution/slice";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { UploadImage } from "@/src/components/entities/solutions/addSolution/UploadImage";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { useGetListPlatformsQuery } from "@/src/store/services/platforms";
import { DignitiesInput } from "@/src/components/entities/solutions/addSolution/DignitiesInput";
import { CardsInput } from "@/src/components/entities/solutions/addSolution/CardsInput";
import { StepsInput } from "@/src/components/entities/solutions/addSolution/StepsInput";

const ChangeSolution = () => {
    const { data: dataFilters, isLoading: isLoadingFilters } = useGetSolutionsFiltersQuery({});
    const { data: dataCards, isLoading: isLoadingCards } = useGetSolutionCardsQuery({});
    const { data: dataSteps, isLoading: isLoadingSteps } = useGetSolutionStepsQuery({});
    const { data: PlatformsData } = useGetListPlatformsQuery({});
    const [changeSolution, { isSuccess: isSuccessChange, isLoading }] = useChangeSolutionMutation();
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.reducerAddSolution.filters);
    const cardsArray = useAppSelector((state) => state.reducerAddSolution.cards);
    const stepsArray = useAppSelector((state) => state.reducerAddSolution.steps);
    const link = useAppSelector((state) => state.reducerAddSolution.linkToSolution);
    const links = useAppSelector((state) => state.reducerAddSolution.links_to_platform);
    const dignitie = useAppSelector((state) => state.reducerAddSolution.dignities);
    const router = useRouter();
    const { changeIds } = router.query;
    const { data } = useGetSolutionQuery(Number(changeIds));
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
        cards: [],
        steps: [],
        steps_title: "",
        steps_description: "",
        dignities: [],
    });

    useEffect(() => {
        dispatch(getFilterFromBack(data?.tags));
        dispatch(getLinkToSolution(data?.link));
        dispatch(getLinkToPlatform(data?.links_to_platform));
        dispatch(getDignities(data?.dignities));
        dispatch(getCardsFromBack(data?.cards));
        dispatch(getStepsFromBack(data?.steps));
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
            steps_title: data?.steps_title,
            steps_description: data?.steps_description,
        }));
    }, [data]);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, links_to_platform: links, turnkey_platforms: links?.length }));
    }, [links]);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, dignities: dignitie }));
    }, [dignitie]);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, link: link }));
    }, [link]);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, filter: filters?.map((item) => item.id) }));
    }, [filters]);
    useEffect(() => {
        setSolution((prev) => ({ ...prev, cards: cardsArray }));
    }, [cardsArray]);
    useEffect(() => {
        setSolution((prev) => ({ ...prev, steps: stepsArray }));
    }, [stepsArray]);

    const [isModalClose, setIsModalClose] = useState<boolean>(false);
    const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
    const handleSuccessAddSolution = () => {
        setIsSuccessModal(!isSuccessModal);
    };
    const handleClickClose = () => {
        setIsModalClose(!isModalClose);
    };

    useEffect(() => {
        if (isSuccessChange) {
            setIsModalClose(false);
            setIsSuccessModal(true);
            setTimeout(() => {
                setIsSuccessModal(false);
                router.reload();
            }, 3000);
        }
    }, [isSuccessChange]);

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
                    <span className={css.link}>/Создание решениями</span>
                </div>
                <Title type="h5" color="dark" className={css.title}>
                    Создание решения
                </Title>
                <InputAddSolution
                    label="Название решения"
                    value={solution.title}
                    onChange={(e) => setSolution((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Текст"
                    className={css.titleSolution}
                    style={css.size640}
                />
                <UploadImage
                    text={"Логотип"}
                    height={250}
                    width={250}
                    onChange={handleFileChange}
                    image={solution.image}
                    isImage={Boolean(solution.image)}
                />
                <TextAreaAddSolution
                    value={solution.short_description}
                    onChange={(e) => setSolution((prev) => ({ ...prev, short_description: e.target.value }))}
                    label="Краткое описание решения"
                    placeholder="Текст (200 символов)"
                    className={css.textAreaSolution}
                />
                <InputAddSolution
                    label="Название платформы на которой реализовано решение"
                    results={PlatformsData?.results}
                    value={solution.title}
                    is={true}
                    onChange={(e) => setSolution((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Выбрать"
                    className={css.titleSolution}
                    style={css.size640}
                />
                <UploadImage
                    text={"Логотип платформы"}
                    height={250}
                    width={250}
                    onChange={handleFileChange}
                    image={solution.image}
                    isImage={Boolean(solution.image)}
                />
                <Title type="h5" color="dark" className={css.subTitle}>
                    Полное описание
                </Title>
                <TextAreaAddSolution
                    value={solution.full_description}
                    onChange={(e) => setSolution((prev) => ({ ...prev, full_description: e.target.value }))}
                    label="Описание типа решения"
                    placeholder="Текст до 200 символов"
                    className={css.textAreaSolution}
                />
                <Title type="h5" color="dark" className={css.subTitle}>
                    Задачи
                </Title>
                <CardsInput results={dataCards?.results} />
                <Title type="h5" color="dark" className={css.subHead}>
                    Мероприятия
                </Title>
                <InputAddSolution
                    label="Заголовок мероприятий"
                    value={solution.steps_title}
                    onChange={(e) => setSolution((prev) => ({ ...prev, steps_title: e.target.value }))}
                    placeholder="Текст"
                    className={css.titleSolution}
                    style={css.size640}
                />
                <TextAreaAddSolution
                    value={solution.steps_description}
                    onChange={(e) => setSolution((prev) => ({ ...prev, steps_description: e.target.value }))}
                    label="Описание мероприятий"
                    placeholder="Текст (200 символов)"
                    className={css.textAreaSolution}
                />
                <StepsInput results={dataSteps?.results} />
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
                    Ссылки на платформы
                </Title>
                <DignitiesInput />
                <InputAddSolution
                    value={solution.price}
                    onChange={(e) => setSolution((prev) => ({ ...prev, price: Number(e.target.value) }))}
                    label="Стоимость решения"
                    placeholder="0 RUB"
                    className={css.countPlatforms}
                    style={css.size203}
                    onKeyPress={handleKeyPress}
                />
                <InputAddSolution
                    label="Ссылка на страницу с описанием платформы, на которой было создано решение"
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
                {isSuccessModal && (
                    <div className={css.modal}>
                        <div className={css.modalContent}>
                            <Image
                                src="/img/close.svg"
                                alt="icon"
                                width={24}
                                height={24}
                                className={css.imgCloseModal}
                                onClick={handleSuccessAddSolution}
                                style={{ cursor: "pointer" }}
                            />
                            <Image src={"/platforms/successModal.svg"} alt="icon" width={120} height={120} />
                            <Title type="h5" color="dark" className={css.titleModalClose}>
                                Платформа успешно сохранена!
                            </Title>
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

export default ChangeSolution;
