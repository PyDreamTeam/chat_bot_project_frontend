import { useEffect, useState } from "react";
import { InputAddSolution } from "./InputAddSolution";
import Text from "@/src/components/shared/text/Text";
import css from "./style.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { countLinkToPlatform } from "@/src/store/reducers/addSolution/slice";

export const MultipleInput = () => {
    const dispatch = useAppDispatch();
    const linksToPlatform = useAppSelector((state) => state.reducerAddSolution.links_to_platform);
    const [inputs, setInputs] = useState<string[]>([]);

    useEffect(() => {
        dispatch(countLinkToPlatform(inputs));
    }, [inputs]);

    const addInput = () => {
        setInputs([...linksToPlatform, ""]);
    };

    const removeInput = (index: number) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    return (
        <div>
            {linksToPlatform?.map((input, index) => (
                <div key={index}>
                    <div className={css.linksPlatform}>
                        <Text type="reg18" color="dark">
                            Ссылка
                        </Text>
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
                        value={input}
                        placeholder="www.example.com"
                        link={true}
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
                    + Добавить ссылку
                </Text>
            </button>
        </div>
    );
};
