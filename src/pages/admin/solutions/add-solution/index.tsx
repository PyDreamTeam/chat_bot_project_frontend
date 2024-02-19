import React from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import styles from "./addSolutiom.module.css";
import Title from "@/src/components/shared/text/Title";
import { InputAddSolution } from "@/src/components/entities/solutions/addSolution/InputAddSolution";
import { TextAreaAddSolution } from "@/src/components/entities/solutions/addSolution/TextAreaAddPSolution";
import { useEffect, useState } from "react";
import {
    useAddSolutionMutation,
    useGetSolutionsFiltersQuery,
    useGetSolutionCardsQuery,
    useGetSolutionStepsQuery,
} from "@/src/store/services/solutions";
import {
    PropsGroupsFilters,
    GroupsFilters,
} from "@/src/components/entities/solutions/addSolution/filtersForAddSolution/GroupsFiltrs/GroupsFilters";
import { PropsSolutionCard } from "@/src/components/entities/solutions/types";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { useGetListPlatformsQuery } from "@/src/store/services/platforms";
import { deleteAllFiltersFromSolution, linkToSolution } from "@/src/store/reducers/addSolution/slice";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { UploadImage } from "@/src/components/entities/solutions/addSolution/UploadImage";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { CardsInput } from "@/src/components/entities/solutions/addSolution/CardsInput";
import { StepsInput } from "@/src/components/entities/solutions/addSolution/StepsInput";
import { DignitiesInput } from "@/src/components/entities/solutions/addSolution/DignitiesInput";
import { DropdownSelectPlatform } from "@/src/components/entities/solutions/addSolution/DropdownSelectPlatform";

const AddSolution = () => {
    const { data: dataFilters, isLoading: isLoadingFilters } = useGetSolutionsFiltersQuery({});
    const { data: dataCards, isLoading: isLoadingCards } = useGetSolutionCardsQuery({});
    const { data: dataSteps, isLoading: isLoadingSteps } = useGetSolutionStepsQuery({});

    const { data: PlatformsData } = useGetListPlatformsQuery({});

    const [selectedPlatform, setSelectedPlatform] = useState("Выбрать платформу");

    const dispatch = useAppDispatch();
    const router = useRouter();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const [addSolution, { data, isSuccess: isSuccessAddSolution, isLoading }] = useAddSolutionMutation();
    const [solution, setSolution] = useState<PropsSolutionCard>({
        title: "",
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

    const [isModalClose, setIsModalClose] = useState<boolean>(false);
    const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
    const handleSuccessAddPlatform = () => {
        setIsSuccessModal(!isSuccessModal);
    };
    const handleClickClose = () => {
        setIsModalClose(!isModalClose);
    };

    useEffect(() => {
        dispatch(deleteAllFiltersFromSolution());
    }, []);

    const inputsLinks = useAppSelector((state) => state.reducerAddSolution.links_to_platform);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, links_to_platform: inputsLinks, turnkey_platforms: inputsLinks.length }));
    }, [inputsLinks]);

    const filters = useAppSelector((state) => state.reducerAddSolution.filters);
    const cardsArray = useAppSelector((state) => state.reducerAddSolution.cards);
    const stepsArray = useAppSelector((state) => state.reducerAddSolution.steps);
    const dignities = useAppSelector((state) => state.reducerAddSolution.dignities);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, dignities: dignities }));
    }, [dignities]);
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
        // isValidSolution();
    };

    // solution log
    useEffect(() => {
        console.log(solution);
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
                />
                <TextAreaAddSolution
                    value={solution.short_description}
                    onChange={(e) => setSolution((prev) => ({ ...prev, short_description: e.target.value }))}
                    label="Краткое описание решения"
                    placeholder="Текст (200 символов)"
                    className={styles.textAreaSolution}
                />
                {/* TODO: dropdownSelectPlatform */}
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

                <CardsInput results={dataCards?.results} />
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
                <StepsInput results={dataSteps?.results} />
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
                        dispatch(linkToSolution(e.target.value));
                    }}
                    placeholder="www.example.com"
                    className={styles.linkSolution}
                    style={styles.size640}
                    link={true}
                />
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
                                    onClick={() => router.push("/admin/platforms")}
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
                                width={24}
                                height={24}
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
                <div className={styles.groupBtn}>
                    <button className={styles.btnClose} onClick={handleClickClose}>
                        <Text type="reg18" color="grey">
                            Отмена
                        </Text>
                    </button>
                    <button
                        className={styles.btnSave}
                        onClick={() => {
                            addSolution({ solution, token });
                        }}
                    >
                        <Text type="reg18" color="white">
                            Сохранить
                        </Text>
                    </button>
                </div>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default AddSolution;
