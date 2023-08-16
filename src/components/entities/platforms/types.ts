export interface PropsGroupTags {
    filter?: string
    tags: {
        id: number;
        tag: string;
    }[]
}

export interface PropsFilters {
    filters: {
        filter: string,
        id: number,
        image: string,
        count: number,
        functionality: string,
        integration: string,
        multiple: boolean,
        tags: {
            id: number;
            tag: string;
        }[]
    }[]
}

export interface PropsGroupFilters {
    results: {
        group: string,
        id: number,
        filters: {
            filter: string,
            id: number,
            image: string,
            count: number,
            functionality: string,
            integration: string,
            multiple: boolean,
            tags: {
                id: number;
                tag: string;
            }[]
        }[]
    }[]
}

type Card = "filter" | "platform";

export interface PropsPlatformCard {
    id: number
    title: string
    short_description: string
    full_description?: string
    turnkey_solutions?: number
    price?: number
    is_active?: boolean
    created_at?: string
    image: string
    type?: Card
    tags: {
          id: number,
          tag: string,
          image_tag?: string,
          is_active?: boolean,
          is_message: boolean
        }[]
}