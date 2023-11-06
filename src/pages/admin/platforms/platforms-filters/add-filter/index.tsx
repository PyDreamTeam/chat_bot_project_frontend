import React, { useState } from "react";
import Cookies from "js-cookie";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./addFilter.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAddPlatformFilterMutation } from "@/src/store/services/platforms";
import { PlatformsList } from "@/src/components/entities/platforms/addPlatform/allPlatformsAdmins/PlatformsList/PlatformsList";
import { Platforms } from "@/src/components/entities/platforms/addPlatform/allPlatformsAdmins/Platforms/Platforms";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import { InfiniteScroll } from "@/src/components/entities/platforms/rightBlock/InfiniteScroll/InfiniteScroll";
import { Platform } from "@/src/components/entities/platforms/addPlatform/allPlatformsAdmins/Platform/Platform";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { Button } from "@/src/components/shared/buttons/Button";
import { ButtonSmallPrimary } from "@/src/components/shared/buttons/ButtonSmallPrimary";
import { ButtonSmallSecondary } from "@/src/components/shared/buttons/ButtonSmallSecondary";
import Title from "@/src/components/shared/text/Title";
import InputAddFilter from "@/src/components/entities/platformsFilters/addFilter/InputAddFilter";

interface PropsPlatformFilter {
    title: string;
    functionality: string;
    integration: string;
    multiple: boolean;
    status: string;
    image: string;
    group: number;
}

const AddPlatformFilter = () => {
    const router = useRouter();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const [addFilter, { data, isSuccess: isSuccessAddFilter, isLoading }] = useAddPlatformFilterMutation();
    const [filter, setFilter] = useState<PropsPlatformFilter>({
        title: "",
        functionality: "",
        integration: "",
        multiple: true,
        status: "save",
        image: "",
        group: 0,
    });

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
                <Text type="reg24" color="dark">
                    🔨 Страница находится в разработке! 🔧
                </Text>
                <InputAddFilter
                    label="Название платформы"
                    // value={platform.title}
                    onChange={(e) => setFilter((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Текст"
                    className={css.titlePlatform}
                    style={css.size640}
                />
                <div className={css.filterFormWrapper}>
                    <div className={css.buttonsContainer}>
                        <Link href={"/my-account/orders"} className={css.buttonCancel}>
                            <Text type="reg18" color="grey">
                                Отмена
                            </Text>
                        </Link>
                        <Button
                            // disabled={isSubmitting || !dirty || !isValid}
                            // active={isValid && dirty}
                            type={"submit"}
                            // onClick={handleSubmit}
                            width={257}
                        >
                            Создать
                        </Button>
                    </div>
                </div>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default AddPlatformFilter;
