import React from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import styles from "./addSolution.module.css";
import Title from "@/src/components/shared/text/Title";
import { InputAddSolution } from "@/src/components/entities/solutions/addSolution/InputAddSolution";
import { TextAreaAddSolution } from "@/src/components/entities/solutions/addSolution/TextAreaAddPSolution";
import { useEffect, useState } from "react";
import { useAddSolutionMutation, useGetSolutionsFiltersQuery } from "@/src/store/services/solutions";
import {
    PropsGroupsFilters,
    GroupsFilters,
} from "@/src/components/entities/solutions/addSolution/filtersForAddSolution/GroupsFiltrs/GroupsFilters";
import { PropsSolutionCard } from "@/src/components/entities/solutions/types";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { useGetListPlatformsQuery } from "@/src/store/services/platforms";
import {
    deleteAllFiltersFromSolution,
    linkToSolution,
    getLinkToPlatform,
} from "@/src/store/reducers/addSolution/slice";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { UploadImage } from "@/src/components/entities/solutions/addSolution/UploadImage";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { CardsInput } from "@/src/components/entities/solutions/addSolution/CardsInput";
import { StepsInput } from "@/src/components/entities/solutions/addSolution/StepsInput";
import { DignitiesInput } from "@/src/components/entities/solutions/addSolution/DignitiesInput";
import { DropdownSelectPlatform } from "@/src/components/entities/solutions/addSolution/DropdownSelectPlatform";
import { ThesesInput } from "@/src/components/entities/solutions/addSolution/ThesesInput";
import { Button } from "@/src/components/shared/buttons/Button";
import ErrorMessage from "@/src/components/entities/tariffs/ErrorMessage/ErrorMessage";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";

