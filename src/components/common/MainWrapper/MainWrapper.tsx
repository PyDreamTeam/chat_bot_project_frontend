import React, {FC} from 'react';
import Footer from "@/src/components/common/MainWrapper/Footer/Footer";
import Header from "@/src/components/common/MainWrapper/Header/Header";

interface IMainWrapper {
    children?: React.ReactElement;
}

const MainWrapper: FC<IMainWrapper> = ({children}) => {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    );
};

export default MainWrapper;
