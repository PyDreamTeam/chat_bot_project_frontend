import { clientEndpoints } from "@/src/shared/routes/client-endpoints";

export const SIDEBAR_CONFIG = [
    {
        id: 1,
        href: clientEndpoints.myAccount.get,
        title: "Главная страница",
        className: {},
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 13.1111H11V2H3V13.1111ZM3 22H11V15.3333H3V22ZM13 22H21V10.8889H13V22ZM13 2V8.66667H21V2H13Z"
                    fill="#4466F5"
                />
            </svg>
        ),
    },
    {
        id: 2,
        href: clientEndpoints.myAccount.get,
        title: "Подобрать",
        className: {},
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Bag 2">
                    <path
                        id="Bag 2_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.4184 4.47H14.6232C17.3152 4.47 19.5 6.72 19.5 9.48V15C19.5 17.76 17.3152 20 14.6232 20H5.3768C2.6848 20 0.5 17.76 0.5 15V9.48C0.5 6.72 2.6848 4.47 5.3768 4.47H5.58162C5.60113 3.27 6.05955 2.15 6.8886 1.31C7.72741 0.46 8.80031 0.03 10.0098 0C12.4286 0 14.3891 2 14.4184 4.47ZM7.91299 2.38C7.36679 2.94 7.06443 3.68 7.04492 4.47H12.9556C12.9263 2.83 11.6194 1.5 10.01 1.5C9.25899 1.5 8.4787 1.81 7.91299 2.38ZM13.7071 8.32003C14.1168 8.32003 14.4386 7.98003 14.4386 7.57003V6.41003C14.4386 6.00003 14.1168 5.66003 13.7071 5.66003C13.3072 5.66003 12.9756 6.00003 12.9756 6.41003V7.57003C12.9756 7.98003 13.3072 8.32003 13.7071 8.32003ZM6.93765 7.57003C6.93765 7.98003 6.61578 8.32003 6.20613 8.32003C5.80623 8.32003 5.47461 7.98003 5.47461 7.57003V6.41003C5.47461 6.00003 5.80623 5.66003 6.20613 5.66003C6.61578 5.66003 6.93765 6.00003 6.93765 6.41003V7.57003Z"
                        fill="#4466F5"
                    />
                </g>
            </svg>
        ),
    },
    {
        id: 3,
        href: clientEndpoints.myAccount.solution,
        title: "Решение",
        className: {},
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Bag 2">
                    <path
                        id="Bag 2_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.4184 4.47H14.6232C17.3152 4.47 19.5 6.72 19.5 9.48V15C19.5 17.76 17.3152 20 14.6232 20H5.3768C2.6848 20 0.5 17.76 0.5 15V9.48C0.5 6.72 2.6848 4.47 5.3768 4.47H5.58162C5.60113 3.27 6.05955 2.15 6.8886 1.31C7.72741 0.46 8.80031 0.03 10.0098 0C12.4286 0 14.3891 2 14.4184 4.47ZM7.91299 2.38C7.36679 2.94 7.06443 3.68 7.04492 4.47H12.9556C12.9263 2.83 11.6194 1.5 10.01 1.5C9.25899 1.5 8.4787 1.81 7.91299 2.38ZM13.7071 8.32003C14.1168 8.32003 14.4386 7.98003 14.4386 7.57003V6.41003C14.4386 6.00003 14.1168 5.66003 13.7071 5.66003C13.3072 5.66003 12.9756 6.00003 12.9756 6.41003V7.57003C12.9756 7.98003 13.3072 8.32003 13.7071 8.32003ZM6.93765 7.57003C6.93765 7.98003 6.61578 8.32003 6.20613 8.32003C5.80623 8.32003 5.47461 7.98003 5.47461 7.57003V6.41003C5.47461 6.00003 5.80623 5.66003 6.20613 5.66003C6.61578 5.66003 6.93765 6.00003 6.93765 6.41003V7.57003Z"
                        fill="#4466F5"
                    />
                </g>
            </svg>
        ),
    },
    {
        id: 4,
        href: clientEndpoints.myAccount.platform,
        title: "Платформу",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Bag 2">
                    <path
                        id="Bag 2_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.4184 4.47H14.6232C17.3152 4.47 19.5 6.72 19.5 9.48V15C19.5 17.76 17.3152 20 14.6232 20H5.3768C2.6848 20 0.5 17.76 0.5 15V9.48C0.5 6.72 2.6848 4.47 5.3768 4.47H5.58162C5.60113 3.27 6.05955 2.15 6.8886 1.31C7.72741 0.46 8.80031 0.03 10.0098 0C12.4286 0 14.3891 2 14.4184 4.47ZM7.91299 2.38C7.36679 2.94 7.06443 3.68 7.04492 4.47H12.9556C12.9263 2.83 11.6194 1.5 10.01 1.5C9.25899 1.5 8.4787 1.81 7.91299 2.38ZM13.7071 8.32003C14.1168 8.32003 14.4386 7.98003 14.4386 7.57003V6.41003C14.4386 6.00003 14.1168 5.66003 13.7071 5.66003C13.3072 5.66003 12.9756 6.00003 12.9756 6.41003V7.57003C12.9756 7.98003 13.3072 8.32003 13.7071 8.32003ZM6.93765 7.57003C6.93765 7.98003 6.61578 8.32003 6.20613 8.32003C5.80623 8.32003 5.47461 7.98003 5.47461 7.57003V6.41003C5.47461 6.00003 5.80623 5.66003 6.20613 5.66003C6.61578 5.66003 6.93765 6.00003 6.93765 6.41003V7.57003Z"
                        fill="#4466F5"
                    />
                </g>
            </svg>
        ),
    },
    {
        id: 5,
        href: clientEndpoints.myAccount.orders.get,
        title: "Заказы",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Bag 2">
                    <path
                        id="Bag 2_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.4184 4.47H14.6232C17.3152 4.47 19.5 6.72 19.5 9.48V15C19.5 17.76 17.3152 20 14.6232 20H5.3768C2.6848 20 0.5 17.76 0.5 15V9.48C0.5 6.72 2.6848 4.47 5.3768 4.47H5.58162C5.60113 3.27 6.05955 2.15 6.8886 1.31C7.72741 0.46 8.80031 0.03 10.0098 0C12.4286 0 14.3891 2 14.4184 4.47ZM7.91299 2.38C7.36679 2.94 7.06443 3.68 7.04492 4.47H12.9556C12.9263 2.83 11.6194 1.5 10.01 1.5C9.25899 1.5 8.4787 1.81 7.91299 2.38ZM13.7071 8.32003C14.1168 8.32003 14.4386 7.98003 14.4386 7.57003V6.41003C14.4386 6.00003 14.1168 5.66003 13.7071 5.66003C13.3072 5.66003 12.9756 6.00003 12.9756 6.41003V7.57003C12.9756 7.98003 13.3072 8.32003 13.7071 8.32003ZM6.93765 7.57003C6.93765 7.98003 6.61578 8.32003 6.20613 8.32003C5.80623 8.32003 5.47461 7.98003 5.47461 7.57003V6.41003C5.47461 6.00003 5.80623 5.66003 6.20613 5.66003C6.61578 5.66003 6.93765 6.00003 6.93765 6.41003V7.57003Z"
                        fill="#4466F5"
                    />
                </g>
            </svg>
        ),
    },
    {
        id: 6,
        href: clientEndpoints.myAccount.favorites,
        title: "Избранное",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.71 0.290157C15.111 0.0891589 14.481 0.000159671 13.85 0.000159671C12.46 -0.00984024 11.111 0.450156 10 1.29915C9.91002 1.23015 9.80002 1.16915 9.70002 1.11015C9.60002 1.04915 9.42002 0.900152 9.27002 0.820153L8.89002 0.650154C8.69002 0.540155 8.48102 0.460156 8.26002 0.389156C8.24002 0.370157 8.21002 0.349157 8.17002 0.330157H8.11102C7.52002 0.129159 6.91002 0.0191595 6.28002 0.000159671H6.17002C5.89002 0.000159671 5.61102 0.0191595 5.33002 0.0601592H5.21002C4.91002 0.0991588 4.61102 0.169158 4.32102 0.269157C0.590017 1.49015 -0.739983 5.54011 0.390017 9.08008C1.03002 10.8891 2.06102 12.5301 3.40102 13.879C5.35002 15.759 7.48102 17.419 9.77002 18.839L10.03 19L10.28 18.849C12.561 17.419 14.68 15.759 16.611 13.889C17.96 12.5401 18.99 10.8891 19.62 9.08008C20.731 5.54011 19.401 1.49015 15.71 0.290157Z"
                    fill="#4466F5"
                />
            </svg>
        ),
    },
    {
        id: 7,
        href: clientEndpoints.myAccount.searchHistory,
        title: "История просмотров",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.71 0.290157C15.111 0.0891589 14.481 0.000159671 13.85 0.000159671C12.46 -0.00984024 11.111 0.450156 10 1.29915C9.91002 1.23015 9.80002 1.16915 9.70002 1.11015C9.60002 1.04915 9.42002 0.900152 9.27002 0.820153L8.89002 0.650154C8.69002 0.540155 8.48102 0.460156 8.26002 0.389156C8.24002 0.370157 8.21002 0.349157 8.17002 0.330157H8.11102C7.52002 0.129159 6.91002 0.0191595 6.28002 0.000159671H6.17002C5.89002 0.000159671 5.61102 0.0191595 5.33002 0.0601592H5.21002C4.91002 0.0991588 4.61102 0.169158 4.32102 0.269157C0.590017 1.49015 -0.739983 5.54011 0.390017 9.08008C1.03002 10.8891 2.06102 12.5301 3.40102 13.879C5.35002 15.759 7.48102 17.419 9.77002 18.839L10.03 19L10.28 18.849C12.561 17.419 14.68 15.759 16.611 13.889C17.96 12.5401 18.99 10.8891 19.62 9.08008C20.731 5.54011 19.401 1.49015 15.71 0.290157Z"
                    fill="#4466F5"
                />
            </svg>
        ),
    },
    {
        id: 8,
        href: clientEndpoints.myAccount.faq,
        title: "FAQ",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path
                    fillRule="evenodd" 
                    clipRule="evenodd"
                    d="M0 10.015C0 4.74712 4.21 0 10.02 0C15.7 0 20 4.65699 20 9.98498C20 16.1642 14.96 20 10 20C8.36 20 6.54 19.5593 5.08 18.698C4.57 18.3876 4.14 18.1572 3.59 18.3375L1.57 18.9384C1.06 19.0986 0.6 18.698 0.75 18.1572L1.42 15.9139C1.53 15.6034 1.51 15.2729 1.35 15.0125C0.49 13.4301 0 11.6975 0 10.015ZM8.7 10.015C8.7 10.7261 9.27 11.2969 9.98 11.307C10.69 11.307 11.26 10.7261 11.26 10.025C11.26 9.31397 10.69 8.74311 9.98 8.74311C9.28 8.7331 8.7 9.31397 8.7 10.015ZM13.3104 10.025C13.3104 10.7261 13.8804 11.307 14.5904 11.307C15.3004 11.307 15.8704 10.7261 15.8704 10.025C15.8704 9.31396 15.3004 8.74311 14.5904 8.74311C13.8804 8.74311 13.3104 9.31396 13.3104 10.025ZM5.37 11.307C4.67 11.307 4.09 10.7261 4.09 10.025C4.09 9.31397 4.66 8.74311 5.37 8.74311C6.08 8.74311 6.65 9.31397 6.65 10.025C6.65 10.7261 6.08 11.2969 5.37 11.307Z"
                    fill="#4466F5"
                />
            </svg>
        ),
    },
];