const AddSolution = () => {
    const { data: dataFilters, isLoading: isLoadingFilters } = useGetSolutionsFiltersQuery({});
    const { data: PlatformsData } = useGetListPlatformsQuery({});
    const [addSolution, { isSuccess: isSuccessAddSolution, isLoading }] = useAddSolutionMutation();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    const [selectedPlatform, setSelectedPlatform] = useState("Выбрать платформу");

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

    const [isValid, setIsValid] = useState<boolean>(false);
    // const [isShownErrorShort, setIsShownErrorShort] = useState(false);
    // const [isShownErrorExist, setIsShownErrorExist] = useState(false);

    const isValidCards = (cards: PropsSolutionCard["cards"]): boolean => {
        let isValid = true;
        cards?.forEach((card) => {
            if (card.title === "" || card.text === "" || card.img === "") {
                isValid = false;
            }
        });

        return isValid;
    };

    const isValidSteps = (steps: PropsSolutionCard["steps"]): boolean => {
        let isValid = true;
        steps?.forEach((step) => {
            if (step.title === "" || step.text === "") {
                isValid = false;
            }
        });

        return isValid;
    };

    const isValidSolution = () => {
        const isUndefined = Object.values(solution).find((value) => value === "" || value === null);

        // isValidFilterName(filter.title);

        if (
            typeof isUndefined == "undefined" &&
            solution.steps?.length !== 0 &&
            solution.cards?.length !== 0 &&
            solution.dignities?.length !== 0 &&
            solution.links_to_platform?.length !== 0 &&
            solution.filter?.length !== 0 &&
            solution.advantages?.length !== 0 &&
            isValidCards(solution.cards) !== false &&
            isValidSteps(solution.steps) !== false
        ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const [isModalClose, setIsModalClose] = useState<boolean>(false);
    const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
    const handleSuccessAddPlatform = () => {
        setIsSuccessModal(!isSuccessModal);
        router.push("/admin/solutions");
    };
    const handleClickClose = () => {
        setIsModalClose(!isModalClose);
    };

    useEffect(() => {
        dispatch(linkToSolution(""));
        dispatch(deleteAllFiltersFromSolution());
    }, []);

    const inputsLinks = useAppSelector((state) => state.reducerAddSolution.links_to_platform);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, links_to_platform: inputsLinks }));
    }, [inputsLinks]);

    const filters = useAppSelector((state) => state.reducerAddSolution.filters);
    const cardsArray = useAppSelector((state) => state.reducerAddSolution.cards);
    const stepsArray = useAppSelector((state) => state.reducerAddSolution.steps);
    const dignities = useAppSelector((state) => state.reducerAddSolution.dignities);
    const advantages = useAppSelector((state) => state.reducerAddSolution.advantages);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, dignities: dignities }));
    }, [dignities]);
    useEffect(() => {
        setSolution((prev) => ({ ...prev, advantages: advantages }));
    }, [advantages]);
    useEffect(() => {
        setSolution((prev) => ({ ...prev, filter: filters.map((item) => item.id) }));
    }, [filters]);
    const link = useAppSelector((state) => state.reducerAddSolution.linkToSolution);
    useEffect(() => {
        setSolution((prev) => ({ ...prev, link: link }));
    }, [link]);
    useEffect(() => {
        setSolution((prev) => ({ ...prev, cards: cardsArray }));
    }, [cardsArray]);
    useEffect(() => {
        setSolution((prev) => ({ ...prev, steps: stepsArray }));
    }, [stepsArray]);

    useEffect(() => {
        if (isSuccessAddSolution) {
            setIsModalClose(false);
            setIsSuccessModal(true);
            setSolution((prev) => ({
                ...prev,
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
            }));
            dispatch(deleteAllFiltersFromSolution());
            setTimeout(() => {
                setIsSuccessModal(false);
                router.push("/admin/solutions");
            }, 3000);
        }
    }, [isSuccessAddSolution]);

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
        addSolution({ solution, token });
    };

    useEffect(() => {
        console.log(solution);
        isValidSolution();
    }, [solution]);

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction>
                <div className={styles.links}>
                    <Link href={"/admin"}>
                        <Text type="reg16" color="telegray">
                            Главная
                        </Text>
                    </Link>
                    <Link href={"/admin/solutions"}>
                        <span className={styles.link}>/Решения</span>
                        <span className={styles.link}>/Работа с решениями</span>
                    </Link>
                    <span className={styles.link}>/Создание решения</span>
                </div>
                <Title type="h5" color="dark" className={styles.title}>
                    Создание решения
                </Title>
                <InputAddSolution
                    label="Название решения"
                    value={solution.title}
                    onChange={(e) => setSolution((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Текст"
                    className={styles.titleSolution}
                    style={styles.size640}
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
                    label="Краткое описание решения (для карточки)"
                    placeholder="Текст (200 символов)"
                    className={styles.textAreaSolution}
                />
                <ThesesInput />
                <DropdownSelectPlatform
                    data={PlatformsData?.results}
                    selected={selectedPlatform}
                    setSelected={setSelectedPlatform}
                    setSelectedId={handleSelectedPlatformId}
                />
                <InputAddSolution
                    value={solution.price}
                    onChange={(e) => setSolution((prev) => ({ ...prev, price: Number(e.target.value) }))}
                    label="Стоимость решения"
                    placeholder="0 RUB"
                    className={styles.countPlatforms}
                    style={styles.size203}
                    onKeyPress={handleKeyPress}
                />
                <DignitiesInput />

                <Title type="h5" color="dark" className={styles.subTitle}>
                    Полное описание
                </Title>
                <TextAreaAddSolution
                    value={solution.full_description}
                    onChange={(e) => setSolution((prev) => ({ ...prev, full_description: e.target.value }))}
                    label="Описание типа решения"
                    placeholder="Текст (200 символов)"
                    className={styles.textAreaSolution}
                />

                <Title type="h5" color="dark" className={styles.subHead}>
                    Задачи
                </Title>
                <CardsInput />

                <Title type="h5" color="dark" className={styles.subHead}>
                    Мероприятия
                </Title>
                <InputAddSolution
                    label="Заголовок мероприятий"
                    value={solution.steps_title}
                    onChange={(e) => setSolution((prev) => ({ ...prev, steps_title: e.target.value }))}
                    placeholder="Текст"
                    className={styles.titleSolution}
                    style={styles.size640}
                />
                <TextAreaAddSolution
                    value={solution.steps_description}
                    onChange={(e) => setSolution((prev) => ({ ...prev, steps_description: e.target.value }))}
                    label="Описание мероприятий"
                    placeholder="Текст (до 150 символов)"
                    className={styles.textAreaSolution}
                />
                <StepsInput />

                <Title type="h5" color="dark" className={styles.subTitle}>
                    Описание фильтров
                </Title>
                <ul className={styles.listFilters}>
                    {dataFilters?.results.map((item: PropsGroupsFilters) => (
                        <li key={item.id}>
                            <GroupsFilters id={item.id} group={item.group} filters={item.filters} />
                        </li>
                    ))}
                </ul>
                <InputAddSolution
                    label="Ссылка на страницу с описанием платформы, на которой было создано решение"
                    onChange={(e) => {
                        const httpString = "https://";
                        dispatch(linkToSolution(httpString.concat(e.target.value)));
                    }}
                    placeholder="example.com"
                    className={styles.linkSolution}
                    style={styles.size640}
                    link={true}
                />
                <div className={styles.groupBtn}>
                    <button className={styles.btnClose} onClick={handleClickClose}>
                        <Text type="reg18" color="grey">
                            Отмена
                        </Text>
                    </button>
                    <Button disabled={!isValid} active={isValid} type={"button"} onClick={handleSubmit} width={212}>
                        Создать
                    </Button>
                </div>
                <ErrorMessage isShown={isValid} className={styles.errorMessage}>
                    Внесите изменения. Все поля должны быть заполнены
                </ErrorMessage>
                {isModalClose && (
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <Image
                                src="/img/close.svg"
                                alt="icon"
                                width={24}
                                height={24}
                                className={styles.imgCloseModal}
                                onClick={handleClickClose}
                                style={{ cursor: "pointer" }}
                            />
                            <Image src={"/platforms/saveChanges.svg"} alt="icon" width={56} height={56} />
                            <Title type="h5" color="dark" className={styles.titleModalClose}>
                                Сохранить изменения?
                            </Title>
                            <Text type="reg18" color="telegray" className={styles.subTitleModalClose}>
                                Все несохраненные данные будут утеряны!
                            </Text>
                            <div className={styles.groupBtnModalClose}>
                                <button
                                    className={styles.btnCloseModal}
                                    onClick={() => router.push("/admin/solutions")}
                                >
                                    <Text type="reg18" color="red">
                                        Удалить изменения
                                    </Text>
                                </button>
                                <button
                                    className={styles.btnSaveModal}
                                    onClick={() => addSolution({ solution, token })}
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
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <Image
                                src="/img/close.svg"
                                alt="icon"
                                width={34}
                                height={34}
                                className={styles.imgCloseModal}
                                onClick={handleSuccessAddPlatform}
                                style={{ cursor: "pointer" }}
                            />
                            <Image src={"/platforms/successModal.svg"} alt="icon" width={120} height={120} />
                            <Title type="h5" color="dark" className={styles.titleModalClose}>
                                Решение успешно сохранено!
                            </Title>
                        </div>
                    </div>
                )}
                {isLoading && (
                    <div className={styles.modal}>
                        <Loader isLoading={isLoading} />
                    </div>
                )}
                <ButtonScrollToUp />
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default AddSolution;
