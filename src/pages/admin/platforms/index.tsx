import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./platforms.module.css";
import InputSearch from "@/src/components/entities/platforms/rightBlock/InputSearch/InputSearch";
import Image from "next/image";
import { useRouter } from "next/router";

const PlatformsAdmin = () => {

    const router = useRouter();
    const handleRouter = () => {
        router.push("/admin/platforms/add-platform");
    };

    return(
        <WrapperAdminPage>
            <ContainerAdminFunction>
                <div className={css.links}>
                    <Link href={"/admin"}>
                        <Text type="reg16" color="telegray">Главная</Text>
                    </Link>
                    <span className={css.link}>/Платформы</span>
                    <span className={css.link}>/Работа с платформами</span>
                </div>

                <div className={css.workPlatform}>
                    <Text type="med20" color="dark">Работа с платформами</Text>
                    <button className={css.addPlatformBtn} onClick={handleRouter}>
                        <Text type="reg16" color="white">+ Создать платформу</Text>
                    </button>
                </div>
                <div className={css.groupSearch}>
                    <Image
                        src="/img/Icon_найти_платформу.svg"
                        alt="search"
                        width={24}
                        height={24}
                        className={css.search}
                    />
                    <InputSearch
                        placeholder=""
                        value=""
                        onChange={(e) => console.log(e.target.value)}
                    />
                </div>
                <div className={css.addPlatformImg} onClick={handleRouter}>
                    <Image src="/admin/platform_plus.svg" alt="icon" width={120} height={120}/>
                    <Text type="med18btn" color="dark">Платформ пока нет</Text>
                    <Text type="reg18" color="telegray" className={css.text}>Создайте новую платформу</Text>
                </div>
                
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default PlatformsAdmin;