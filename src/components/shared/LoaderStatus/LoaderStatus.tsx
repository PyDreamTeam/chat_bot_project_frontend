import { FC } from "react";
import css from "./loaderStatus.module.css";
import { Loader } from "../Loader/Loader";

interface PropsLoaderStatus {
    isLoading: boolean
}

export const LoaderStatus: FC<PropsLoaderStatus> = ({isLoading}) => {
    return(
        <div>
            {isLoading && 
            <div className={css.modal}>
                <Loader isLoading={isLoading}/>
            </div>}
        </div>
    );
};