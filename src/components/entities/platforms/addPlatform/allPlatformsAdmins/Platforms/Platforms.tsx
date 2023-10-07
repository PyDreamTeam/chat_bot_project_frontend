import { FC } from "react";
import css from "./platforms.module.css";
import { Platform } from "../Platform/Platform";

interface PropsPlatforms {
    sort: string
    results: {
        id: number
        title: string
        status: string
        link:  string
        tags: {
            tag: string
        }[]
    }[]
}

export const Platforms: FC<PropsPlatforms> = ({sort, results=[]}) => {
    return(
        <div>
            <ul>
                {results
                    .filter((item) => item.status === sort)
                    .map(({id, title, status, tags, link}) => (
                        <li key={id}>
                            <Platform title={title} link={link} tags={tags}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};