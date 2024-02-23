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
import {
    useChangeSolutionMutation,
    useGetSolutionQuery,
    useGetSolutionsFiltersQuery,
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
    getAdvantages,
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
import { DropdownSelectPlatform } from "@/src/components/entities/solutions/addSolution/DropdownSelectPlatform";
import { Button } from "@/src/components/shared/buttons/Button";
import { ThesesInput } from "@/src/components/entities/solutions/addSolution/ThesesInput";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";

const ChangeSolution = () => {
    const router = useRouter();
    const { changeIds } = router.query;
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const dispatch = useAppDispatch();

    const { data } = useGetSolutionQuery(Number(changeIds), { refetchOnMountOrArgChange: true });

    const { data: dataFilters } = useGetSolutionsFiltersQuery({});
    const { data: PlatformsData } = useGetListPlatformsQuery({});

    const [changeSolution, { isSuccess: isSuccessChange, isLoading }] = useChangeSolutionMutation();

    const filters = useAppSelector((state) => state.reducerAddSolution.filters);
    const cardsArray = useAppSelector((state) => state.reducerAddSolution.cards);
    const stepsArray = useAppSelector((state) => state.reducerAddSolution.steps);
    const link = useAppSelector((state) => state.reducerAddSolution.linkToSolution);
    const links = useAppSelector((state) => state.reducerAddSolution.links_to_platform);
    const dignities = useAppSelector((state) => state.reducerAddSolution.dignities);
    const advantages = useAppSelector((state) => state.reducerAddSolution.advantages);
    const [id, setId] = useState<number | undefined>(Number(changeIds));

    const [solution, setSolution] = useState<PropsSolutionCard>({
        title: "",
        advantages: [],
        short_description: "",
        full_description: "",
        price: "",
        image: "",
        link: "",
        steps_title: "",
        steps_description: "",
        steps: [],
        filter: [],
        cards: [],
        dignities: [],
        links_to_platform: [],
    });

    const platform = PlatformsData?.results?.find((item: any) => {
        if (data?.links_to_platform) {
            return item.id == data?.links_to_platform[0];
        }
    });

    const [selectedPlatform, setSelectedPlatform] = useState(platform?.title);

    const [isValid, setIsValid] = useState<boolean>(false);
    // const [isShownErrorShort, setIsShownErrorShort] = useState(false);
    // const [isShownErrorExist, setIsShownErrorExist] = useState(false);

    const isValidSolution = () => {
        const isUndefined = Object.values(solution).find((value) => value === "" || value === null);

        if (
            typeof isUndefined == "undefined" &&
            solution.steps?.length !== 0 &&
            solution.cards?.length !== 0 &&
            solution.dignities?.length !== 0 &&
            solution.links_to_platform?.length !== 0 &&
            solution.filter?.length !== 0 &&
            solution.advantages?.length !== 0
        ) {
            setIsValid(true);
            console.log("solution is VALID");
            // if (!isShownErrorShort && !isShownErrorExist) {
            //     setIsValid(true);
            // } else {
            //     setIsValid(false);
            // }
        } else {
            setIsValid(false);
            console.log("solution is NOT VALID");
        }
    };

    useEffect(() => {
        dispatch(getFilterFromBack(data?.tags));
        dispatch(getLinkToSolution(data?.link));
        dispatch(getLinkToPlatform(data?.links_to_platform));
        dispatch(getDignities(data?.dignities));
        dispatch(getAdvantages(data?.advantages));
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
            steps: data?.steps,
        }));
    }, [data]);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, links_to_platform: links }));
    }, [links]);
    useEffect(() => {
        setSolution((prev) => ({ ...prev, dignities: dignities }));
    }, [dignities]);
    useEffect(() => {
        setSolution((prev) => ({ ...prev, advantages: advantages }));
    }, [advantages]);
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
                router.push("/admin/solutions");
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

    const handleSelectedPlatformId = (groupId: number) => {
        const newLinkToPlatform = [groupId.toString()];
        setSolution((prev) => ({ ...prev, links_to_platform: newLinkToPlatform }));
        dispatch(getLinkToPlatform(newLinkToPlatform));
    };

    const handleSubmit = () => {
        changeSolution({ id, token, solution });
    };

    useEffect(() => {
        console.log(solution);
        isValidSolution();
    }, [solution]);

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
                    <span className={css.link}>/Редактирование решения</span>
                </div>
                <Title type="h5" color="dark" className={css.title}>
                    Редактирование решения
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
                    type="logo"
                />
                <TextAreaAddSolution
                    value={solution.short_description}
                    onChange={(e) => setSolution((prev) => ({ ...prev, short_description: e.target.value }))}
                    label="Краткое описание решения"
                    placeholder="Текст (200 символов)"
                    className={css.textAreaSolution}
                />
                <ThesesInput />
                <DropdownSelectPlatform
                    data={PlatformsData?.results}
                    selected={selectedPlatform || platform?.title}
                    setSelected={setSelectedPlatform}
                    setSelectedId={handleSelectedPlatformId}
                />
                <InputAddSolution
                    value={solution.price}
                    onChange={(e) => setSolution((prev) => ({ ...prev, price: Number(e.target.value) }))}
                    label="Стоимость решения"
                    placeholder="0 RUB"
                    className={css.countPlatforms}
                    style={css.size203}
                    onKeyPress={handleKeyPress}
                />
                <DignitiesInput />

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
                <CardsInput />

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
                    placeholder="Текст (до 150 символов)"
                    className={css.textAreaSolution}
                />
                <StepsInput />

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

                <InputAddSolution
                    label="Ссылка на страницу с описанием платформы, на которой было создано решение"
                    value={link}
                    onChange={(e) => {
                        // const httpString = "https://";
                        dispatch(linkToSolution(e.target.value));
                    }}
                    placeholder="www.example.com"
                    className={css.linkSolution}
                    style={css.size640}
                    link={true}
                />
                <div className={css.groupBtn}>
                    <button className={css.btnClose} onClick={handleClickClose}>
                        <Text type="reg18" color="grey">
                            Отмена
                        </Text>
                    </button>
                    <Button disabled={!isValid} active={isValid} type={"button"} onClick={handleSubmit} width={212}>
                        Сохранить
                    </Button>
                </div>
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
                                Решение успешно изменено!
                            </Title>
                        </div>
                    </div>
                )}
                {isLoading && (
                    <div className={css.modal}>
                        <Loader isLoading={isLoading} />
                    </div>
                )}
            </ContainerAdminFunction>
            <ButtonScrollToUp />
        </WrapperAdminPage>
    );
};

export default ChangeSolution;
