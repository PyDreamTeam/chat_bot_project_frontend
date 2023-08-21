import Image from "next/image";
import { useState, useEffect, FC } from "react";
import * as Yup from "yup";
import Text from "../../shared/text/Text";
import css from "./errorPassword.module.css";

const err = {
    min: "содержит не менее 8 символов",
    string: "содержит как строчные (a–z), так и прописные буквы (A–Z)",
    number: "содержит по крайней мере одну цифру (0–9)",
    special: "содержит по крайней мере один спецсимвол",
    req: "ведите пароль",
};

const errPas = [
    // {condition: err.req, iconDone: "/sign/done.svg", iconNotDone: "/sign/notDone.svg"},
    { condition: err.min, iconDone: "/sign/done.svg", iconNotDone: "/sign/notDone.svg" },
    { condition: err.string, iconDone: "/sign/done.svg", iconNotDone: "/sign/notDone.svg" },
    { condition: err.number, iconDone: "/sign/done.svg", iconNotDone: "/sign/notDone.svg" },
    { condition: err.special, iconDone: "/sign/done.svg", iconNotDone: "/sign/notDone.svg" },
];

interface PropsErrorsPassword {
    password: string;
}

export const ErrorsPassword: FC<PropsErrorsPassword> = ({ password }) => {
    const passwordShema = Yup.object().shape({
        password: Yup.string()
            .min(8, err.min)
            .matches(/^(?=.*[A-Za-z][!-~]+)[^А-Яа-я]*$/, err.string)
            .matches(/^(?=.*[0-9])/, err.number)
            .matches(/^(?=.*[@$!%*?&])/, err.special)
            .required(err.req),
    });

    const [error, setErr] = useState<Array<string>>([]);

    useEffect(() => {
        async function validate(password: string) {
            try {
                const result = await passwordShema.validate({ password }, { abortEarly: false });

                if (result) {
                    setErr([]);
                }
            } catch (e: unknown) {
                if (e instanceof Yup.ValidationError) {
                    setErr(e.errors);
                }
            }
        }
        validate(password);
    }, [password]);

    return (
        <div>
            {errPas.map((item) => (
                <div key={item.condition} className={css.errors}>
                    {error.includes(item.condition) ? (
                        <Image src={item.iconNotDone} alt="icon" width={24} height={24} />
                    ) : (
                        <Image src={item.iconDone} alt="icon" width={24} height={24} />
                    )}
                    <Text type="reg14" color={error.includes(item.condition) ? "red" : "green"}>
                        {item.condition}
                    </Text>
                </div>
            ))}
        </div>
    );
};
