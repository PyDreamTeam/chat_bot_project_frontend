import { FC, useEffect, useState } from "react";
import uuid from "uuid-random";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./editFilter.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import {
    useGetPlatformFilterGroupsQuery,
    useGetPlatformFilterQuery,
    useGetPlatformsFiltersQuery,
    usePutPlatformFilterMutation,
} from "@/src/store/services/platforms";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { Button } from "@/src/components/shared/buttons/Button";
import { ButtonSmallSecondary } from "@/src/components/shared/buttons/ButtonSmallSecondary";
import Title from "@/src/components/shared/text/Title";
import Cookies from "js-cookie";
import { DropDownSelectGroup } from "@/src/components/entities/platformsFilters/addFilter/DropDownSelectGroup";
import InputAddFilter from "@/src/components/entities/platformsFilters/addFilter/InputAddFilter";
import { ITagM, PropsPlatformFilter } from "../add-filter";
import { SelectGroupIcon } from "@/src/components/entities/platformsFilters/addFilter/SelectGroupIcon";
import { TextAreaAddFilter } from "@/src/components/entities/platformsFilters/addFilter/TextAreaAddFilter";
import { SelectMessengers } from "@/src/components/entities/platformsFilters/addFilter/SelectMessengers";
import { InputRadioFilterMultiple } from "@/src/components/entities/platformsFilters/addFilter/InputRadioFilterMultiple";
import { plusSvgPrimary } from "@/src/components/entities/platformsFilters/img/SvgConfig";
import { MultipleTagsInput } from "@/src/components/entities/platformsFilters/addFilter/MultipleTagsInput";

interface pageProps {
    params: { id: string };
}

const EditPlatformFilter: FC<pageProps> = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();
    const filterId: string = router.query.id as string;
    const id = filterId;
    const { data: filterData, isLoading: filterIsLoading } = useGetPlatformFilterQuery({ id });
    console.log(filterData);
    const [putFilter, { data, isSuccess: isSuccessAddFilter, isLoading }] = usePutPlatformFilterMutation();

    const { data: dataGroups } = useGetPlatformFilterGroupsQuery({});
    const filterGroup = dataGroups?.results?.find((item: any) => item.id == filterData?.group);

    const [selectedGroup, setSelectedGroup] = useState(filterGroup?.title);
    const { data: tagsData, isLoading: tagsIsLoading } = useGetPlatformsFiltersQuery({});

    const filterTagsArray: ITagM[] = tagsData?.results
        ?.find((item: any) => item.id === filterGroup?.id)
        ?.filters?.find((filter: any) => filter.id == id).tags;

    const cleanMessengersTags = filterTagsArray?.filter((item) => {
        return item.is_message === true;
    });

    const cleanTags = filterTagsArray?.filter((item) => {
        return item.is_message === false;
    });
    const cleanTagsNames = cleanTags?.map((item) => item.tag);

    const [tags, setTags] = useState<ITagM[]>(cleanTags);
    const [tagsMessengers, setTagsMessengers] = useState<ITagM[]>(cleanMessengersTags);

    const [filter, setFilter] = useState<PropsPlatformFilter>({
        title: filterData?.filter,
        functionality: filterData?.functionality,
        integration: filterData?.integration,
        multiple: filterData?.multiple,
        status: filterData?.status,
        image: filterData?.image,
        group: filterData?.group,
        tags: filterData?.tags,
    });
    // const [filter, setFilter] = useState<PropsPlatformFilter>(filterData);

    const [isValid, setIsValid] = useState<boolean>(false);

    const isValidFilter = () => {
        if (filter != undefined || filter != null) {
            const isUndefined = Object.values(filter).find((value) => value === "" || value === null);
            if (typeof isUndefined == "undefined") {
                setIsValid(true);
            } else setIsValid(false);
        }
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

    const handleSetMessengers = (tagsM: (ITagM | undefined)[] | undefined) => {
        if (tagsM != undefined) {
            const newTagsMessengers: ITagM[] = tagsM.map((item) => {
                return {
                    tag: item?.tag,
                    image_tag: item?.image_tag,
                    status: "save",
                    is_message: true,
                };
            });
            setTagsMessengers(newTagsMessengers);
        }
        isValidFilter();
    };

    const handleSetTextTags = (tagsT: ITagM[]) => {
        if (tagsT != undefined) {
            const newTagsT: ITagM[] = tagsT.map((item) => {
                return {
                    tag: item?.tag,
                    image_tag: item?.image_tag,
                    status: "save",
                    is_message: false,
                };
            });
            setTags(newTagsT);
        }
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

    const handleSubmit = () => {
        console.log(filter);
        putFilter({ filter, token, id });
    };

    // useEffect(() => {
    //     if (isSuccessAddFilter) {
    //         setIsSuccessModal(true);
    //         setTimeout(() => {
    //             setIsSuccessModal(false);
    //             router.reload();
    //         }, 3000);
    //     }
    // }, [isSuccessAddFilter]);

    useEffect(() => {
        if (tagsMessengers) {
            const newTags = tags?.concat(tagsMessengers);
            setFilter((prev) => ({ ...prev, tags: newTags }));
        }
    }, [tags, tagsMessengers]);

    // useEffect(() => {
    //     if (tagsMessengers) {
    //         const newTags = tags?.concat(tagsMessengers);
    //         setFilter((prev) => ({
    //             ...prev,
    //             title: filterData?.filter,
    //             short_description: filterData?.functionality,
    //             multiple: filterData?.multiple,
    //             status: filterData?.status,
    //             group: filterData?.group,
    //             tags: newTags,
    //         }));
    //     }
    // }, []);

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction title="Редактировать фильтр">
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
                    <span className={css.link}>/Редактировать фильтр</span>
                </div>
                <Text type="reg24" color="dark">
                    🔨 Страница редактирования фильтра находится в разработке! 🔧
                </Text>
                <div className={css.filterFormWrapper}>
                    {tagsIsLoading ? (
                        <div className={css.loaderOrders}>
                            <Loader isLoading={tagsIsLoading} />
                        </div>
                    ) : (
                        <div className={css.filterFormWrapper}>
                            <DropDownSelectGroup
                                dataGroups={dataGroups?.results}
                                selected={selectedGroup || filterGroup?.title}
                                setSelected={setSelectedGroup}
                                setSelectedId={handleSelectedGroupId}
                            />
                            <InputAddFilter
                                label="Название фильтра"
                                value={filterData?.filter}
                                onChange={(e) => {
                                    isValidFilter();
                                    setFilter((prev) => ({ ...prev, title: e.target.value }));
                                }}
                                placeholder="Текст"
                                className={css.inputAddFilter}
                            />
                            <SelectGroupIcon defaultImage={filterData?.image} setImageName={handleSetImageName} />
                            <TextAreaAddFilter
                                value={filterData?.functionality}
                                onChange={(e) => {
                                    isValidFilter();
                                    setFilter((prev) => ({ ...prev, functionality: e.target.value }));
                                }}
                                label="Краткое описание функционала фильтра"
                                placeholder="Текст (200 символов)"
                                className={css.textAreaPlatform}
                            />
                            <MultipleTagsInput defaultTags={filterData?.tags} setTextTags={handleSetTextTags} />
                            <SelectMessengers
                                defaultMessengers={cleanMessengersTags}
                                setMessengers={handleSetMessengers}
                            />
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
                                <Button
                                    disabled={!isValid}
                                    active={isValid}
                                    type={"button"}
                                    onClick={handleSubmit}
                                    width={257}
                                >
                                    Сохранить изменения
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default EditPlatformFilter;
