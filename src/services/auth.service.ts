import { api } from "@/configs";
import type { ILoginDto, IUser } from "@/types";

export const authService = {
    login: async (payload: ILoginDto): Promise<IUser> => {
        const response = await api.post<IUser>("/auth/login", payload);
        return response.data;
    },
};
