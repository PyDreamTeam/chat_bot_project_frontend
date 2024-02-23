import { useEffect, useState, FC } from "react";
import { InputAddSolution } from "./InputAddSolution";
import { UploadImage } from "./UploadImage";
import Text from "@/src/components/shared/text/Text";
import css from "./style.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { getCardsFromBack } from "@/src/store/reducers/addSolution/slice";
import { TextAreaAddTask } from "./TextAreaAddTask";
import { ButtonSmallSecondary } from "@/src/components/shared/buttons/ButtonSmallSecondary";
import { plusSvgPrimary } from "@/src/components/entities/platformsFilters/img/SvgConfig";
export interface PropsCards {
    results?: ICard[];
}

interface ICard {
    title: string;
    text: string;
    img: string;
    id?: number;
}

export const CardsInput: FC<PropsCards> = ({ results = [] }) => {
    const dispatch = useAppDispatch();
    const cardsStore = useAppSelector((state) => state.reducerAddSolution.cards);
    const [cards, setCards] = useState<ICard[]>([]);

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        dispatch(getCardsFromBack(cards));
    }, [cards]);

    const addInput = () => {
        setCards([...cardsStore, { title: "", text: "", img: "" }]);
    };

    const removeInput = (index: number) => {
        const newCards = [...cardsStore];
        newCards.splice(index, 1);
        setCards(newCards);
    };

    useEffect(() => {
        cardsStore?.length < 6 ? setIsActive(true) : setIsActive(false);
    }, [cardsStore]);

    return (
        <div className={css.cardsWrapper}>
            {cardsStore?.map((item, index) => (
                <div key={index} className={css.card}>
                    <div className={css.top}>
                        <Text type="reg18" color="dark">
                            Название задачи
                        </Text>
                        <div className={css.btnClose}>
                            <Image
                                src="/img/close.svg"
                                alt="icon"
                                width={24}
                                height={24}
                                onClick={() => removeInput(index)}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>
                    <InputAddSolution
                        value={item.title}
                        placeholder="Текст"
                        link={false}
                        onChange={(e) => {
                            const newInputs = cardsStore.map((a) => ({ ...a }));
                            newInputs[index].title = e.target.value;
                            setCards(newInputs);
                        }}
                    />
                    <div className={css.img}>
                        <UploadImage
                            text={"Логотип"}
                            height={48}
                            width={48}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        const newInputs = cardsStore.map((a) => ({ ...a }));
                                        newInputs[index].img = reader.result as string;
                                        setCards(newInputs);
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                            image={item.img}
                            isImage={Boolean(item.img)}
                        />
                    </div>
                    <TextAreaAddTask
                        value={item.text}
                        onChange={(e) => {
                            const newInputs = cardsStore.map((a) => ({ ...a }));
                            newInputs[index].text = e.target.value;
                            setCards(newInputs);
                        }}
                        label="Описание задачи"
                        placeholder="Текст (до 150 символов)"
                        className={css.addTaskTextWrapper}
                    />
                </div>
            ))}
            <ButtonSmallSecondary active={isActive} disabled={!isActive} type={"button"} onClick={addInput}>
                {plusSvgPrimary}
                Добавить задачу
            </ButtonSmallSecondary>
        </div>
    );
};
