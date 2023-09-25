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
    price?: number;
    is_active?: boolean;
    created_at?: string;
    image?: string;
    link?: string;
    type?: Card;
    filter?: Array<number>;
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
    solution_type?: string;
    short_description?: string;
    full_description?: string;
    platform?: string;
    messengers?: string;
    integration_with_CRM?: string;
    integration_with_payment_systems?: string;
    tasks?: string;
    advantages?: string;
    dignity?: string;
    steps_title?: string;
    steps_text?: string;
    actions_to_complete_tasks?: string;
    price?: number;
    is_active?: boolean;
    created_at?: string;
    image?: string;
    link?: string;
    type?: string | string;
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
    business_model?: string;
    business_area?: string;
    business_niche?: string;
    objective?: string;
    solution_type?: string;
    short_description?: string;
    full_description?: string;
    turnkey_solutions?: number;
    price?: number;
    is_active?: boolean;
    created_at?: string;
    image?: string;
    link?: string;
    type?: string | string;
    tags?: {
        id?: number;
        tag?: string;
        image_tag?: string;
        is_active?: boolean;
        is_message?: boolean;
    }[];
}
