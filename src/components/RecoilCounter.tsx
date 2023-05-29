import React, { ChangeEvent } from "react";

interface RecoilCounterPropTypes {
    counter: number,
    currentCount: number,
    countValue: number,
    onChangeState: (e: ChangeEvent<HTMLInputElement>) => void,
    onIncreaseAction: () => void,
    onDecreaseAction: () => void,
    stateIncreaseAction: () => void,
    selecterIncreaseAction: () => void
}

const RecoilCounter = ({
    counter,
    currentCount,
    countValue,
    onChangeState,
    onIncreaseAction,
    onDecreaseAction,
    stateIncreaseAction,
    selecterIncreaseAction
}: RecoilCounterPropTypes) => {
    return (
        <div className="count_container">
            <div>
                <h1>{counter}</h1>
                <input type="number" value={currentCount} onChange={onChangeState}/>
                <button onClick={onIncreaseAction}>+1</button>
                <button onClick={onDecreaseAction}>-1</button>
                <button onClick={stateIncreaseAction}>+{currentCount}</button>
                <button onClick={selecterIncreaseAction}>current + 1 = {countValue}</button>
            </div>
        </div>
    )
}

export default RecoilCounter;