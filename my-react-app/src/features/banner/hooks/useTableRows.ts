import { useState } from "react";
import type { Row } from "./../types";
import { createEmptyRow } from "../utils/createEmptyRow";

const useTableRows = () => {
    const [rows, setRows] = useState<Row[]>([]);

    const addRow = (name: string, price: number) => {
        if (name === "" || name.trim() === "" || price === 0) {
            alert("이름,가격을 적어주세요");
            return;
        }
        setRows((prev) => [...prev, createEmptyRow(name, price)]);
    };

    const removeRow = (id: number) => {
        setRows((prev) => prev.filter((r) => r.id !== id));
    };

    return { rows, addRow, removeRow };
};

export default useTableRows;
