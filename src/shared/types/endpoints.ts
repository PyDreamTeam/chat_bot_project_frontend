export interface ClientEndpoints {
    myAccount: {
        get: string;
        profile: {
            get: string;
            personalData: string;
            changePassword: string;
            payment: string;
        };
        templates: string;
        orders: {
            get: string;
            order: string;
        };
    };
    admin: {
        get: string;
        users: {
            get: string;
            all: string;
            administrators: string;
            moderators: string;
        }
    }
    home: {
        get: string;
    };
    restorePassword: {
        get: string;
    };
    signIn: {
        get: string;
    };
    signUp: {
        get: string;
    };
    updatePassword: {
        get: string;
    };
    platforms: {
        get: string;
    };
    platformsFilters: {
        get: string;
    };
    solutionsFilters: {
        get: string;
    };
    adminPage: {
        get: string;
    };
    feedbackPage: {
        get: string;
    };
    solutionDescriptionPage: {
        get: string;
    };
    solutions: {
        get: string;
    };
}
