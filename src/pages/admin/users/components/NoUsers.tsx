import Image from "next/image";
import css from "../styles/allStyles.module.css";
import Text from "@/src/components/shared/text/Text";

const NoUsers = () => {
    return (
        <div className={css.noUsers}>
            <Image
                src="/admin/people_plus.svg"
                alt="No users"
                width={120}
                height={120}
            />
            <Text type="med18btn" color="dark">
                Пользователей пока нет
            </Text>
            <Text type="reg16" color="telegray" >
                Добавьте нового администратора или модератора
            </Text>
        </div>
    )
}
export default NoUsers;