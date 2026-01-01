import styles from "./Header.module.css";
const Header = () => {
    return (
        <div className={styles.header_box}>
            <p>this is header</p>
            <div className={styles.login_wrap}>
                <p>로그인</p>
            </div>
        </div>
    );
};

export default Header;
