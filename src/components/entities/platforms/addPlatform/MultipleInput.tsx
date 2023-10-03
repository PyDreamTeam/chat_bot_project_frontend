import { useEffect, useState } from "react";
import { InputAddPlatform } from "./InputAddPlatform";
import Text from "@/src/components/shared/text/Text";
import css from "./style.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { countLinkToSolution } from "@/src/store/reducers/addPlatform/slice";

export const MultipleInput = () => {

    const dispatch = useAppDispatch();
    const linksToSolution = useAppSelector(state => state.reducerAddPlatform.links_to_solution);
    const [inputs, setInputs] = useState<string[]>([]);

    useEffect(() => {
        dispatch(countLinkToSolution(inputs));
    }, [inputs]);

    const addInput = () => {
        setInputs([...linksToSolution, ""]);
    };

    const removeInput = (index: number) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    return (
        <div>
            {linksToSolution?.map((input, index) => (
                <div key={index}>
                    <div className={css.linksSolution}>
                        <Text type="reg18" color="dark">Ссылка</Text>
                        <Image src="/img/close.svg" alt="icon" width={24} height={24} onClick={() => removeInput(index)} style={{cursor: "pointer"}}/>
                    </div>
                    <InputAddPlatform
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
            <button className={css.addLinkSolutionBtn} onClick={addInput}>
                <Text type="reg14" color="blue">+ Добавить ссылку</Text>
            </button>
        </div>
    );
};