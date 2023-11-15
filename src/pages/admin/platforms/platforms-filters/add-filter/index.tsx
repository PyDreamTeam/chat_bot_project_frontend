import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import Cookies from "js-cookie";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./addFilter.module.css";
import Image from "next/image";
import { useModal } from "@/src/hooks/useModal";
import { useAddPlatformFilterMutation, useGetPlatformFilterGroupsQuery } from "@/src/store/services/platforms";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { Button } from "@/src/components/shared/buttons/Button";
import { ButtonSmallSecondary } from "@/src/components/shared/buttons/ButtonSmallSecondary";
import InputAddFilter from "@/src/components/entities/platformsFilters/addFilter/InputAddFilter";
import { TextAreaAddFilter } from "@/src/components/entities/platformsFilters/addFilter/TextAreaAddFilter";
import { DropDownSelectGroup } from "@/src/components/entities/platformsFilters/addFilter/DropDownSelectGroup";
import { SelectGroupIcon } from "@/src/components/entities/platformsFilters/addFilter/SelectGroupIcon";
import { InputRadioFilterMultiple } from "@/src/components/entities/platformsFilters/addFilter/InputRadioFilterMultiple";
import { plusSvgPrimary, plusSvgSecondary } from "@/src/components/entities/platformsFilters/img/SvgConfig";
import { useRouter } from "next/router";
import OrderSavedPopup from "@/src/components/shared/popups/OrderSavedPopup";

interface PropsPlatformFilter {
    title: string;
    functionality: string;
    integration: string;
    multiple: boolean;
    status: string;
    image: string;
    group: number | null;
    tags: ITags;
}

interface ITagsEntry {
    tag: string;
    id?: number;
    image_tag?: string;
    status?: string;
    is_message?: boolean;
}

interface ITags {
    [index: number]: ITagsEntry;
}

