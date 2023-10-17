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
        href: clientEndpoints.myAccount.selection,
        title: "Подобрать",
        className: {},
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4.02226 10.7774H10.1558C10.427 10.7774 10.687 10.6697 10.8787 10.4779C11.0704 10.2862 11.1781 10.0262 11.1781 9.7551V3.62152C11.1781 3.35039 11.0704 3.09038 10.8787 2.89867C10.687 2.70695 10.427 2.59925 10.1558 2.59925H4.02226C3.75114 2.59925 3.49113 2.70695 3.29941 2.89867C3.1077 3.09038 3 3.35039 3 3.62152V9.7551C3 10.0262 3.1077 10.2862 3.29941 10.4779C3.49113 10.6697 3.75114 10.7774 4.02226 10.7774ZM4.02226 21H10.1558C10.427 21 10.687 20.8923 10.8787 20.7006C11.0704 20.5089 11.1781 20.2489 11.1781 19.9777V13.8442C11.1781 13.573 11.0704 13.313 10.8787 13.1213C10.687 12.9296 10.427 12.8219 10.1558 12.8219H4.02226C3.75114 12.8219 3.49113 12.9296 3.29941 13.1213C3.1077 13.313 3 13.573 3 13.8442V19.9777C3 20.2489 3.1077 20.5089 3.29941 20.7006C3.49113 20.8923 3.75114 21 4.02226 21ZM14.2449 21H20.3785C20.6496 21 20.9096 20.8923 21.1013 20.7006C21.293 20.5089 21.4007 20.2489 21.4007 19.9777V13.8442C21.4007 13.573 21.293 13.313 21.1013 13.1213C20.9096 12.9296 20.6496 12.8219 20.3785 12.8219H14.2449C13.9738 12.8219 13.7138 12.9296 13.5221 13.1213C13.3303 13.313 13.2226 13.573 13.2226 13.8442V19.9777C13.2226 20.2489 13.3303 20.5089 13.5221 20.7006C13.7138 20.8923 13.9738 21 14.2449 21ZM21.7003 5.96557L18.0344 2.29973C17.9396 2.20471 17.8269 2.12933 17.7029 2.0779C17.5789 2.02647 17.446 2 17.3117 2C17.1774 2 17.0445 2.02647 16.9205 2.0779C16.7965 2.12933 16.6838 2.20471 16.589 2.29973L12.9231 5.96557C12.8281 6.06042 12.7527 6.17308 12.7013 6.29709C12.6499 6.42111 12.6234 6.55405 12.6234 6.68831C12.6234 6.82256 12.6499 6.9555 12.7013 7.07952C12.7527 7.20354 12.8281 7.31619 12.9231 7.41105L16.589 11.0769C16.6838 11.1719 16.7965 11.2473 16.9205 11.2987C17.0445 11.3501 17.1774 11.3766 17.3117 11.3766C17.446 11.3766 17.5789 11.3501 17.7029 11.2987C17.8269 11.2473 17.9396 11.1719 18.0344 11.0769L21.7003 7.41105C21.7953 7.31619 21.8707 7.20354 21.9221 7.07952C21.9735 6.9555 22 6.82256 22 6.68831C22 6.55405 21.9735 6.42111 21.9221 6.29709C21.8707 6.17308 21.7953 6.06042 21.7003 5.96557Z" fill="#4466F5"/>
            </svg>
        ),
    },
    {
        id: 3,
        href: clientEndpoints.solutions.get,
        title: "Решение",
        className: {},
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.125 2C4.2962 2 3.50134 2.32924 2.91529 2.91529C2.32924 3.50134 2 4.2962 2 5.125V16.375C2 17.2038 2.32924 17.9987 2.91529 18.5847C3.50134 19.1708 4.2962 19.5 5.125 19.5H7.04375C7.01438 19.293 6.99976 19.0841 7 18.875V13.875C7 12.7147 7.46094 11.6019 8.28141 10.7814C9.10188 9.96094 10.2147 9.5 11.375 9.5H18.875C19.0875 9.5 19.2962 9.515 19.5 9.54375V5.125C19.5 4.2962 19.1708 3.50134 18.5847 2.91529C17.9987 2.32924 17.2038 2 16.375 2H5.125ZM5.75 5.125C5.75 4.95924 5.81585 4.80027 5.93306 4.68306C6.05027 4.56585 6.20924 4.5 6.375 4.5H15.125C15.2908 4.5 15.4497 4.56585 15.5669 4.68306C15.6842 4.80027 15.75 4.95924 15.75 5.125C15.75 5.29076 15.6842 5.44973 15.5669 5.56694C15.4497 5.68415 15.2908 5.75 15.125 5.75H6.375C6.20924 5.75 6.05027 5.68415 5.93306 5.56694C5.81585 5.44973 5.75 5.29076 5.75 5.125ZM8.25 7.625C8.25 7.45924 8.31585 7.30027 8.43306 7.18306C8.55027 7.06585 8.70924 7 8.875 7H15.125C15.2908 7 15.4497 7.06585 15.5669 7.18306C15.6842 7.30027 15.75 7.45924 15.75 7.625C15.75 7.79076 15.6842 7.94973 15.5669 8.06694C15.4497 8.18415 15.2908 8.25 15.125 8.25H8.875C8.70924 8.25 8.55027 8.18415 8.43306 8.06694C8.31585 7.94973 8.25 7.79076 8.25 7.625ZM15.125 16.6225L8.4925 12.6663C8.7307 12.0984 9.13137 11.6135 9.64421 11.2726C10.157 10.9317 10.7592 10.7499 11.375 10.75H18.875C19.4908 10.7499 20.093 10.9317 20.6058 11.2726C21.1186 11.6135 21.5193 12.0984 21.7575 12.6663L15.125 16.6225ZM15.445 17.8862L22 13.9775V18.875C22 19.7038 21.6708 20.4987 21.0847 21.0847C20.4987 21.6708 19.7038 22 18.875 22H11.375C10.5462 22 9.75134 21.6708 9.16529 21.0847C8.57924 20.4987 8.25 19.7038 8.25 18.875V13.9775L14.805 17.8862C14.9018 17.9439 15.0123 17.9744 15.125 17.9744C15.2377 17.9744 15.3482 17.9439 15.445 17.8862Z" fill="#4466F5"/>
            </svg>
        ),
    },
    {
        id: 4,
        href: clientEndpoints.platforms.get,
        title: "Платформу",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="18" height="18" rx="4" fill="#4466F5"/>
                <path d="M19 5.8125V5C19 2.79086 17.2091 1 15 1H5C2.79086 1 1 2.79086 1 5V15C1 17.2091 2.79086 19 5 19H6.6875" stroke="#4466F5" strokeWidth="1.5"/>
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
        href: clientEndpoints.myAccount.history,
        title: "История просмотров",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.44445 17.5556H14.2222V15.3333H6.44445V17.5556ZM6.44445 13.1111H17.5556V10.8889H6.44445V13.1111ZM6.44445 8.66667H17.5556V6.44445H6.44445V8.66667ZM4.22222 22C3.61111 22 3.08778 21.7822 2.65222 21.3467C2.21667 20.9111 1.99926 20.3881 2 19.7778V4.22222C2 3.61111 2.21778 3.08778 2.65334 2.65222C3.08889 2.21667 3.61185 1.99926 4.22222 2H19.7778C20.3889 2 20.9122 2.21778 21.3478 2.65334C21.7833 3.08889 22.0007 3.61185 22 4.22222V19.7778C22 20.3889 21.7822 20.9122 21.3467 21.3478C20.9111 21.7833 20.3881 22.0007 19.7778 22H4.22222Z" fill="#4466F5"/>
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
