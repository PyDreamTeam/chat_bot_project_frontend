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
    isVisible?: boolean;
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
export interface PropsFavoriteSolutionCard {
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

export interface PropsSolutionCard {
    id?: number;
    title?: string;
    subtitle?: string;
    business_model?: string;
    business_area?: string;
    business_niche?: string;
    objective?: string;
    platform_title?: string;
    turnkey_platform?: number;
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
    cards?: {
        img: string;
        text: string;
        title: string;
    }[];
    steps?: {
        text: string;
        title: string;
    }[];
    dignities?: any[];
    forceUpdate?: () => void;
    tags?: {
        id?: number;
        tag?: string;
        image_tag?: string;
        is_active?: boolean;
        is_message?: boolean;
        properties?: string;
        image?: string;
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
