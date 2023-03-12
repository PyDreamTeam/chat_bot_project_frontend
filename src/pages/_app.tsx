import type { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { useRouter } from "next/router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleId } from "../pagesData/sign-in";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
     require("../../mocks");
}

export default function App({ Component, pageProps }: AppProps) {
     const router = useRouter();

     // React.useEffect(() => {
     //      router.pathname === "/_error" && router.push("/home");
     // }, []);
     return (
          <Provider store={store}>
               <GoogleOAuthProvider clientId={googleId}>
                    <Component {...pageProps} />
               </GoogleOAuthProvider>
          </Provider>
     );
}
