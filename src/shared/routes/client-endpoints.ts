import { ClientEndpoints } from "./../types/endpoints";
const myAccount = "/my-account";
const profile = `${myAccount}/profile`;
const orders = `${myAccount}/orders`;



export const clientEndpoints: ClientEndpoints = {
    myAccount: {
        get: myAccount,
        profile: {
            get: `${profile}`,
            personalData: `${profile}/personal-data`,
            changePassword: `${profile}/change-password`,
            payment: `${profile}/payment`,
        },
        templates: `${myAccount}/templates`,
        favorites: `${myAccount}/favorites`,
        faq: `${myAccount}/faq`,
        articles: `${myAccount}/articles`,
        tariff: `${myAccount}/tariff`,
        orders: {
            get: `${orders}`,
            order: `${orders}/order`,
        },
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
