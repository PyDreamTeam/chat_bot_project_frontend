import AccountPageHeader from "@/src/components/features/AccountPage/AccountPageHeader/AccountPageHeader";
import Text from "@/src/components/shared/text/Text";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import css from "./test.module.css";
import Link from "next/link";
import Title from "@/src/components/shared/text/Title";
import { InputAddPlatform } from "@/src/components/entities/platforms/addPlatform/InputAddPlatform";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";

import { useState, useRef } from "react";
import { useAddPlatformMutation, useProfileMutation, useQweQuery } from "@/src/store/services/platforms";
import Image from "next/image";

export const UploadFile = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const [platform, setPlatform] = useState<any>({
        // title: "Платформа 14",
        // short_description: "Краткое описание платформы 12",
        // full_description: "Полное описание платформы 12",
        // turnkey_solutions: 0,
        // price: 965,
        // image: null,
        // link: "google.com",
        // filter: [
        //     1, 6, 9, 15, 20, 23, 25, 36
        // ]
        first_name: "User or",
        last_name: "Admin",
        phone_number: "+375292812989",
        image: ""
    });
    const filePicker = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploaded, setUploaded] = useState();
    // const [addPlatform] = useAddPlatformMutation();
    const [profile] =useProfileMutation();
    const {data} = useQweQuery(token);
    console.log("data", data);

    const handleChange = (event: any) => {
        // setSelectedFile(event.target.files[0]);
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const imageString = e.target.result;
            const maxImageStringLength = 10000; // максимальная длина строки изображения
            const shortenedImageString = imageString.substring(0, maxImageStringLength);
            setPlatform({ ...platform, image: shortenedImageString });
        };
      
        reader.readAsDataURL(file);
    };

    const handleUpload = async () => {
        // if(!selectedFile) {
        //     alert("Please select a file");
        //     return;
        // }
        // const formData = new FormData();
        // formData.append("image", selectedFile);
        // console.log(formData);
        // setPlatform((prevState) => ({...prevState, image: formData.entries.name}));
    };
    console.log("haha", platform);

    const handlePick = () => {
        filePicker.current.click();
    };

    return(
        <>
            <button onClick={handlePick}>Pick file!</button>
            <input
                className={css.hidden}
                ref={filePicker}
                type="file"
                onChange={handleChange}
                accept="image/*,.png,.jpg,.gif,.svg,.web"
            />
            <button onClick={handleUpload}>Upload now</button>
            <button onClick={() => profile({platform, token})}>Create</button>
            {/* <Image src={data?.image} alt={"ava"} width={200} height={200}/> */}
            {platform.image && <Image src={platform.image} alt="Uploaded Image" width={200} height={200}/>}
        </>
    );
};

const AddPlatform = () => {

    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data } = useDataUserQuery(token);

    return(
        <ContainerAdminFunction>
            <AccountPageHeader name={`${data?.first_name} ${data?.last_name}`} page={"startPage"}/>
            <div>
                <Text type="reg14" color="telegray">
                    <Link href={"/home"} className={css.link}>
                                Главная
                    </Link>
                            /<span className={css.link}>Платформы</span>
                            /<span className={css.link}>Работа с платформами</span>
                            /<span className={css.link}>Создание платформы</span>
                </Text>
            </div>
            <Title type="h5" color="dark">Создание платформы</Title>
            <Text type="reg18" color="dark">Название платформы</Text>
            <InputAddPlatform placeholder="Текст"/>
            <Text type="reg18" color="dark">Логотип</Text>
            <UploadFile/>

        </ContainerAdminFunction>
    );
};

export default AddPlatform;