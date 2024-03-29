import { TariffPlanCard } from "@/src/types";
import { FC } from "react";
import Text from "@/src/components/shared/text/Text";
import { useRouter } from "next/navigation";
import Title from "@/src/components/shared/text/Title";
import Image from "next/image";
import CheckMark from "@/src/components/shared/checkMark/CheckMark";
import { Button } from "@/src/components/shared/buttons/Button";
import css from "./TariffCard.module.css";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import Modal from "@/src/components/shared/modal/Modal";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";
import { useModal } from "@/src/hooks/useModal";

export const TariffCard: FC<TariffPlanCard> = ({ title, price, advantages, hotPlan }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { isSuccess } = useDataUserQuery(token);
    const router = useRouter();
    const { isShown, toggle } = useModal();

    return (
        <div className={hotPlan ? `${css.hotPlan}` : `${css.container}`}>
            <div className={!hotPlan && css.blockTitle}>
                {!hotPlan ? (
                    <div className={css.title}>
                        <Text type="reg18" color="grey">
                            {title}
                        </Text>
                    </div>
                ) : (
                    <div className={css.hotTitle}>
                        <div className={css.title}>
                            <Text type="reg18" color="grey">
                                {title}
                            </Text>
                        </div>
                        <Image src={"/img/hotPlan.svg"} width={98} height={20} alt="hot plan" />
                    </div>
                )}
            </div>
            <div className={css.priceBlock}>
                <Title type="h4" color="black">
                    {`От ${price} ₽`}
                    <span className={css.price}>/месяц</span>
                </Title>
            </div>

            <ul className={css.advantageBlock}>
                {advantages.map((item, index) => (
                    <div key={index} className={css.advantage}>
                        <CheckMark />
                        <Text type="reg16" color="dark">
                            {item}
                        </Text>
                    </div>
                ))}
            </ul>
            {isSuccess ? (
                <Button active={true} type="submit" onClick={toggle}>
                    Выбрать план
                </Button>
            ) : (
                <Button active={true} type="submit" onClick={() => router.push("/sign-in")}>
                    Выбрать план
                </Button>
            )}
            <Modal isShown={isShown} hide={toggle}>
                <SelectionRequest close={toggle} dataComment={`Выбранный тариф: ${title}`} />
            </Modal>
        </div>
    );
};
