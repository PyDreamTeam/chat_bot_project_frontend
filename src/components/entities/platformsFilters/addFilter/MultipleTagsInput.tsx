import { FC, useEffect, useState } from "react";
import Text from "@/src/components/shared/text/Text";
import css from "./style.module.css";
import Image from "next/image";
import InputAddFilter from "@/src/components/entities/platformsFilters/addFilter/InputAddFilter";
import { ITagM } from "@/src/pages/admin/platforms/platforms-filters/add-filter";
import { ButtonSmallSecondary } from "@/src/components/shared/buttons/ButtonSmallSecondary";
import { plusSvgPrimary } from "@/src/components/entities/platformsFilters/img/SvgConfig";

interface IMultipleTagsProps {
    defaultTags: ITagM[];
    setTextTags: (tagsT: ITagM[]) => void;
}

export const MultipleTagsInput: FC<IMultipleTagsProps> = ({ defaultTags, setTextTags }) => {
    const textTags = defaultTags?.filter((item) => item.is_message === false);
    const [inputsTags, setInputsTags] = useState<ITagM[]>(textTags);

    const addInput = () => {
        setInputsTags([
            ...inputsTags,
            {
                properties: "",
                image: "",
                status: "",
                is_message: false,
            },
        ]);
    };

    const removeInput = (index: number) => {
        const newInputs = [...inputsTags];
        newInputs.splice(index, 1);
        setInputsTags(newInputs);
        const newTags = newInputs.map((tagName) => {
            return {
                properties: tagName.properties,
                image: "None",
                status: "save",
                is_message: false,
            };
        });
        setTextTags(newTags);
    };

    return (
        <div className={css.filterParameters}>
            <Text type="med20" color="black">
                Параметры фильтра
            </Text>
            {inputsTags?.map((input, index) => (
                <div key={index}>
                    <div className={css.tagTitle}>
                        <Text type="reg18" color="dark">
                            Параметр фильтра
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
                    <InputAddFilter
                        value={input.properties}
                        onChange={(e) => {
                            e.preventDefault();
                            const newInputs = [...inputsTags];
                            newInputs[index].properties = e.target.value;
                            setInputsTags(newInputs);
                            const newTags = newInputs.map((tagName) => {
                                return {
                                    properties: tagName.properties,
                                    image: "None",
                                    status: "save",
                                    is_message: false,
                                };
                            });
                            setTextTags(newTags);
                        }}
                        placeholder="Параметр фильтра"
                        className={css.width640}
                    />
                </div>
            ))}
            <ButtonSmallSecondary active={true} type={"button"} onClick={addInput}>
                {plusSvgPrimary}
                Добавить фильтр
            </ButtonSmallSecondary>
        </div>
    );
};
