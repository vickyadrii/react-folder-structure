export interface ILoginDto {
    username: string;
    password: string;
    expiresInMins?: number;
}

export interface IUser {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender?: string;
    image?: string;
    accessToken: string;
    refreshToken?: string;
}
