import styles from "./List.module.css";
const List = () => {
    return (
        <>
            <table className={styles.table}>
                <thead>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                </thead>
                <tbody>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tbody>
            </table>
        </>
    );
};

export default List;
