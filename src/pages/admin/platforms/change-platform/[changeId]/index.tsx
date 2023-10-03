import React from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./changePlatform.module.css";
import Title from "@/src/components/shared/text/Title";
import { InputAddPlatform } from "@/src/components/entities/platforms/addPlatform/InputAddPlatform";
import { TextAreaAddPlatform } from "@/src/components/entities/platforms/addPlatform/TextAreaAddPlatform";
import { useEffect, useState } from "react";
import { MultipleInput } from "@/src/components/entities/platforms/addPlatform/MultipleInput";
import { useAddPlatformMutation, useChangePlatformMutation, useGetPlatformQuery, useGetPlatformsFiltersQuery } from "@/src/store/services/platforms";
import { GroupsFilters, PropsGroupsFilters } from "@/src/components/entities/platforms/addPlatform/filtersForAddPlatform/GroupsFiltrs/GroupsFilters";
import { PropsPlatformCard } from "@/src/components/entities/platforms/types";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { getFilterFromBack, getLinkToPlatform, getLinkToSolution, linkToPlatform } from "@/src/store/reducers/addPlatform/slice";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { UploadImage } from "@/src/components/entities/platforms/addPlatform/UploadImage";

const ChangePlatform = () => {

    const { data: dataFilters, isLoading: isLoadingFilters } = useGetPlatformsFiltersQuery({});
    const [changePlatform, {isSuccess: isSuccessChange}] = useChangePlatformMutation();
    const dispatch = useAppDispatch();
    const filters = useAppSelector(state => state.reducerAddPlatform.filters);
    const link = useAppSelector(state => state.reducerAddPlatform.linkToPlatform);
    const links = useAppSelector(state => state.reducerAddPlatform.links_to_solution);
    const router = useRouter();
    const {changeId} = router.query;
    const {data} = useGetPlatformQuery(Number(changeId));
    const token = JSON.parse(Cookies.get("loginUser") || "[]"); 
    const [id, setId] = useState<number | undefined>(undefined);

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

    useEffect(() => {
        dispatch(getFilterFromBack(data?.tags));
        dispatch(getLinkToPlatform(data?.link));
        dispatch(getLinkToSolution(data?.links_to_solution));
    }, [data]);

    useEffect(() => {
        setId(data?.id);
    }, [data]);

    useEffect(() => {
        setPlatform((prev) => ({...prev,
            title: data?.title,
            short_description: data?.short_description,
            full_description: data?.full_description,
            price: data?.price,
            image: data?.image,
        }));
    }, [data]);

    useEffect(() => {
        setPlatform(prev => ({...prev,
            links_to_solution: links,
            turnkey_solutions: links?.length
        }));
    }, [links]);

    useEffect(() => {
        setPlatform(prev => ({...prev,
            link: link,
        }));
    }, [link]);

    useEffect(() => {
        setPlatform(prev => ({...prev,
            filter: filters?.map(item => item.id),
        }));
    }, [filters]);

    const [isModalClose, setIsModalClose] = useState<boolean>(false);
    const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
    const handleSuccessAddPlatform = () => {
        setIsSuccessModal(!isSuccessModal);
    };
    const handleClickClose = () => {
        setIsModalClose(!isModalClose);
    };
    
    
    useEffect(() => {
        if(isSuccessChange) {
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
                    value={link}
                    onChange={(e) => {
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
                                <button className={css.btnSaveModal} onClick={() => changePlatform({id, token, platform})}>
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
                    <button className={css.btnSave} onClick={() => changePlatform({id, token, platform})}>
                        <Text type="reg18" color="white">Сохранить</Text>
                    </button>
                </div>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default ChangePlatform;
