import Image from "next/image";
import css from "../styles/allStyles.module.css";
import Text from "@/src/components/shared/text/Text";
import { FC } from "react";

interface INoUsers {
    icon?: string;
    text: string;
}

const NoUsers: FC<INoUsers> = ({ icon = "", text }) => {
    return (
        <div className={css.noUsers}>
            {icon === "search" ?
                <Image
                    src="/admin/users_search.svg"
                    alt="No users found"
                    width={120}
                    height={120}
                /> : <Image
                    src="/admin/people_plus.svg"
                    alt="No users"
                    width={120}
                    height={120}
                />}
            <Text type="med18btn" color="dark">
                {text}
            </Text>
        </div>
    );
};
export default NoUsers;