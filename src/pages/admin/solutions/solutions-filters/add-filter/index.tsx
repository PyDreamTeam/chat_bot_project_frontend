import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./addFilter.module.css";
import Image from "next/image";
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
import { SelectMessengers } from "@/src/components/entities/platformsFilters/addFilter/SelectMessengers";
import {
    useCreateSolutionFilterMutation,
    useGetSolutionFilterGroupsQuery,
    useGetSolutionsFiltersQuery,
    usePublicSolutionFilterGroupMutation,
    usePublicSolutionFilterMutation,
} from "@/src/store/services/solutions";
import { ButtonCancel } from "@/src/components/shared/buttons/ButtonCancel";
import ErrorMessage from "@/src/components/entities/tariffs/ErrorMessage/ErrorMessage";

export interface PropsPlatformFilter {
    title: string;
    functionality: string;
    integration: string;
    multiple: boolean;
    status: string;
    image: string;
    group: number | null;
    tags: (ITagM | undefined)[];
}

export interface ITagM {
    tag?: string | undefined;
    title?: string | undefined;
    id?: number | undefined;
    image: string | undefined;
    status: string | undefined;
    is_message: boolean | undefined;
    properties: string | undefined;
    filter_id?: number | undefined;
}

const AddSolutionFilter = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();

    const [addFilter, { data, isSuccess: isSuccessAddFilter, isLoading }] = useCreateSolutionFilterMutation();
    const [publicFilter, { data: dataPublic, isSuccess, error, isLoading: isLoadingPublic }] =
        usePublicSolutionFilterMutation();
    const [publicGroup, { isSuccess: publicGroupIsSuccess, isLoading: publicGroupIsLoading }] =
        usePublicSolutionFilterGroupMutation();

    const [isValid, setIsValid] = useState<boolean>(false);

    const [isShownErrorShort, setIsShownErrorShort] = useState(false);
    const [isShownErrorExist, setIsShownErrorExist] = useState(false);

    const { data: dataGroups } = useGetSolutionFilterGroupsQuery({});
    const { data: tagsData } = useGetSolutionsFiltersQuery({});

    const groupsArray = tagsData?.results.map((item: any) => item);

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
    const [tags, setTags] = useState<(ITagM | undefined)[] | undefined>([]);
    const [tagsMessengers, setTagsMessengers] = useState<(ITagM | undefined)[] | undefined>([]);

    const [inputsTags, setInputsTags] = useState<string[]>([""]);

    const addInput = () => {
        setInputsTags([...inputsTags, ""]);
    };

    const removeInput = (index: number) => {
        const newInputs = [...inputsTags];
        newInputs.splice(index, 1);
        setInputsTags(newInputs);
        const newTags = newInputs.map((tagName) => {
            return {
                properties: tagName,
                image: "None",
                status: "save",
                is_message: false,
            };
        });
        setTags(newTags);
    };

    const checkFilterName = (name: string) => {
        const group = groupsArray?.find((item: any) => item.group === selectedGroup);

        if (group?.filters.find((item: any) => item.filter === name.trim()) === undefined) {
            return true;
        } else {
            console.log("ERROR same filter name");
            return false;
        }
    };

    const isValidFilterName = (name: string): boolean => {
        if (name.trim().length === 1) {
            setIsShownErrorShort(true);
            return false;
        }
        if (!checkFilterName(name)) {
            setIsShownErrorExist(true);
            return false;
        }
        setIsShownErrorShort(false);
        setIsShownErrorExist(false);
        return true;
    };

    const isValidFilter = () => {
        const isUndefined = Object.values(filter).find((value) => value === "" || value === null);

        isValidFilterName(filter.title);

        if (typeof isUndefined == "undefined" && filter.tags.length !== 0 && isValidFilterName(filter.title)) {
            if (!isShownErrorShort && !isShownErrorExist) {
                setIsValid(true);
            } else {
                setIsValid(false);
            }
        } else {
            setIsValid(false);
        }
    };

    const handleSelectedGroupId = (groupId: number) => {
        setFilter((prev) => ({ ...prev, group: groupId }));
        isValidFilter();
    };
    const handleSetImageName = (imageName: string) => {
        setFilter((prev) => ({ ...prev, image: imageName }));
        isValidFilter();
    };

    const handleRadioMultiple = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "single") {
            setFilter((prev) => ({ ...prev, multiple: false }));
        } else {
            setFilter((prev) => ({ ...prev, multiple: true }));
        }
        isValidFilter();
    };

    const handleSetMessengers = (tagsM: (ITagM | undefined)[] | undefined) => {
        const newTagsMessengers: (ITagM | undefined)[] | undefined = tagsM?.map((item) => {
            return {
                properties: item?.properties,
                image: item?.image,
                status: "save",
                is_message: true,
            };
        });
        setTagsMessengers(newTagsMessengers);
        isValidFilter();
    };

    const handleSubmit = () => {
        addFilter({ filter, token });
    };

    const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
    const handleToggleSuccessModal = () => {
        setIsSuccessModal(!isSuccessModal);
    };

    useEffect(() => {
        if (isSuccessAddFilter) {
            setIsSuccessModal(true);
            setTimeout(() => {
                setIsSuccessModal(false);
                router.push("/admin/solutions/solutions-filters");
            }, 3000);
        }
    }, [isSuccessAddFilter]);

    useEffect(() => {
        const newTags = tags?.concat(tagsMessengers);
        if (newTags) {
            setFilter((prev) => ({ ...prev, tags: newTags }));
        }
    }, [tags, tagsMessengers]);

    useEffect(() => {
        isValidFilter();
    }, [filter]);

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction title="Добавить фильтр">
                <div className={css.links}>
                    <Link href={"/admin"}>
                        <Text type="reg16" color="telegray">
                            Главная
                        </Text>
                    </Link>
                    <Link href={"/admin/solutions"}>
                        <Text type="reg16" color="telegray">
                            /Решения
                        </Text>
                    </Link>
                    <Link href={"/admin/solutions/solutions-filters"}>
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
                            setFilter((prev) => ({ ...prev, title: e.target.value }));
                            if (!isValidFilterName(e.target.value)) {
                                setIsValid(false);
                            }
                        }}
                        placeholder="Текст"
                        className={css.inputAddFilter}
                    />
                    <div className={`${css.errorBlock} ${!isShownErrorShort ? css.errorBlockHide : null}`}>
                        <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                        <Text type="reg16" color="red">
                            Слишком короткое название
                        </Text>
                    </div>
                    <div className={`${css.errorBlock} ${!isShownErrorExist ? css.errorBlockHide : null}`}>
                        <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                        <Text type="reg16" color="red">
                            Такой фильтр уже есть
                        </Text>
                    </div>
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
                                                properties: tagName,
                                                image: "None",
                                                status: "save",
                                                is_message: false,
                                            };
                                        });
                                        setTags(newTags);
                                        setFilter((prev) => ({ ...prev, tags: newTags }));
                                        isValidFilter();
                                    }}
                                    placeholder="Параметр фильтра"
                                    className={css.inputAddFilter}
                                />
                            </div>
                        ))}
                        <ButtonSmallSecondary active={true} type={"button"} onClick={addInput}>
                            {plusSvgPrimary}
                            Добавить параметр фильтра
                        </ButtonSmallSecondary>
                    </div>

                    <SelectMessengers setMessengers={handleSetMessengers} />
                    <InputRadioFilterMultiple
                        className={css.multipleSelection}
                        label="Выбор параметров"
                        onChange={handleRadioMultiple}
                    />
                    <ErrorMessage isShown={isValid} className={css.errorMessage}>
                        Внесите изменения. Все поля должны быть заполнены
                    </ErrorMessage>
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
                                        onClick={handleToggleSuccessModal}
                                        style={{ cursor: "pointer" }}
                                    />
                                    <Image src={"/platforms/successModal.svg"} alt="icon" width={120} height={120} />
                                    <div className={css.textSuccess}>
                                        <Title type="h5" color="black">
                                            Фильтр создан!
                                        </Title>
                                        <Text type="reg16" color="grey">
                                            Вы можете сразу опубликовать его!
                                        </Text>
                                        <div className={css.buttonsModalContainer}>
                                            <ButtonCancel
                                                type={"button"}
                                                active={true}
                                                onClick={handleToggleSuccessModal}
                                                width={240}
                                            >
                                                Отмена
                                            </ButtonCancel>
                                            <Button
                                                type={"button"}
                                                active={true}
                                                onClick={() => {
                                                    const group = dataGroups?.results.find(
                                                        (item: any) => item.id == filter.group
                                                    );
                                                    if (group.status === "save") {
                                                        publicGroup({ id: filter.group, token });
                                                    }
                                                    publicFilter({ id: data.id, token })
                                                        .then(handleToggleSuccessModal)
                                                        .then(router.reload);
                                                }}
                                                width={240}
                                            >
                                                Опубликовать
                                            </Button>
                                        </div>
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

export default AddSolutionFilter;
