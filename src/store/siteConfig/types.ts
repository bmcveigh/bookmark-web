export interface ISiteConfig {
    data: {
        api: {
            baseUrl: string | undefined;
            clientId: string;
        };
        labels: any;
        tabData: any;
    };
    type: string;
}


export const GET_SITE_CONFIG = "GET_SITE_CONFIG";

