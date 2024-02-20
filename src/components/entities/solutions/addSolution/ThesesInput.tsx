import { useEffect, useState } from "react";
import { InputAddSolution } from "./InputAddSolution";
import Text from "@/src/components/shared/text/Text";
import css from "./style.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { getAdvantages } from "@/src/store/reducers/addSolution/slice";

export const ThesesInput = () => {
    const dispatch = useAppDispatch();
    const advantages = useAppSelector((state) => state.reducerAddSolution.advantages);
    const [inputs, setInputs] = useState<string[]>([]);

    useEffect(() => {
        dispatch(getAdvantages(inputs));
    }, [inputs]);

    const addInput = () => {
        setInputs([...advantages, ""]);
    };

    const removeInput = (index: number) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    return (
        <div className={css.advantagesWrapper}>
            <Text type="reg18" color="black">
                Основные тезисы
            </Text>
            {advantages?.map((dignity, index) => (
                <div key={index} className={css.dignity}>
                    <div className={css.dignityTitle}>
                        <Image
                            src="/img/close.svg"
                            alt="icon"
                            width={24}
                            height={24}
                            onClick={() => removeInput(index)}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                    <InputAddSolution
                        value={dignity}
                        placeholder="Текст"
                        link={false}
                        onChange={(e) => {
                            const newInputs = [...inputs];
                            newInputs[index] = e.target.value;
                            setInputs(newInputs);
                        }}
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
