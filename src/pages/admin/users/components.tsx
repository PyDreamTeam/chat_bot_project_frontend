import Text from "@/src/components/shared/text/Text";
import css from "./styles/allStyles.module.css";
const AdminsHeader = () => {
    return (<div className={css.listHeader}>
        <div className={css.userName}>
            <Text type="sem16" color="dark">
                Имя
            </Text>
        </div>
        <div className={css.userEmail}>
            <Text type="sem16" color="dark">
                E-mail
            </Text>
        </div>
        <div className={css.userRole}>
            <Text type="sem16" color="dark">
                Роль пользователя
            </Text>
        </div>
        <div className={css.userStatus}>
            <Text type="sem16" color="dark">
                Статус
            </Text>
        </div>
    </div>);
};

export default AdminsHeader;