import { useEffect, useState, FC } from "react";
import { InputAddSolution } from "./InputAddSolution";
import { TextAreaAddSolution } from "./TextAreaAddPSolution";
import { UploadImage } from "./UploadImage";
import Text from "@/src/components/shared/text/Text";
import css from "./style.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { getStepsFromBack } from "@/src/store/reducers/addSolution/slice";
import { TextAreaAddTask } from "./TextAreaAddTask";
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
    const steps = useAppSelector((state) => state.reducerAddSolution.steps);
    const [step, setStep] = useState<ICard[]>([]);

    useEffect(() => {
        dispatch(getStepsFromBack(step));
    }, [step]);

    const addInput = () => {
        setStep([...steps, { title: "", text: "", media: null }]);
    };

    // const addImg = () => {
    //     <></>;
    // };

    const removeInput = (index: number) => {
        const newInputs = [...step];
        newInputs.splice(index, 1);
        setStep(newInputs);
    };

    // если поменять на results карточки подтягиватся но не меняются

    return (
        <div>
            {steps?.map((item, index) => (
                <div className={css.card} key={index}>
                    <div className={css.top}>
                        <Text type="reg18" color="dark">
                            Название мероприятия
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
                            const newInputs = step.map((a) => ({ ...a }));
                            newInputs[index].title = e.target.value;
                            setStep(newInputs);
                        }}
                    />
                    {/* <div className={css.imagesWrapper}>
                        <Text type="reg18" color="dark" className={css.logoText}>
                            Картинка или видео
                        </Text>
                        <div></div>
                        <div className={css.images}>
                            <UploadImage
                                height={250}
                                width={250}
                                // onChange={}
                                image={item.img}
                                isImage={Boolean(item.img)}
                            />
                        </div>
                        <button className={css.addLinkPlatformBtn} onClick={addImg}>
                            <Text type="reg14" color="blue">
                                + Добавить
                            </Text>
                        </button>
                    </div> */}
                    <TextAreaAddTask
                        value={item.text}
                        onChange={(e) => {
                            const newInputs = step.map((a) => ({ ...a }));
                            newInputs[index].text = e.target.value;
                            setStep(newInputs);
                        }}
                        label="Описание мероприятия"
                        placeholder="Текст (до 150 символов)"
                        className={css.addTaskTextWrapper}
                    />
                </div>
            ))}
            <button className={css.addLinkPlatformBtn} onClick={addInput}>
                <Text type="reg14" color="blue">
                    + Добавить мероприятие
                </Text>
            </button>
        </div>
    );
};
