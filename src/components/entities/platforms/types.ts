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
