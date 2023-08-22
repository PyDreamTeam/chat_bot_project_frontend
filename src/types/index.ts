import React, { ReactNode } from "react";

export enum LOAD_STATUS {
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR",
    UNKNOWN = "UNKNOWN",
}

export interface TariffPlanCard {
    title: string;
    price: string;
    advantage: Array<string>;
    btn: string;
    icon: React.ReactNode;
    hotPlan?: boolean;
    bestPlan?: string;
}
export interface Labels {
    name: React.ReactNode;
    label: React.ReactNode;
}

export interface IListSliderCards {
    config: ReactNode[];
}

export interface Advantages {
    icon: React.ReactNode;
    text: React.ReactNode;
}

export interface StatisticsCards {
    icon: React.ReactNode;
    title: React.ReactNode;
    text: React.ReactNode;
}

export interface CardsFunnel {
    icon: React.ReactNode;
    title: React.ReactNode;
    text: React.ReactNode;
}
