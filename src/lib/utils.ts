import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const generateRandomNumber = () => {
    const crypto = window.crypto;
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0];
};

export const isTokenValid = (token: string | undefined): boolean => {
    if (!token) return false;

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const expiration = payload.exp * 1000; // Convert to milliseconds

        return Date.now() < expiration;
    } catch {
        return false;
    }
};
