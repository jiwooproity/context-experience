import React, { ChangeEvent, useState } from "react";
import ReduxToolkitCounter from "./ReduxToolkitCounter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxToolkit";
import { reset, minus, plus, plusLimit } from "../reduxToolkit/counterSlice";

const ReduxToolkitCounterContainer = () => {
    const dispatch = useDispatch();
    const selectState = (state: RootState) => { return { count: state.counter.value, limit: state.counter.limit } };
    const count = useSelector(selectState).count;
    const limit = useSelector(selectState).limit;

    const [stateLimit, setStateLimit] = useState<number>(limit);

    const onIncrease = () => {
        dispatch(plus(1));
    }

    const onDecrease = () => {
        dispatch(minus(1));
    }

    const onReset = () => {
        dispatch(reset())
    }

    const onIncreaseLimit = () => {
        dispatch(plus(limit));
    }

    const onChangeLimit = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.target.value;
        setStateLimit(value);
        dispatch(plusLimit(value));
    }

    return (
        <ReduxToolkitCounter count={count} limit={stateLimit} onIncrease={onIncrease} onDecrease={onDecrease} onIncreaseLimit={onIncreaseLimit} onChangeLimit={onChangeLimit} onReset={onReset}/>
    )
}

export default ReduxToolkitCounterContainer;