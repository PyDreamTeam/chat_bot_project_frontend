import { FC, useEffect, useState } from "react";
import { InputAddSolution } from "./InputAddSolution";
import Text from "@/src/components/shared/text/Text";
import css from "./style.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { getAdvantages } from "@/src/store/reducers/addSolution/slice";
import { ButtonSmallSecondary } from "@/src/components/shared/buttons/ButtonSmallSecondary";
import { plusSvgPrimary } from "@/src/components/entities/platformsFilters/img/SvgConfig";

interface IThesesInputProps {
    theses?: string[];
}

export const ThesesInput: FC<IThesesInputProps> = ({ theses }) => {
    const dispatch = useAppDispatch();
    const advantages = useAppSelector((state) => state.reducerAddSolution.advantages);

    const [isActive, setIsActive] = useState(false);

    const [inputs, setInputs] = useState<string[]>([]);

    useEffect(() => {
        dispatch(getAdvantages(inputs));
    }, [inputs]);

    const addInput = () => {
        setInputs([...advantages, ""]);
    };

    const removeInput = (index: number) => {
        const newInputs = [...advantages];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    useEffect(() => {
        advantages?.length < 4 ? setIsActive(true) : setIsActive(false);
    }, [advantages]);

    return (
        <div className={css.advantagesWrapper}>
            <Text type="reg18" color="black">
                Основные тезисы (для страницы решения)
            </Text>
            {advantages?.map((advantage, index) => (
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
                        value={advantage}
                        placeholder="Текст"
                        link={false}
                        onChange={(e) => {
                            console.log(inputs);
                            const newInputs = [...advantages];
                            newInputs[index] = e.target.value;
                            setInputs(newInputs);
                        }}
                    />
                </div>
            ))}
            <ButtonSmallSecondary active={isActive} disabled={!isActive} type={"button"} onClick={addInput}>
                {plusSvgPrimary}
                Добавить тезис
            </ButtonSmallSecondary>
        </div>
    );
};
