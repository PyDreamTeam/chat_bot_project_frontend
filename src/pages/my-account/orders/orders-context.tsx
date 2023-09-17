import React from "react";

interface IOrdersContext {
    savedOrder: string;
    editedOrder: string;
    resetOrder?: () => void;
}

const defaultState = {
    savedOrder: "",
    editedOrder: "",
};

const OrdersContext = React.createContext(defaultState);

// function useOrder() {
//     const context = React.useContext(OrdersContext);
//     if (!context) {
//         throw new Error("useCount must be used within a CountProvider");
//     }
//     return context;
// }

// function OrderProvider(props) {
//     const [count, setCount] = React.useState(0);
//     const value = React.useMemo(() => [count, setCount], [count]);
//     return <CountContext.Provider value={value} {...props} />;
// }

export default OrdersContext;
