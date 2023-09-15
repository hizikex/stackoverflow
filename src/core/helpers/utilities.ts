export const repsonseHandler = (payload: { [key: string]: any } | any[], message = 'success'): { status: boolean; message: string; data: any } => {
    return {
        status: true,
        message,
        data: payload || {}
    };
};