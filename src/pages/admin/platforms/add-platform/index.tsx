import React from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./addPlatform.module.css";
import Title from "@/src/components/shared/text/Title";
import { InputAddPlatform } from "@/src/components/entities/platforms/addPlatform/InputAddPlatform";
import { TextAreaAddPlatform } from "@/src/components/entities/platforms/addPlatform/TextAreaAddPlatform";
import { useEffect, useState } from "react";
import { MultipleInput } from "@/src/components/entities/platforms/addPlatform/MultipleInput";
import { useAddPlatformMutation, useGetPlatformsFiltersQuery } from "@/src/store/services/platforms";
import { GroupsFilters, PropsGroupsFilters } from "@/src/components/entities/platforms/addPlatform/filtersForAddPlatform/GroupsFiltrs/GroupsFilters";
import { PropsPlatformCard } from "@/src/components/entities/platforms/types";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { deleteAllFiltersFromPlatform, linkToPlatform } from "@/src/store/reducers/addPlatform/slice";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { UploadImage } from "@/src/components/entities/platforms/addPlatform/UploadImage";

const AddPlatform = () => {

    const { data: dataFilters, isLoading: isLoadingFilters } = useGetPlatformsFiltersQuery({});
    const dispatch = useAppDispatch();
    const router = useRouter();
    const token = JSON.parse(Cookies.get("loginUser") || "[]"); 
    const [addPlatform, {data, isSuccess: isSuccessAddPlatform}] = useAddPlatformMutation();

    const [platform, setPlatform] = useState<PropsPlatformCard>({
        title: "",
        short_description: "",
        full_description: "",
        turnkey_solutions: 0,
        price: "",
        image: "",
        link: "",
        links_to_solution: [],
        filter: []
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
    const inputsLinks = useAppSelector(state => state.reducerAddPlatform.links_to_solution);
    useEffect(() => {
        setPlatform(prev => ({...prev, links_to_solution: inputsLinks, turnkey_solutions: inputsLinks.length}));
    }, [inputsLinks]);
    const filters = useAppSelector(state => state.reducerAddPlatform.filters);
    useEffect(() => {
        setPlatform(prev => ({...prev, filter: filters.map(item => item.id)}));
    }, [filters]);
    const link = useAppSelector(state => state.reducerAddPlatform.linkToPlatform);
    useEffect(() => {
        setPlatform(prev => ({...prev, link: link}));
    }, [link]);
    useEffect(() => {
        if(isSuccessAddPlatform) {
            setIsModalClose(false);
            setIsSuccessModal(true);
            setPlatform(prev => ({...prev, 
                title: "",
                short_description: "",
                full_description: "",
                turnkey_solutions: 0,
                price: "",
                image: "",
                link: "",
                links_to_solution: [],
                filter: [] }));
            dispatch(deleteAllFiltersFromPlatform());
            setTimeout(() => {
                setIsSuccessModal(false);
            }, 3000);
        }
    }, [isSuccessAddPlatform]);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const pattern = /^[0-9\b]+$/; 
        if (!pattern.test(event.key)) {
            event.preventDefault();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPlatform(prev => ({...prev, image: reader.result as string}));
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <WrapperAdminPage>
            <ContainerAdminFunction>
                <div className={css.links}>
                    <Link href={"/admin"}>
                        <Text type="reg16" color="telegray">Главная</Text>
                    </Link>
                    <Link href={"/admin/platforms"}>
                        <span className={css.link}>/Платформы</span>
                        <span className={css.link}>/Работа с платформами</span>
                    </Link>
                    <span className={css.link}>/Создание платформы</span>
                </div>
                <Title type="h5" color="dark" className={css.title}>
                    Создание платформы
                </Title>
                <InputAddPlatform 
                    label="Название платформы"
                    value={platform.title}
                    onChange={(e) => setPlatform(prev => ({...prev, title: e.target.value}))}
                    placeholder="Текст"
                    className={css.titlePlatform}
                    style={css.size640}
                />
                <UploadImage onChange={handleFileChange} image={platform.image} isImage={Boolean(platform.image)}/>
                <TextAreaAddPlatform
                    value={platform.short_description}
                    onChange={(e) => setPlatform(prev => ({...prev, short_description: e.target.value}))}
                    label="Краткое описание платформы"
                    placeholder="Текст (200 символов)"
                    className={css.textAreaPlatform}
                />
                <TextAreaAddPlatform
                    value={platform.full_description}
                    onChange={(e) => setPlatform(prev => ({...prev, full_description: e.target.value}))}
                    label="Полное описание платформы"
                    placeholder="Текст до 800 символов"
                    className={css.textAreaPlatform}
                />
                <Title type="h5" color="dark" className={css.subTitle}>Описание фильтров</Title>
                <ul className={css.listFilters}>
                    {dataFilters?.results.map((item: PropsGroupsFilters) => (
                        <li key={item.id}>
                            <GroupsFilters id={item.id} group={item.group} filters={item.filters}/>
                        </li>
                    ))}
                </ul>

                <Title type="h5" color="dark" className={css.subTitle}>Ссылки на решения</Title>
                <MultipleInput/>
                <InputAddPlatform 
                    label="Количество реализованных решений"
                    value={platform.turnkey_solutions}
                    placeholder="0"
                    className={css.countSolutions}
                    style={css.size203}
                    disabled={true}
                    countSolutions={true}
                />
                <InputAddPlatform 
                    value={platform.price}
                    onChange={(e) => setPlatform(prev => ({...prev, price: Number(e.target.value)}))}
                    label="Стоимость платформы"
                    placeholder="0 RUB"
                    className={css.countSolutions}
                    style={css.size203}
                    onKeyPress={handleKeyPress}
                />
                <InputAddPlatform 
                    label="Ссылка на страницу платформы"
                    onChange={(e) => {
                        // setPlatform(prev => ({...prev, link: e.target.value}));
                        dispatch(linkToPlatform(e.target.value));
                    }}
                    placeholder="www.example.com"
                    className={css.linkSolution}
                    style={css.size640}
                    link={true}
                />
                {isModalClose && 
                    <div className={css.modal}>
                        <div className={css.modalContent}>
                            <Image src="/img/close.svg" alt="icon" width={24} height={24} className={css.imgCloseModal} onClick={handleClickClose} style={{cursor: "pointer"}}/>
                            <Image src={"/platforms/saveChanges.svg"} alt="icon" width={56} height={56}/>
                            <Title type="h5" color="dark" className={css.titleModalClose}>Сохранить изменения?</Title>
                            <Text type="reg18" color="telegray" className={css.subTitleModalClose}>Все несохраненные данные будут утеряны!</Text>
                            <div className={css.groupBtnModalClose}>
                                <button className={css.btnCloseModal} onClick={() => router.push("/admin/platforms")}>
                                    <Text type="reg18" color="red">Удалить изменения</Text>
                                </button>
                                <button className={css.btnSaveModal} onClick={() => addPlatform({platform, token})}>
                                    <Text type="reg18" color="white">Сохранить</Text>
                                </button>
                            </div>
                        </div>
                    </div>
                }
                {
                    isSuccessModal && 
                    <div className={css.modal}>
                        <div className={css.modalContent}>
                            <Image src="/img/close.svg" alt="icon" width={24} height={24} className={css.imgCloseModal} onClick={handleSuccessAddPlatform} style={{cursor: "pointer"}}/>
                            <Image src={"/platforms/successModal.svg"} alt="icon" width={120} height={120}/>
                            <Title type="h5" color="dark" className={css.titleModalClose}>Платформа успешно сохранена!</Title>
                        </div>
                    </div>
                }
                <div className={css.groupBtn}>
                    <button className={css.btnClose} onClick={handleClickClose}>
                        <Text type="reg18" color="grey">Отмена</Text>
                    </button>
                    <button className={css.btnSave} onClick={() => {
                        addPlatform({platform, token});
                    }}>
                        <Text type="reg18" color="white">Сохранить</Text>
                    </button>
                </div>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default AddPlatform;
