import { useEffect, useState, FC } from "react";
import { InputAddSolution } from "./InputAddSolution";
import { TextAreaAddSolution } from "./TextAreaAddPSolution";
import { UploadImage } from "./UploadImage";
import Text from "@/src/components/shared/text/Text";
import css from "./style.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { getCardsFromBack } from "@/src/store/reducers/addSolution/slice";
export interface PropsCards {
    results?: {
        title: string;
        text: string;
        img: any;
        id: number;
    }[];
}

export const CardsInput: FC<PropsCards> = ({ results = [] }) => {
    const dispatch = useAppDispatch();
    const cards = useAppSelector((state) => state.reducerAddSolution.cards);
    const [card, setCard] = useState<any[]>([]);

    useEffect(() => {
        dispatch(getCardsFromBack(card));
    }, [card]);

    const addInput = () => {
        setCard([...cards, ""]);
    };

    const removeInput = (index: number) => {
        const newCard = [...card];
        newCard.splice(index, 1);
        setCard(newCard);
    };

    return (
        <div>
            {cards?.map((item, index) => (
                <div key={index} className={css.card}>
                    <div className={css.top}>
                        <Text type="reg18" color="dark">
                            Название задачи
                        </Text>
                        <div className={css.btnclose}>
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
                            const newInputs = [...card];
                            newInputs[index] = e.target.value;
                            setCard(newInputs);
                        }}
                    />
                    <div className={css.img}>
                        <UploadImage
                            text={"Логотип"}
                            height={100}
                            width={100}
                            // onChange={}
                            image={item.img}
                            isImage={Boolean(item.img)}
                        />
                    </div>
                    <TextAreaAddSolution
                        value={item.text}
                        onChange={(e) => {
                            const newInputs = [...card];
                            newInputs[index] = e.target.value;
                            setCard(newInputs);
                        }}
                        label="Описание задачи"
                        placeholder="Текст (до 150 символов)"
                        className={css.textAreaSolution}
                    />
                </div>
            ))}
            <button className={css.addLinkPlatformBtn} onClick={addInput}>
                <Text type="reg14" color="blue">
                    + Добавить
                </Text>
            </button>
        </div>
    );
};
