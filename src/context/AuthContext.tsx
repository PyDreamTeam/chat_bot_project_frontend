import React, { ReactNode, createContext } from "react";
import { useRouter } from "next/router";

type Props = {
    children?: ReactNode;
};

type IAuthContext = {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    // authState: { token: string };
};

const AuthContext = createContext<IAuthContext | null>(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: Props) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    // const isUserAuthenticated = () => {
    //     if (!authState.token) {
    //         return false;
    //     }
    // };

    return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
