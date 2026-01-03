import { api } from "@/configs";
import type { ILoginDto } from "@/types";

export const authService = {
    login: async (payload: ILoginDto) => {
        const response = await api.post("/auth/login", payload);
        return response.data;
    },
};
