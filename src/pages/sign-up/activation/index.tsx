import Text from "@/src/components/shared/text/Text";
import AuthWrapper from "@/src/components/wrappers/AuthWrapper";
import Link from "next/link";
import css from "./activation.module.css";
import { useRouter } from "next/router";
import { useUserActivationMutation } from "@/src/store/services/userAuth";
import { useEffect, useState } from "react";
import { Loader } from "@/src/components/shared/Loader/Loader";
import Title from "@/src/components/shared/text/Title";

const Activation = () => {
    const [isLoad, setIsLoad] = useState(true);
    const router = useRouter();
    const { uid, token } = router.query;
    const [userActivation, { isLoading, isSuccess }] = useUserActivationMutation();

    useEffect(() => {
        if (uid && token) {
            setIsLoad(false);
            userActivation({ uid: uid, token: token });
        }
    }, [uid, token]);

    return (
        <AuthWrapper titleText="">
            <div>
                {<Loader isLoading={isLoad} />}
                {<Loader isLoading={isLoading} />}
                {isSuccess && (
                    <div>
                        <Title type="h1" color="black">
                            Благодарим за регистрацию
                        </Title>
                        <Text type="reg18" color="grey" className={css.text}>
                            Перейдите по ссылке чтобы <Link href={"/sign-in"}>войти</Link>
                        </Text>
                    </div>
                )}
            </div>
        </AuthWrapper>
    );
};

export default Activation;
