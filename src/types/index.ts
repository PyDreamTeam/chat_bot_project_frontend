import React, { ReactNode } from "react";

export enum LOAD_STATUS {
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR",
    UNKNOWN = "UNKNOWN",
}

export interface TariffPlanCard {
    id?: number;
    title: string;
    price: string;
    advantages: Array<string>;
    icon?: React.ReactNode;
    hotPlan?: boolean;
    bestPlan?: string;
}

export interface ITariff {
    id?: number;
    title: string;
    price: string;
    tags_of_rates: Array<string>;
    is_special: string | null;
    created_at?: string;
}
export interface Labels {
    name: React.ReactNode;
    label: React.ReactNode;
}

export interface IListSliderCards {
    results: ReactNode[];
}

export interface Advantages {
    text?: string;
}

export interface StatisticsCards {
    variant?: string;
    icon?: string;
    img?: string;
    title?: string;
    text?: string;
}

export interface CardsFunnel {
    icon: React.ReactNode;
    title: React.ReactNode;
    text: React.ReactNode;
}
