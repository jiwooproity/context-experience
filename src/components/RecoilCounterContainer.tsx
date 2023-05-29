import React, { ChangeEvent, useState } from "react";

import { useRecoilState, useRecoilValue, selector } from "recoil";
import { counterStore } from "../recoilstore/counterStore";
import RecoilCounter from "./RecoilCounter";

const RecoilCounterContainer = (): JSX.Element => {
    const [currentCount, setCurrentCount] = useState<number>(0);
    const [counter, setCounter] = useRecoilState<number>(counterStore);

    const selecterCount = selector({
        key: 'selecterCount',
        get: ({ get }) => {
            const counter = get(counterStore);
            return counter + 1;
        }
    });

    const countValue = useRecoilValue<number>(selecterCount);

    const onIncreaseAction = () => {
        setCounter((state) => state + 1);
    }

    const onDecreaseAction = () => {
        setCounter((state) => state - 1);
    }

    const onChangeState = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.target.value;
        setCurrentCount(value);
    }

    const stateIncreaseAction = () => {
        setCounter((state) => state + currentCount);
    }

    const selecterIncreaseAction = () => {
        setCounter((state) => state + countValue);
    }

    return (
        <RecoilCounter
            counter={counter}
            currentCount={currentCount}
            countValue={countValue}
            onChangeState={onChangeState}
            onIncreaseAction={onIncreaseAction}
            onDecreaseAction={onDecreaseAction}
            stateIncreaseAction={stateIncreaseAction}
            selecterIncreaseAction={selecterIncreaseAction}
        />
    )
}

export default RecoilCounterContainer;