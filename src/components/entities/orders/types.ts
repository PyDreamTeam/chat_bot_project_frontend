export interface PropsOrder
 {
    id: string;
    first_name: string;
    email: string;
    phone_number?: string;
    comment?: string;
    forceUpdate: () => void;
}

export interface PropsOrders
 {
    forceUpdate: () => void;
}