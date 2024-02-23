import { useEffect, useState, FC } from "react";
import { InputAddSolution } from "./InputAddSolution";
import Text from "@/src/components/shared/text/Text";
import css from "./style.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { getStepsFromBack } from "@/src/store/reducers/addSolution/slice";
import { TextAreaAddTask } from "./TextAreaAddTask";
import { ButtonSmallSecondary } from "@/src/components/shared/buttons/ButtonSmallSecondary";
import { plusSvgPrimary } from "@/src/components/entities/platformsFilters/img/SvgConfig";
export interface PropsCardsSteps {
    results?: ICard[];
}

interface ICard {
    title: string;
    text: string;
    media?: any;
    id?: number;
}

export const StepsInput: FC<PropsCardsSteps> = ({ results = [] }) => {
    const dispatch = useAppDispatch();
    const stepsStore = useAppSelector((state) => state.reducerAddSolution.steps);
    const [step, setStep] = useState<ICard[]>([]);

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        dispatch(getStepsFromBack(step));
    }, [step]);

    const addInput = () => {
        setStep([...stepsStore, { title: "", text: "", media: null }]);
    };

    const removeInput = (index: number) => {
        const newInputs = [...stepsStore];
        newInputs.splice(index, 1);
        setStep(newInputs);
    };

    useEffect(() => {
        stepsStore?.length < 15 ? setIsActive(true) : setIsActive(false);
    }, [stepsStore]);

    return (
        <div className={css.cardsWrapper}>
            {stepsStore?.map((item, index) => (
                <div className={css.card} key={index}>
                    <div className={css.top}>
                        <Text type="reg18" color="dark">
                            Название мероприятия
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
                            const newInputs = stepsStore.map((a) => ({ ...a }));
                            newInputs[index].title = e.target.value;
                            setStep(newInputs);
                        }}
                    />
                    <TextAreaAddTask
                        value={item.text}
                        onChange={(e) => {
                            const newInputs = stepsStore.map((a) => ({ ...a }));
                            newInputs[index].text = e.target.value;
                            setStep(newInputs);
                        }}
                        label="Описание мероприятия"
                        placeholder="Текст (до 150 символов)"
                        className={css.addTaskTextWrapper}
                    />
                </div>
            ))}
            <ButtonSmallSecondary active={isActive} disabled={!isActive} type={"button"} onClick={addInput}>
                {plusSvgPrimary}
                Добавить мероприятие
            </ButtonSmallSecondary>
        </div>
    );
};
