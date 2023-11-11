export interface PropsFavoriteCard {
    id?: number;
    title?: string;
    short_description?: string;
    image: any;
    forceUpdate: () => void;
    tags?: {
        id?: number;
        tag?: string;
        image_tag?: string;
        is_active?: boolean;
        is_message?: boolean;
    }[];
}
export interface PropsFavorite {
    forceUpdate: () => void;
}

