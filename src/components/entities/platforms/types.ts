export interface PropsGroupTags {
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