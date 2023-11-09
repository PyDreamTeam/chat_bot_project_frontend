import { FC, useState } from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./editFilter.module.css";
import InputSearch from "@/src/components/entities/platforms/rightBlock/InputSearch/InputSearch";
import Image from "next/image";
import { useRouter } from "next/router";
import { useGetListPlatformsQuery, useGetPlatformQuery, useGetPlatformsQuery } from "@/src/store/services/platforms";
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
import Cookies from "js-cookie";

interface pageProps {
    params: { id: string };
}

const EditPlatformFilter: FC<pageProps> = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();
    const filterId: string = router.query.id as string;
    const id = filterId;

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
                            Cохранить
                        </Button>
                    </div>
                </div>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default EditPlatformFilter;
