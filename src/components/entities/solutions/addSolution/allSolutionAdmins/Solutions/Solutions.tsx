import { FC } from "react";
import css from "./solutions.module.css";
import { Solution } from "../Solution/Solution";

interface PropsSolutions {
    sort: string;
    results: {
        id: number;
        title: string;
        status: string;
        link: string;
        tags: {
            tag: string;
        }[];
    }[];
}

export const Solutions: FC<PropsSolutions> = ({ sort, results = [] }) => {
    return (
        <div>
            <ul>
                {results
                    .filter((item) => item.status === sort)
                    .map(({ id, title, status, tags, link }) => (
                        <li key={id}>
                            <Solution title={title} link={link} tags={tags} />
                        </li>
                    ))}
            </ul>
        </div>
    );
};
