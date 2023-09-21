import { ChangeEvent, FC, useState, KeyboardEvent } from "react";
import css from "./style.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";

interface PropsInputAddPlatform {
    className?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    label?: string
    value?: string | number
    style?: string
    disabled?: boolean
    link?: boolean
    countSolutions?: boolean
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const InputAddPlatform: FC<PropsInputAddPlatform> = ({onChange, className, placeholder, label, value, style, disabled, link, countSolutions, onKeyPress}) => {

    const [isActiveInfo, setIsActiveInfo] = useState<boolean>(false);
    const handleClick = () => {
        setIsActiveInfo(!isActiveInfo);
    };

    return(
        <div className={className}>
            
            {!countSolutions ?
                <Text type="reg18" color="dark">{label}</Text> :
                <div className={css.countSolutions}>
                    <Text type="reg18" color="dark">{label}</Text>
                    {isActiveInfo ? 
                <div>
                    <Image src={"/platforms/clarity_help-lineActive.svg"} alt={"icon"} width={26} height={26} style={{cursor: "pointer"}} onClick={handleClick}/>
                    {isActiveInfo && <Text type="reg14" color="dark" className={css.infoSolution}>Количество решений обновляется автоматически</Text>}
                </div> :
                    <Image src={"/platforms/clarity_help-line.svg"} alt={"icon"} width={24} height={24} style={{cursor: "pointer"}} onClick={handleClick}/>
                    }
                </div>
            }
            {!link ? 
            <input 
                className={`${css.inputAddPlatform} ${style}`} 
                onChange={onChange} 
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onKeyPress={onKeyPress}
            /> : 
            <div className={css.blockInput}>
                <input className={css.input1}
                    value={"https://"}
                    disabled={true}
                />
                <input 
                    className={css.input2}
                    onChange={onChange} 
                    placeholder={placeholder}
                    value={value}
                />
            </div>
            }
        </div>
    );
};
    