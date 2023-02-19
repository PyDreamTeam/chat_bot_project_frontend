import {Arrow} from "@/src/components/common/MainWrapper/Footer/SvgConfig";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {FooterArrowButton, FooterInputBlock, FooterRightContainer}
    from "@/src/components/common/MainWrapper/Footer/FooterRightBlock/FooterRightBlock.styled";
import {Label} from "@/src/components/common/Label.styled";
import {FooterInput} from "@/src/components/common/Input.styled";

const FooterLeftBlock = () => {
    return (
        <FooterRightContainer>
            <h2>Портал о мессенджер-маркетинге и чат-ботах</h2>
            <Formik initialValues={{email : ''}}
                    onSubmit={()=>{}}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email("Электронная почта неверна")
                            .required("Введите электронную почту")})}>
                {({
                      values,
                      errors,
                      touched,
                      handleSubmit,
                      isSubmitting,
                      isValidating,
                      isValid})=> (
                    <Form name="contact" method="post" onSubmit={()=>{}}>
                        <FooterInputBlock>
                            <Label htmlFor={"email"}>
                                <FooterInput
                                    type="email"
                                    name="email"
                                    autoCapitalize="off"
                                    autoCorrect="off"
                                    autoComplete="email"
                                    placeholder="E-mail"
                                    valid={Boolean(touched.email && !errors.email)}
                                    error={Boolean(touched.email && errors.email)}>
                                </FooterInput>
                            </Label>
                            <FooterArrowButton onClick={()=>{}}>
                                {Arrow}
                            </FooterArrowButton>
                        </FooterInputBlock>
                    </Form>)}
            </Formik>
        </FooterRightContainer>
    );
};

export default FooterLeftBlock;