export interface IErrorResponse {
    response: {
        data: {
            message?: string;
        };
    };
    status: number;
}
