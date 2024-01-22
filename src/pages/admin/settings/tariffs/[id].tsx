import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import Image from "next/image";
import Link from "next/link";
import css from "./tariff.module.css";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { Button } from "@/src/components/shared/buttons/Button";
import Cookies from "js-cookie";
import InputAddFilter from "@/src/components/entities/platformsFilters/addFilter/InputAddFilter";
import { ITariff } from "@/src/types";

import { useGetTariffQuery, usePutTariffMutation } from "@/src/store/services/userAuth";

interface pageProps {
    params: { id: string };
}

const EditTariff: FC<pageProps> = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();
    const tariffId: string = router.query.id as string;
    const id = tariffId;

    const {
        data: tariffData,
        isLoading: tariffIsLoading,
        isSuccess: tariffIsSuccess,
        refetch,
    } = useGetTariffQuery({ id }, { refetchOnMountOrArgChange: true });

    console.log(tariffData);

    const [tariff, setTariff] = useState<ITariff>({
        title: tariffData?.title,
        price: tariffData?.price,
        tags_of_rates: tariffData?.tags_of_rates,
        is_special: tariffData?.is_special,
    });

    const [isValid, setIsValid] = useState<boolean>(false);

    const [putTariff, { isSuccess: isSuccessPutTariff, isLoading }] = usePutTariffMutation();

    const isValidTariff = () => {
        if (tariff != undefined || tariff != null) {
            const isUndefined = Object.values(tariff).find((value) => value === "" || value === null);
            if (typeof isUndefined == "undefined" && tariff.tags_of_rates.length !== 0) {
                setIsValid(true);
            } else setIsValid(false);
        }
    };

    const handleSubmit = () => {
        putTariff({ tariff, token, id }).then(refetch);
        // .then(() => router.push("/admin/solutions/solutions-tariffs/"));
    };

    const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
    const handleToggleSuccessModal = () => {
        setIsSuccessModal(!isSuccessModal);
    };

    useEffect(() => {
        if (isSuccessPutTariff) {
            setIsSuccessModal(true);
            setTimeout(() => {
                setIsSuccessModal(false);
                router.push("/admin/settings/tariffs/");
            }, 3000);
        }
    }, [isSuccessPutTariff]);

    useEffect(() => {
        if (tariffIsSuccess) {
            setTariff((prev) => ({
                ...prev,
                title: tariffData?.title,
                functionality: tariffData?.functionality,
                integration: tariffData?.integration,
                multiple: tariffData?.multiple,
                status: tariffData?.status,
                image: tariffData?.image,
                group: tariffData?.group,
                tags: tariffData?.tags,
            }));
        }
    }, [tariffIsSuccess]);

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction>
                <div className={css.links}>
                    <Link href={"/admin"}>
                        <Text type="reg16" color="telegray">
                            Главная
                        </Text>
                    </Link>
                    <Link href={"/admin/settings"}>
                        <Text type="reg16" color="telegray">
                            /Настройки
                        </Text>
                    </Link>
                    <Link href={"/admin/settings/tariffs"}>
                        <Text type="reg16" color="telegray">
                            /Тарифы
                        </Text>
                    </Link>
                    <span className={css.link}>/Редактирование тарифа</span>
                </div>
                <div className={css.workFilters}>
                    <Text type="med20" color="dark">
                        Редактирование тарифа
                    </Text>
                </div>
                <div className={css.Wrapper}>
                    <Text type="med20" color="red">
                        🛠️ Страница находится в разработке 🛠️
                    </Text>
                    {tariffIsLoading ? (
                        <div className={css.loaderOrders}>
                            <Loader isLoading={tariffIsLoading} />
                        </div>
                    ) : (
                        <div className={css.tariffFormWrapper}>
                            <InputAddFilter
                                label="Название тарифа"
                                value={tariffData?.title}
                                onChange={(e) => {
                                    isValidTariff();
                                    setTariff((prev) => ({ ...prev, title: e.target.value }));
                                }}
                                placeholder="Текст"
                                className={css.inputAddFilter}
                            />
                            <InputAddFilter
                                label="Стоимость тарифа"
                                value={tariffData?.price}
                                onChange={(e) => {
                                    isValidTariff();
                                    setTariff((prev) => ({ ...prev, price: e.target.value }));
                                }}
                                placeholder="Текст"
                                className={css.inputAddFilter}
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

export default EditTariff;
