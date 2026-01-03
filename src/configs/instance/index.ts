import type { AxiosError } from "axios";
import axios, { type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiInstance = () => {
    const instance: AxiosInstance = axios.create({
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    instance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            if (typeof window !== "undefined") {
                const token = localStorage.getItem("auth_token");
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }
            return config;
        },
        (error: AxiosError) => {
            return Promise.reject(error?.response);
        },
    );

    instance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error: AxiosError) => {
            return Promise.reject(error);
        },
    );

    return instance;
};

export const api = apiInstance();
