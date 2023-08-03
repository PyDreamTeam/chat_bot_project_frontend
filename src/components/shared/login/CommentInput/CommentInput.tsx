import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import Image from "next/image";
import { FC } from "react";
import css from "../css/login.module.css";

interface PropsCommentInput {
     errors: FormikErrors<{ comment: string }>;
     touched: FormikTouched<{ comment: string }>;
}

export const CommentInput: FC<PropsCommentInput> = ({ errors, touched }) => {
     return (
          <div className={css.blockInput}>
               <label htmlFor="comment">
                    <Text type="reg18" color="black">
                         Комментарий
                    </Text>
               </label>
               <div className={css.errorIcon}>
                    {errors.comment && touched.comment && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />}
               </div>
               <div>
                    <Field
                         as="textarea"
                         type="text"
                         name="comment"
                         placeholder="Текст (от 5 до 200 символов)"
                         className={errors.comment && touched.comment ? `${css.inputError}` : `${css.input}`}
                    />
               </div>
               <div className={css.error}>
                    <Text type="reg16" color="red">
                         <ErrorMessage name="comment" />
                    </Text>
               </div>
          </div>
     );
};
