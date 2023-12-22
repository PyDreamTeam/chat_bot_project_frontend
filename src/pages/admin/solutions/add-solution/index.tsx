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
import { MultipleInput } from "@/src/components/entities/solutions/addSolution/MultipleInput";
import { useAddSolutionMutation, useGetSolutionsFiltersQuery } from "@/src/store/services/solutions";
import {
    PropsGroupsFilters,
    GroupsFilters,
} from "@/src/components/entities/solutions/addSolution/filtersForAddSolution/GroupsFiltrs/GroupsFilters";
import { PropsSolutionCard } from "@/src/components/entities/solutions/types";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { deleteAllFiltersFromPlatform, linkToPlatform } from "@/src/store/reducers/addPlatform/slice";
import { deleteAllFiltersFromSolution, linkToSolution } from "@/src/store/reducers/addSolution/slice";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { UploadImage } from "@/src/components/entities/platforms/addPlatform/UploadImage";
import { Loader } from "@/src/components/shared/Loader/Loader";

const AddSolution = () => {
    const { data: dataFilters, isLoading: isLoadingFilters } = useGetSolutionsFiltersQuery({});
    const dispatch = useAppDispatch();
    const router = useRouter();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const [addSolution, { data, isSuccess: isSuccessAddSolution, isLoading }] = useAddSolutionMutation();
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

    const [isModalClose, setIsModalClose] = useState<boolean>(false);
    const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
    const handleSuccessAddPlatform = () => {
        setIsSuccessModal(!isSuccessModal);
    };
    const handleClickClose = () => {
        setIsModalClose(!isModalClose);
    };

    useEffect(() => {
        dispatch(deleteAllFiltersFromPlatform());
    }, []);

    const inputsLinks = useAppSelector((state) => state.reducerAddSolution.links_to_platform);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, links_to_platform: inputsLinks, turnkey_platforms: inputsLinks.length }));
    }, [inputsLinks]);

    const filters = useAppSelector((state) => state.reducerAddSolution.filters);

    useEffect(() => {
        setSolution((prev) => ({ ...prev, filter: filters.map((item) => item.id) }));
    }, [filters]);
    const link = useAppSelector((state) => state.reducerAddSolution.linkToSolution);
    useEffect(() => {
        setSolution((prev) => ({ ...prev, link: link }));
    }, [link]);

    useEffect(() => {
        if (isSuccessAddSolution) {
            setIsModalClose(false);
            setIsSuccessModal(true);
            setSolution((prev) => ({
                ...prev,
                title: "",
                short_description: "",
                full_description: "",
                turnkey_solutions: 0,
                price: "",
                image: "",
                link: "",
                links_to_solution: [],
                filter: [],
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
                <UploadImage onChange={handleFileChange} image={solution.image} isImage={Boolean(solution.image)} />
                <TextAreaAddSolution
                    value={solution.short_description}
                    onChange={(e) => setSolution((prev) => ({ ...prev, short_description: e.target.value }))}
                    label="Краткое описание решения"
                    placeholder="Текст (200 символов)"
                    className={styles.textAreaSolution}
                />
                <TextAreaAddSolution
                    value={solution.full_description}
                    onChange={(e) => setSolution((prev) => ({ ...prev, full_description: e.target.value }))}
                    label="Полное описание решения"
                    placeholder="Текст до 800 символов"
                    className={styles.textAreaSolution}
                />
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

                <Title type="h5" color="dark" className={styles.subTitle}>
                    Ссылки на платформы
                </Title>
                <MultipleInput />
                <InputAddSolution
                    label="Количество реализованных платформ"
                    value={solution.turnkey_platforms}
                    placeholder="0"
                    className={styles.countPlatforms}
                    style={styles.size203}
                    disabled={true}
                    countPlatforms={true}
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
                <InputAddSolution
                    label="Ссылка на страницу решения"
                    onChange={(e) => {
                        dispatch(linkToPlatform(e.target.value));
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
