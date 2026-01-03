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
