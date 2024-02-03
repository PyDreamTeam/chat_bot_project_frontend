import { ClientEndpoints } from "./../types/endpoints";
const myAccount = "/my-account";
const profile = `${myAccount}/profile`;
const orders = `${myAccount}/orders`;

const admin = "/admin";
const account = `${admin}/account`;
const settings = `${admin}/settings`;
const users = `${admin}/users`;

export const clientEndpoints: ClientEndpoints = {
    myAccount: {
        get: myAccount,
        profile: {
            get: `${profile}`,
            personalData: `${profile}/personal-data`,
            changePassword: `${profile}/change-password`,
            payment: `${profile}/payment`,
        },
        selection: `${myAccount}/selection`,
        solution: {
            get: "/solutions",
        },
        platform: {
            get: "/platforms",
        },
        favorites: `${myAccount}/favorites`,
        faq: `${myAccount}/faq`,
        history: `${myAccount}/history`,
        orders: {
            get: `${orders}`,
            order: `${orders}/order`,
        },
    },
    admin: {
        get: admin,
        account: {
            get: `${account}`,
        },
        settings: {
            get: `${settings}`,
            personalData: `${settings}/personal-data`,
            changePassword: `${settings}/change-password`,
            payment: `${settings}/payment`,
        },
        users: {
            get: users,
            all: `${users}/all`,
            administrators: `${users}/administrators`,
            moderators: `${users}/moderators`,
            edit: `${users}/edit/:id`,
        }
    },
    home: {
        get: "/home",
    },
    restorePassword: {
        get: "/restore-password",
    },
    signIn: {
        get: "/sign-in",
    },
    signUp: {
        get: "/sign-up",
    },
    updatePassword: {
        get: "/update-password",
    },
    platforms: {
        get: "/platforms",
    },
    platformsFilters: {
        get: "/platforms-filter",
    },
    solutionsFilters: {
        get: "/solutions-filter",
    },
    adminPage: {
        get: "/admin-page",
    },
    feedbackPage: {
        get: "/feedback-page",
    },
    solutionDescriptionPage: {
        get: "/solution-description-page",
    },
    solutions: {
        get: "/solutions",
    },
};
