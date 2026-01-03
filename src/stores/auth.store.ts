import { toast } from "sonner";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { authService } from "@/services";
import type { IErrorResponse, ILoginDto, IUser } from "@/types";

interface IAuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: IUser | null;
    error: {
        message?: string | null;
        statusCode?: number | null;
    };
    login: (dto: ILoginDto) => Promise<void>;
    logout: () => void;
}

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
    error: {
        message: null,
        statusCode: null,
    },
};

export const useAuthStore = create<IAuthState>()(
    devtools((set) => ({
        ...initialState,

        login: async (dto: ILoginDto) => {
            set({ isLoading: true, error: { message: null, statusCode: null } });

            try {
                const response = await authService.login(dto);

                set({
                    isAuthenticated: true,
                    user: response.user,
                });
            } catch (error) {
                const err = error as IErrorResponse;
                set({
                    error: {
                        message: err.response?.data?.message || "Login failed",
                        statusCode: err.status || 500,
                    },
                });
                toast.error(err.response.data.message);
            } finally {
                set({ isLoading: false });
            }
        },
    })),
);
