import React from "react";

export enum LOAD_STATUS {
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR",
    UNKNOWN = "UNKNOWN",
}

export interface TariffPlanCard {
    title: string
    price: string
    advantage: Array<string>
    btn: string
    icon: React.ReactNode
    hotPlan?: boolean
    bestPlan?: string
}