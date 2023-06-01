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
          picture: {
               data: { url },
          },
          email,
          accessToken,
     }: ResponseParams) => {
          dispatch(setCredentials({ first_name, picture: url, email, auth_token: accessToken }));
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
                              <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path
                                        d="M18.9249 21.0924L19.9935 14.3089H13.4109V9.89966C13.4109 8.0448 14.3299 6.23233 17.2686 6.23233H20.3034V0.455766C18.5361 0.174189 16.7503 0.0218564 14.9604 0C9.54261 0 6.00554 3.25396 6.00554 9.13652V14.3089H0V21.0924H6.00554V37.5H13.4109V21.0924H18.9249Z"
                                        fill="#337FFF"
                                   />
                              </svg>
                         }
                         textButton=""
                    />
               )}
          </>
     );
};

export default ButtonFacebookLogin;