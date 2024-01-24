import { FC, useEffect, useState } from "react";
import Text from "@/src/components/shared/text/Text";
import css from "./TariffTagsInput.module.css";
import Image from "next/image";
import InputAddFilter from "@/src/components/entities/platformsFilters/addFilter/InputAddFilter";
import { ButtonSmallSecondary } from "@/src/components/shared/buttons/ButtonSmallSecondary";
import { plusSvgPrimary } from "@/src/components/entities/platformsFilters/img/SvgConfig";

interface IMultipleTagsProps {
    tags: string[];
    setTextTags: (tagsT: string[]) => void;
}

export const TariffTagsInput: FC<IMultipleTagsProps> = ({ tags, setTextTags }) => {
    const [inputsTags, setInputsTags] = useState<string[]>(tags);
    const [isActive, setIsActive] = useState(false);

    const addInput = () => {
        if (inputsTags.length === 4) {
            setIsActive(false);
        }
        setInputsTags([...inputsTags, ""]);
    };

    const removeInput = (index: number) => {
        const newInputs = [...inputsTags];
        newInputs.splice(index, 1);
        setInputsTags(newInputs);
        setTextTags(newInputs);
        if (newInputs.length < 5) {
            setIsActive(true);
        }
    };

    useEffect(() => {
        if (tags.length < 5) {
            setIsActive(true);
        }
    }, []);

    return (
        <div className={css.tagsWrapper}>
            <Text type="reg18" color="black">
                Тэги тарифа
            </Text>
            <div className={css.filterParameters}>
                {inputsTags?.map((input, index) => (
                    <div key={index}>
                        <div className={css.tagTitle}>
                            <Image
                                src="/img/close.svg"
                                alt="icon"
                                width={24}
                                height={24}
                                onClick={() => removeInput(index)}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <div className={css.tagContainer}>
                            <InputAddFilter
                                value={input}
                                onChange={(e) => {
                                    e.preventDefault();
                                    const newInputs = [...inputsTags];
                                    newInputs[index] = e.target.value;
                                    setInputsTags(newInputs);
                                    setTextTags(newInputs);
                                }}
                                placeholder="Параметр фильтра"
                                className={css.width640}
                            />
                        </div>
                    </div>
                ))}
                <ButtonSmallSecondary active={isActive} disabled={!isActive} type={"button"} onClick={addInput}>
                    {plusSvgPrimary}
                    Добавить тэг
                </ButtonSmallSecondary>
            </div>
        </div>
    );
};
