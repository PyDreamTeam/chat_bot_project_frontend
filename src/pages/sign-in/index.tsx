import ComponentSignIn from "./componentSignIn/ComponentSignIn";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import css from "./componentSignIn/componentSignIn.module.css";
import AuthWrapper from "@/src/components/wrappers/AuthWrapper";
import IconsAuthBar from "@/src/components/entities/iconbars/IconsAuthBar";
import { svgArray } from "@/src/components/entities/iconbars/img/svgConfig";

function SignIn() {
    return (
        <div className={css.container}>
            <AuthWrapper titleText={"Вход"}>
                <div className={css.wrapper}>
                    <div className={css.account}>
                        <Text type="reg16" color="grey">
                            Ещё нет аккаунта?
                            <Link href={"/sign-up"} className={css.link}>
                                {" "}
                                Регистрация
                            </Link>
                        </Text>
                        <div className={css.centerText}>
                            <Text type={"reg18"} color={"black"}>
                                Войдите через соцсеть
                            </Text>
                        </div>
                        <IconsAuthBar className="iconsSignIn" svgConfig={svgArray} />
                    </div>
                    <div className={css.text}>
                        <Text type="reg18" color="grey">
                            Или с помощью почты и пароля
                        </Text>
                    </div>
                    <ComponentSignIn />
                </div>
            </AuthWrapper>
        </div>
    );
}

export default SignIn;
