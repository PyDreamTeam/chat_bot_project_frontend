import Text from "@/src/components/shared/text/Text";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import css from "./componentSignIn.module.css";
import Link from "next/link";
import { ButtonLogin } from "@/src/components/shared/buttons/ButtonLogin";
import { useRouter } from "next/router";
import { useLoginUserMutation } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import { EmailInput } from "@/src/components/shared/login/EmaiInput/EmailInput";
import { PasswordInput } from "@/src/components/shared/login/PasswordInput/PasswordInput";
import { EmailEngRegExp } from "@/src/shared/constants/regExps";
import { LoaderStatus } from "@/src/components/shared/LoaderStatus/LoaderStatus";

const ComponentSignIn = () => {
    const route = useRouter();
    const [loginUser, { data, isSuccess, isLoading, error }] = useLoginUserMutation();

    useEffect(() => {
        if (isSuccess) {
            Cookies.set("loginUser", JSON.stringify(data));
            route.push("/my-account");
        }
    }, [isSuccess]);

    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().matches(EmailEngRegExp, "Некорректный email").required("Введите e-mail"),
                    password: Yup.string().required("Введите пароль"),
                })}
                onSubmit={(values) => {
                    loginUser(values);
                }}
            >
                {({ errors, touched, isValid }) => {
                    return (
                        <Form className={css.form}>
                            <LoaderStatus isLoading={isLoading}/>
                            <EmailInput errors={errors} touched={touched} error={error} />
                            <PasswordInput errors={errors} touched={touched} error={error} />

                            <ButtonLogin disabled={isLoading} active={isValid} type="submit">
                                Войти
                            </ButtonLogin>
                            <div className={css.blockInfo}>
                                <Text type={"reg16"} color={"grey"}>
                                    Забыли пароль?
                                    <Link href={"/recovery-password"} className={css.link}>
                                        {" "}
                                        Восстановите здесь
                                    </Link>
                                </Text>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default ComponentSignIn;