const AddPlatformFilter = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();
    const { isShown, toggle } = useModal();
    const [addFilter, { data, isSuccess: isSuccessAddFilter, isLoading }] = useAddPlatformFilterMutation();

    const [isValid, setIsValid] = useState<boolean>(false);

    const { data: dataGroups } = useGetPlatformFilterGroupsQuery({});
    const [selectedGroup, setSelectedGroup] = useState("Выбрать группу");

    const [filter, setFilter] = useState<PropsPlatformFilter>({
        title: "",
        functionality: "",
        integration: "integration",
        multiple: true,
        status: "save",
        image: "",
        group: null,
        tags: [],
    });
    const [tags, setTags] = useState<ITags>();

    const [inputsTags, setInputsTags] = useState<string[]>([""]);

    const addInput = () => {
        setInputsTags([...inputsTags, ""]);
    };

    const removeInput = (index: number) => {
        const newInputs = [...inputsTags];
        newInputs.splice(index, 1);
        setInputsTags(newInputs);
    };

    const handleSelectedGroupId = (groupId: number) => {
        setFilter((prev) => ({ ...prev, group: groupId }));
        isValidFilter();
    };
    const handleSetImageName = (imageName: string) => {
        setFilter((prev) => ({ ...prev, image: imageName }));
        isValidFilter();
        console.log(filter);
    };

    const handleRadioMultiple = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "single") {
            setFilter((prev) => ({ ...prev, multiple: false }));
        } else {
            setFilter((prev) => ({ ...prev, multiple: true }));
        }
        isValidFilter();
    };

    const isValidFilter = () => {
        const isUndefined = Object.values(filter).find((value) => value === "" || value === null);

        if (typeof isUndefined == "undefined") {
            setIsValid(true);
        } else setIsValid(false);
    };

    const handleSubmit = () => {
        addFilter({ filter, token });
    };

    const [isModalClose, setIsModalClose] = useState<boolean>(false);
    const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
    const handleSuccessAddPlatform = () => {
        setIsSuccessModal(!isSuccessModal);
    };
    const handleClickClose = () => {
        setIsModalClose(!isModalClose);
    };

    useEffect(() => {
        if (isSuccessAddFilter) {
            setIsModalClose(false);
            setIsSuccessModal(true);
            // setPlatform((prev) => ({
            //     ...prev,
            //     title: "",
            //     short_description: "",
            //     full_description: "",
            //     turnkey_solutions: 0,
            //     price: "",
            //     image: "",
            //     link: "",
            //     links_to_solution: [],
            //     filter: [],
            // }));
            // dispatch(deleteAllFiltersFromPlatform());
            setTimeout(() => {
                setIsSuccessModal(false);
                router.reload();
            }, 3000);
        }
    }, [isSuccessAddFilter]);

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction title="Добавить фильтр">
                <div className={css.links}>
                    <Link href={"/admin"}>
                        <Text type="reg16" color="telegray">
                            Главная
                        </Text>
                    </Link>
                    <Link href={"/admin/platforms"}>
                        <Text type="reg16" color="telegray">
                            /Платформы
                        </Text>
                    </Link>
                    <Link href={"/admin/platforms/platforms-filters"}>
                        <Text type="reg16" color="telegray">
                            /Фильтры
                        </Text>
                    </Link>
                    <span className={css.link}>/Добавить фильтр</span>
                </div>
                <div className={css.filterFormWrapper}>
                    <DropDownSelectGroup
                        dataGroups={dataGroups?.results}
                        selected={selectedGroup}
                        setSelected={setSelectedGroup}
                        setSelectedId={handleSelectedGroupId}
                    />
                    <InputAddFilter
                        label="Название фильтра"
                        // value={platform.title}
                        onChange={(e) => {
                            isValidFilter();
                            setFilter((prev) => ({ ...prev, title: e.target.value }));
                        }}
                        placeholder="Текст"
                        className={css.inputAddFilter}
                    />
                    <SelectGroupIcon setImageName={handleSetImageName} />
                    <TextAreaAddFilter
                        // value={platform.short_description}
                        onChange={(e) => {
                            isValidFilter();
                            setFilter((prev) => ({ ...prev, functionality: e.target.value }));
                        }}
                        label="Краткое описание функционала фильтра"
                        placeholder="Текст (200 символов)"
                        className={css.textAreaPlatform}
                    />
                    <div className={css.filterParameters}>
                        <Text type="med20" color="black">
                            Параметры фильтра
                        </Text>
                        {inputsTags?.map((input, index) => (
                            <div key={index}>
                                <div className={css.tagTitle}>
                                    <Text type="reg18" color="dark">
                                        Параметр фильтра
                                    </Text>
                                    <Image
                                        src="/img/close.svg"
                                        alt="icon"
                                        width={24}
                                        height={24}
                                        onClick={() => removeInput(index)}
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                                <InputAddFilter
                                    // value={platform.title}
                                    onChange={(e) => {
                                        const newInputs = [...inputsTags];
                                        newInputs[index] = e.target.value;
                                        setInputsTags(newInputs);
                                        const newTags = newInputs.map((tagName) => {
                                            return {
                                                tag: tagName,
                                                // image_tag: "None",
                                                // status: "save",
                                                // is_message: false,
                                            };
                                        });
                                        setFilter((prev) => ({ ...prev, tags: newTags }));
                                    }}
                                    placeholder="Параметр фильтра"
                                    className={css.inputAddFilter}
                                />
                            </div>
                        ))}
                        <ButtonSmallSecondary active={true} type={"button"} onClick={addInput}>
                            {plusSvgPrimary}
                            Добавить фильтр
                        </ButtonSmallSecondary>
                    </div>
                    <InputRadioFilterMultiple
                        className={css.multipleSelection}
                        label="Выбор параметров"
                        onChange={handleRadioMultiple}
                    />
                    <div className={css.buttonsContainer}>
                        <Link href={"/admin/platforms/platforms-filters"} className={css.buttonCancel}>
                            <Text type="reg18" color="grey">
                                Отмена
                            </Text>
                        </Link>
                        <Button disabled={!isValid} active={isValid} type={"button"} onClick={handleSubmit} width={257}>
                            Создать
                        </Button>
                    </div>
                    {/* TODO: */}
                    {isSuccessModal && (
                        <div className={css.backdrop}>
                            <div className={css.modal}>
                                <div className={css.modalContent}>
                                    <Image
                                        src="/sign/close.svg"
                                        alt="icon"
                                        width={34}
                                        height={34}
                                        className={css.imgCloseModal}
                                        onClick={handleSuccessAddPlatform}
                                        style={{ cursor: "pointer" }}
                                    />
                                    <Image src={"/platforms/successModal.svg"} alt="icon" width={120} height={120} />
                                    <div className={css.textSuccess}>
                                        <Title type="h5" color="black">
                                            Фильтр сохранен!
                                        </Title>
                                        <Text type="reg16" color="grey">
                                            Наши специалисты свяжутся с вами в течение суток
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isLoading && (
                        <div className={css.modal}>
                            <Loader isLoading={isLoading} />
                        </div>
                    )}
                </div>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default AddPlatformFilter;
