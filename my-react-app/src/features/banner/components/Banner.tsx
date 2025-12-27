import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../bannerSlice";
import type { RootState } from "./../../../app/store";

const Banner = () => {
    const dispatch = useDispatch();
    const score = useSelector((state: RootState) => state.score.score);
    return (
        <div>
            <h1>{score}</h1>
            <button onClick={() => dispatch(increase())}>상승</button>
            <button onClick={() => dispatch(decrease())}>감소</button>
        </div>
    );
};

export default Banner;
