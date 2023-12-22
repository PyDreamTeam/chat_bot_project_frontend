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
