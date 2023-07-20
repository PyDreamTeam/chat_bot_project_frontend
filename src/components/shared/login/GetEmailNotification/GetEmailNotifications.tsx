import Text from "@/src/components/shared/text/Text";
import { Field } from "formik";
import css from "../css/login.module.css";


export const GetEmailNotification = () => {

     return(
          <div className={css.notifications}>
               <Field type="checkbox" name="get_email_notifications" className={css.checkbox} />
               <span><Text type="reg16" color="black">Я хочу получать уведомления и новости на почту</Text></span>
          </div>
     );
};