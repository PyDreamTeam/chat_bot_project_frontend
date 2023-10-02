import { FC, useState, useEffect } from "react";
import css from "./platform.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import Cookies from "js-cookie";
import { useDeletePlatformMutation } from "@/src/store/services/platforms";
import { useRouter } from "next/router";
import Title from "@/src/components/shared/text/Title";

interface PropsPlatform {
    id?: number 
    title?: string
    link?: string
    tags?: {
        tag?: string
    }[]
}

const functionPlatform = [
    {title: "Быстрый просмотр", value: "read"},
    {title: "Редактировать", value: "edit"},
    {title: "Удалить", value: "delete"},
];

export const Platform: FC<PropsPlatform> = ({title, link, tags=[], id}) => {

    const [deletePlatform, {isSuccess}] = useDeletePlatformMutation();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();

    const [stateIcon, setStateIcon] = useState<string>("workPlatform");
    const [isModalDelete, setIsModalDelete] = useState(false);
    const [isSuccessModal, setIsSuccessModal] = useState(false);

    useEffect(() => {
        if(isSuccess) {
            setIsSuccessModal(true);
            setIsModalDelete(false);
            setTimeout(() => {
                setIsSuccessModal(false);
                router.reload();
            }, 3000);
        }
    }, [isSuccess]);

    const handleMouseEnter = () => {
        if(stateIcon === "workPlatform") {
            setStateIcon("workPlatformHover");
        }
    };
    
    const handleMouseLeave = () => {
        if(stateIcon === "workPlatformHover") {
            setStateIcon("workPlatform");
        }
    };

    const handleClickIcon = () => {
        if(stateIcon === "workPlatformHover" || stateIcon === "workPlatform") {
            setStateIcon("workPlatformActive");
        }
        if(stateIcon === "workPlatformActive") {
            setStateIcon("workPlatform");
        }
    };

    const handleFunctionsPlatforms = (value: string, id?: number) => {
        if(value === "delete") {
            setIsModalDelete(true);
        }
        if(value === "edit") {
            router.push(`/admin/platforms/change-platform/${id}`);
        }
        if(value === "read") {
            router.push(`/platforms/platform/${id}`);
        }
    };

    return(
        <div className={css.container}>
            <div className={css.platformTitle}>
                <Text type="reg16" color="grey">
                    {title}
                </Text>
            </div>
            <div className={css.platformStatus}>
                <Text type="reg16" color="grey">
                    {link}
                </Text>
            </div>
            <div className={css.platformKeyWords}>
                <Text type="reg16" color="grey">
                    {tags.map((item) => item.tag + ", ")}
                </Text>
            </div>
            <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClickIcon}
                className={css.workPlatform}
            >
                <Image src={`/platforms/${stateIcon}.svg`} alt="icon" width={24} height={24}/>
                {stateIcon === "workPlatformActive" && 
                    <ul className={css.listFunctions}>
                        {functionPlatform.map(({title, value}) => (
                            <li key={title} className={css.function} onClick={() => handleFunctionsPlatforms(value, id)}>
                                <Text type="reg14" color="dark" className={css.titleText}>
                                    {title}
                                </Text>
                            </li>
                        ))}
                    </ul>}
                
            </div>
            {isModalDelete && 
                    <div className={css.modal}>
                        <div className={css.modalContent}>
                            <Image src="/img/close.svg" alt="icon" width={24} height={24} className={css.imgCloseModal} onClick={() => setIsModalDelete(false)}/>
                            <Image src={"/platforms/deletePlatformIcon.svg"} alt="icon" width={56} height={56}/>
                            <Title type="h5" color="dark" className={css.titleModalClose}>Удалить платформу</Title>
                            <Text type="reg18" color="telegray" className={css.subTitleModalClose}>Вы действительно хотите удалить платформу {title}?</Text>
                            <div className={css.groupBtnModalClose}>
                                <button className={css.btnCloseModal} onClick={() => setIsModalDelete(false)}>
                                    <Text type="reg18" color="blue">Отмена</Text>
                                </button>
                                <button className={css.btnSaveModal} onClick={() => deletePlatform({id, token})}>
                                    <Text type="reg18" color="white">Удалить</Text>
                                </button>
                            </div>
                        </div>
                    </div>
            }
            {
                isSuccessModal && 
                    <div className={css.modal}>
                        <div className={css.modalContent}>
                            <Image src="/img/close.svg" alt="icon" width={24} height={24} className={css.imgCloseModal} onClick={() => router.reload()}/>
                            <Image src={"/platforms/successModal.svg"} alt="icon" width={120} height={120}/>
                            <Title type="h5" color="dark" className={css.titleModalClose}>Платформа успешно удалена!</Title>
                        </div>
                    </div>
            }
        </div>
    );
};