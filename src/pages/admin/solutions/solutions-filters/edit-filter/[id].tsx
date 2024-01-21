import { FC, useEffect, useState } from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import Image from "next/image";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./editFilter.module.css";
import { useRouter } from "next/router";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { Button } from "@/src/components/shared/buttons/Button";
import Cookies from "js-cookie";
import { DropDownSelectGroup } from "@/src/components/entities/platformsFilters/addFilter/DropDownSelectGroup";
import InputAddFilter from "@/src/components/entities/platformsFilters/addFilter/InputAddFilter";
import { ITagM, PropsPlatformFilter } from "../add-filter";
import { SelectGroupIcon } from "@/src/components/entities/platformsFilters/addFilter/SelectGroupIcon";
import { TextAreaAddFilter } from "@/src/components/entities/platformsFilters/addFilter/TextAreaAddFilter";
import { SelectMessengers } from "@/src/components/entities/platformsFilters/addFilter/SelectMessengers";
import { InputRadioFilterMultiple } from "@/src/components/entities/platformsFilters/addFilter/InputRadioFilterMultiple";
import { MultipleTagsInput } from "@/src/components/entities/platformsFilters/addFilter/MultipleTagsInput";
import {
    useGetSolutionFilterGroupsQuery,
    useGetSolutionFilterQuery,
    usePutSolutionFilterMutation,
} from "@/src/store/services/solutions";

interface pageProps {
    params: { id: string };
}

const EditSolutionFilter: FC<pageProps> = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();
    const filterId: string = router.query.id as string;
    const id = filterId;

    const {
        data: filterData,
        isLoading: filterIsLoading,
        isSuccess: filterIsSuccess,
        refetch,
    } = useGetSolutionFilterQuery({ id }, { refetchOnMountOrArgChange: true });

    const [putFilter, { data, isSuccess: isSuccessPutFilter, isLoading }] = usePutSolutionFilterMutation();

    const { data: dataGroups } = useGetSolutionFilterGroupsQuery({});
    const filterGroup = dataGroups?.results?.find((item: any) => item.id == filterData?.group);

    const [selectedGroup, setSelectedGroup] = useState(filterGroup?.title);

    const cleanMessengersTags = filterData?.tags.filter((item: ITagM) => {
        return item.is_message === true;
    });

    const [filter, setFilter] = useState<PropsPlatformFilter>({
        title: filterData?.title,
        functionality: filterData?.functionality,
        integration: filterData?.integration,
        multiple: filterData?.multiple,
        status: filterData?.status,
        image: filterData?.image,
        group: filterData?.group,
        tags: filterData?.tags,
    });

    const [isValid, setIsValid] = useState<boolean>(false);

    const isValidFilter = () => {
        if (filter != undefined || filter != null) {
            const isUndefined = Object.values(filter).find((value) => value === "" || value === null);
            if (typeof isUndefined == "undefined" && filter.tags.length !== 0) {
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
    };

    const handleSetMessengers = (tagsM: (ITagM | undefined)[] | undefined) => {
        if (tagsM != undefined) {
            const newTags = filter.tags
                .filter((item: ITagM | undefined) => {
                    return item?.is_message === false;
                })
                .concat(tagsM);

            setFilter((prev) => ({ ...prev, tags: newTags }));
        }
        isValidFilter();
    };

    const handleSetTextTags = (tagsT: ITagM[]) => {
        if (tagsT != undefined) {
            const newTags = filter.tags
                .filter((item: ITagM | undefined) => {
                    return item?.is_message === true;
                })
                .concat(tagsT);

            setFilter((prev) => ({ ...prev, tags: newTags }));
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
        putFilter({ filter, token, id }).then(refetch);
        // .then(() => router.push("/admin/solutions/solutions-filters/"));
    };

    const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
    const handleToggleSuccessModal = () => {
        setIsSuccessModal(!isSuccessModal);
    };

    useEffect(() => {
        if (isSuccessPutFilter) {
            setIsSuccessModal(true);
            setTimeout(() => {
                setIsSuccessModal(false);
                router.push("/admin/solutions/solutions-filters/");
            }, 3000);
        }
    }, [isSuccessPutFilter]);

    useEffect(() => {
        if (filterIsSuccess) {
            setFilter((prev) => ({
                ...prev,
                title: filterData?.title,
                functionality: filterData?.functionality,
                integration: filterData?.integration,
                multiple: filterData?.multiple,
                status: filterData?.status,
                image: filterData?.image,
                group: filterData?.group,
                tags: filterData?.tags,
            }));
        }
    }, [filterIsSuccess]);

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction title="Редактировать фильтр">
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
                    <span className={css.link}>/Редактировать фильтр</span>
                </div>
                <div className={css.filterFormWrapper}>
                    {filterIsLoading ? (
                        <div className={css.loaderOrders}>
                            <Loader isLoading={filterIsLoading} />
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
                                value={filterData?.title}
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
                            <MultipleTagsInput filterData={filterData} setTextTags={handleSetTextTags} />
                            <SelectMessengers
                                defaultMessengers={cleanMessengersTags}
                                filterData={filterData}
                                setMessengers={handleSetMessengers}
                            />
                            <InputRadioFilterMultiple
                                defaultValue={filterData.multiple ? "multiple" : "single"}
                                className={css.multipleSelection}
                                label="Выбор параметров"
                                onChange={handleRadioMultiple}
                            />
                            <div className={css.buttonsContainer}>
                                <Link href={"/admin/solutions/solutions-filters"} className={css.buttonCancel}>
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
                                            <Image
                                                src={"/platforms/successModal.svg"}
                                                alt="icon"
                                                width={120}
                                                height={120}
                                            />
                                            <div className={css.textSuccess}>
                                                <Title type="h5" color="black">
                                                    Фильтр сохранен!
                                                </Title>
                                                <Text type="reg16" color="grey">
                                                    Все изменения фильтра сохранены!
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
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

export default EditSolutionFilter;
