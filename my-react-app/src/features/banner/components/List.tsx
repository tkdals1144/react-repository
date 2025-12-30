import { useState } from "react";
import styles from "./List.module.css";
import useTableRows from "../hooks/useTableRows";

const List = () => {
    // 초기값 세팅을 위해 [] 빈 배열을 삽입
    // 안에 들어가는 type은 Row 형태의 배열이 되기에 Row[] 를 타입으로 지정
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const { rows, addRow, removeRow } = useTableRows();

    return (
        <>
            <div className={styles.table_wrap}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>가격</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>apple</td>
                            <td>2500</td>
                            <td>삭제불가</td>
                        </tr>
                        {rows.map((row) => (
                            <tr>
                                <td>{row.name}</td>
                                <td>{row.price}</td>
                                <td>
                                    <button className={styles.btn2} onClick={() => removeRow(row.id)}>
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.btn_wrap_wrap}>
                <div className={styles.btn_wrap}>
                    <input
                        className={styles.input}
                        placeholder="이름 입력"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />{" "}
                    <br />
                    <input
                        className={styles.input}
                        type="number"
                        placeholder="가격 입력"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                    <br />
                    <button
                        className={styles.btn}
                        onClick={() => {
                            addRow(name, price);
                            setName("");
                            setPrice(0);
                        }}
                    >
                        생성
                    </button>
                </div>
            </div>
        </>
    );
};

export default List;
