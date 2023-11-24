import css from "./timer.module.css";
import { useEffect, useState } from "react";

export const Timer = () => {
    const [seconds, setSeconds] = useState<number>(30);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) setSeconds(seconds - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    const reloadTimer = () => {
        setSeconds(30);
    };

    return (
        <div>
            <p className={seconds === 0 ? css.sendActive : css.send} onClick={reloadTimer}>
                Отправить повторно{" "}
                {seconds === 0 ? null : <span className={css.timer}>00:{seconds > 9 ? seconds : `0${seconds}`}</span>}
            </p>
        </div>
    );
};
