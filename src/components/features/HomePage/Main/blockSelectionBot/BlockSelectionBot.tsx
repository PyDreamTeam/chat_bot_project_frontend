import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import css from "./BlockSelectionBot.module.css";
import { Button } from "@/src/components/shared/buttons/Button";
import { Modal } from "@/src/components/shared/modal/Modal";
import { useModal } from "@/src/hooks/useModal";
import Image from "next/image";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";
import ElemChooseChatBot, { ElemVariantProps } from "@/src/components/shared/elemChooseChatBot/ElemChooseChatBot";
import { useRouter } from "next/router";

interface IUserRequest {
    htmlFor: string;
    label: string;
    type: string;
    name: "first_name" | "email" | "tel" | "comment";
    placeholder: string;
}

export const BlockSelectionBot = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/solutions-filter");
    };

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <div className={css.blockLeft}>
                    <div className={css.textInfo}>
                        <ElemChooseChatBot variant={ElemVariantProps.home} text={"конструктор чат-ботов"} />
                        <Title type="h1" color="black">
                            Автоматизируйте бизнес и получайте больше продаж
                        </Title>

                        <Text type="reg24" color="grey">
                            Используйте проверенные шаблоны чат-ботов в мессенджерах. Это самый простой и эффективный
                            способ получить нужные вам результаты в короткий срок
                        </Text>
                    </div>

                    <div className={css.button}>
                        <Button active={true} width={250} type="button" onClick={handleClick}>
                            Подобрать решение
                        </Button>
                    </div>
                </div>

                <div className={css.blockRight}>
                    <Image src="/img/blockSelectionBot.png" alt="selectionBot" width={517} height={516} />
                    <div className={`${css.message} ${css.one}`}>
                        <Text type="reg14" color="dark">
                            Здравствуйте, хочу купить новые кроссовки
                        </Text>
                    </div>
                    <div className={`${css.message} ${css.two}`}>
                        <Text type="reg14" color="dark">
                            У вас есть 37 размер?
                        </Text>
                    </div>
                    <div className={`${css.message} ${css.three}`}>
                        <Text type="reg14" color="dark">
                            Секунду, сейчас проверю. У нас было поступление товара сегодня
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
};
