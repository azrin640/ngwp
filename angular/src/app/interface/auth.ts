export interface Auth {

    token?: string,
    user_display_name?: string,
    user_email?: string,
    user_nicename?: string,
    code?: string,
    data?:{
        status?: number
    }

}
