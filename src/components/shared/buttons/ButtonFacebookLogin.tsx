import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { facebookId } from "@/src/pagesData/sign-in";
import { setCredentials } from "@/src/store/reducers/credentialsSlice";
import React from "react";
import FacebookLogin from "react-facebook-login";
import styles from "./styles/styles.module.css";
import {boolean, string} from "yup";
import {ResponseParams} from "@/src/shared/types/credentials";
// import { AsyncScript } from "react-async-script";

const ButtonFacebookLogin = () => {
     const [loaded, setLoaded] = React.useState<boolean>(false);
     const dispatch = useAppDispatch();
     const responseFacebook = ({
          first_name,
          avatar: {
               data: { url },
          },
          email,
          accessToken,

     }: ResponseParams) => {
          dispatch(setCredentials({ first_name, avatar: url, email, auth_token: accessToken }));
     };

     React.useEffect(() => {
          setLoaded(true);
     }, []);
     return (
          <>
               {loaded && (
                    <FacebookLogin
                         cssClass={styles.facebookLogin}
                         appId={facebookId}
                         autoLoad={false}
                         fields="name,email,picture"
                         scope="public_profile,email,user_friends"
                         callback={responseFacebook}
                         icon={
                              <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
                                   <path d="M45.9249 40.0924L46.9935 33.3089H40.4109V28.8997C40.4109 27.0448 41.3299 25.2323 44.2686 25.2323H47.3034V19.4558C45.5361 19.1742 43.7503 19.0219 41.9604 19C36.5426 19 33.0055 22.254 33.0055 28.1365V33.3089H27V40.0924H33.0055V56.5H40.4109V40.0924H45.9249Z" fill="#4466F5"/>
                              </svg>
                         }
                         textButton=""
                    />
               )}
          </>
     );
};

export default ButtonFacebookLogin;