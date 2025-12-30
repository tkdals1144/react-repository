import type { Row } from "./../types";

export const createEmptyRow = (name: string, price: number): Row => ({
    id: Date.now(),
    name: name,
    price: price,
});
