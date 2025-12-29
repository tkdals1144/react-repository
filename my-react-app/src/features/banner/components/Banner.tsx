import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../bannerSlice";
import type { RootState } from "./../../../app/store";
import { useState } from "react";
import styles from "./Banner.module.css";
import List from "./List";

const Banner = () => {
    const [view, setView] = useState<"main" | "list" | "Img">("main");
    const dispatch = useDispatch();
    const score = useSelector((state: RootState) => state.score.score);
    switch (view) {
        case "main":
            return (
                <>
                    <h1>{score}</h1>
                    <button onClick={() => dispatch(increase())}>상승</button>
                    <button onClick={() => dispatch(decrease())}>감소</button>
                    <div className={styles.button_wrap}>
                        <button onClick={() => setView("list")}>리스트 이동</button>
                        <button onClick={() => setView("Img")}>이미지 이동</button>
                    </div>
                </>
            );
        case "list":
            return <List />;
    }
};

export default Banner;
