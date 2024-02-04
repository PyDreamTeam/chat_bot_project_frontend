export interface PropsGroupTags {
    onClick: () => void;
    filter?: string;
    tags: {
        id: number;
        tag: string;
    }[];
}

export interface PropsFilters {
    onClick: () => void;
    filters: {
        filter: string;
        id: number;
        image: string;
        count: number;
        functionality: string;
        integration: string;
        multiple: boolean;
        tags: {
            id: number;
            tag: string;
        }[];
    }[];
}

export interface PropsGroupFilters {
    onClick: () => void;
    results: {
        group: string;
        id: number;
        filters: {
            filter: string;
            id: number;
            image: string;
            count: number;
            functionality: string;
            integration: string;
            multiple: boolean;
            tags: {
                id: number;
                tag: string;
            }[];
        }[];
    }[];
}

type Card = "filter" | "platform";

export interface PropsPlatformCard {
    id?: number;
    title?: string;
    short_description?: string;
    full_description?: string;
    turnkey_solutions?: number;
    price?: number | string;
    status?: string;
    is_active?: boolean;
    created_at?: string;
    image: any;
    forceUpdate?: () => void;
    link?: string;
    links_to_solution?: string[];
    type?: Card;
    filter?: number[];
    is_favorite?: boolean;
    tags?: {
        id?: number;
        tag?: string;
        image_tag?: string;
        is_active?: boolean;
        is_message?: boolean;
    }[];
}

export interface PropsFavoritePlatformCard {
    id?: number;
    title?: string;
    short_description?: string;
    full_description?: string;
    turnkey_solutions?: number;
    status?: string;
    is_active?: boolean;
    created_at?: string;
    image: any;
    forceUpdate: () => void;
    link?: string;
    links_to_solution?: string[];
    filter?: number[];
    tags?: {
        id?: number;
        tag?: string;
        image_tag?: string;
        is_active?: boolean;
        is_message?: boolean;
    }[];
}

export interface PropsSolutionAdvantages {
    id?: number;
    advantage?: string;
}

export interface PropsSolutionCard {
    id?: number;
    title?: string;
    subtitle?: string;
    business_model?: string;
    business_area?: string;
    business_niche?: string;
    objective?: string;
    turnkey_platforms?: number;
    links_to_platform?: string[];
    solution_type?: string;
    short_description?: string;
    full_description?: string;
    platform?: string;
    messengers?: string;
    integration_with_CRM?: string;
    integration_with_payment_systems?: string;
    tasks?: string;
    advantages?: string[];
    dignities?: string[];
    dignity?: string;
    steps_title?: string;
    steps_description?: string;
    cards_title?: string;
    cards_description?: string;
    actions_to_complete_tasks?: string;
    price?: number | string;
    is_active?: boolean;
    created_at?: string;
    image?: string | any;
    is_favorite?: boolean;
    link?: string;
    type?: string | string;
    filter?: number[];
    forceUpdate?: () => void;
    filters?: number[];
    tags?: {
        id?: number;
        tag?: string;
        image_tag?: string;
        is_active?: boolean;
        is_message?: boolean;
    }[];
    results?: {
        id?: number;
        dignities?: string;
    }[];
}

export interface PropsSolutionAdvantages {
    id?: number;
    advantage?: string;
}

export interface PropsSolutionCard {
    id?: number;
    title?: string;
    short_description?: string;
    full_description?: string;
    turnkey_solutions?: number;
    turnkey_platform?: number | undefined;
    price?: number | string;
    status?: string;
    is_active?: boolean;
    created_at?: string;
    image: any;
    forceUpdate: () => void;
    link?: string;
    links_to_solution?: string[];
    type?: Card;
    filter?: number[];
    tags?: {
        id?: number;
        tag?: string;
        image_tag?: string;
        is_active?: boolean;
        is_message?: boolean;
    }[];
}
